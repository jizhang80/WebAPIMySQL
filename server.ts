import express from "express";
import 'path';
import * as dotenv from "dotenv";
import prisma from "./prisma/prisma";
import routes from "./router";


const app = express();
app.set('view engine', 'ejs');
app.use(express.json());
app.use(routes);
const PORT = process.env.PORT || "3001";

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`))