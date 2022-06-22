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
const app = express();
//HTTP request logger
app.use(morgan('tiny'));
// For info routes
app.use(cors());
app.use(cookieParser());
app.use(express.json());
// set CORS headers avoid CORS error cross platform
app.use(cors());
// import HttpError model
// import HttpError from './models/http-error';

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');

	next();
});
//api route
app.use('/api/hotels', hotelsRoute);
app.use('/api/user', userRoutes);
// Handle unsupported routes erro
app.use((req, res, next) => {
	const error = new HttpError('Could not find this route', 404);
	throw error;
});
// Listen to our 5000 port
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
		console.log(err);
	});
app.listen(port, function(res) {
	console.log('server running on port 5000');
});
