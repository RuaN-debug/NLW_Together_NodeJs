import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { authAdmin } from "./middlewares/authAdmin";

export const router = Router();
const createUserController = CreateUserController();
const createTagController = CreateTagController();

router.post("/users", createUserController.handle);
router.post("/tags", authAdmin, createTagController.handle);
