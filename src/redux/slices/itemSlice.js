import {createSlice} from "@reduxjs/toolkit";

let itemSlice = createSlice({
	name: `items`,
	initialState: {
		like: JSON.parse(localStorage.getItem(`isLike`)) || [],
		shop: JSON.parse(localStorage.getItem(`isShop`)) || [],
	},
	reducers: {
		addLike: (state, action) => {
			let newLikes = state.like || [];

			if (newLikes.some((value) => value.id === action.payload.data.id)) {
				newLikes = newLikes.filter(
					(value) => value.id !== action.payload.data.id
				);
			} else {
				newLikes.push(action.payload.data);
			}

			localStorage.setItem(`isLike`, JSON.stringify(newLikes));
			state.like = newLikes;
		},
		addShop: (state, action) => {
			let newShop = state.shop || [];

			if (newShop.some((value) => value.id === action.payload.data.id)) {
			} else {
				newShop.push(action.payload.data);
			}

			localStorage.setItem(`isShop`, JSON.stringify(newShop));
			state.shop = newShop;
		},
		removeShop: (state, action) => {
			let newShop = state.shop || [];
			newShop = newShop.filter((value) => value.id !== action.payload.data.id);
			localStorage.setItem(`isShop`, JSON.stringify(newShop));
			state.shop = newShop;
		},
	},
});

export let {addLike, addShop, removeShop} = itemSlice.actions;
export default itemSlice.reducer;
