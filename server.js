import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';
import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.SERVER_PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


app.get("/", (req, res) => {
    return res.json({
        message: "Welcome."
    })
})

app.get("*", (req, res, next) => {
    console.log('GET ' + req.url)
    next()
})

app.post("*", (req, res, next) => {
    console.log('POST ' + req.url)
    next()
})

app.put("*", (req, res, next) => {
    console.log('PUT ' + req.url)
    next()
})

app.delete("*", (req, res, next) => {
    console.log('DELETE ' + req.url)
    next()
})

//Importe toutes les routes du dossier routes
const routePath = path.join(path.dirname(fileURLToPath(import.meta.url)), 'routes');

fs.readdirSync(routePath).forEach(file => {
    import(`./routes/${file}`).then(module => {
        module.default(app);
    });
});