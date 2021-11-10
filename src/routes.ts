import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { authAdmin } from "./middlewares/authAdmin";
import { AuthUserController } from "./controllers/AuthUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { authUser } from "./middlewares/authUser";
import { ListUserSendComplimentsController } from "./controllers/ListUserSendComplimentsController";
import { ListUserReceiveComplimentsController } from "./controllers/ListUserReceiveComplimentsController";
import { ListTagsController } from "./controllers/ListTagsController";
import { ListUsersController } from "./controllers/ListUsersController";

export const router = Router();
const createUserController = CreateUserController();
const createTagController = CreateTagController();
const authUserController = AuthUserController();
const createComplimentController = CreateComplimentController();
const listUserSendComplimentsController = ListUserSendComplimentsController();
const listUserReceiveComplimentsController =
	ListUserReceiveComplimentsController();
const listTagsController = ListTagsController();
const listUsersController = ListUsersController();

router.post("/users", createUserController.handle);
router.post("/tags", authUser, authAdmin, createTagController.handle);
router.post("/auth", authUserController.handle);
router.post("/compliments", authUser, createComplimentController.handle);
router.get("/tags", authUser, listTagsController.handle);
router.get("/users", authUser, listUsersController.handle);
router.get(
	"/users/compliments/send",
	authUser,
	listUserSendComplimentsController.handle
);
router.get(
	"/users/compliments/receive",
	authUser,
	listUserReceiveComplimentsController.handle
);
