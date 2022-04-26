// Imports
import { Router } from "express";

// Import controllers
import UserInstant from "./controllers/User/Instant";

// Consts
const router = Router();

// Rotas de usuários
router.post("/user/register", UserInstant.create);
router.get("/user/read", UserInstant.read);
router.put("/user/update", UserInstant.update);
router.delete("user/delete", UserInstant.delete);

export default router;
