import User from "../models/userModels.js";

export const verifyUser = async (req, res, next) => {
	if (!req.userId) {
		return res.status(401).json({ msg: "Mohon login ke akun Anda!" });
	}
	const user = await User.findOne({
		where: {
			uuid: req.userId,
		},
	});
	if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });
	req.userId = user.id;
	req.role = user.role;
	next();
};

export const adminOnly = async (req, res, next) => {
	const user = await User.findOne({
		where: {
			uuid: req.userId,
		},
	});
	if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });
	if (user.role !== "admin")
		return res.status(403).json({ msg: "Akses terlarang" });
	next();
};
