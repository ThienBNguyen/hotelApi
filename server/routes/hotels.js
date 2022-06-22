import express from 'express';
import { getHotels, getHotelPhoto, getHotelDetails } from '../controllers/hotel.js';
const router = express.Router();

router.get('/', getHotels);
router.get('/hotelphoto', getHotelPhoto);
router.get('/hotelDetails', getHotelDetails);
export default router;
