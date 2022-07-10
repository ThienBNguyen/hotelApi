import axios from 'axios';
//get curret date in ios format yyyy-mm-dd
const formatDate = (date) => {
	var d = new Date(date),
		month = '' + (d.getMonth() + 1),
		day = '' + d.getDate(),
		year = d.getFullYear();

	if (month.length < 2) month = '0' + month;
	if (day.length < 2) day = '0' + day;

	return [ year, month, day ].join('-');
};
export const getHotels = async (req, res, next) => {
	const location = req.query.location;
	const reqData = req.query;
	let destinationId, hotelList;
	const options = {
		method: 'GET',
		url: 'https://hotels4.p.rapidapi.com/locations/v2/search',
		params: { query: location, locale: 'en_US', currency: 'USD' },
		headers: {
			'X-RapidAPI-Key': '43358f40e1msh324fef1919ecce4p132942jsnabebd1a22b1e',
			'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
		}
	};
	try {
		await axios
			.request(options)
			.then(function(response) {
				destinationId = response.data.suggestions[0].entities[0].destinationId;
			})
			.then(() => {
				const options = {
					method: 'GET',
					url: 'https://hotels4.p.rapidapi.com/properties/list',
					params: {
						destinationId: destinationId,
						pageNumber: '1',
						pageSize: '25',
						checkIn: reqData.checkIn || formatDate(new Date()),
						checkOut: reqData.checkOut || formatDate(new Date()),
						adults1: reqData.adults1 || '1',
						sortOrder: 'PRICE',
						locale: 'en_US',
						currency: 'USD'
					},
					headers: {
						'X-RapidAPI-Key': '43358f40e1msh324fef1919ecce4p132942jsnabebd1a22b1e',
						'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
					}
				};
				axios
					.request(options)
					.then(function(response) {
						hotelList = response.data;
						res.status(200).json(hotelList);
					})
					.catch(function(error) {
						console.error(error);
					});
			})
			.catch(function(error) {
				console.log(error);
			});
	} catch (error) {
		next(error);
	}
};
export const getHotelPhoto = (req, res) => {
	//get roomimage from api
	const hotelId = req.query.id;
	const options = {
		method: 'GET',
		url: 'https://hotels4.p.rapidapi.com/properties/get-hotel-photos',
		params: { id: hotelId || '425948736' },
		headers: {
			'X-RapidAPI-Key': '43358f40e1msh324fef1919ecce4p132942jsnabebd1a22b1e',
			'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
		}
	};

	axios
		.request(options)
		.then(function(response) {
			res.status(200).json(response.data);
		})
		.catch(function(error) {
			console.error(error);
		});
};
export const getHotelDetails = async (req, res) => {
	const hotelReq = req.query;
	// console.log(hotelReq);
	let datas = [];
	let photoData = [];
	let hotelData = [];
	const optionsPhotos = {
		method: 'GET',
		url: 'https://hotels4.p.rapidapi.com/properties/get-hotel-photos',
		params: { id: hotelReq.id || '425948736' },
		headers: {
			'X-RapidAPI-Key': '43358f40e1msh324fef1919ecce4p132942jsnabebd1a22b1e',
			'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
		}
	};
	const options = {
		method: 'GET',
		url: 'https://hotels4.p.rapidapi.com/properties/get-details',
		params: {
			id: hotelReq.id || '424023',
			checkIn: hotelReq.checkIn || formatDate(new Date()),
			checkOut: hotelReq.checkOut || formatDate(new Date()),
			adults1: hotelReq.adults1 || '1',
			currency: 'USD',
			locale: 'en_US'
		},
		headers: {
			'X-RapidAPI-Key': '43358f40e1msh324fef1919ecce4p132942jsnabebd1a22b1e',
			'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
		}
	};
	await axios
		.request(optionsPhotos)
		.then(function(response) {
			// res.status(200).json(response.data);
			photoData = response.data;
		})
		.catch(function(error) {
			console.error(error);
		});
	await axios
		.request(options)
		.then(function(response) {
			// res.status(200).json(response.data);
			hotelData = response.data;
		})
		.catch(function(error) {
			console.error(error);
		});
	datas = { ...photoData, ...hotelData };
	res.status(200).json(datas);
};
