import { ListTagsService } from "../services/ListTagsService";
import { Request, Response } from "express";

export const ListTagsController = () => ({
	async handle(request: Request, response: Response) {
		const listTagsService = ListTagsService();

		const tags = await listTagsService.execute();

		return response.json(tags);
	},
});
