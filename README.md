
# Medium

This project is a Medium/blogging application built with a modern web stack, emphasizing performance, scalability, and developer productivity. It offers a smooth and responsive user experience, along with secure and efficient serverless backend and database solutions.

## Features
- **User Authentication**: Secure user authentication with JSON Web Tokens (JWT) for session management.
- **Real-time Validation**: Form and input validation using **Zod** for consistent, type-safe data handling across both frontend and backend.
- **Responsive Design**: A mobile-first, responsive frontend powered by **React** for a smooth user experience across devices.
- **Scalable Backend**: Serverless backend powered by **Cloudflare Workers** and the **Hono framework** for optimal performance and scalability.
- **Data Layer**: **Prisma ORM** with **PostgreSQL** for efficient, type-safe database interaction and **connection pooling** to optimize performance under load.

## Tech Stack
### Frontend
- **React** with **TypeScript** for a robust, component-based architecture.
- **react-router-dom** for client-side navigation and routing.
- Hosted on **Vercel** for serverless deployment.

### Backend
- **Cloudflare Workers** for serverless architecture, enabling ultra-fast backend processing.
- **Hono** framework for building performant web APIs with minimal overhead.
- **Zod** for schema validation, providing type safety for API requests.
- **Prisma ORM** for seamless database interaction, leveraging **connection pooling** for optimal performance.
- **PostgreSQL** for the relational database, ensuring data integrity and flexibility.

### Authentication
- **JWT (JSON Web Tokens)** for secure, token-based authentication between the frontend and backend.

## Installation

### Prerequisites
Before setting up the project, ensure you have the following installed:
- **Node.js** and **npm** (Node Package Manager)
- A **PostgreSQL instance** with **connection pooling** enabled
- A **Vercel** account for frontend deployment
- A **Cloudflare** account for backend deployment

### Backend Setup
1. **Clone the repository**:
   ```bash
   git clone https://github.com/Vora-Namra/medium-main.git
   cd medium-main
   ```

2. **Set up environment variables** in `.env` or in your Cloudflare Workers secrets:
   - `DATABASE_URL`: Your PostgreSQL database connection string with connection pooling.
   - `JWT_SECRET`: A secret key used for signing JWT tokens.

3. **Prisma setup**:
   - Generate Prisma client:
     ```bash
     npx prisma generate
     ```
   - Apply database migrations to initialize your schema:
     ```bash
     npx prisma migrate dev --name init
     ```

4. **Deploy Backend to Cloudflare Workers**:
   - Ensure you've linked your Cloudflare account and configured Cloudflare Workers.
   - Deploy using `wrangler` or the Cloudflare dashboard.

### Frontend Setup
1. **Configure the backend URL** in the frontend:
   - In `config.ts`, set the `BACKEND_URL` to your Cloudflare Workers deployment URL.

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Deploy Frontend to Vercel**:
   - Push the frontend to a Git repository and connect it to your Vercel account.
   - Vercel will automatically deploy your application.

### Running Locally
To run the application locally during development, follow these steps:
1. Set up the backend and frontend as described above.
2. Ensure the backend is running (either locally or via Cloudflare Workers).
3. Start the React development server:
   ```bash
   npm start
   ```

Visit `http://localhost:3000` to access the application.

## Contributing
Feel free to open issues or submit pull requests to contribute to the development of this project. Contributions are always welcome!

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
