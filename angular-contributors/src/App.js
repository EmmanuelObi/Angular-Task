import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Contributor from "./components/Contributor";
import RepoDetails from "./components/RepoDetails";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchContributors from "./components/SearchContributors";
import useFetch from "./Hooks/useFetch";
import Loading from "./components/Loading";

const App = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState();
	const [contributors, setContributors] = useState([]);
	const [repos, setRepos] = useState([]);
	const [searchField, setSearchField] = useState("");
	const { sendRequest } = useFetch();

	const errorCallback = (error) => setError(error);
	const loadingCallback = (loading) => setLoading(loading);

	const setContributorsCallback = (data) => {
		setContributors((state) => [...state, ...data]);
	};
	const responseCallback = (data = []) => {
		if (data.length === 0) {
			return;
		}
		setRepos(data);
		for (const repo of repos) {
			const { full_name } = repo;
			sendRequest(
				{
					url: `https://api.github.com/repos/${full_name}/contributors`,
					method: "get",
				},
				setContributorsCallback,
				loadingCallback,
				errorCallback
			);
		}
	};
	useEffect(() => {
		sendRequest(
			{
				url: "https://api.github.com/users/angular/repos",
				method: "get",
			},
			responseCallback,
			loadingCallback,
			errorCallback
		);
	}, [sendRequest]);

	const handleChange = (e) => {
		e.preventDefault();
		setSearchField(e.target.value);
	};

	return (
		<Router>
			<div>
				<Navbar />
				<Switch>
					<Route exact path="/">
						{loading && <Loading />}

						<SearchContributors
							loading={loading}
							contributors={contributors}
							searchField={searchField}
							handleChange={handleChange}
						/>
						{error && (
							<div
								style={{
									textAlign: "center",
									marginTop: "50px",
								}}
							>
								Error. Try again Later....
							</div>
						)}
					</Route>
					<Route path="/contributorinfo/:id">
						<Contributor />
					</Route>
					<Route path="/repositorydetails/:id1/:id2">
						<RepoDetails />
					</Route>
				</Switch>
			</div>
		</Router>
	);
};

export default App;
