import { React, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import useGet from "../Hooks/useGet";
const RepoContributors = ({ id1, id2 }) => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState();

	const errorCallback = (error) => setError(error);
	const loadingCallback = (loading) => setLoading(loading);

	const { data } = useGet(
		`https://api.github.com/repos/${id1}/${id2}/contributors`,
		loadingCallback,
		errorCallback
	);
	return (
		<>
			{loading && <Loading />}
			{error && <div>Error. Try again Later....</div>}
			<div className="content">
				{data &&
					data.map((cont, id) => {
						return (
							<>
								<div className="box">
									<div className="image">
										<img src={cont.avatar_url} alt="" />
									</div>
									<p className="name">{cont.login}</p>
									<div className="social">
										<span className="white">
											<i className="fab fa-telegram-plane"></i>
											&nbsp; {cont.contributions}
										</span>
									</div>
									<Link
										to={`/contributorinfo/${cont.login}`}
										className="button"
									>
										Connect
									</Link>
								</div>
							</>
						);
					})}
			</div>
		</>
	);
};

export default RepoContributors;
