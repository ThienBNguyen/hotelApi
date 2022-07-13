import { hotelPhoto, hotelDetail } from '../dataSource';
import { useEffect, useState } from 'react';
import axios from 'axios';

const useDetail = (uri) => {
	const combineData = { ...hotelDetail, ...hotelPhoto };
	const [ data, setData ] = useState(combineData);
	const [ loading, setLoading ] = useState(false);
	const [ error, setError ] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const res = await axios.get(uri);
				setData(res.data);
			} catch (err) {
				setError(err);
			}
			setLoading(false);
		};
		fetchData();
	}, []);
	return { loading, data, error };
};
export default useDetail;
