import { router } from "./routes";
import express from "express";
import "reflect-metadata"; // ORM
import "./database"; // Imports the index file

const app = express();

app.use(express.json());
app.use(router);

app.listen(3000, () => {
	console.log("Server is running!");
});