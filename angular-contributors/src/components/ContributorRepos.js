import React from "react";
import { Link } from "react-router-dom";

const ContributorRepos = (props) => {
	const { name, created_at, description, full_name } = props.data;

	return (
		<div className="project">
			<div className="project-info">
				<h3>{name}</h3>
				<span>{created_at}</span>
				<p>{description}</p>
			</div>
			<div className="view">
				<Link
					to={`/repositorydetails/${full_name}/${name}`}
					className="button"
				>
					View Project
				</Link>
			</div>
		</div>
	);
};

export default ContributorRepos;
