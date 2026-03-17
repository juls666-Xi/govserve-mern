
  # Government Assistance Application System (MERN Stack)

  A full-stack MERN (MongoDB, Express, React, Node.js) application for managing government assistance applications, appointments, and notifications.

  ## Project Structure

  ```
  govserve-mern/
  ├── client/                    # React frontend (Vite + TypeScript)
  │   ├── src/
  │   │   ├── app/              # Main application code
  │   │   ├── components/       # Reusable React components
  │   │   ├── pages/            # Page components
  │   │   ├── contexts/         # React context (auth, etc.)
  │   │   ├── styles/           # Global styles
  │   │   └── main.tsx
  │   ├── index.html
  │   ├── package.json
  │   └── vite.config.ts
  │
  ├── server/                    # Express backend (TypeScript)
  │   ├── src/
  │   │   ├── models/           # MongoDB schemas (User, Application, etc.)
  │   │   ├── routes/           # API endpoints
  │   │   ├── controllers/      # Business logic
  │   │   ├── middleware/       # Authentication, error handling
  │   │   ├── config/           # Database config
  │   │   ├── types.ts          # TypeScript interfaces
  │   │   └── index.ts          # Server entry point
  │   ├── package.json
  │   └── tsconfig.json
  │
  ├── package.json              # Root monorepo config
  ├── .env.example              # Environment variables template
  └── README.md                 # This file
  ```

  ## Prerequisites

  - Node.js 18+
  - npm or yarn
  - MongoDB (local or cloud - MongoDB Atlas)

  ## Installation

  ### 1. Clone the repository
  ```bash
  git clone <repository-url>
  cd govserve-mern
  ```

  ### 2. Install dependencies for all workspaces
  ```bash
  npm run install-all
  ```

  Or manually:
  ```bash
  npm install                    # Root dependencies
  cd client && npm install       # Frontend dependencies
  cd ../server && npm install    # Backend dependencies
  ```

  ### 3. Set up environment variables

  Copy `.env.example` to `.env` in the root directory and update the values:

  ```bash
  cp .env.example .env
  ```

  Then edit `.env` with your configuration:
  - `MONGODB_URI`: Your MongoDB connection string
  - `JWT_SECRET`: A secure random string for JWT signing
  - `PORT`: Server port (default: 5000)
  - `CLIENT_URL`: Frontend URL (default: http://localhost:5173)

  ## Running the Application

  ### Development Mode (Both client and server)
  ```bash
  npm run dev
  ```

  ### Run only the client
  ```bash
  npm run client
  ```

  ### Run only the server
  ```bash
  npm run server
  ```

  Alternatively, you can navigate to each directory and run:
  ```bash
  cd client && npm run dev
  cd server && npm run dev
  ```

  ### Production Build
  ```bash
  npm run build
  ```

  ### Start production server
  ```bash
  npm start
  ```

  ## Development

  - **Frontend**: React 18, Vite, TypeScript, Tailwind CSS, Radix UI
  - **Backend**: Express, MongoDB, Mongoose, JWT
  - **Authentication**: JWT with localStorage

  ## Features

  - User registration and login
  - Government assistance application management
  - Appointment scheduling
  - Notifications system
  - Admin dashboard
  - Responsive design

  ## API Documentation

  API endpoints are organized by feature:
  - `/api/auth` - Authentication (login, register, logout)
  - `/api/users` - User profiles
  - `/api/applications` - Application CRUD operations
  - `/api/appointments` - Appointment scheduling
  - `/api/admin` - Admin operations

  ## Next Steps

  1. Set up MongoDB connection
  2. Implement authentication routes and controllers
  3. Implement CRUD operations for applications
  4. Integrate frontend with backend API
  5. Deploy to production

  ## License

  MIT

