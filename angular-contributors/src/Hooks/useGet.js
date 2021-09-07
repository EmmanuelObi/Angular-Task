import { useState, useEffect } from "react";
import axios from "axios";

const useGet = (url, setLoadingCallback, setErrorCallback) => {
	const [data, setdata] = useState(null);

	useEffect(() => {
		setLoadingCallback(true);
		axios
			.get(url)
			.then((response) => {
				const allData = response.data;
				setdata(allData);
				setLoadingCallback(false);
			})
			.catch((error) => {
				setErrorCallback(error);
				setLoadingCallback(false);
			});
	}, [url]);

	return { data };
};

export default useGet;
