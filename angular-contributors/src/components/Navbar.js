import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<>
			<div className="container-fluid">
				<nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
					<Link className="navbar-brand" to="/">
						Angular
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>

					<div
						className="collapse navbar-collapse"
						id="navbarSupportedContent"
					>
						<ul className="navbar-nav mx-auto">
							<li className="nav-item">
								<Link className="nav-link" to="/">
									Contributors
								</Link>
							</li>

							<li className="nav-item">
								<Link className="nav-link" to="/">
									Profiles
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/">
									Repositories
								</Link>
							</li>
						</ul>
						<form className="form-inline my-2 my-lg-0 navbar-nav">
							<input
								className="form-control mr-sm-2"
								type="text"
								placeholder="Search"
								aria-label="Search"
							/>
						</form>
					</div>
				</nav>
			</div>
		</>
	);
};

export default Navbar;
