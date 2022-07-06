import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url) => {
	const [ data, setData ] = useState([]);
	const [ loading, setLoading ] = useState(false);
	const [ error, setError ] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const res = await axios.get(url);
				setData(res.data);
				console.log(res);
			} catch (err) {
				setError(err);
			}
			setLoading(false);
		};
		fetchData();
	}, []);
	const reFetch = async () => {
		setLoading(true);
		try {
			const res = await axios.get(url);
			setData(res.data);
			console.log(res);
		} catch (err) {
			setError(err);
		}
		setLoading(false);
	};
	return { loading, data, error, reFetch };
};
export default useFetch;
