import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

export const Info = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(() => {
		actions.getPersonaje(params.id);
	}, []);

	return (
		<div>
			<div className="card p-0 m-0 mb-3 cardBG text-black">
				<div>
					<img
						width="400px"
						src="https://as.com/meristation/imagenes/2014/03/18/noticia/1395181020_920871_1541681122_sumario_normal.jpg"
					/>
					<h1 className="display-4 text-right">{store.info != null ? store.info.name : ""}</h1>
				</div>

				<div className="row flex-row text-danger justify-content-around">
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
		</div>
	);
};
