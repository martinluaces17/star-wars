// import { element } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			personajes: [],
			planetas: [],
			info: null,
			favoritos: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			loadSomeData: () => {
				fetch("https://www.swapi.tech/api/people/")
					.then(res => res.json())
					.then(data => setStore({ personajes: data.results }));

				fetch("https://www.swapi.tech/api/planets/")
					.then(res => res.json())
					.then(data => setStore({ planetas: data.results }));
			},

			getPersonaje: id => {
				fetch("https://www.swapi.tech/api/people/" + id)
					.then(res => res.json())
					.then(data => setStore({ info: data.result.properties }));
			},

			// getPersonaje: id => {
			// 	fetch("https://www.swapi.tech/api/planets/" + id)
			// 		.then(res => res.json())
			// 		.then(data => setStore({ info: data.result.properties }));
			// },

			//Agregar favorito 0=personaje 1=planetas
			// addFavorito: (tipoParam, idParam, name) => {
			// 	const store = getStore(id);
			// 	let objeto = {
			// 		tipo: tipoParam,
			// 		id: idParam,
			// 		name: nombre
			// 	};
			// 	setStore({ favoritos: [...store.favoritos, objeto] });
			// },
			setFavoritos: (arr = []) => {
				setStore({
					favoritos: arr
				});
			},
			//borrar favorito
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
