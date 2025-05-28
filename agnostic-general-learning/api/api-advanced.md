  # API Advanced: Scalable, Secure, and Documented APIs

## Overview
This advanced explainer is for developers who want to build robust, scalable, and secure APIs for production. We'll cover layered architecture, OpenAPI/Swagger documentation, advanced authentication (OAuth2, JWT refresh), input validation, rate limiting, automated testing, error handling, and best practices for maintainability and team collaboration.

## File Flow in a Production-Grade API Project
```
my-enterprise-app/
  frontend/
    src/
      api/                # API clients (OpenAPI-generated or custom)
        ↓
      pages/              # Pages/screens
      components/         # UI components
      types/              # Shared types/interfaces (from OpenAPI or manual)
  backend/
    src/
      routes/             # API route definitions (e.g., /api/users)
        ↓
      controllers/        # Request handling logic (thin, delegates to services)
        ↓
      services/           # Business logic, orchestration, DB/API calls
        ↓
      models/             # Data models (ORM schemas, DTOs)
      middleware/         # Auth, validation, rate limiting, logging, error handling
      validators/         # Input validation schemas (e.g., Joi, Zod)
      utils/              # Utility functions
      config/             # Config, env, constants
      docs/               # OpenAPI/Swagger specs, docs
      tests/              # Automated tests (unit, integration, e2e)
      app.js              # Main Express app setup
    .env                  # Secrets (OAuth, DB, etc.)
  database/               # DB migrations, seeders
  scripts/                # DevOps, CI/CD scripts
```
*Arrows (↓) show the flow: frontend → backend route → controller → service → model → (database or external API)*

## Key Points
- Use layered architecture: routes → controllers → services → models.
- Document APIs with OpenAPI/Swagger for team and client use.
- Use OAuth2/JWT with refresh tokens for secure, scalable auth.
- Validate all input (body, query, params) with schemas (Joi, Zod, Yup).
- Implement rate limiting, logging, and centralized error handling.
- Write automated tests (unit, integration, e2e) for reliability.
- Use DTOs and types for strong contracts between layers and with frontend.
- Separate config, secrets, and environment-specific logic.
- Use CI/CD and scripts for deployment, migrations, and testing.

## Benefits and Drawbacks
**Benefits:**
- Highly maintainable, scalable, and secure codebase
- Easy onboarding for new team members (docs, types, tests)
- Robust against attacks, errors, and scaling issues

**Drawbacks:**
- More initial setup and complexity
- Requires team discipline and tooling

## Technical Explanation
A production API uses:
- **Layered architecture** for separation of concerns and testability.
- **OpenAPI/Swagger** for self-documenting endpoints and type generation.
- **OAuth2/JWT** for secure, scalable authentication (with refresh tokens for session longevity).
- **Validation middleware** to ensure all input is correct and safe.
- **Rate limiting** to prevent abuse (e.g., express-rate-limit).
- **Centralized error handling** for consistent responses and logging.
- **Automated tests** for all layers (Jest, Supertest, Cypress, etc.).
- **DTOs/types** for strong contracts and codegen (TypeScript, OpenAPI tools).
- **CI/CD scripts** for automated deployment, migration, and testing.

## Nontechnical Explanation
A production API is like a secure, well-run airport: every passenger (request) is checked (validated), has the right ticket (auth), and is tracked (logging). The airport has clear maps (docs), security (rate limiting), and regular safety checks (tests). Everything is organized so new staff can learn quickly and the airport can grow without chaos.

## Key Terms
- **OpenAPI/Swagger:** Standard for API documentation/specs
- **OAuth2:** Secure, delegated authentication protocol
- **DTO:** Data Transfer Object, defines data shape between layers
- **Rate Limiting:** Restricts number of requests per user/time
- **Validation Schema:** Defines allowed input structure
- **CI/CD:** Continuous Integration/Deployment

## Resources
- [OpenAPI Specification](https://swagger.io/specification/)
- [OAuth2 Simplified](https://aaronparecki.com/oauth-2-simplified/)
- [express-rate-limit](https://www.npmjs.com/package/express-rate-limit)
- [Joi Validation](https://joi.dev/)
- [Supertest](https://github.com/visionmedia/supertest)
- [Jest](https://jestjs.io/)
- [Swagger UI](https://swagger.io/tools/swagger-ui/)

## Notes on Applicability to Stack
- These patterns apply to Node.js/Express, but also to other stacks (NestJS, FastAPI, Spring Boot, .NET, etc.).
- OpenAPI and OAuth2 are industry standards for APIs.

## Example: Advanced REST API with OpenAPI, OAuth2, Validation, and Testing

### Example File Flow (with Arrows)
```
my-enterprise-app/
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
      models/
        User.js            # [User ORM schema, DTOs]
      validators/
        userValidator.js   # [Joi/Zod schemas for input validation]
      middleware/
        auth.js            # [OAuth2/JWT, refresh token logic]
        validate.js        # [Runs validation schemas]
        rateLimit.js       # [Rate limiting]
        errorHandler.js    # [Handles errors globally]
      docs/
        openapi.yaml       # [OpenAPI/Swagger spec]
      tests/
        user.test.js       # [Unit/integration tests]
      app.js               # [Express app setup, mounts routes & middleware]
    .env                   # [OAuth2 secrets, DB connection]
  frontend/
    src/
      api/
        userApi.ts         # [OpenAPI-generated or custom API client]
      types/
        user.d.ts          # [Types generated from OpenAPI]
      pages/
        UsersPage.tsx      # [Displays user data, calls API client]
```
*Arrows (↓) show the flow: user action → frontend API client → backend route → controller → service → model → (database)*

### Backend: Advanced Express API
**File: backend/src/routes/userRoutes.js**
```js
// --- User routes: defines endpoints for user resource, applies validation and auth ---
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { validateUser, validateUserId } = require('../validators/userValidator');
const auth = require('../middleware/auth');
const rateLimit = require('../middleware/rateLimit');

// Apply rate limiting and auth to all user routes
router.use(rateLimit);
router.use(auth);

// GET /api/users - List users
router.get('/', userController.getUsers);
// POST /api/users - Create user (with validation)
router.post('/', validateUser, userController.createUser);
// GET /api/users/:id - Get user by ID (with param validation)
router.get('/:id', validateUserId, userController.getUserById);

module.exports = router;
```

**File: backend/src/controllers/userController.js**
```js
// --- Controller: handles requests, calls service, returns response ---
const userService = require('../services/userService');

exports.getUsers = async (req, res, next) => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (err) {
    next(err);
  }
};

exports.createUser = async (req, res, next) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
};

exports.getUserById = async (req, res, next) => {
  try {
    const user = await userService.getUserById(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (err) {
    next(err);
  }
};
```

**File: backend/src/services/userService.js**
```js
// --- Service: business logic, interacts with models/database ---
const User = require('../models/User');

exports.getAllUsers = async () => {
  // Fetch from DB in real app
  return [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' }
  ];
};

exports.createUser = async (userData) => {
  // Validate, hash password, save to DB in real app
  return { id: 3, ...userData };
};

exports.getUserById = async (id) => {
  // Fetch user by ID from DB in real app
  if (id == 1) return { id: 1, name: 'Alice', email: 'alice@example.com' };
  if (id == 2) return { id: 2, name: 'Bob', email: 'bob@example.com' };
  return null;
};
```

**File: backend/src/validators/userValidator.js**
```js
// --- Joi validation schemas for user input ---
const Joi = require('joi');

// Schema for creating a user
const userSchema = Joi.object({
  name: Joi.string().min(2).max(50).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required()
});

// Schema for user ID param
const userIdSchema = Joi.object({
  id: Joi.number().integer().min(1).required()
});

// Middleware to validate user creation
exports.validateUser = (req, res, next) => {
  const { error } = userSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  next();
};

// Middleware to validate user ID param
exports.validateUserId = (req, res, next) => {
  const { error } = userIdSchema.validate(req.params);
  if (error) return res.status(400).json({ error: error.details[0].message });
  next();
};
```

**File: backend/src/middleware/auth.js**
```js
// --- OAuth2/JWT authentication middleware with refresh support ---
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ error: 'No token provided' });
  const token = authHeader.split(' ')[1];
  try {
    req.user = jwt.verify(token, secret);
    next();
  } catch (err) {
    // Optionally, check for refresh token and issue new access token
    res.status(401).json({ error: 'Invalid or expired token' });
  }
};
```

**File: backend/src/middleware/rateLimit.js**
```js
// --- Rate limiting middleware (using express-rate-limit) ---
const rateLimit = require('express-rate-limit');

module.exports = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: { error: 'Too many requests, please try again later.' }
});
```

**File: backend/src/middleware/validate.js**
```js
// --- Generic validation middleware (for use with Zod, Yup, etc.) ---
module.exports = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  next();
};
```

**File: backend/src/middleware/errorHandler.js**
```js
// --- Centralized error handler with logging ---
module.exports = (err, req, res, next) => {
  // Log error to monitoring service in production
  console.error(err);
  res.status(err.status || 500).json({ error: err.message || 'Server error' });
};
```

**File: backend/src/models/User.js**
```js
// --- User ORM schema (e.g., Sequelize, Mongoose) ---
// Example with Sequelize
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define('User', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING, allowNull: false }
});

module.exports = User;
```

**File: backend/docs/openapi.yaml**
```yaml
# --- OpenAPI/Swagger spec (partial) ---
openapi: 3.0.0
info:
  title: User API
  version: 1.0.0
paths:
  /api/users:
    get:
      summary: List users
      responses:
        '200':
          description: OK
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/User'
    post:
      summary: Create user
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/UserInput'
      responses:
        '201':
          description: Created
  /api/users/{id}:
    get:
      summary: Get user by ID
      parameters:
        - in: path
          name: id
          schema:
            type: integer
          required: true
      responses:
        '200':
          description: OK
components:
  schemas:
    User:
      type: object
      properties:
        id:
          type: integer
        name:
          type: string
        email:
          type: string
    UserInput:
      type: object
      properties:
        name:
          type: string
        email:
          type: string
        password:
          type: string
```

**File: backend/tests/user.test.js**
```js
// --- Integration test for user endpoints (using Supertest & Jest) ---
const request = require('supertest');
const app = require('../src/app');
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;

describe('User API', () => {
  let token;
  beforeAll(() => {
    // Generate a valid JWT for testing
    token = jwt.sign({ id: 1, name: 'Test' }, secret);
  });

  it('should list users', async () => {
    const res = await request(app)
      .get('/api/users')
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('should create a user', async () => {
    const res = await request(app)
      .post('/api/users')
      .set('Authorization', `Bearer ${token}`)
      .send({ name: 'Charlie', email: 'charlie@example.com', password: 'password123' });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
  });
});
```

**File: backend/.env**
```
JWT_SECRET=supersecretkey
OAUTH_CLIENT_ID=your-client-id
OAUTH_CLIENT_SECRET=your-client-secret
```

### Frontend: OpenAPI-Generated API Client and Types
**File: frontend/src/api/userApi.ts**
```ts
// --- API client generated from OpenAPI spec (using openapi-typescript-codegen, etc.) ---
// This file is typically auto-generated; here is a simplified manual version
import type { User, UserInput } from '../types/user';

const API_URL = 'http://localhost:4000/api/users';

export async function getUsers(token: string): Promise<User[]> {
  const res = await fetch(API_URL, {
    headers: { Authorization: `Bearer ${token}` }
  });
  if (!res.ok) throw new Error('Failed to fetch users');
  return res.json();
}

export async function createUser(user: UserInput, token: string): Promise<User> {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(user)
  });
  if (!res.ok) throw new Error('Failed to create user');
  return res.json();
}
```

**File: frontend/src/types/user.d.ts**
```ts
// --- Types generated from OpenAPI spec ---
export interface User {
  id: number;
  name: string;
  email: string;
}

export interface UserInput {
  name: string;
  email: string;
  password: string;
}
```

**File: frontend/src/pages/UsersPage.tsx**
```tsx
// --- Page to display and add users, with error handling and type safety ---
import React, { useEffect, useState } from 'react';
import { getUsers, createUser } from '../api/userApi';
import type { User, UserInput } from '../types/user';

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [form, setForm] = useState<UserInput>({ name: '', email: '', password: '' });
  const [token, setToken] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (token) {
      getUsers(token).then(setUsers).catch(e => setError(e.message));
    }
  }, [token]);

  const handleAdd = async () => {
    try {
      const user = await createUser(form, token);
      setUsers([...users, user]);
      setForm({ name: '', email: '', password: '' });
    } catch (e: any) {
      setError(e.message);
    }
  };

  return (
    <div>
      <h1>Users</h1>
      <input value={token} onChange={e => setToken(e.target.value)} placeholder="JWT token" />
      <input value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} placeholder="Name" />
      <input value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} placeholder="Email" />
      <input value={form.password} type="password" onChange={e => setForm(f => ({ ...f, password: e.target.value }))} placeholder="Password" />
      <button onClick={handleAdd}>Add User</button>
      <ul>
        {users.map(u => (
          <li key={u.id}>{u.name} ({u.email})</li>
        ))}
      </ul>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}
```

---

## How It Works
- The **frontend** uses an OpenAPI-generated (or manually typed) API client and types for strong contracts.
- The **backend** uses layered architecture, validation, rate limiting, and OAuth2/JWT for security.
- All input is validated, errors are handled centrally, and the API is documented with OpenAPI/Swagger.
- Automated tests ensure reliability and prevent regressions.

---

## More
- Use tools like [openapi-typescript-codegen](https://github.com/ferdikoomen/openapi-typescript-codegen) to generate clients/types.
- Integrate with CI/CD for automated testing, linting, and deployment.
- Use monitoring/logging (e.g., Sentry, Datadog) for production observability.
- See [api-intermediate.md](./api-intermediate.md) for a mid-level example. 