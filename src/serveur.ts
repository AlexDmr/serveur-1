import express, { Express, Request, Response } from "express";
import * as path from "path";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT ?? 3000;

// Serve static files from the "public" directory at project root
app.use(express.static(path.join(__dirname, "..", "public")));

app.get("/", (req: Request, res: Response) => {
  res.send(`<html>
    <head><title>Coucou les MEEF</title></head>
    <body>
      <h1>Un cours pour voir HTTP</h1>
      <p>Avec un serveur Express</p>
    </body>
  </html>`);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
