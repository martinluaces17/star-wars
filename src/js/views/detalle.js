import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

export const Info = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(() => {
		actions.getPersonaje(params.id);
	}, []);

	useEffect(() => {
		actions.getPlanets(params.id);
	}, []);

	return (
		<div>
			<div className="jumbotron jumbotron-fluid p-3 mb-2 bg-transparent">
				<div className="row no-gutters">
					<img
						className="imagen ml-6 carta col-md-4"
						width="400px"
						src="https://as.com/meristation/imagenes/2014/03/18/noticia/1395181020_920871_1541681122_sumario_normal.jpg"
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
							Name <br />
							{store.info != null ? store.info.name : ""}
						</p>
						<p>
							Birth Year <br />
							{store.info != null ? store.info.birth_year : ""}
						</p>
						<p>
							Gender <br />
							{store.info != null ? store.info.gender : ""}
						</p>
						<p>
							Height <br />
							{store.info != null ? store.info.height : ""}
						</p>
						<p>
							Skin Color <br />
							{store.info != null ? store.info.skin_color : ""}
						</p>
						<p>
							Eye Color <br />
							{store.info != null ? store.info.eye_color : ""}
						</p>
					</div>
				</div>
				<div className="row no-gutters">
					<img
						className="imagen ml-6 carta col-md-4"
						width="400px"
						src="https://i.stack.imgur.com/B5Leq.png"
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
							Name <br />
							{store.info != null ? store.info.name : ""}
						</p>
						<p>
							Birth Year <br />
							{store.info != null ? store.info.birth_year : ""}
						</p>
						<p>
							Gender <br />
							{store.info != null ? store.info.gender : ""}
						</p>
						<p>
							Height <br />
							{store.info != null ? store.info.height : ""}
						</p>
						<p>
							Skin Color <br />
							{store.info != null ? store.info.skin_color : ""}
						</p>
						<p>
							Eye Color <br />
							{store.info != null ? store.info.eye_color : ""}
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
