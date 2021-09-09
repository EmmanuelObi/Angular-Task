import React from "react";
import ProfileCard from "./ProfileCard";
import Loading from "./Loading";
import Pagination from "./Pagination";

const SearchContributors = ({
	loading,
	contributors,
	searchField,
	handleChange,
}) => {
	const handleSort = (params) => {
		contributors.sort((a, b) => {
			return b[params] - a[params];
		});
	};
	return (
		<div>
			<div className="container-fluid search">
				<div className="container search">
					<form className="form-inline mx-auto">
						<input
							className="form-control mx-auto"
							type="search"
							placeholder="Search"
							aria-label="Search"
							value={searchField}
							onChange={handleChange}
						/>
					</form>
					<div className="dropdown text-center">
						<a
							className="dropdown-toggle"
							href="/"
							id="Dropdown"
							role="button"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false"
						>
							Filters
						</a>
						<div
							className="dropdown-menu"
							aria-labelledby="Dropdown"
						>
							<button
								onClick={() => handleSort("contributions")}
								className="dropdown-item"
							>
								Most Contributions
							</button>
						</div>
					</div>
					<div className="results">
						{loading && <Loading />}
						{contributors.length > 0 && (
							<Pagination
								data={contributors}
								ShowComponent={ProfileCard}
								pageLimit={5}
								dataLimit={9}
								searchField={searchField}
							/>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default SearchContributors;
