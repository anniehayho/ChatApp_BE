import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import coookieParser from 'cookie-parser';
import cookieParser from 'cookie-parser';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
const databaseURL = process.env.DATABASE_URL;

app.use(cors({
	origin: [process.env.ORIGIN],
	methods:['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
	credentials: true,
}));

app.use(cookieParser());
app.use(express.json());

const server = app.listen(port, () => {
	console.log(`Server is running on port http://localhost:${port}`);
});

mongoose
	.connect(databaseURL)
	.then(() => console.log('Database connected'))
	.catch((err) => console.log(err.message));