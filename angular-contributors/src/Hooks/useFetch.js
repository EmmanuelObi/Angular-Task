import axios from "axios";
import { useCallback } from "react";

const useFetch = () => {
	const sendRequest = useCallback(
		({ url, method }, callback, setLoadingCallback, setErrorCallback) => {
			setLoadingCallback(true);

			axios[method](url)
				.then((response) => {
					const allData = response.data;
					callback(allData);
					setLoadingCallback(false);
				})
				.catch((error) => {
					setErrorCallback(error);
					setLoadingCallback(false);
				});
		},
		[]
	);

	return { sendRequest };
};

export default useFetch;
