import axios from "axios";

export let fetchData = async () => {
	let response = await axios.get(
		`https://677adc96671ca030683503e2.mockapi.io/products/products`
	);
	return response.data;
};
