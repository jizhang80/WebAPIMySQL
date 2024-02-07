import express from "express";
import path from 'path';
import * as dotenv from "dotenv";
import prisma from "./prisma/prisma";
import routes from "./router";

const PORT = process.env.PORT || "3001";
const app = express();
app.set('view engine', 'ejs');
app.use(express.json());
app.use(routes);
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`))