import { CreateUserService } from "../services/CreateUserService";
import { Request, Response } from "express";

export const CreateUserController = () => ({
	async handle(request: Request, response: Response) {
		const { name, email, admin } = request.body;

		const createUserService = CreateUserService();

		const user = await createUserService.execute({ name, email, admin });

		return response.json(user);
	},
});
