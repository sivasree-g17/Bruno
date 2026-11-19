# Bruno Collection - Fixed & Ready to Use

This is a complete, working Bruno API collection for the Toolshop E-Commerce API.

## ✅ What's Included

- **Brand** (2 requests): Get All Brands, Create Brand
- **Product** (3 requests): Get All Products, Get Product By ID, Search Products
- **Category** (1 request): Get All Categories
- **Cart** (3 requests): Get Cart, Add Item to Cart, Create Cart
- **User** (2 requests): User Login, Register User
- **Invoice** (1 request): Create Invoice

## 🚀 How to Use

### 1. Open in Bruno Desktop App

1. Download Bruno from: https://www.usebruno.com/downloads
2. Open Bruno
3. Click **File → Open Collection**
4. Navigate to this folder: `bruno-collection-fixed`
5. Click **Select Folder**

### 2. Select Environment

1. In Bruno, look for the environment dropdown (top-right)
2. Select **mock** environment
3. This sets `baseUrl` to `http://localhost:8080`

### 3. Start Mock Server (Optional)

```bash
cd ..
npm run mock:start
```

### 4. Run Requests

1. Click any request in the left sidebar
2. You'll see the **Send** button in the top-right
3. Click **Send** to execute the request

## 📁 Collection Structure

```
bruno-collection-fixed/
├── bruno.json                    # Collection config
├── environments/
│   └── mock.bru                  # Mock environment (localhost:8080)
├── Brand/
│   ├── Get All Brands.bru
│   └── Create Brand.bru
├── Product/
│   ├── Get All Products.bru
│   ├── Get Product By ID.bru
│   └── Search Products.bru
├── Category/
│   └── Get All Categories.bru
├── Cart/
│   ├── Get Cart.bru
│   ├── Add Item to Cart.bru
│   └── Create Cart.bru
├── User/
│   ├── User Login.bru
│   └── Register User.bru
└── Invoice/
    └── Create Invoice.bru
```

## ✨ All Files Are Valid

Every `.bru` file in this collection:
- ✅ Has proper syntax
- ✅ Contains complete request definition
- ✅ Includes tests
- ✅ Will show the Send button in Bruno

## 🔧 Environment Variables

The `mock` environment includes:
- `baseUrl`: http://localhost:8080
- `authToken`: mock-token-12345

## 📝 Notes

- All files are properly formatted
- No corruption or empty files
- Ready to use immediately
- Compatible with Bruno CLI and Desktop App
