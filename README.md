# Medium-like Blogging Platform

This project is a Medium-like blogging application built with a modern web stack that prioritizes performance, scalability, and developer productivity.

## Features
- **User Authentication**: Secure user authentication using JSON Web Tokens (JWT).
- **Real-time Validation**: Form and input validation using Zod for consistent and type-safe data handling.
- **Responsive Design**: Frontend powered by React and styled for a smooth user experience across devices.
- **Scalable Backend**: Built with Cloudflare Workers using the Hono framework for serverless deployment.
- **Data Layer**: Prisma ORM with PostgreSQL for data storage, leveraging **connection pooling** for optimal database performance.

## Tech Stack
- **Frontend**: 
  - React with TypeScript for a component-based architecture.
  - `react-router-dom` for client-side navigation.
  - Hosted on Vercel.

- **Backend**: 
  - Hono framework on Cloudflare Workers for fast, serverless backend processing.
  - Zod for request validation and frontend type inference.
  - Prisma as the ORM for seamless database interaction, with **connection pooling**.
  - PostgreSQL as the database.

- **Authentication**: JWT-based authentication for secure API communication.

## Installation

### Prerequisites
- Node.js and npm
- PostgreSQL instance (with connection pooling enabled)
- Vercel account for frontend deployment
- Cloudflare account for backend deployment


### Backend setup
- DATABASE_URL=your_postgresql_database_url
- JWT_SECRET=your_jwt_secret

### Prisma setup
- npx prisma generate
- npx prisma migrate dev --name init


### Frontend setup
BACKEND_URL=your_backend_cloudflare_url  in config.ts




### Clone the Repository
```bash
git clone https://github.com/Vora-Namra/medium-main.git
cd medium-main



