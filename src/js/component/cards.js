import React from "react";
import { Link } from "react-router-dom";

export const Cards = () => {
	return (
		<div>
			<h1 className="text-danger">Character</h1>
			<div className="card-deck m-2">
				<div className="card">
					<img src="http://www.servithermic.cl/images/400X200.gif" className="card-img-top" alt="..." />
					<div className="card-body">
						<h4 className="card-title">Darth Vader</h4>
						<p className="card-text">
							Gender: male <br />
							Hair Color: none <br />
							Eye-Color: yellow
						</p>
						<button type="button" className="btn btn-outline-primary btn-lg">
							Learn more!
						</button>
						<button type="button" className="btn btn-outline-warning btn-lg float-right">
							<i className="fas fa-heart" />
						</button>
					</div>
				</div>
				<div className="card">
					<img src="http://www.servithermic.cl/images/400X200.gif" className="card-img-top" alt="..." />
					<div className="card-body">
						<h4 className="card-title">Darth Vader</h4>
						<p className="card-text">
							Gender: male <br />
							Hair Color: none <br />
							Eye-Color: yellow
						</p>
						<button type="button" className="btn btn-outline-primary btn-lg">
							Learn more!
						</button>
						<button type="button" className="btn btn-outline-warning btn-lg float-right">
							<i className="fas fa-heart" />
						</button>
					</div>
				</div>
				<div className="card">
					<img src="http://www.servithermic.cl/images/400X200.gif" className="card-img-top" alt="..." />
					<div className="card-body">
						<h4 className="card-title">Darth Vader</h4>
						<p className="card-text">
							Gender: male <br />
							Hair Color: none <br />
							Eye-Color: yellow
						</p>
						<button type="button" className="btn btn-outline-primary btn-lg">
							Learn more!
						</button>
						<button type="button" className="btn btn-outline-warning btn-lg float-right">
							<i className="fas fa-heart" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
