import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const Navbar = props => {
	const {
		store,
		actions: { setFavoritos }
	} = useContext(Context);
	const [mouse, setMouse] = useState();

	const eliminar = i => {
		let nuevaLista = store.favoritos.filter((elem, index) => {
			if (index != i) {
				return elem;
			}
		});
		setFavoritos(nuevaLista);
	};
	const mouseencima = i => {
		setMouse(i);
	};

	return (
		<div>
			<nav className=" container navbar navbar-light mb-3 justify-content-between ">
				<Link to="/" className="ml-3">
					<img
						width="130px"
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1024px-Star_Wars_Logo.svg.png"
					/>
				</Link>
				<div className="col-2 text-right">
					<div className="dropdown">
						<button
							className="btn btn-outline-warning dropdown-toggle"
							type="button"
							id="dropdownMenuButton"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false">
							Favorites ({store.favoritos.length})
						</button>
						<div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
							{store.favoritos.map((item, index) => {
								return (
									<div
										key={index}
										className="dropdown-item"
										onClick={() => {
											eliminar(index);
										}}
										onMouseOver={() => {
											mouseencima(index);
										}}>
										<li className="list-group-item">
											{item}
											<i className={"far fa-trash-alt" + (mouse == index ? "" : "hide")} />
										</li>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};
Navbar.propTypes = {
	name: PropTypes.string,
	id: PropTypes.string,
	borrarFavorito: PropTypes.func
};
