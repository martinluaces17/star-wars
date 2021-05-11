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
			favoritos: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			// agregarFavoritos: () => {
			// 	//
			// 	setStore({ favoritos: newFavoritos });
			// },
			// eliminarFavoritos: () => {

			//     setStore({ favoritos: newFavoritos });
			// },

			loadSomeData: () => {
				fetch("https://www.swapi.tech/api/people/")
					.then(res => res.json())
					.then(data => setStore({ personajes: data.results }));

				fetch("https://www.swapi.tech/api/planets/")
					.then(res => res.json())
					.then(data => setStore({ planetas: data.results }));
			},

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
