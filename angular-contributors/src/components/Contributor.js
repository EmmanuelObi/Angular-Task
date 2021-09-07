import { React, useState } from "react";
import ContributorRepoInfo from "./ContributorRepoInfo";
import { Link, useParams } from "react-router-dom";
import angularImg from "../img/Angular-1.png";
import Loading from "./Loading";
import useGet from "../Hooks/useGet";

const Contributor = () => {
	const { id } = useParams();

	const [loading, setLoading] = useState(false);
	const [error, setError] = useState();

	const errorCallback = (error) => setError(error);
	const loadingCallback = (loading) => setLoading(loading);

	const { data } = useGet(
		`https://api.github.com/users/${id}`,
		loadingCallback,
		errorCallback
	);

	return (
		<div>
			{loading && <Loading />}
			{error && <div>Error. Try again Later....</div>}
			{data && (
				<>
					<div className="container-fluid bg-black-angular">
						<div className="image">
							<img src={data.avatar_url} alt="" />
						</div>
						<div className="angular">
							<img src={angularImg} alt="" />
						</div>
					</div>
					<div className="container-fluid">
						<div className="content">
							<div className="info">
								<p className="name">{data.name}</p>
								<span className="handle">@{data.login}</span>
								<div className="social">
									<span className="icon">
										<i className="fab fa-twitter"></i>
									</span>
									<span className="icon">
										<i className="fab fa-facebook-f"></i>
									</span>
									<span className="icon">
										<i className="fab fa-instagram"></i>
									</span>
								</div>
								<div className="buttons">
									<Link to="/" className="button light-b">
										Pin Profile
									</Link>
									<Link to="/" className="button">
										Connect
									</Link>
								</div>
								<p className="location">
									<span>
										<i className="fas fa-map-marker-alt"></i>
									</span>{" "}
									{data.location}
								</p>
							</div>
							<div className="recents">
								<div className="heading">
									<h2>Recent Projects</h2>
									<p>
										<span>
											<i className="fas fa-sort"></i>
										</span>
										Date Created
									</p>
								</div>
								<div>
									<ContributorRepoInfo id={id} />
								</div>
							</div>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default Contributor;
