# API Basics: An Absolute Beginner's Guide

## Overview
APIs (Application Programming Interfaces) are the invisible glue that connects different software systems, allowing them to talk to each other. Whether you're using a weather app, logging in with Google, or shopping online, APIs are working behind the scenes to fetch data, send requests, and make everything work together. This guide is for absolute beginners—no prior coding or technical experience required.

## File Tree
```
my-first-api-project/
  README.md                # Project overview and instructions
  fetch-weather.js         # Example: Fetching weather data from a public API
  fetch-joke.py            # Example: Getting a random joke using Python
  curl-demo.sh             # Example: Using curl to call an API from the command line
  .env                     # (Optional) Store API keys securely
```

## File Flow in a Typical Project (Where APIs Fit)
```
my-app/
  frontend/                # User interface (React, Vue, etc.)
    src/
      pages/              # Pages/screens
      components/         # UI components
      api/                # API helpers (calls backend)
        ↓
  backend/                 # Server-side code (Node.js, Express, etc.)
    routes/               # API routes (e.g., /api/weather)
      ↓
    controllers/          # Logic for handling requests
      ↓
    services/             # Business logic, calls to external APIs
      ↓
    .env                  # Secrets like API keys (never commit!)
  database/                # (Optional) Database for storing data
```
*Arrows (↓) show the typical flow: frontend → backend route → controller → service → (external API or database)*

## Key Points
- **API** stands for Application Programming Interface.
- APIs let different programs or services communicate.
- Most web APIs use HTTP (the same protocol as websites).
- APIs have **endpoints** (URLs) you can send requests to.
- You usually get data back in a format called **JSON** (JavaScript Object Notation).
- Some APIs require an **API key** (like a password) for access.
- You can use APIs from any programming language, or even from the command line.

## Benefits and Drawbacks
**Benefits:**
- Lets you use powerful features without building them yourself (e.g., maps, payments, weather data).
- Encourages code reuse and modularity.
- Makes it easy to connect different apps and services.

**Drawbacks:**
- You depend on the API provider (if they change or remove the API, your app may break).
- Some APIs have usage limits or require payment.
- Learning curve for understanding requests, responses, and authentication.

## Technical Explanation
An API is a set of rules for how software components interact. For web APIs, these rules are usually:
- **Endpoints:** URLs you send requests to (e.g., `https://api.weatherapi.com/v1/current.json?key=YOUR_KEY&q=London`).
- **HTTP Methods:**
  - `GET` (fetch data)
  - `POST` (send data)
  - `PUT` (update data)
  - `DELETE` (remove data)
- **Request:** What you send to the API (URL, method, headers, body).
- **Response:** What the API sends back (usually JSON data).

**Example: Fetching Weather Data (JavaScript)**
```js
// 📄 File Path: my-first-api-project/fetch-weather.js
const fetch = require('node-fetch');
const API_KEY = 'YOUR_API_KEY'; // Get a free key from weatherapi.com
const city = 'London';
const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(`The weather in ${city} is ${data.current.temp_c}°C and ${data.current.condition.text}.`);
  })
  .catch(error => console.error('Error:', error));
```

**Example: Fetching a Random Joke (Python)**
```python
# 📄 File Path: my-first-api-project/fetch-joke.py
import requests
response = requests.get('https://official-joke-api.appspot.com/random_joke')
joke = response.json()
print(f"{joke['setup']} ... {joke['punchline']}")
```

**Example: Using curl (Command Line)**
```sh
# 📄 File Path: my-first-api-project/curl-demo.sh
curl https://api.coindesk.com/v1/bpi/currentprice.json
```

## Nontechnical Explanation
Imagine you're at a restaurant. The menu is the API—it tells you what you can order. You (the client) tell the waiter (the API) what you want. The kitchen (the server) prepares your food and the waiter brings it back. You don't need to know how the kitchen works, just how to order from the menu.

## Key Terms
- **API:** A set of rules for how programs talk to each other.
- **Endpoint:** A specific URL where you can access a feature or data.
- **Request:** The message you send to the API (like placing an order).
- **Response:** The message the API sends back (like your food).
- **JSON:** A common data format for API responses (looks like a dictionary or object).
- **API Key:** A unique code that lets you use some APIs.
- **HTTP Method:** The type of action you want to perform (GET, POST, etc.).

## Resources
- [MDN: What is an API?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction)
- [Postman: API 101](https://learning.postman.com/docs/getting-started/introduction/)
- [Public APIs List](https://github.com/public-apis/public-apis)
- [weatherapi.com](https://www.weatherapi.com/) (Free weather API)
- [Official Joke API](https://official-joke-api.appspot.com/)

## Notes on Applicability to Stack
- These basics apply to all programming languages and platforms.
- You can use APIs in web, mobile, desktop, and IoT apps.
- Some APIs are public (anyone can use), others are private (require authentication).

## Example Use
**Scenario:** You want to show the current weather in your app.
1. Find a weather API (e.g., weatherapi.com).
2. Sign up and get an API key.
3. Read the API documentation to find the right endpoint.
4. Write code to send a request and display the result.

**Sample Output:**
```
The weather in London is 15°C and Partly cloudy.
```

**Another Example: Get a Random Joke**
- Use the Official Joke API endpoint: `https://official-joke-api.appspot.com/random_joke`
- You'll get a response like:
```json
{
  "id": 123,
  "type": "general",
  "setup": "Why did the chicken cross the road?",
  "punchline": "To get to the other side!"
}
```

## Setup
**No special setup required!**
- You can use any computer with internet access.
- For code examples, install Node.js (for JavaScript) or Python.
- For APIs that require a key, sign up on the provider's website and store your key in a `.env` file (never share your key publicly).

**Install Node.js:**
- [Download Node.js](https://nodejs.org/)

**Install Python:**
- [Download Python](https://www.python.org/downloads/)

**Install required packages:**
```sh
# For JavaScript example
npm install node-fetch

# For Python example
pip install requests
```

## Commands
- `node fetch-weather.js` — Run the weather example in Node.js
- `python fetch-joke.py` — Run the joke example in Python
- `curl https://api.coindesk.com/v1/bpi/currentprice.json` — Get Bitcoin price from the command line

## More
- Many APIs have free and paid tiers—always check the documentation.
- If you get an error, check your API key, endpoint URL, and internet connection.
- Explore more public APIs at [public-apis](https://github.com/public-apis/public-apis).
- Try using [Postman](https://www.postman.com/) to experiment with APIs without writing code.
- Learn about rate limits (how many requests you can make per minute/hour).
- Always read the API documentation for usage rules and examples.
- As you get comfortable, try building your own simple API using Node.js or Python Flask!





## Example: Using an API in a Two-Server Setup (Frontend + Backend)

Let's walk through a real-world example where a beginner-friendly frontend app (React with Vite) communicates with a backend server (Node.js + Express) to fetch weather data from a third-party API. This is a common pattern in modern web development, and we'll use lots of comments and simple explanations for every step.

### Example File Flow (with Arrows)
```
my-weather-app/
  frontend/
    src/
      App.tsx         # [User enters city, clicks button]
        ↓
      api.ts          # [Sends request to backend]
        ↓
  backend/
    server.js         # [Receives request, fetches weather from external API]
        ↓
    .env              # [Holds API key, used by server.js]
  (external)
    weatherapi.com    # [Third-party API]
```
*Arrows (↓) show the flow: user action → frontend API helper → backend server → external API → back to frontend*

### File Tree
```
my-weather-app/
  backend/
    package.json
    .env                  # Store your API key securely (never commit this to git!)
    server.js             # Express server code (in bigger projects, you might split this into routes/controllers)
  frontend/
    package.json
    vite.config.ts
    src/
      App.tsx            # Main React component (handles the UI)
      api.ts             # Helper for calling backend (makes API requests)
      types.ts           # (Optional) TypeScript types for weather data (helps with autocomplete and catching mistakes)
```





### Backend: Express Server (Node.js)
**File: backend/server.js**
```js
// --- 1. Import required packages and set up the app ---
require('dotenv').config(); // Loads environment variables from .env (like your API key)
const express = require('express'); // Express makes it easy to build web servers
const fetch = require('node-fetch'); // Lets us make HTTP requests to other APIs
const cors = require('cors'); // Allows our frontend to talk to our backend (important for local development)
const app = express();
const PORT = 4000; // Our backend will run on port 4000

app.use(cors()); // Enable CORS for all routes (so frontend can call backend)

// --- 2. Define an API route for weather data ---
// In bigger projects, this could be moved to routes/weather.js
app.get('/api/weather', async (req, res) => {
  // --- 3. Controller logic (could be in controllers/weatherController.js) ---
  const city = req.query.city || 'London'; // Get city from query string, default to London
  const apiKey = process.env.WEATHER_API_KEY; // Get your API key from .env file
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`; // Build the URL for the weather API
  try {
    // --- 4. Service logic (could be in services/weatherService.js) ---
    const response = await fetch(url); // Call the weather API
    const data = await response.json(); // Parse the JSON response
    // --- 5. Send back only the data we need (could use a type or DTO in TypeScript) ---
    res.json({
      city: data.location.name,
      temp: data.current.temp_c,
      condition: data.current.condition.text
    });
  } catch (err) {
    // If something goes wrong, send an error
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
});

// --- 6. Start the server ---
app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
```

**File: backend/.env**
```
WEATHER_API_KEY=your_actual_api_key_here
```
*This file keeps your API key secret. Never share it or commit it to git!*





### Frontend: React App (Vite)
**File: frontend/src/types.ts**
```ts
// This file defines the shape of the weather data we expect from the backend
// TypeScript helps catch mistakes and gives us autocomplete in our editor
export interface WeatherData {
  city: string;      // Name of the city
  temp: number;      // Temperature in Celsius
  condition: string; // Weather condition (e.g., "Sunny")
}
```

**File: frontend/src/api.ts**
```ts
// This file contains a helper function to call our backend API
// We import the WeatherData type for type safety
import type { WeatherData } from './types';

// This function fetches weather data for a given city
export async function fetchWeather(city: string): Promise<WeatherData> {
  // Call the backend API route (make sure the backend is running!)
  const response = await fetch(`http://localhost:4000/api/weather?city=${encodeURIComponent(city)}`);
  if (!response.ok) throw new Error('Failed to fetch weather');
  // The response is expected to match the WeatherData type
  return response.json();
}
```

**File: frontend/src/App.tsx**
```tsx
// This is the main React component for our app
// It lets the user enter a city and shows the weather info
import React, { useState } from 'react';
import { fetchWeather } from './api'; // Our API helper
import type { WeatherData } from './types'; // Type for weather data

function App() {
  // State for the city input
  const [city, setCity] = useState('London');
  // State for the weather data (null at first)
  const [weather, setWeather] = useState<WeatherData | null>(null);
  // State for any error messages
  const [error, setError] = useState('');

  // This function is called when the user clicks the button
  const getWeather = async () => {
    setError(''); // Clear any previous error
    try {
      const data = await fetchWeather(city); // Call our API helper
      setWeather(data); // Save the weather data in state
    } catch (err) {
      setError('Could not fetch weather'); // Show an error if something goes wrong
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Weather App</h1>
      {/* Input for the city name */}
      <input
        className="border p-2 mr-2"
        value={city}
        onChange={e => setCity(e.target.value)}
        placeholder="Enter city"
      />
      {/* Button to fetch weather */}
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={getWeather}>
        Get Weather
      </button>
      {/* Show the weather info if we have it */}
      {weather && (
        <div className="mt-4">
          <p>City: {weather.city}</p>
          <p>Temperature: {weather.temp}°C</p>
          <p>Condition: {weather.condition}</p>
        </div>
      )}
      {/* Show an error message if there is one */}
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
}

export default App;
```

### How It Works
- The **frontend** (React) sends a request to the **backend** (Express) at `/api/weather` with the city name.
- The **backend** receives the request, calls the third-party weather API using the API key (kept secret in `.env`), and returns the weather data to the frontend.
- The **frontend** displays the weather info to the user.
- This setup keeps your API key safe (never expose it in frontend code!) and allows you to add authentication, logging, or other logic in your backend.

## Framework Differences and Notes for New Developers

- **Monorepo (e.g., Turborepo, Nx):**
  - Both frontend and backend live in the same repository, often under separate folders (`apps/frontend`, `apps/backend`).
  - You can share code (like types) between them in a `packages/` folder.
  - Use tools like [concurrently](https://www.npmjs.com/package/concurrently) or [npm workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces) to run both servers at once.

- **Vite (React, Vue, etc.):**
  - Vite is a frontend build tool. It does not provide a backend by default.
  - You run the backend (Express) separately, usually on a different port (e.g., 4000 for backend, 5173 for frontend).
  - Use a proxy in `vite.config.ts` to forward API requests during development:
    ```ts
    // vite.config.ts
    export default {
      server: {
        proxy: {
          '/api': 'http://localhost:4000',
        },
      },
    };
    ```

- **Nuxt (Vue):**
  - Nuxt 3 can run both frontend and backend (API routes) in a single server using its server engine.
  - You can create API endpoints in the `server/api/` directory, and call them from your frontend code.
  - For external APIs, you can use server routes to keep secrets safe.

- **Next.js (React):**
  - Next.js supports API routes in the `pages/api/` or `app/api/` directory.
  - You can call these API routes from your frontend, and they run on the server (Node.js).
  - For more complex setups, you may still want a separate backend.

- **Separate Servers:**
  - Always keep API keys and secrets on the backend.
  - Use CORS (Cross-Origin Resource Sharing) to allow your frontend to talk to your backend.
  - In production, you may deploy both servers together (e.g., on Render, Vercel, or Heroku) or as separate services.

**Tip:** For local development, use tools like [concurrently](https://www.npmjs.com/package/concurrently) or [npm-run-all](https://www.npmjs.com/package/npm-run-all) to start both servers with a single command.

--- 