import { useState, useEffect } from 'react';
import axios from 'axios';

const userUserDetail = (uri) => {
	const [ data, setData ] = useState();
	const [ loading, setLoading ] = useState(false);
	useEffect(() => {
		const fetchUserData = async () => {
			setLoading(true);
			try {
				const res = await axios.get(uri);
				setData(res.data);
			} catch (err) {
				console.log(err);
			}
			setLoading(false);
		};
		fetchUserData();
	}, []);
	return { loading, data };
};
export default userUserDetail;
