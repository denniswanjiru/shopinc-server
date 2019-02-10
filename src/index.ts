import "reflect-metadata";
import { createServer } from "http";
import { createConnection } from "typeorm";

const port = process.env.PORT || 8000;

createConnection().then(() => {
  createServer().listen(port, () => console.log(`Server running at http://127.0.0.1/${port}`))
}).catch(error => console.log(error));
