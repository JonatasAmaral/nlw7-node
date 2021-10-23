import { Router } from "express";
import { AuthenticateUserControler } from "./Controllers/AuthenticateUserControler";
import { CreateMessageController } from "./Controllers/CreateMessageController";
import { GetLastMessagesController } from "./Controllers/GetLastMessagesController";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";

const router = Router();

router.post("/authenticate", new AuthenticateUserControler().handle);
router.post(
	"/messages",
	ensureAuthenticated,
	new CreateMessageController().handle
);
console.log("construir");

router.get("/messages/last3", (req, res) => {
	new GetLastMessagesController().handle(req, res, 3);
});

export { router };
