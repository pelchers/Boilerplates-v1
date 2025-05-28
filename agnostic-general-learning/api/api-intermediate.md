# API Intermediate: Building and Using REST APIs

## Overview
This explainer is for developers who understand basic API concepts and want to learn how to build and use REST APIs with more structure, authentication, and best practices. We'll cover REST principles, HTTP methods, status codes, authentication (with API keys and tokens), error handling, and how to organize code for maintainability.

## File Flow in a Typical REST API Project
```
my-restful-app/
  frontend/
    src/
      api/                # API helpers (calls backend, e.g., userApi.ts)
        ↓                 # ↓ Data/request flows from frontend to backend
      pages/              # Pages/screens (e.g., UsersPage.tsx)
      components/         # UI components (e.g., UserList.tsx)
  backend/
    src/
      routes/             # API route definitions (e.g., /api/users)
        ↓                 # ↓ Route passes request to controller
      controllers/        # Request handling logic (e.g., userController.js)
        ↓                 # ↓ Controller calls service
      services/           # Business logic, database/API calls (e.g., userService.js)
        ↓                 # ↓ Service interacts with models or external APIs
      middleware/         # Auth, logging, error handling (e.g., auth.js)
      models/             # Data models (e.g., User.js)
      utils/              # Utility functions (e.g., helpers.js)
      config/             # Config files (e.g., env, constants)
      app.js              # Main Express app setup (entry point)
    .env                  # Secrets (API keys, tokens)
  database/               # Database files (if used)
```
*Arrows (↓) show the flow: frontend → backend route → controller → service → (database or external API)*

## Key Points
- REST APIs use HTTP methods (GET, POST, PUT, DELETE) to perform CRUD operations.
- Endpoints are organized by resource (e.g., `/api/users`, `/api/posts`).
- Use status codes to indicate success or error (e.g., 200, 201, 400, 401, 404, 500).
- Authentication is often required (API keys, JWT tokens, etc.).
- Code should be organized for maintainability: routes, controllers, services, middleware.
- Error handling and validation are essential for robust APIs.

## Benefits and Drawbacks
**Benefits:**
- Standardized, predictable API structure
- Easy to consume from frontend or third-party apps
- Scalable and maintainable codebase

**Drawbacks:**
- More setup and boilerplate than simple scripts
- Requires understanding of HTTP, status codes, and security

## Technical Explanation
A REST API exposes endpoints for resources (like users or posts). Each endpoint supports one or more HTTP methods:
- `GET /api/users` — List users
- `POST /api/users` — Create a user
- `GET /api/users/:id` — Get a user by ID
- `PUT /api/users/:id` — Update a user
- `DELETE /api/users/:id` — Delete a user

Authentication is typically handled with API keys or tokens sent in headers. Middleware functions handle authentication, logging, and error handling. Controllers process requests, call services, and return responses. Services contain business logic and interact with databases or external APIs.

## Nontechnical Explanation
Think of a REST API as a set of organized mailboxes. Each mailbox (endpoint) has a label (URL) and accepts certain types of mail (HTTP methods). You need the right key (authentication) to open some mailboxes. If you send the wrong mail or forget your key, you get an error message.

## Key Terms
- **REST:** Representational State Transfer, a style for designing APIs
- **Endpoint:** A specific URL for a resource
- **HTTP Method:** Action to perform (GET, POST, PUT, DELETE)
- **Status Code:** Number indicating result (200=OK, 404=Not Found)
- **Middleware:** Functions that run before/after request handlers
- **JWT:** JSON Web Token, a way to securely transmit information

## Resources
- [MDN: REST APIs](https://developer.mozilla.org/en-US/docs/Glossary/REST)
- [Express.js Guide](https://expressjs.com/en/guide/routing.html)
- [Postman: REST API Tutorial](https://learning.postman.com/docs/getting-started/introduction/)
- [JWT.io](https://jwt.io/)

## Notes on Applicability to Stack
- These patterns apply to most Node.js/Express REST APIs, but also to other stacks (Python Flask, Java Spring, etc.).
- Frontend frameworks (React, Vue, etc.) consume REST APIs in similar ways.

## Example: REST API with Authentication and Error Handling

### Example File Flow (with Arrows)
```
my-restful-app/
  backend/
    src/
      routes/
        userRoutes.js      # [Defines /api/users endpoints, imports controller & middleware]
          ↓
      controllers/
        userController.js  # [Handles user requests, calls service]
          ↓
      services/
        userService.js     # [Business logic, e.g., fetch users, create user]
          ↓
      middleware/
        auth.js            # [Checks JWT token, protects routes]
        errorHandler.js    # [Handles errors globally]
      models/
        User.js            # [User data model, could use ORM]
      app.js               # [Express app setup, mounts routes & middleware]
    .env                   # [JWT secret, DB connection string]
  frontend/
    src/
      api/
        userApi.ts         # [Calls backend endpoints, handles fetch logic]
      pages/
        UsersPage.tsx      # [Displays user data, calls API helper]
```
*Arrows (↓) show the flow: user action → frontend API helper → backend route → controller → service → model → (database)*

### Backend: Express REST API with JWT Auth
**File: backend/src/routes/userRoutes.js**
```js
// --- User routes: defines endpoints for user resource ---
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController'); // Handles logic for each endpoint
const auth = require('../middleware/auth'); // Middleware to protect routes

// Apply auth middleware to all user routes
router.use(auth); // In larger apps, you might apply auth only to certain routes

// GET /api/users - Get all users
router.get('/', userController.getUsers); // Calls getUsers in userController
// POST /api/users - Create a new user
router.post('/', userController.createUser); // Calls createUser in userController

// Export the router to be used in app.js
module.exports = router;
```

**File: backend/src/controllers/userController.js**
```js
// --- Controller: handles incoming requests, calls service, sends response ---
const userService = require('../services/userService'); // Business logic

// GET /api/users
exports.getUsers = async (req, res, next) => {
  try {
    // Call the service to get all users
    const users = await userService.getAllUsers();
    res.json(users); // Send users as JSON
  } catch (err) {
    next(err); // Pass error to error handler middleware
  }
};

// POST /api/users
exports.createUser = async (req, res, next) => {
  try {
    // Call the service to create a new user
    const user = await userService.createUser(req.body); // req.body should have user data
    res.status(201).json(user); // 201 = Created
  } catch (err) {
    next(err); // Pass error to error handler
  }
};
```

**File: backend/src/services/userService.js**
```js
// --- Service: contains business logic, interacts with models/database ---
const User = require('../models/User'); // User data model

// Get all users (in a real app, fetch from database)
exports.getAllUsers = async () => {
  // This would be a DB query in production
  return [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
  ];
};

// Create a new user (in a real app, save to database)
exports.createUser = async (userData) => {
  // Validate userData here in a real app
  // Save to DB and return the new user
  return { id: 3, ...userData };
};
```

**File: backend/src/middleware/auth.js**
```js
// --- Auth middleware: checks JWT token in Authorization header ---
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET; // Secret from .env file

module.exports = (req, res, next) => {
  // Get the Authorization header (should be 'Bearer <token>')
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ error: 'No token provided' });
  const token = authHeader.split(' ')[1]; // Get the token part
  try {
    req.user = jwt.verify(token, secret); // Attach user info to request
    next(); // Continue to next middleware/route
  } catch {
    res.status(401).json({ error: 'Invalid token' });
  }
};
```

**File: backend/src/middleware/errorHandler.js**
```js
// --- Centralized error handler: catches errors from controllers/services ---
module.exports = (err, req, res, next) => {
  console.error(err); // Log error for debugging
  res.status(500).json({ error: err.message || 'Server error' }); // Send error response
};
```

**File: backend/src/models/User.js**
```js
// --- User data model ---
// In a real app, use an ORM like Mongoose (MongoDB) or Sequelize (SQL)
// Here, just a placeholder class for demonstration
module.exports = class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
};
```

**File: backend/src/app.js**
```js
// --- Main Express app setup ---
const express = require('express');
const userRoutes = require('./routes/userRoutes'); // User routes
const errorHandler = require('./middleware/errorHandler'); // Error handler
const app = express();

app.use(express.json()); // Parse JSON request bodies
app.use('/api/users', userRoutes); // Mount user routes at /api/users
app.use(errorHandler); // Use centralized error handler

// In a real app, you would also connect to a database here

module.exports = app;
```

**File: backend/.env**
```
JWT_SECRET=supersecretkey
```
*This file stores your JWT secret. Never commit secrets to version control!*

### Frontend: Consuming the REST API
**File: frontend/src/api/userApi.ts**
```ts
// --- API helper for user endpoints ---
// This file abstracts fetch logic for user-related API calls
const API_URL = 'http://localhost:4000/api/users'; // Backend endpoint

// Get all users (requires JWT token)
export async function getUsers(token: string) {
  const res = await fetch(API_URL, {
    headers: { Authorization: `Bearer ${token}` } // Send token in header
  });
  if (!res.ok) throw new Error('Failed to fetch users');
  return res.json(); // Returns array of users
}

// Create a new user (requires JWT token)
export async function createUser(user: { name: string }, token: string) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(user)
  });
  if (!res.ok) throw new Error('Failed to create user');
  return res.json(); // Returns the created user
}
```

**File: frontend/src/pages/UsersPage.tsx**
```tsx
// --- Page to display and add users ---
// This component fetches users and allows adding a new user
import React, { useEffect, useState } from 'react';
import { getUsers, createUser } from '../api/userApi'; // API helpers

export default function UsersPage() {
  // State for user list
  const [users, setUsers] = useState([]);
  // State for new user name input
  const [name, setName] = useState('');
  // State for JWT token (in real apps, get from login/auth context)
  const [token, setToken] = useState('');
  // State for error messages
  const [error, setError] = useState('');

  // Fetch users when token changes (i.e., when user logs in)
  useEffect(() => {
    if (token) {
      getUsers(token)
        .then(setUsers)
        .catch(e => setError(e.message));
    }
  }, [token]);

  // Handler for adding a new user
  const handleAdd = async () => {
    try {
      const user = await createUser({ name }, token); // Call API helper
      setUsers([...users, user]); // Add new user to list
      setName(''); // Clear input
    } catch (e) {
      setError(e.message); // Show error
    }
  };

  return (
    <div>
      <h1>Users</h1>
      {/* Input for JWT token (in real apps, use login flow) */}
      <input
        value={token}
        onChange={e => setToken(e.target.value)}
        placeholder="JWT token"
      />
      {/* List of users */}
      <ul>
        {users.map(u => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
      {/* Input for new user name */}
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="New user name"
      />
      <button onClick={handleAdd}>Add User</button>
      {/* Show error message if any */}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}
```

---

## How It Works
- The **frontend** calls the REST API endpoints with a JWT token for authentication.
- The **backend** uses middleware to check the token, then routes the request to the appropriate controller and service.
- The **controller** handles the request, calls the service, and returns the result.
- The **service** contains business logic and interacts with the data model.
- Errors are handled centrally by middleware.

---

## More
- In production, use a real database and secure token storage.
- Add validation, logging, and more granular error handling.
- See [api-basics.md](./api-basics.md) for a beginner-level example. 