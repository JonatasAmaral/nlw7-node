import { Request, Response } from "express";
import { GetLastMessagesService } from "../Services/GetLastMessagesService";

class GetLastMessagesController {
	async handle(request: Request, response: Response, amount = 10) {
		const service = new GetLastMessagesService();
		const result = await service.execute(amount);

		return response.json(result);
	}
}

export { GetLastMessagesController };
