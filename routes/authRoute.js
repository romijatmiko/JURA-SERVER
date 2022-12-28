import express from "express";
import { Login, logOut, Me } from "../controllers/auth.js";

const router = express.Router();

router.get("/me", (_req, res) => {
	res.setHeader(
		"Set-Cookie",
		"name=www.jurachicken.my.id; domain=https://www.jurachicken.my.id"
	);
	res.send("Cookie set"), Me;
});
router.post("/login", Login);
router.delete("/logout", logOut);

export default router;
