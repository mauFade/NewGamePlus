// Imports
import { Router } from "express";

// Import controllers
import SessionInstant from "./controllers/Session/Instant";
import UserInstant from "./controllers/User/Instant";

// Declara router
const router = Router();

// Rotas de login
router.post("/login", SessionInstant.create);
// Rotas de usuários
router.post("/user/register", UserInstant.create);
router.get("/user/read", UserInstant.read);
router.put("/user/update", UserInstant.update);
router.delete("/user/delete", UserInstant.delete);

export default router;
