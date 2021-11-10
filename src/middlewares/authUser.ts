import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
	sub: string;
}

export function authUser(
	request: Request,
	response: Response,
	next: NextFunction
) {
	const authToken = request.headers.authorization;

	if (!authToken) return response.status(401).end();

	const token = authToken.split(" ")[1];

	try {
		const { sub } = verify(
			token,
			"32715aa49419531d4901077dfb0b73a5"
		) as IPayload;

		request.user_id = sub;

		return next();
	} catch (err) {
		return response.status(401).end();
	}
}
