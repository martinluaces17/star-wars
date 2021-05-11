import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-light p-0 m-3">
				<div className="ml-5">
					<img
						className="img-responsive ml-5"
						style={{ width: "100px" }}
						src="https://www.freepnglogos.com/uploads/star-wars-logo-31.png"
					/>
				</div>
				<div className="nav-item dropdown navbar-nav ml-auto">
					<button
						className="btn btn-outline-success dropdown-toggle mr-auto"
						type="button"
						id="dropdownMenuButton"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
						Favorites
					</button>
					<div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
						<a className="dropdown-item" href="#">
							Action
						</a>
						<a className="dropdown-item" href="#">
							Another action
						</a>
						<a className="dropdown-item" href="#">
							Something else here
						</a>
					</div>
				</div>
			</nav>
		</div>
	);
};
