import axios from 'axios';
export const getHotels = async (request, response, next) => {
	const location = request.query.location;

	let destinationId = '';
	// let convertObj = []
	// for(let i = 0; i < hotelInfo.length; i++){
	//   convertObj = JSON.parse(hotelInfo[i])
	//   console.log(convertObj.location)
	// }
	// console.log(hotelInfo.length)
	// for(let i = 0; i < hotelInfo.length; i++){
	//   convertObj = JSON.parse(hotelInfo[i])
	//   console.log(convertObj.location)
	// }
	// console.log(hotelInfo[0])
	// let obj = JSON.parse(hotelInfo[0])
	// console.log(obj.location)
	//get destination ID
	const options = {
		method: 'GET',
		url: 'https://hotels4.p.rapidapi.com/locations/v2/search',
		params: { query: location, locale: 'en_US', currency: 'USD' },
		headers: {
			'X-RapidAPI-Key': 'b0931bbf7amsh3da0674afdf997ep1c2e28jsnf47f979b3ae3',
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

	// req_search.end(function(res) {
	// 	if (res.error) throw new Error(res.error);
	// 	destinationId = res.body.suggestions[0].entities[0].destinationId;
	// 	getApiList(destinationId);
	// });
	// const getApiList = (location) => {
	// 	let req_list = unirest('GET', 'https://hotels4.p.rapidapi.com/properties/list');
	// 	req_list.query({
	// 		destinationId: '1506246',
	// 		//   "destinationId": `${destinationId}`,
	// 		destinationId: location,

	// 		pageNumber: '1',
	// 		checkIn: `${JSON.parse(request.query.data[1]).checkIn}`,
	// 		checkOut: `${JSON.parse(request.query.data[2]).checkOut}`,
	// 		pageSize: '20',
	// 		adults1: '2',
	// 		currency: 'USD',
	// 		locale: 'en_US',
	// 		sortOrder: 'PRICE'
	// 	});

	// 	req_list.headers({
	// 		'x-rapidapi-key': '9806abda1amsh6b0bb5974adc679p14a1e8jsn611d40c6f056',
	// 		'x-rapidapi-host': 'hotels4.p.rapidapi.com',
	// 		useQueryString: true
	// 	});

	// 	req_list.end((res) => {
	// 		if (res.error) throw new Error(res.error);
	// 		console.log(request.body);
	// 		const data = {
	// 			hotelApi: res.body
	// 		};
	// 		console.log(request.body);

	// 		// console.log(res.body)
	// 		response.json(data.hotelApi);
	// 	});
	// };
};
export const getHotelPhoto = (request, response) => {
	//get roomimage from api
	var req_image = unirest('GET', 'https://hotels4.p.rapidapi.com/properties/get-hotel-photos');

	req_image.query({
		id: '468906'
	});

	req_image.headers({
		'x-rapidapi-key': '9806abda1amsh6b0bb5974adc679p14a1e8jsn611d40c6f056',
		'x-rapidapi-host': 'hotels4.p.rapidapi.com',
		useQueryString: true
	});

	req_image.end(function(res) {
		if (res.error) throw new Error(res.error);

		response.json(res.body);
	});
};

export const getHotelDetails = (request, response) => {
	var req_detail = unirest('GET', 'https://hotels4.p.rapidapi.com/properties/get-details');

	req_detail.query({
		id: '468906',
		locale: 'en_US',
		currency: 'USD',
		checkOut: '2020-01-15',
		adults1: '1',
		checkIn: '2020-01-08'
	});

	req_detail.headers({
		'x-rapidapi-key': '9806abda1amsh6b0bb5974adc679p14a1e8jsn611d40c6f056',
		'x-rapidapi-host': 'hotels4.p.rapidapi.com',
		useQueryString: true
	});

	req_detail.end(function(res) {
		if (res.error) throw new Error(res.error);

		// console.log(res.body);
		const dataDetail = {
			hotelDetail: res.body
		};
		// console.log(res.body)
		response.json(dataDetail.hotelDetail);
	});
};
