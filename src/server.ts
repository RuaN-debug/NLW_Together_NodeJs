import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import { router } from "./routes";
import "reflect-metadata"; // ORM
import "./database"; // Imports the index file
import cors from "cors"; // Enable other clients requests

const app = express();

// Middlewares
app.use(express.json());
app.use(router);
app.use(cors());
app.use(
	(err: Error, request: Request, response: Response, next: NextFunction) => {
		if (err instanceof Error) {
			return response.status(400).json({ error: err.message, });
		}
		return response
			.status(500)
			.json({ status: "error", message: "Internal Server Error", });
	}
);

app.listen(3000, () => {
	console.log("Server is running at https://localhost:3000");
});
