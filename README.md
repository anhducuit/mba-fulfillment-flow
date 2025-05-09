# MBA Fulfillment Flow - Vietnam

A full-stack web application for MBA Fulfillment Vietnam, offering warehousing, packaging, shipping, and order processing services.

## Project Overview

This project implements an MVP (Minimum Viable Product) for MBA Fulfillment Vietnam with the following key features:

### Main Functions

1. **Home page (Public)**
   - Company introduction
   - Main services: warehousing, packaging, shipping, order processing
   - Navigation buttons to login/register/shop

2. **Authentication**
   - Registration/Login with JWT authentication
   - User state management
   - Role-based access (admin/user)

3. **Shop Page**
   - Product listings (cartons, sealed bags, tapes, etc.)
   - Add to cart functionality
   - Cart management with quantity updates

4. **Order Tracking**
   - Order history for authenticated users
   - Order status tracking (Waiting for confirmation, Processing, Delivered)
   - Order details view

5. **Admin Features**
   - Product management
   - Order status management

## Technology Stack

### Frontend
- React (with TypeScript)
- React Router DOM for routing
- Tailwind CSS and shadcn-ui for styling
- Context API for state management
- Axios for API requests

### Backend
- Node.js with Express
- MongoDB for database (with local mock data option)
- JWT for authentication
- RESTful API architecture

## Project Structure

### Frontend (`/src`)
- `/components`: Reusable UI components
- `/contexts`: State management contexts (Auth, Cart, Products, Orders)
- `/pages`: Main application pages
- `/services`: API service integrations

### Backend (`/server`)
- `/config`: Configuration settings
- `/middleware`: Express middleware (auth, etc.)
- `/models`: MongoDB schemas and models
- `/routes`: API routes

## Setup Instructions

### Prerequisites
- Node.js & npm installed
- MongoDB instance (optional, the app can run with mock data)

### Installation

1. **Clone the repository**
```sh
git clone <REPOSITORY_URL>
cd mba-fulfillment-flow-main
```

2. **Install frontend dependencies**
```sh
npm install
```

3. **Install backend dependencies**
```sh
cd server
npm install
cd ..
```

### Running the Application

1. **Start the backend server**
```sh
cd server
npm run dev
```
The backend server will run on http://localhost:5000

2. **Start the frontend development server** (in a new terminal)
```sh
npm run dev
```
The frontend application will run on http://localhost:5173

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login and get token
- `GET /api/auth/me` - Get authenticated user

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID
- `POST /api/products` - Create a product (admin only)
- `PUT /api/products/:id` - Update a product (admin only)
- `DELETE /api/products/:id` - Delete a product (admin only)

### Orders
- `GET /api/orders` - Get user orders (or all orders for admin)
- `GET /api/orders/:orderCode` - Get order by code
- `POST /api/orders` - Create a new order
- `PUT /api/orders/:id/status` - Update order status (admin only)

## Deployment

### Frontend
The frontend can be deployed to Netlify, Vercel, or any static hosting service.

```sh
npm run build
```

### Backend
The backend can be deployed to services like Render, Railway, or Heroku.

1. Configure environment variables on your hosting platform:
   - `PORT` - Server port (default 5000)
   - `MONGODB_URI` - MongoDB connection string
   - `JWT_SECRET` - Secret for JWT token generation

2. Deploy the `/server` directory to your chosen platform.

## Development Notes

- The application can run with mock data if no MongoDB connection is provided.
- By default, two users are created in mock mode:
  - Admin: email=`admin@mbafulfillment.com`, password=`admin`
  - Regular user: email=`user@example.com`, password=`user123`

## License

This project is proprietary and owned by MBA Fulfillment Vietnam.
