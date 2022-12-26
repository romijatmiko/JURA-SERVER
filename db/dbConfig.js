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
	"postgres://jura-backend-main-db-02ff78056a242c4f4:abfzvpcQfgCGwKHEf2UptNEUqhhgJZ@user-prod-us-east-2-1.cluster-cfi5vnucvv3w.us-east-2.rds.amazonaws.com:5432/jura-backend-main-db-02ff78056a242c4f4"
);

export default db;
