import { CreateComplimentService } from "../services/CreateComplimentService";
import { Request, Response } from "express";

export const CreateComplimentController = () => ({
	async handle(request: Request, response: Response) {
		const { tag_id, user_sender, user_receiver, message } = request.body;

		const createComplimentService = CreateComplimentService();

		const compliment = await createComplimentService.execute({
			tag_id,
			user_sender,
			user_receiver,
			message,
		});

		return response.json(compliment);
	},
});
