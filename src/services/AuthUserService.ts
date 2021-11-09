import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IAuthRequest {
	email: string;
	password: string;
}

export const AuthUserService = () => ({
	async execute({ email, password }: IAuthRequest) {
		const usersRepository = getCustomRepository(UsersRepositories);

		const user = await usersRepository.findOne({ email });

		if (!user) throw new Error("Email or Password incorrect");

		const passwordMatch = await compare(password, user.password);

		if (!passwordMatch) throw new Error("Email or Password incorrect");

		const token = sign(
			{ email: user.email },
			"32715aa49419531d4901077dfb0b73a5",
			{ subject: user.id, expiresIn: "1h" }
		);
		return token;
	},
});
