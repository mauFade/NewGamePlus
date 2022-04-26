// Imports
import { Router } from "express";

// Import controllers
import UserInstant from "./controllers/User/Instant";

// Consts
const router = Router();

// Rotas de usuários
router.post("/user/register", UserInstant.create);
router.get("/user/read", UserInstant.read);

export default router;
