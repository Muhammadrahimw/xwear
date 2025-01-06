import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import Home from "./pages/home";
import {Provider} from "react-redux";
import store from "./redux/store";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Like from "./pages/like";
import Shop from "./pages/shop";

let queryClient = new QueryClient();

let router = createBrowserRouter([
	{
		path: `/`,
		element: <Home />,
	},
	{
		path: `/like`,
		element: <Like />,
	},
	{
		path: `/shop`,
		element: <Shop />,
	},
]);

const App = () => {
	return (
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<RouterProvider router={router} />
			</QueryClientProvider>
		</Provider>
	);
};

export default App;
