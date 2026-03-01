# JeevCare Platform Backend

This is the production-grade backend for the JeevCare civic web platform.

## Features
- **Role-based Access Control:** Citizen, NGO, Authority, Service Provider.
- **Incident auto-routing:** Matches the best NGO based on geospatial proximity and active workload.
- **Duplicate detection:** Algorithms to filter duplicate reports within 2km and 6 hours.
- **Real-time updates:** WebSockets via Socket.io to alert NGOs and Citizens on status changes.
- **Security:** Express-rate-limit, Helmet, CORS, and Bcrypt hashing.

## Deployment Instructions

### Prerequisites
- Node.js v16+
- MongoDB 6.0+ (Atlas or local) with `2dsphere` indexes.

### Steps
1. Navigate to `/server` directory.
2. Run `npm install` to install dependencies.
3. Start your MongoDB instance and ensure the `MONGO_URI` in your `.env` is correct.
4. Run `npm run start` (or use PM2: `pm2 start server.js --name "jeevcare-api"`) for production.
5. In development mode, you can use `npm run dev` to start with `nodemon`.

### Nginx Reverse Proxy Setup (Example)
```nginx
server {
    listen 80;
    server_name api.jeevcare.com;

    location / {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
    }
}
```

## Testing Strategy
1. **Automated Unit Tests**: Use Jest to test the logic within `services/incidentService.js` (Trust Score, Duplicate Detection logic).
2. **Automated Integration Tests**: Use Supertest with Jest to mock Express API endpoints, testing HTTP responses and JWT auth blocks. Use `mongodb-memory-server` for geospatial DB mocking.
3. **Manual WebSocket Verification**: Use Postman or a simple HTML/js client connecting to `ws://localhost:5000` to emit `join_ngo_room` and listen for `case_assigned` events when posting new incidents.
<!-- commit 2 -->
<!-- commit 3 -->
<!-- commit 4 -->
<!-- commit 5 -->
<!-- commit 6 -->
<!-- commit 7 -->
<!-- commit 8 -->
<!-- commit 9 -->
<!-- commit 10 -->
<!-- commit 11 -->
<!-- commit 12 -->
<!-- commit 13 -->
<!-- commit 14 -->
<!-- commit 15 -->
<!-- commit 16 -->
<!-- commit 17 -->
<!-- commit 18 -->
<!-- commit 19 -->
<!-- commit 20 -->
<!-- commit 21 -->
<!-- commit 22 -->
<!-- commit 23 -->
<!-- commit 24 -->
<!-- commit 25 -->
<!-- commit 26 -->
<!-- commit 27 -->
<!-- commit 28 -->
<!-- commit 29 -->
<!-- commit 30 -->
<!-- commit 31 -->
<!-- commit 32 -->
