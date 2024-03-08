import express from "express";
import expressLayouts from "express-ejs-layouts";
import path from 'path';
import * as dotenv from "dotenv";
import prisma from "./prisma/prisma";
import routes from "./router";

const PORT = process.env.PORT || "3001";
const app = express();

//set Templating Engine
app.use(expressLayouts);
app.set('layout', './layouts/base');
app.set('view engine', 'ejs');

app.use(express.json());
app.use(routes);
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`))