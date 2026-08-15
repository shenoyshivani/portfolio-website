# Shivani Shenoy - Portfolio Website

A modern, interactive portfolio website built with the MERN stack (MongoDB, Express.js, React.js, Node.js).

## Features

- **Dark/Light Mode Toggle** - Switch between dark and light themes
- **Smooth Animations** - Framer Motion powered animations throughout
- **Responsive Design** - Works perfectly on all device sizes
- **Contact Form with Gmail Notifications** - Get notified via email when someone contacts you
- **Interactive UI** - Hover effects, scroll animations, and engaging transitions

## Tech Stack

- **Frontend**: React.js, Framer Motion, React Icons, Axios
- **Backend**: Node.js, Express.js, Nodemailer
- **Database**: MongoDB (Mongoose)
- **Styling**: CSS-in-JS with CSS Variables for theming

## Setup Instructions

### Prerequisites

- Node.js (v18+)
- MongoDB (local or Atlas)
- Gmail account with App Password

### 1. Clone and Install Dependencies

```bash
cd portfolio-website
npm run install-all
```

### 2. Configure Environment Variables

Edit `server/.env`:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
CONTACT_EMAIL=shivanishenoy17@gmail.com
```

### 3. Get Gmail App Password

1. Go to Google Account Settings > Security
2. Enable 2-Step Verification
3. Go to App Passwords
4. Generate a new app password for "Mail"
5. Use this password in EMAIL_PASS

### 4. Start Development Servers

```bash
npm run dev
```

This starts both:
- Backend: http://localhost:5000
- Frontend: http://localhost:3000

### 5. Build for Production

```bash
npm run build
```

## Project Structure

```
portfolio-website/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # UI components
│   │   ├── context/        # Theme context
│   │   └── App.jsx         # Main app
│   └── package.json
├── server/                 # Express backend
│   ├── controllers/        # Route handlers
│   ├── models/            # MongoDB models
│   ├── routes/            # API routes
│   ├── index.js           # Server entry
│   └── .env               # Environment variables
└── package.json           # Root package.json
```

## Sections

1. **Hero** - Animated intro with typewriter effect
2. **About** - Personal info with stats
3. **Skills** - Technical skills with animated progress bars
4. **Projects** - Featured projects with demos
5. **Experience** - Work experience timeline
6. **Education** - Education and certifications
7. **Contact** - Contact form with Gmail notifications
