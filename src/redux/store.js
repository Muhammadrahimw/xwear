import {configureStore} from "@reduxjs/toolkit";
import itemReducer from "./slices/itemSlice";

let store = configureStore({
	reducer: {
		items: itemReducer,
	},
});

export default store;
