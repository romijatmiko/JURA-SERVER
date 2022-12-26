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
const port = process.env.PGPORT;

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
		},
	})
);

var corsOptions = {
	origin: [
		"http://localhost:4000",
		"https://1c69-2a09-bac1-34e0-28-00-1f1-1db.ap.ngrok.io/",
	],
	credentials: true, // For legacy browser support
};
app.use(cors(corsOptions));
app.use(express.json());

app.use(orderDetailsRoute);
app.use(UserRoute);
app.use(ProductRoute);
app.use(AuthRoute);

// store.sync();

app.listen(port, () => {
	console.log(`App listening at ${port}`);
});
