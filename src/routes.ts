import { Router } from "express";
import { AuthenticateUserControler } from "./Controlers/AuthenticateUserControler";

const router = Router();

router.post("/authenticate", new AuthenticateUserControler().handle);

export { router };
