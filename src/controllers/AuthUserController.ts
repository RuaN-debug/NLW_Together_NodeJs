import { AuthUserService } from "../services/AuthUserService";
import { Request, Response } from "express";

export const AuthUserController = () => ({
	async handle(request: Request, response: Response) {
		const { email, password } = request.body;

		const authUserService = AuthUserService();

		const token = await authUserService.execute({ email, password });

		return response.json(token);
	},
});
