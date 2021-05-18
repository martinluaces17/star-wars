import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

export const PlanetasInfo = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(() => {
		actions.getPlaneta(params.id);
	}, []);

	return (
		<div>
			<div className="jumbotron jumbotron-fluid p-3 mb-2 bg-transparent">
				<div className="row no-gutters">
					<img
						className="imagen ml-6 carta col-md-4"
						width="400px"
						src="http://www.fondospedia.com/fondos/fondos-escritorio-planetas-3d.jpg"
					/>
					<div className="col-md-8 ">
						<h1 className="text-warning ml-4">{store.info != null ? store.info.name : ""}</h1>
						<p className="text-warning ml-4">
							Lorem Ipsum is simply dummy text of the printing and typesetting industry.
							<br /> Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
							<br /> when an unknown printer took a galley of type and scrambled it to make a type
							<br />
							specimen book. It has survived not only five centuries, but also the leap into
							<br /> electronic typesetting, remaining essentially unchanged. It was popularised in <br />
							the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
							<br /> and more recently with desktop publishing software like Aldus PageMaker <br />
							including versions of Lorem Ipsum.
						</p>
					</div>
				</div>
				<div className="border-top border-warning mt-5">
					<div className="row flex-row text-warning justify-content-around">
						<p>
							Diametro <br />
							{store.info != null ? store.info.diameter : ""}
						</p>
						<p>
							Periodo de Rotacion <br />
							{store.info != null ? store.info.rotation_period : ""}
						</p>
						<p>
							Peiodo Orbital <br />
							{store.info != null ? store.info.orbital_period : ""}
						</p>
						<p>
							Gravedad <br />
							{store.info != null ? store.info.gravity : ""}
						</p>
						<p>
							Poblacion <br />
							{store.info != null ? store.info.population : ""}
						</p>
						<p>
							Clima <br />
							{store.info != null ? store.info.climate : ""}
						</p>
						<p>
							Terreno <br />
							{store.info != null ? store.info.terrain : ""}
						</p>
					</div>
				</div>
				<div className="col text-center">
					<Link to="/" className="ml-3">
						<button type="button" className="btn btn-outline-warning">
							Viaja al inicio
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};
