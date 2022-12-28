import express from "express";
import { Login, logOut, Me } from "../controllers/auth.js";

const router = express.Router();

router.get("/me", (req, res) => {
	res.setHeader("Set-Cookie", "name=connect.sid; domain=https://jura-server-production.up.railway.app/);
	res.send(Me);
});
router.post("/login", Login);
router.delete("/logout", logOut);

export default router;
