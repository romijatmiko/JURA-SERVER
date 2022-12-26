import { Sequelize } from "sequelize";

// const db = new Sequelize(
// 	process.env.PGDATABASE,
// 	process.env.PGUSER,
// 	process.env.PGPASSWORD,
// 	{
// 		host: process.env.PGHOST,
// 		port: process.env.PGPORT,
// 		dialect: "postgres",
// 	}
// );
const db = new Sequelize(
	"postgresql://postgres:S44fCmIyba5WJ7yCuv6m@containers-us-west-66.railway.app:5727/railway"
);

export default db;
