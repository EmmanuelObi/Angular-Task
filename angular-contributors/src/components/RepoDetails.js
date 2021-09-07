import { React, useState } from "react";
import angularImg from "../img/Angular-1.png";
import { Link, useParams } from "react-router-dom";
import RepoContributors from "./RepoContributors";

import Loading from "./Loading";
import useGet from "../Hooks/useGet";

const RepoDetails = () => {
	const { id1, id2 } = useParams();

	const [loading, setLoading] = useState(false);
	const [error, setError] = useState();

	const errorCallback = (error) => setError(error);
	const loadingCallback = (loading) => setLoading(loading);

	const { data } = useGet(
		`https://api.github.com/repos/${id1}/${id2}`,
		loadingCallback,
		errorCallback
	);
	return (
		<div>
			{loading && <Loading />}
			{error && <div>Error. Try again Later....</div>}
			{data && (
				<>
					<div className="container-fluid angular-outline">
						<div className="bg-darkblue">
							<img src={angularImg} alt="" />
							<div className="empty blue-bg"></div>
						</div>
					</div>
					<div className="container-fluid alvo">
						<div className="alvo-info">
							<div className="alvo-logo">
								<img src="/assets/Group.png" alt="" />
							</div>
							<h3 className="repo-name">
								{data.name} repository
							</h3>
							<span className="date">{data.created_at}</span>
							<p>{data.description}</p>
						</div>
						<div className="buttons">
							<Link to="/" className="button">
								Visit Site
							</Link>
							<Link to="/" className="button dark">
								Pin to Profile
							</Link>
						</div>
					</div>
					<div className="container-fluid contributors">
						<hr />
						<h3 className="header">Contributors</h3>
						<hr />
						<RepoContributors id1={id1} id2={id2} />
					</div>
					<div className="container-fluid getting-started">
						<hr />
						<h3 className="header">
							Getting Started with {data.name}
						</h3>
						<hr />
						<div className="content">
							<h4>Starting a Project</h4>
							<p>
								Lorem ipsum dolor sit, amet consectetur
								adipisicing elit. Rem repellat corporis maiores
								natus, vel possimus saepe eos culpa, doloribus
								placeat vero! Aliquid facilis suscipit iste,
								illo eius, est a quae maxime voluptas hic
								dolore, saepe molestiae accusantium quidem ipsa.
								Voluptatum quis mollitia qui ipsam dolore,
								dolores iste molestias suscipit laborum, rem at
								soluta exercitationem alias, quod eum. Ratione,
								alias a! Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Quos quo repellat vel maiores
								autem voluptatibus expedita vero sapiente veniam
								molestias, voluptatum ducimus incidunt, porro
								minus alias. Cum libero voluptatum molestias.
								Lorem ipsum dolor sit amet consectetur,
								adipisicing elit. Non suscipit delectus officia
								dignissimos? Perferendis, incidunt. Eveniet, aut
								exercitationem soluta labore nisi quibusdam
								sapiente non iure veniam beatae, quo officia.
								Ut!
							</p>
							<div className="see-more">
								<Link href="/" className="button">
									See more
								</Link>
							</div>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default RepoDetails;
