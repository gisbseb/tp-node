import express from "express";
import dotenv from "dotenv";
import { join } from "node:path";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import session from "express-session";
dotenv.config();
const { PORT, HOST, JWT_SECRET } = process.env;

const app = express();
const cwd = process.cwd();

app.set("view engine", "pug");
const staticPath = join(cwd, "public");
app.use(express.static(staticPath));
app.use(express.urlencoded({ extended: false }));

app.use(
  session({
    secret: JWT_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.get("*", (req, res, next) => {
  console.log("GET " + req.url);
  next();
});

app.post("*", (req, res, next) => {
  console.log("POST " + req.url);
  next();
});

app.put("*", (req, res, next) => {
  console.log("PUT " + req.url);
  next();
});

app.delete("*", (req, res, next) => {
  console.log("DELETE " + req.url);
  next();
});


//Importe toutes les routes du dossier routes
const routePath = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "routes"
);

fs.readdirSync(routePath).forEach((file) => {
  import(`./routes/${file}`).then((module) => {
    module.default(app);
  });
});

app.listen(PORT, () => {
  console.log(`Listening on http://${HOST}:${PORT}`);
});
