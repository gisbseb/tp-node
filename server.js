import express from "express";
import dotenv from "dotenv";
import { join } from "node:path";
import router from "./router/routes.js";

dotenv.config();
const { PORT, HOST } = process.env;

const app = express();
const cwd = process.cwd();

app.set("view engine", "pug");
const staticPath = join(cwd, "public");
app.use(express.static(staticPath));
app.use(router);

app.listen(PORT, () => {
  console.log(`Listening on http://${HOST}:${PORT}`);
});
