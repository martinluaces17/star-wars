import React, { useContext } from "react";
import { Link } from "react-router-dom";

export const Cards = () => {
	return (
		<div>
			<div className="card">
				<img src="http://www.servithermic.cl/images/400X200.gif" className="card-img-top" alt="..." />
				<div className="card-body">
					<h4 className="card-title" />
					<p className="card-text" />
					<button type="button" className="btn btn-outline-primary btn-lg">
						Learn more!
					</button>
					<button type="button" className="btn btn-outline-warning btn-lg float-right">
						<i className="fas fa-heart" />
					</button>
				</div>
			</div>
		</div>
	);
};
