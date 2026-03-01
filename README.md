# JeevCare Platform Backend

This is the production-grade backend for the JeevCare civic web platform.

## Features
- **Role-based Access Control:** Citizen, NGO, Authority, Service Provider.
- **Incident auto-routing:** Matches the best NGO based on geospatial proximity and active workload.
- **Duplicate detection:** Algorithms to filter duplicate reports within 2km and 6 hours.
- **Real-time updates:** WebSockets via Socket.io to alert NGOs and Citizens on status changes.
- **Security:** Express-rate-limit, Helmet, CORS, and Bcrypt hashing.

