import { UsersRepositories } from "../repositories/UsersRepositories";
import { getCustomRepository } from "typeorm";
import { classToPlain } from "class-transformer";

export const ListUsersService = () => ({
	async execute() {
		const usersRepository = getCustomRepository(UsersRepositories);

		const users = await usersRepository.find();

		return classToPlain(users);
	},
});
