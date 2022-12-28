import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import db from "./db/dbConfig.js";
import SequelizeStore from "connect-session-sequelize";
import UserRoute from "./routes/userRoute.js";
import ProductRoute from "./routes/menuRoute.js";
import AuthRoute from "./routes/authRoute.js";
import orderDetailsRoute from "./routes/orderDetailsRoute.js";

dotenv.config();

const app = express();

const sessionStore = SequelizeStore(session.Store);

const store = new sessionStore({
	db: db,
});
const port = process.env.PORT;

(async () => {
	await db.sync();
})();

app.use(
	session({
		secret: process.env.TOKEN_IN,
		resave: false,
		saveUninitialized: true,
		store: store,
		cookie: {
			secure: "auto",
			httpOnly: true,
			domain: "https://jura-server-production.up.railway.app",
		},
	})
);

app.use(
	cors({
		credentials: true,
		origin: "https://www.jurachicken.my.id",
	})
);
app.use(express.json());

app.use(orderDetailsRoute);
app.use(UserRoute);
app.use(ProductRoute);
app.use(AuthRoute);

// store.sync();

app.listen(port, () => {
	console.log(`App listening at ${port}`);
});
