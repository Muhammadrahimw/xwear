import React from "react";
import HeaderComp from "../../components/header";
import ProductsComp from "../../components/products";
import AboutComp from "../../components/about";
import FooterComp from "../../components/footer";

const Home = () => {
	return (
		<section className="min-w-[1500px] mx-auto">
			<HeaderComp />
			<ProductsComp />
			<AboutComp />
			<FooterComp />
		</section>
	);
};

export default Home;
