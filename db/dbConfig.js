import { Sequelize } from "sequelize";

const db = new Sequelize("railway", "postgres", "S44fCmIyba5WJ7yCuv6m", {
	host: "containers-us-west-66.railway.app",
	dialect: "postgres",
});

export default db;
