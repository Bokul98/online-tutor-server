# Online Tutor Booking Platform

## Project Overview

The **Online Tutor Booking Platform** is a comprehensive web application that connects students with qualified tutors for personalized learning experiences. This platform enables users to browse available tutors, book sessions, and manage their learning journey efficiently.

## Purpose

This platform aims to:
- Provide a seamless way for students to find and book tutoring sessions
- Enable tutors to showcase their expertise and manage their availability
- Create a secure and user-friendly environment for online education
- Facilitate communication and scheduling between tutors and students

## Live URL

🌐 **Live Application**: [https://online-tutor-booking.netlify.app/](https://online-tutor-booking.netlify.app/)

## Key Features

### 🎯 Core Functionality
- **Tutor Discovery**: Browse and search for tutors by subject, language, and expertise
- **Session Booking**: Easy-to-use booking system for scheduling tutoring sessions
- **User Authentication**: Secure login and registration using Firebase Authentication
- **Profile Management**: Comprehensive user and tutor profile management
- **Review System**: Rate and review tutors based on session experiences
- **Real-time Updates**: Live updates for booking status and availability

### 🔐 Security Features
- **JWT Authentication**: Complete JWT token implementation for secure user authentication
  - JWT token creation upon successful login (both email/password and social login)
  - Client-side token storage and management
  - Token verification for protected routes
  - JWT middleware for private route protection
  - Support for both email/password-based authentication and social login
  - Optional 401 (Unauthorized) and 403 (Forbidden) error handling
- Firebase Admin SDK integration for secure user management
- Protected routes for sensitive operations
- Input validation and sanitization

### 📱 User Experience
- Responsive design for all devices
- Intuitive user interface
- Real-time notifications
- Easy navigation and search functionality

### 🎓 Tutor Features
- Create and manage tutorial listings
- Set pricing and availability
- Track booking history
- Manage student interactions
- Update profile and expertise information

### 📚 Student Features
- Browse available tutors and subjects
- Book and manage tutoring sessions
- View booking history
- Rate and review tutors
- Secure payment processing

## Technology Stack

### Backend (Server)
- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **MongoDB** - Database for storing application data
- **Mongoose** - MongoDB object modeling
- **Firebase Admin SDK** - User authentication and management

### NPM Packages Used

#### Core Dependencies
- **express** (^5.1.0) - Fast, unopinionated web framework
- **mongodb** (^6.17.0) - Official MongoDB driver
- **mongoose** (^8.15.1) - MongoDB object modeling tool
- **firebase-admin** (^13.4.0) - Firebase Admin SDK for server-side operations
- **jsonwebtoken** (^9.0.2) - JWT implementation for authentication
- **cors** (^2.8.5) - Cross-Origin Resource Sharing middleware
- **dotenv** (^16.5.0) - Environment variable management

#### Development Dependencies
- **nodemon** (^3.1.10) - Development server with auto-restart functionality

## JWT Authentication Implementation

### 🔑 Authentication Flow
The platform implements a comprehensive JWT (JSON Web Token) authentication system:

1. **Token Creation**: Upon successful login (both email/password and social login), a JWT token is generated server-side
2. **Client-Side Storage**: The JWT token is stored on the client side (localStorage/sessionStorage)
3. **Token Transmission**: The token is sent with each API request via Authorization header
4. **Server-Side Verification**: JWT middleware verifies the token on protected routes
5. **Route Protection**: Private routes are secured using JWT authentication middleware

### 🛡️ Security Features
- **Token Verification**: All private routes verify JWT tokens before granting access
- **Multiple Auth Methods**: Support for both email/password and social login authentication
- **Error Handling**: Optional implementation of 401 (Unauthorized) and 403 (Forbidden) responses
- **Middleware Protection**: Custom JWT middleware for route-level security

### 🔒 Protected Routes
Routes that require JWT authentication:
- `/api/tutorials/my-tutorials` - Get user's tutorials
- User profile management endpoints
- Booking creation and management
- Tutorial creation and editing (user-specific)

### User Management
- `POST /api/users` - User registration and management
- Authentication endpoints for login/logout

### Booking Management
- `GET /api/booked` - Get booking information
- `POST /api/booked` - Create new booking
- Booking management endpoints

## Installation and Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Online_Tutor_Booking_Platform/server
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   Create a `.env` file in the root directory with the following variables:
   ```env
   PORT=3000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   FIREBASE_PROJECT_ID=your_firebase_project_id
   ```

4. **Firebase Setup**
   - Configure Firebase Admin SDK
   - Add your Firebase service account key
   - Update Firebase configuration in the project

5. **Start the server**
   ```bash
   # Development mode
   npm run dev
   
   # Production mode
   npm start
   ```

## Project Structure

```
server/
├── config/          # Database configuration
├── firebaseApiAdmin/# Firebase admin utilities
├── form/           # HTML forms for testing
├── middleware/     # Custom middleware (auth, etc.)
├── model/          # Mongoose models
├── routes/         # API route definitions
├── index.js        # Main server file
├── package.json    # Dependencies and scripts
└── README.md       # Project documentation
```

## Deployment

The application is deployed on:
- **Frontend**: Netlify
- **Backend**: Vercel (configured with vercel.json)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the ISC License.

## Support

For support and questions, please contact the development team or create an issue in the repository.

---

**Built with ❤️ for better online education**