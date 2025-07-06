# 🛒 MERN Stack E-commerce Website

A complete e-commerce platform built with the MERN stack (MongoDB, Express.js, React.js, Node.js) featuring both customer and admin functionalities.

## ✨ Features

### 👤 Customer Features
- **Authentication**: Sign up, login, logout with JWT
- **Password Management**: Forgot password with email OTP
- **Product Browsing**: Browse products by category, brand, search, and filters
- **Shopping Cart**: Add, remove, and update cart items
- **Wishlist**: Save favorite products
- **Checkout**: Complete checkout with address and payment
- **Order Management**: Track orders and view order history
- **Reviews & Ratings**: Rate and review products
- **Profile Management**: Update personal information and addresses

### 🔧 Admin Features
- **Dashboard**: Analytics and overview
- **Product Management**: Add, edit, delete products
- **Category Management**: Manage product categories
- **User Management**: View and block users
- **Order Management**: Update order status and track orders
- **Review Management**: Moderate product reviews
- **Sales Analytics**: Charts and reports

## 🛠️ Tech Stack

### Frontend
- **React.js** - UI library
- **Redux Toolkit** - State management
- **Tailwind CSS** - Styling
- **Axios** - HTTP client
- **React Router** - Navigation
- **React Icons** - Icon library
- **React Toastify** - Notifications
- **Stripe** - Payment processing

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **Multer** - File uploads
- **Cloudinary** - Image storage
- **Stripe** - Payment processing
- **Nodemailer** - Email service
- **bcryptjs** - Password hashing

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ecommerce
   ```

2. **Install dependencies**
   ```bash
   npm run install-all
   ```

3. **Environment Setup**
   
   Create `.env` file in the backend directory:
   ```env
   NODE_ENV=development
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/ecommerce
   JWT_SECRET=your_jwt_secret_key_here
   JWT_EXPIRE=30d
   
   # Cloudinary Configuration
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   
   # Stripe Configuration
   STRIPE_SECRET_KEY=your_stripe_secret_key
   STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
   
   # Email Configuration
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_app_password
   
   # Frontend URL
   FRONTEND_URL=http://localhost:3000
   ```

4. **Start the development servers**
   ```bash
   npm run dev
   ```

   This will start both frontend (port 3000) and backend (port 5000) servers.

## 📁 Project Structure

```
ecommerce/
├── backend/
│   ├── config.env          # Environment variables
│   ├── server.js           # Main server file
│   ├── models/             # Database models
│   ├── routes/             # API routes
│   ├── middleware/         # Custom middleware
│   └── utils/              # Utility functions
├── frontend/
│   ├── public/             # Static files
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/          # Page components
│   │   ├── store/          # Redux store and slices
│   │   ├── utils/          # Utility functions
│   │   └── App.js          # Main app component
│   └── package.json
└── package.json            # Root package.json
```

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/register` - Register user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user
- `GET /api/auth/me` - Get current user
- `POST /api/auth/forgot-password` - Forgot password
- `PUT /api/auth/reset-password/:token` - Reset password

### Products
- `GET /api/products` - Get all products (with filters)
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create product (admin)
- `PUT /api/products/:id` - Update product (admin)
- `DELETE /api/products/:id` - Delete product (admin)
- `POST /api/products/:id/reviews` - Add review

### Cart
- `GET /api/cart` - Get user cart
- `POST /api/cart` - Add item to cart
- `PUT /api/cart/:productId` - Update cart item
- `DELETE /api/cart/:productId` - Remove from cart
- `DELETE /api/cart` - Clear cart

### Orders
- `POST /api/orders` - Create order
- `GET /api/orders` - Get user orders
- `GET /api/orders/:id` - Get single order
- `PUT /api/orders/:id/status` - Update order status (admin)

### Categories
- `GET /api/categories` - Get all categories
- `POST /api/categories` - Create category (admin)
- `PUT /api/categories/:id` - Update category (admin)
- `DELETE /api/categories/:id` - Delete category (admin)

## 🎨 UI Components

The frontend includes reusable components:
- **Layout**: Header, Footer, Navigation
- **Common**: LoadingSpinner, Button, Input, Modal
- **Product**: ProductCard, ProductGrid, ProductDetail
- **Cart**: CartItem, CartSummary
- **Auth**: LoginForm, RegisterForm
- **Admin**: Dashboard, DataTable, Charts

## 🔐 Authentication & Authorization

- JWT-based authentication
- Role-based access control (user/admin)
- Protected routes
- Password reset functionality
- Session management

## 💳 Payment Integration

- Stripe payment processing
- Secure payment flow
- Order confirmation
- Payment status tracking

## 📧 Email Features

- Password reset emails
- Order confirmation emails
- Welcome emails
- Admin notifications

## 🖼️ Image Management

- Cloudinary integration
- Image upload and optimization
- Multiple image support
- Automatic resizing

## 📊 Admin Dashboard

- Sales analytics
- User management
- Order tracking
- Product inventory
- Review moderation

## 🚀 Deployment

### Backend Deployment
1. Set up MongoDB Atlas or local MongoDB
2. Configure environment variables
3. Deploy to Heroku, Vercel, or AWS

### Frontend Deployment
1. Build the project: `npm run build`
2. Deploy to Netlify, Vercel, or AWS S3

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License.

## 🆘 Support

For support, email support@ecommerce.com or create an issue in the repository.

## 🔄 Updates

Stay updated with the latest features and bug fixes by regularly pulling from the main branch.

---

**Happy Shopping! 🛍️** 