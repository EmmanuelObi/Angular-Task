import { React, useState } from "react";
import Loading from "./Loading";
import Pagination from "./Pagination";
import ContributorRepos from "./ContributorRepos";
import useGet from "../Hooks/useGet";

const ContributorRepoInfo = ({ id }) => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState();

	const errorCallback = (error) => setError(error);
	const loadingCallback = (loading) => setLoading(loading);

	const { data: repos } = useGet(
		`https://api.github.com/users/${id}/repos`,
		loadingCallback,
		errorCallback
	);

	return (
		<>
			{loading && <Loading />}
			{error && <div>Error. Try again Later....</div>}
			{repos && (
				<Pagination
					data={repos}
					ShowComponent={ContributorRepos}
					pageLimit={5}
					dataLimit={3}
				/>
			)}
		</>
	);
};

export default ContributorRepoInfo;
