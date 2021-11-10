import { Request, Response } from "express";
import { ListUserSendComplimentsService } from "../services/ListUserSendComplimentsService";

export const ListUserSendComplimentsController = () => ({
	async handle(request: Request, response: Response) {
		const { user_id } = request;

		const listUserSendComplimentsService =
			ListUserSendComplimentsService();

		const compliments = await listUserSendComplimentsService.execute(
			user_id
		);

		return response.json(compliments);
	},
});
