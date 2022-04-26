// Imports
import express from "express";
import cors from "cors";
import router from "./router";

// Consts
const app = express();
const PORT = 3333;

// App Uses
app.use(cors());
app.use(router);
app.use(express.json({ limit: "50000000000mb" }));
app.use(express.urlencoded({ limit: "50000000000mb", extended: true }));

app.listen(PORT, () => {
  console.info(`API server listening on port ${PORT}`);
});
