import { ListUsersService } from "../services/ListUsersService";
import { Request, Response } from "express";

export const ListUsersController = () => ({
	async handle(request: Request, response: Response) {
		const listUsersService = ListUsersService();

		const users = await listUsersService.execute();

		return response.json(users);
	},
});
