import { useState, useEffect } from 'react';
import axios from 'axios';
import { Austin } from '../dataSource';

const useFetch = (uri) => {
	const [ data, setData ] = useState(Austin);
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
	const reFetch = async () => {
		setLoading(true);
		try {
			const res = await axios.get(uri);
			setData(res.data);
		} catch (err) {
			setError(err);
		}
		setLoading(false);
	};
	return { loading, data, error, reFetch };
};
export default useFetch;
