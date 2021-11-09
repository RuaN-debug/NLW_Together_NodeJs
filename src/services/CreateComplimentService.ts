import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IComplimentRequest {
	tag_id: string;
	user_sender: string;
	user_receiver: string;
	message: string;
}

export const CreateComplimentService = () => ({
	async execute({
		tag_id,
		user_sender,
		user_receiver,
		message,
	}: IComplimentRequest) {
		const complimentsRepository = getCustomRepository(
			ComplimentsRepositories
		);
		const usersRepository = getCustomRepository(UsersRepositories);

		if (user_sender === user_receiver)
			throw new Error("User can't send a compliment to himself");

		const userReceiverExists = await usersRepository.findOne(user_receiver);

		if (!userReceiverExists) throw new Error("User receiver does not exist");

		const compliment = complimentsRepository.create({
			tag_id,
			user_sender,
			user_receiver,
			message,
		});

		await complimentsRepository.save(compliment);

		return compliment;
	},
});
