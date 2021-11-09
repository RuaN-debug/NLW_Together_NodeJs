import { CreateTagService } from "../services/CreateTagService";
import { Request, Response } from "express";

export const CreateTagController = () => ({
	async handle(request: Request, response: Response) {
		const { name } = request.body;

		const createTagService = CreateTagService();

		const tag = await createTagService.execute(name);

		return response.json(tag);
	},
});
