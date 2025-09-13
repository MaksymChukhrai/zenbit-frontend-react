# ZenBit Frontend - React Application

A modern, responsive web application built with React and Redux for property browsing and user authentication. Features a sleek design based on Figma mockups with full mobile adaptation.

🔗 **Live Application**: [https://zenbit-frontend-react.vercel.app](https://zenbit-frontend-react.vercel.app)

## 🚀 Tech Stack

### Core Framework

- **React** (v18) - JavaScript library for building user interfaces
- **TypeScript** - Strongly typed JavaScript for enhanced development experience
- **Create React App** - Bootstrapped with CRA for rapid development setup

### State Management

- **Redux Toolkit** - Modern Redux approach for predictable state management
- **React Redux** - Official React bindings for Redux
- **Redux Persist** - Persist Redux state in localStorage

### Routing & Navigation

- **React Router DOM** - Declarative routing for React applications
- **React Router** - Client-side routing with history management

### Styling & UI

- **SASS/SCSS** - CSS preprocessor with variables, mixins, and modules
- **CSS Modules** - Scoped CSS to avoid class name conflicts
- **Google Fonts** - Merriweather and Lato font families from Figma design
- **Responsive Design** - Mobile-first approach with breakpoint mixins

### HTTP Client & API Integration

- **Axios** - Promise-based HTTP client for API requests
- **Interceptors** - Request/response middleware for JWT token handling

### Development & Deployment

- **Vercel** - Modern deployment platform for frontend hosting
- **ESLint & Prettier** - Code quality and consistent formatting
- **TypeScript Compiler** - Type checking and compilation

## 📁 Project Structure

```
frontend/
├── public/
│   ├── images/                 # Static assets (hero, login backgrounds)
│   └── index.html              # HTML template
├── src/
│   ├── components/             # Reusable UI components
│   │   ├── Header/             # Navigation header with auth buttons
│   │   ├── Hero/               # Landing page hero section
│   │   ├── PropertyCard/       # Property display cards
│   │   └── Layout/             # Application layout wrapper
│   ├── pages/                  # Route-based page components
│   │   ├── Home/               # Main landing page
│   │   ├── Login/              # User authentication page
│   │   └── Register/           # User registration page
│   ├── store/                  # Redux store configuration
│   │   ├── authSlice.ts        # Authentication state management
│   │   ├── propertiesSlice.ts  # Property data management
│   │   └── index.ts            # Store configuration
│   ├── services/               # API service layer
│   │   └── api.ts              # HTTP client and API methods
│   ├── styles/                 # Global styles and utilities
│   │   ├── globals.scss        # Global styles and CSS reset
│   │   ├── variables.scss      # SASS variables (colors, fonts, spacing)
│   │   └── mixins.scss         # Reusable SASS mixins
│   ├── types/                  # TypeScript type definitions
│   │   └── index.ts            # Interface definitions
│   ├── hooks/                  # Custom React hooks
│   │   └── redux.ts            # Typed Redux hooks
│   ├── App.tsx                 # Root application component
│   └── index.tsx               # Application entry point
├── package.json                # Dependencies and scripts
└── tsconfig.json               # TypeScript configuration

```

## ✨ Key Features

### 1. **User Authentication System**

- User registration with form validation
- Secure login with JWT token management
- Persistent authentication state across sessions
- Automatic token refresh and logout handling
- Protected routes and conditional rendering

### 2. **Property Browsing Interface**

- Dynamic property cards with real-time data from backend API
- Optimized property images served from backend
- Responsive grid layout adapting to screen sizes
- Property details including price, yield, and availability

### 3. **Responsive Design Implementation**

- **Mobile-first approach** with breakpoint system
- **Figma design compliance** with pixel-perfect accuracy
- **Cross-device compatibility** (mobile, tablet, desktop)
- **Optimized images** in WebP format for fast loading

### 4. **Enhanced User Experience**

- **Smart navigation** - Logo click returns to homepage from auth pages
- **Loading states** for API requests
- **Error handling** with user-friendly messages
- **Form validation** with real-time feedback
- **Smooth animations** and hover effects

## 🎨 Design System

### Typography

- **Merriweather** - Headings and important text (serif)
- **Lato** - Body text and UI elements (sans-serif)

### Color Palette

- **Primary Gold**: `#B29F7E` - Buttons and accents
- **Text Dark**: `#172234` - Primary text color
- **Background Gray**: `#F2F2F2` - Section backgrounds
- **Form Background**: `#F0F6F6` - Auth form backgrounds

### Responsive Breakpoints

```scss
$breakpoints: (
  'mobile': 320px,
  'tablet': 768px, 
  'desktop': 1200px,
  'large': 1440px
);
```
**🔌 API Integration**  

**Authentication Endpoints**  

- `POST /auth/register` - User registration  
- `POST /auth/login` - User authentication  

**Property Endpoints**  

- `GET /properties` - Fetch all properties  
- `GET /properties/:id` - Fetch single property  

**Features**  

- Automatic JWT token attachment to requests  
- Request/response interceptors for error handling  
- Environment-based API URL configuration  
- Loading and error state management  

**📱 Pages & Components**  

**Home Page (`/`)**  

- Hero section with call-to-action  
- Property grid with dynamic cards  
- Responsive layout with mobile optimization  

**Login Page (`/login`)**  

- Split-screen design with background image  
- Form validation and error handling  
- Redirect to home after successful authentication  

**Register Page (`/register`)**  

- Extended form with first name and last name fields  
- Consistent styling with login page  
- Automatic login after registration  

**Header Component**  

- Conditional rendering based on authentication state  
- Logo navigation (returns to homepage)  
- Responsive button layout  
- Hidden on auth pages (design enhancement)  

**Property Card Component**  

- Dynamic data from backend API  
- Hover effects and smooth transitions  
- Structured information display  
- Mobile-optimized layout  

**🛠️ Local Development Setup**  

**Prerequisites**  

- Node.js (v16 or higher)  
- npm or yarn  
- Backend API running (locally or on Railway)  

**Installation & Running**  

1. ***Clone the repository  ***

```bash
git clone https://github.com/MaksymChukhrai/zenbit-frontend-react.git
cd zenbit-frontend-react

```

2. **Install dependencies**

```bash
npm install
```

3. **Environment setup**

    ```bash
    # Create .env file with:

    REACT_APP_API_URL=http://localhost:3000
    # or for production:

    REACT_APP_API_URL=https://zenbit-backend-nestjs-api-production.up.railway.app
    ```


4. **Run the application**

```bash
# Development server with hot reload
npm start

# Build for production
npm run build

# Run production build locally
npm run serve

```

The application will be available at `http://localhost:3000`

**🌐 Deployment**
The application is deployed on **Vercel** platform:

Automatic deployments from main branch
Environment variables configured
Optimized build with code splitting
CDN distribution for fast global access

**📦 Dependencies Highlights**

```json
{
  "react": "^18.2.0",
  "react-redux": "^8.0.0", 
  "@reduxjs/toolkit": "^1.9.0",
  "react-router-dom": "^6.8.0",
  "axios": "^1.3.0",
  "sass": "^1.58.0",
  "typescript": "^4.9.0"
}

```

**🔧 State Management Architecture**  

**Auth Slice**  

- User authentication state  
- JWT token management  
- Loading and error states  
- Persistent storage integration  

**Properties Slice**  

- Property data caching  
- API request states  
- Error handling  
- Data normalization  

**🎯 Enhanced Features (Beyond Figma Design)**  

**Logo Navigation**  

- Added clickable logo that returns users to homepage  
- Improves user experience on auth pages  
- Maintains consistent navigation patterns  

**Registration Page**  

- Complete registration flow with validation  
- Consistent design language with login page  
- Automatic authentication after successful registration  

**Responsive Enhancements**  

- Mobile-optimized forms and layouts  
- Touch-friendly button sizes  
- Optimized image loading for mobile devices  

**🚀 Production Optimizations**  

- Code splitting with lazy loading  
- Image optimization with WebP format  
- Bundle size optimization with tree shaking  
- Caching strategies for static assets  
- SEO optimization with proper meta tags  

---

**Author:** Maksym Chukhrai  
**Framework:** React v18 with TypeScript  
**State Management:** Redux Toolkit  
**Styling:** SASS/SCSS with CSS Modules  
**Hosting:** Vercel Platform

Jump [**to backend repo**](https://github.com/MaksymChukhrai/zenbit-backend-NestJS-API-)
