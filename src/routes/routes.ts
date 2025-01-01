import { Router } from "express";

// Import route modules
import { healthCheckRouter } from "@/api/healthCheck/healthCheckRouter";

const routes = Router();

// Routes
routes.use("/health-check", healthCheckRouter);

export default routes;
