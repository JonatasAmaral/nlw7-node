import { Router } from "express";
import { AuthenticateUserControler } from "./Controllers/AuthenticateUserControler";
import { CreateMessageController } from "./Controllers/CreateMessageController";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";

const router = Router();

router.post("/authenticate", new AuthenticateUserControler().handle);
router.post(
	"/messages",
	ensureAuthenticated,
	new CreateMessageController().handle
);

export { router };
