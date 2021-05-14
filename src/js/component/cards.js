import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const Cards = props => {
	const {
		store,
		actions: { setFavoritos }
	} = useContext(Context);

	function addFavorito() {
		const addNameFavoritos = props.name;
		console.log(props.name);
		setFavoritos(store.favoritos.concat(addNameFavoritos));
	}

	return (
		<div>
			<div className="jumbotron jumbotron-fluid p-3 mb-2 bg-transparent border border-warning">
				<img
					src="https://culturawarsie.files.wordpress.com/2020/01/bytm20.jpg"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h4 className="card-title text-warning ">{props.name}</h4>
					<p className="card-text" />
					<div>
						<Link to={"/detalle/" + props.id}>
							<button type="button" className="btn btn-outline-primary btn-lg">
								Learn more!
							</button>
						</Link>
						<button
							type="button"
							className="btn btn-outline-warning btn-lg float-right"
							onClick={() => {
								addFavorito();
							}}>
							<i className="fas fa-heart" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

Cards.propTypes = {
	name: PropTypes.string,
	id: PropTypes.string
};
