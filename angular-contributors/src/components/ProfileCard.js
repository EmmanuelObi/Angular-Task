import { React, useEffect, useState } from "react";
// import useFetch from "../Hooks/useFetch";
import Loading from "./Loading";
import { Link } from "react-router-dom";
import useGet from "../Hooks/useGet";

const ProfileCard = (props) => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState();

	const errorCallback = (error) => setError(error);
	const loadingCallback = (loading) => setLoading(loading);

	const { login, contributions } = props.data;
	const { data } = useGet(
		`https://api.github.com/users/${login}`,
		loadingCallback,
		errorCallback
	);

	// const errorCallback = (error) => setError(error);
	// const loadingCallback = (loading) => setLoading(loading);
	// const { sendRequest } = useFetch();
	// const [contributorDetails, setContributorDetails] = useState([]);

	// const setContributorsDetailsCallback = (data) => {
	// 	setContributorDetails((state) => [...state, data]);
	// };

	// const responseCallback = (data = []) => {
	// 	if (data.length === 0) {
	// 		return;
	// 	}
	// 	for (const element of data) {
	// 		const { login } = element;
	// 		sendRequest(
	// 			{
	// 				url: `https://api.github.com/users/${login}`,
	// 				method: "get",
	// 			},
	// 			setContributorsDetailsCallback,
	// 			loadingCallback,
	// 			errorCallback
	// 		);
	// 	}
	// };

	// useEffect(() => {
	// 	sendRequest(
	// 		{
	// 			url: `https://api.github.com/users/${login}`,
	// 			method: "get",
	// 		},
	// 		responseCallback,
	// 		loadingCallback,
	// 		errorCallback
	// 	);
	// }, [sendRequest]);

	return (
		<>
			{loading && <Loading />}
			{data && (
				<>
					<div className="box">
						<div className="image">
							<img src={data.avatar_url} alt="" />
						</div>
						<p className="name">{data.name}</p>
						<div className="social">
							<span className="red">
								<i className="far fa-heart"></i>&nbsp;
								{data.public_repos + data.public_gists}
							</span>
							<span className="blue">
								<i className="fab fa-telegram-plane"></i>&nbsp;
								{contributions}
							</span>
							<span className="green">
								<i className="fas fa-user"></i>&nbsp;
								{data.followers}
							</span>
						</div>
						<Link
							to={`/contributorinfo/${login}`}
							className="button"
						>
							Connect
						</Link>
					</div>
				</>
			)}
		</>
	);
};

export default ProfileCard;
