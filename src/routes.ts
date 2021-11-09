import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { authAdmin } from "./middlewares/authAdmin";
import { AuthUserController } from "./controllers/AuthUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";

export const router = Router();
const createUserController = CreateUserController();
const createTagController = CreateTagController();
const authUserController = AuthUserController();
const createComplimentController = CreateComplimentController();

router.post("/users", createUserController.handle);
router.post("/tags", authAdmin, createTagController.handle);
router.post("/auth", authUserController.handle);
router.post("/compliments", createComplimentController.handle);
