//include dotenv to loads environment variables from a .env file process.env
import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import userRoutes from './routes/users.js';
import hotelsRoute from './routes/hotels.js';
import planRoutes from './routes/plans.js';
const app = express();
import bodyParser from 'body-parser';
//HTTP request logger
app.use(morgan('tiny'));
// For info routes
app.use(cors());
app.use(cookieParser());
app.use(
	bodyParser.json({
		limit: '50mb'
	})
);

app.use(
	bodyParser.urlencoded({
		limit: '50mb',
		parameterLimit: 100000,
		extended: true
	})
);
app.use(express.json());
//api route
app.use('/api/hotels', hotelsRoute);
app.use('/api/user', userRoutes);
app.use('/api/plan', planRoutes);
// Handle unsupported routes erro
app.use((err, req, res, next) => {
	const errorStatus = err.status || 500;
	const errorMessage = err.message || 'something went wrong';
	return res.status(500).json({
		success: false,
		status: errorStatus,
		message: errorMessage,
		stack: err.stack
	});
});
let port = process.env.PORT || 5000;
// Connect to database
// Get username and password from .env file
const dbPass = process.env.DBPASSWORD;
const dbConnect = `mongodb+srv://admin:${dbPass}@cluster0.plkkx.mongodb.net/?retryWrites=true&w=majority`;
mongoose
	.connect(dbConnect, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true
	})
	.then(() => {
		console.log('mongoDB connected');
	})
	.catch((err) => {
		throw err;
	});
app.listen(port, (res) => {
	console.log('server running on port 5000');
});
