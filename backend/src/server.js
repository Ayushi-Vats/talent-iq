import express from "express";
import { ENV } from "./lib/env.js";

dotenv.config();

const app = express();

console.log(ENV.PORT);

app.get("/health", (req, res) => {
  res.status(200).json({ message: "Api is up and running" });
});

app.listen(ENV.PORT, () => {
  console.log("Server running on port:",ENV.PORT);
});
