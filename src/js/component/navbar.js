import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-light p-0">
				<div className="ml-5">
					<img
						className="img-responsive ml-5"
						style={{ width: "60px" }}
						src="https://www.freepnglogos.com/uploads/star-wars-logo-31.png"
					/>
				</div>
				<div className="nav-item dropdown navbar-nav ml-auto">
					<button
						className="btn btn-outline-success dropdown-toggle"
						type="button"
						id="dropdownMenuButton"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
						Favorites
					</button>
					<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
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
