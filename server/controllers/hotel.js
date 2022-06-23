import axios from 'axios';
export const getHotels = async (req, res, next) => {
	const location = req.query.location;
	let destinationId, hotelList, searchSuggession;
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
				// searchSuggession = response.data;
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
						checkIn: '2020-01-08',
						checkOut: '2020-01-15',
						adults1: '1',
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
export const getHotelPhoto = (request, response) => {
	//get roomimage from api
	const options = {
		method: 'GET',
		url: 'https://hotels4.p.rapidapi.com/properties/get-hotel-photos',
		params: { id: '1178275040' },
		headers: {
			'X-RapidAPI-Key': '43358f40e1msh324fef1919ecce4p132942jsnabebd1a22b1e',
			'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
		}
	};

	axios
		.request(options)
		.then(function(response) {
			console.log(response.data);
		})
		.catch(function(error) {
			console.error(error);
		});
};
export const getHotelDetails = (request, response) => {
	const options = {
		method: 'GET',
		url: 'https://hotels4.p.rapidapi.com/properties/get-details',
		params: {
			id: '424023',
			checkIn: '2020-01-08',
			checkOut: '2020-01-15',
			adults1: '1',
			currency: 'USD',
			locale: 'en_US'
		},
		headers: {
			'X-RapidAPI-Key': '43358f40e1msh324fef1919ecce4p132942jsnabebd1a22b1e',
			'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
		}
	};

	axios
		.request(options)
		.then(function(response) {
			console.log(response.data);
		})
		.catch(function(error) {
			console.error(error);
		});
	response.json(dataDetail.hotelDetail);
};
