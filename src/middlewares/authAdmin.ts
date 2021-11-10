import { Request, Response, NextFunction } from "express";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { getCustomRepository } from "typeorm";

export async function authAdmin(
	request: Request,
	response: Response,
	next: NextFunction
) {
	const { user_id } = request;

	const userRepository = getCustomRepository(UsersRepositories);

	const { admin } = await userRepository.findOne(user_id);

	if (admin) return next();

	return response.status(401).json({ error: "Unauthorized" });
}
