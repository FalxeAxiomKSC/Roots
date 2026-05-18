# API Documentation

## Overview

The Sustainable Systems API provides RESTful endpoints for managing sustainability data, user authentication, and system integration. The backend is built with Express.js and TypeScript, providing type safety and consistent error handling.

## Base URL

```
http://localhost:3000/api
```

## Authentication

Most API endpoints require authentication using JWT (JSON Web Tokens). Include the token in the Authorization header:

```
Authorization: Bearer <your-jwt-token>
```

## Endpoints

### Health Check

**GET /health**

Check if the API is running and healthy.

**Response:**
```json
{
  "status": "healthy",
  "timestamp": "2026-05-18T09:43:00.000Z",
  "version": "1.0.0"
}
```

### Authentication

**POST /auth/register**

Register a new user account.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "securePassword123",
  "name": "John Doe"
}
```

**Response:**
```json
{
  "message": "User registered successfully",
  "user": {
    "id": "user-id",
    "email": "user@example.com",
    "name": "John Doe"
  }
}
```

**POST /auth/login**

Authenticate a user and return a JWT token.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "securePassword123"
}
```

**Response:**
```json
{
  "token": "jwt-token-here",
  "user": {
    "id": "user-id",
    "email": "user@example.com",
    "name": "John Doe"
  }
}
```

### Sustainability Data

**GET /sustainability-metrics**

Get all available sustainability metrics.

**Response:**
```json
{
  "metrics": [
    {
      "id": "carbon-footprint",
      "name": "Carbon Footprint",
      "unit": "kg CO2",
      "description": "Measure of carbon emissions"
    }
  ]
}
```

**POST /sustainability-data**

Submit sustainability data for a specific metric.

**Request Body:**
```json
{
  "metricId": "carbon-footprint",
  "value": 150.5,
  "timestamp": "2026-05-18T09:43:00.000Z",
  "metadata": {
    "source": "manual-entry"
  }
}
```

**Response:**
```json
{
  "message": "Data submitted successfully",
  "data": {
    "id": "data-id",
    "metricId": "carbon-footprint",
    "value": 150.5,
    "timestamp": "2026-05-18T09:43:00.000Z"
  }
}
```

**GET /sustainability-data/:metricId**

Get historical data for a specific metric.

**Response:**
```json
{
  "metricId": "carbon-footprint",
  "data": [
    {
      "id": "data-id",
      "value": 150.5,
      "timestamp": "2026-05-18T09:43:00.000Z"
    }
  ]
}
```

### User Profile

**GET /users/profile**

Get the current user's profile.

**Response:**
```json
{
  "id": "user-id",
  "email": "user@example.com",
  "name": "John Doe",
  "preferences": {
    "theme": "light",
    "notifications": true
  }
}
```

**PUT /users/profile**

Update the current user's profile.

**Request Body:**
```json
{
  "name": "John Updated",
  "preferences": {
    "theme": "dark",
    "notifications": false
  }
}
```

**Response:**
```json
{
  "message": "Profile updated successfully",
  "user": {
    "id": "user-id",
    "email": "user@example.com",
    "name": "John Updated"
  }
}
```

## Error Handling

The API returns standard HTTP status codes and error responses in JSON format.

### Error Response Format

```json
{
  "error": {
    "code": "ERROR_CODE",
    "message": "Human-readable error message",
    "details": "Additional error details if available"
  }
}
```

### Common Error Codes

- `UNAUTHORIZED` (401): Authentication required or invalid token
- `FORBIDDEN` (403): Insufficient permissions
- `NOT_FOUND` (404): Resource not found
- `VALIDATION_ERROR` (422): Request validation failed
- `INTERNAL_ERROR` (500): Server internal error

## Rate Limiting

API endpoints are rate limited to prevent abuse. Current limits:
- Authentication endpoints: 5 requests per minute
- Data endpoints: 100 requests per minute
- Profile endpoints: 30 requests per minute

Rate limit headers are included in responses:
```
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1621620000
```

## Data Models

### User

```typescript
interface User {
  id: string;
  email: string;
  name: string;
  preferences: UserPreferences;
  createdAt: Date;
  updatedAt: Date;
}

interface UserPreferences {
  theme: 'light' | 'dark';
  notifications: boolean;
}
```

### SustainabilityMetric

```typescript
interface SustainabilityMetric {
  id: string;
  name: string;
  unit: string;
  description: string;
  createdAt: Date;
}
```

### SustainabilityData

```typescript
interface SustainabilityData {
  id: string;
  metricId: string;
  value: number;
  timestamp: Date;
  metadata: Record<string, any>;
}
```

## Testing

API endpoints can be tested using the provided test suite:

```bash
# Run all API tests
npm run test:backend

# Run API tests with coverage
npm run test:backend:coverage

# Run tests in watch mode
npm run test:backend:watch
```

## Examples

### Using curl

```bash
# Health check
curl http://localhost:3000/api/health

# Register user
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123","name":"Test User"}'

# Login
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'

# Submit sustainability data
curl -X POST http://localhost:3000/api/sustainability-data \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <your-token>" \
  -d '{"metricId":"carbon-footprint","value":150.5}'
```

### Using JavaScript (Fetch API)

```javascript
// Register user
const response = await fetch('/api/auth/register', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email: 'test@example.com',
    password: 'password123',
    name: 'Test User'
  })
});

const data = await response.json();
console.log(data);
```

## Versioning

This API follows semantic versioning. Major version changes may introduce breaking changes.

## Changelog

### v1.0.0 (Current)
- Initial API release
- Basic authentication endpoints
- Sustainability data management
- User profile management