import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";
import { getCustomRepository } from "typeorm";

export const ListUserReceiveComplimentsService = () => ({
	async execute(user_id: string) {
		const complimentsRepository = getCustomRepository(
			ComplimentsRepositories
		);
		const compliments = await complimentsRepository.find({
			where: {
				user_receiver: user_id,
			},
			relations: ["sender", "receiver", "tag"],
		});
		return compliments;
	},
});
