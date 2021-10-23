import prismaClient from "../prisma";

class GetLastMessagesService {
	async execute(amount = 10) {
		const messages = await prismaClient.message.findMany({
			take: amount,
			orderBy: {
				created_at: "asc",
			},
			include: {
				user: true,
			},
		});

		// SELECT * FROM messages LIMIT 3 ORDER BY created_at DESC

		return messages;
	}
}

export { GetLastMessagesService };
