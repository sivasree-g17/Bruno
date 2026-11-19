const express = require('express');
const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(express.json());

const yamlPath = path.join(__dirname, '../mocks/stubs_full_website.yml');
const yamlFile = yaml.load(fs.readFileSync(yamlPath, 'utf8'));

// Support both `routes` array or top-level array/stubs depending on YAML format
const rawRoutes = Array.isArray(yamlFile)
  ? yamlFile
  : yamlFile.routes || yamlFile.stubs || [];

// Group stubs by METHOD + clean path, preferring 2xx success responses over 4xx errors
const routeMap = new Map();

rawRoutes.forEach(route => {
  if (!route.request || !route.request.method || !route.request.url) return;

  const method = route.request.method.toLowerCase();
  // Strip query parameters (e.g., /products/search?q=eos -> /products/search)
  const cleanPath = route.request.url.split('?')[0];
  const key = `${method}:${cleanPath}`;

  const status = Number(route.response?.status || 200);
  const existing = routeMap.get(key);

  // Keep the first 2xx success stub; only store 4xx if no 2xx stub exists yet
  if (!existing || (existing.status >= 400 && status < 400)) {
    routeMap.set(key, { method, cleanPath, status, route });
  }
});

routeMap.forEach(({ method, cleanPath, status, route }) => {
  if (typeof app[method] !== 'function') return;

  app[method](cleanPath, (req, res) => {
    res.status(status);

    const bodyData =
      typeof route.response?.body === 'string'
        ? route.response.body
        : route.response?.body?.data;

    if (bodyData === undefined || bodyData === null || bodyData === '') {
      return res.send();
    }

    if (typeof bodyData === 'object') {
      return res.json(bodyData);
    }

    try {
      res.json(JSON.parse(bodyData));
    } catch {
      res.send(bodyData);
    }
  });
});

app.listen(4001, '0.0.0.0', () => {
  console.log(`Mock Server Started on Port 4001 with ${routeMap.size} routes`);
});
