import { Request, Response } from "express";
import { ListUserReceiveComplimentsService } from "../services/ListUserReceiveComplimentsService";

export const ListUserReceiveComplimentsController = () => ({
	async handle(request: Request, response: Response) {
		const { user_id } = request;

		const listUserReceiveComplimentsService =
			ListUserReceiveComplimentsService();

		const compliments = await listUserReceiveComplimentsService.execute(
			user_id
		);

		return response.json(compliments);
	},
});
