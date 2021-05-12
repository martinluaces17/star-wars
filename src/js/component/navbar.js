import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<div>
			<nav className=" container navbar navbar-light mb-3 justify-content-between ">
				<Link to="/" className="ml-3">
					<img
						width="130px"
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1024px-Star_Wars_Logo.svg.png"
					/>
				</Link>
				<div className="nav-item dropdown navbar-nav ml-auto">
					<button
						className="btn btn-outline-warning dropdown-toggle"
						type="button"
						id="dropdownMenuButton"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
						Favorites
					</button>
					<div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
						{/* <a className="dropdown-item" href="#">
							Action
						</a>
						<a className="dropdown-item" href="#">
							Another action
						</a>
						<a className="dropdown-item" href="#">
							Something else here
						</a> */}
					</div>
				</div>
			</nav>
		</div>
	);
};
