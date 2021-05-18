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

	const images = {
		"Luke Skywalker": "https://mewmagazine.es/wp-content/uploads/2019/12/Luke-Skywalker-400x200.jpg",
		"C-3PO": "https://1843784937.rsc.cdn77.org/wp-content/uploads/2019/01/C-3PO-400x200.jpg",
		"R2-D2": "https://pbs.twimg.com/media/CctqR-nUMAEulvo.jpg",
		"Darth Vader":
			"https://dam.esquirelat.com/wp-content/uploads/2020/11/mejores-momentos-de-darth-vader-dave-prowse.jpg",
		"Leia Organa":
			"https://i1.wp.com/codigoespagueti.com/wp-content/uploads/2015/07/Leia_Hot_Toys.jpg?fit=640%2C360&quality=80&ssl=1",
		"Owen Lars":
			"https://lh3.googleusercontent.com/proxy/QYzh8xUpDoE4WTMmRsg0-VJwUcjM5RXnqqzwTsZ3pCArOJpCBAJlDM65kDEbpXOdZPObVw7BpMZSva6EflqAFlmGmtXgAM--zp4u3r9Cgu1hWHFD4TdCa1m_ifw8wX0StZeVrg",
		"Beru Whitesun lars": "https://clonecorridor.files.wordpress.com/2015/09/beru-lars-6.jpg",
		"R5-D4":
			"https://i5.walmartimages.com/asr/25175ccf-2186-4b88-90fb-777840e9d7cf_1.31a6f2ff7ec019016635811b288580c3.jpeg",
		"Biggs Darklighter": "https://pbs.twimg.com/media/EouvaiYVoAAmmQ0.jpg",
		"Obi-Wan Kenobi":
			"https://spoiler.bolavip.com/__export/1604585512125/sites/bolavip/img/2020/11/05/00-44_crop1604585147413.jpg_1998527180.jpg",
		Tatooine: "https://narcolepticos.com/wp-content/uploads/2016/09/Tatooine-1024x576.jpg",
		Alderaan: "https://upload.wikimedia.org/wikipedia/commons/5/56/Alderaan.JPG",
		"Yavin IV":
			"https://lumiere-a.akamaihd.net/v1/images/databank_yavin4_01_169_b6945e20.jpeg?region=0%2C0%2C1560%2C878&width=960",
		Hoth:
			"https://blog.es.playstation.com/tachyon/sites/14/2015/11/unnamed-file-54.jpg?resize=1088,600&crop_strategy=smart",
		Dagobah: "https://lumiere-a.akamaihd.net/v1/images/Dagobah_890df592.jpeg?region=391%2C39%2C830%2C467",
		Bespin: "https://static3.srcdn.com/wordpress/wp-content/uploads/2020/02/Bespin-Feature-Image-1.jpg",
		Endor: "https://pm1.narvii.com/6470/ff861dfaf18809ba3208cdff418ef14bb9ffe353_hq.jpg",
		Naboo:
			"https://media.contentapi.ea.com/content/dam/walrus/images/2018/11/mapvista-theed-grid.jpg.adapt.crop191x100.628p.jpg",
		Coruscant: "https://www.ecured.cu/images/3/38/Coruscant_distrito_del_Senado.jpg",
		Kamino: "https://pm1.narvii.com/6594/9a9044c1ef56788efcbe4b4015043a306b49ece6_hq.jpg"
	};

	return (
		<div>
			<div className="jumbotron jumbotron-fluid p-3 mb-2 bg-transparent border border-warning">
				<img src={images[props.name]} style={{ width: 400, height: 200 }} className="img-fluid" />
				<div className="card-body">
					<h4 className="card-title text-warning ">{props.name}</h4>
					<p className="card-text" />
					<div>
						<Link to={props.tipo == "personaje" ? "/info/" + props.id : "/planetasinfo/" + props.id}>
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
	id: PropTypes.string,
	tipo: PropTypes.string
};
