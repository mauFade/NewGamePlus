// Imports
import { Router } from "express";

const router = Router();

router.post("/user", (req, res) => {
  const { name, email }: { name: string; email: string } = Object(req["body"]);

  console.log(name, email);
  return res.json({ name, email });
});

export default router;
