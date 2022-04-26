// Imports
import { Router } from "express";

// Import controllers
import UserInstant from "./controllers/User/Instant";

// Consts
const router = Router();

// Routes
router.get("/users/read", UserInstant.read);

export default router;
