import { CreateUserController } from "./controllers/CreateUserController";
import { Router } from "express";

export const router = Router();
const createUserController = new CreateUserController();

router.post("/users", createUserController.handle);