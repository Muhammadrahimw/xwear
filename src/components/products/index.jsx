import {useQuery} from "@tanstack/react-query";
import React from "react";
import {LuStar, LuStarHalf, LuStarOff} from "react-icons/lu";
import {fetchData} from "../../api";
import {useDispatch, useSelector} from "react-redux";
import {addLike, addShop} from "../../redux/slices/itemSlice";
import {FaStar} from "react-icons/fa";

const ProductsComp = () => {
	let allLikeData = useSelector((state) => state.items.like || []);

	let dispatch = useDispatch();

	let addLikeFunc = (data) => {
		if (data) {
			dispatch(addLike({data}));
		}
	};

	let addShopFunc = (data) => {
		if (data) {
			dispatch(addShop({data}));
		}
	};

	let {data, error, isLoading} = useQuery({
		queryKey: [`products`],
		queryFn: fetchData,
	});

	if (isLoading)
		return <p className="mt-4 text-3xl font-medium text-center">Loading...</p>;
	if (error)
		return (
			<p className="mt-4 text-3xl font-medium text-center">Ma'lumot yo'q :(</p>
		);

	return (
		<section className="w-[80%] mx-auto">
			<div className="mt-[4em]">
				<div className="flex items-center justify-between gap-4">
					<p className="text-[2em] font-bold">Обувь</p>
					<p className="text-xl font-bold underline cursor-pointer underline-offset-2">
						больше товаров
					</p>
				</div>
				<div className="grid grid-cols-4 mt-8 gap-7">
					{data[0].shoes.map((value) => (
						<div
							key={value.id}
							id={value.id}
							className="p-5 rounded-lg cursor-pointer hover:shadow-md tr">
							<div
								style={{
									backgroundImage: `url("${value.imgUrl}")`,
								}}
								className="w-full h-[15em] bg-center bg-contain bg-no-repeat relative">
								{allLikeData.some((product) => product.id === value.id) ? (
									<FaStar
										onClick={() => addLikeFunc(value)}
										className="absolute text-xl cursor-pointer top-3 right-3"
									/>
								) : (
									<LuStar
										onClick={() => addLikeFunc(value)}
										className="absolute text-xl cursor-pointer top-3 right-3"
									/>
								)}
							</div>
							<div className="text-xl font-bold">{value.title}</div>
							<p className="text-sm text-gray-800">
								от <span className="text-xl font-medium">{value.price} ₽</span>
							</p>
							<button
								onClick={() => addShopFunc(value)}
								className="w-full px-3 py-1 mt-2 text-xl border border-gray-300 rounded hover:border-gray-600 active:bg-gray-100">
								add shop
							</button>
						</div>
					))}
				</div>
			</div>
			<div className="mt-[6em]">
				<div className="flex items-center justify-between gap-4">
					<p className="text-[2em] font-bold">Одежда</p>
					<p className="text-xl font-bold underline cursor-pointer underline-offset-2">
						больше товаров
					</p>
				</div>
				<div className="grid grid-cols-4 mt-8 gap-7">
					{data[0].clothes.map((value) => (
						<div
							key={value.id}
							id={value.id}
							className="p-5 rounded-lg cursor-pointer hover:shadow-md tr">
							<div
								style={{
									backgroundImage: `url("${value.imgUrl}")`,
								}}
								className="w-full h-[15em] bg-center bg-contain bg-no-repeat relative">
								{allLikeData.some((product) => product.id === value.id) ? (
									<FaStar
										onClick={() => addLikeFunc(value)}
										className="absolute text-xl cursor-pointer top-3 right-3"
									/>
								) : (
									<LuStar
										onClick={() => addLikeFunc(value)}
										className="absolute text-xl cursor-pointer top-3 right-3"
									/>
								)}
							</div>
							<div className="text-xl font-bold">{value.title}</div>
							<p className="text-sm text-gray-800">
								от <span className="text-xl font-medium">{value.price} ₽</span>
							</p>
							<button
								onClick={() => addShopFunc(value)}
								className="w-full px-3 py-1 mt-2 text-xl border border-gray-300 rounded hover:border-gray-600 active:bg-gray-100">
								add shop
							</button>
						</div>
					))}
				</div>
			</div>
			<div className="mt-[6em]">
				<div className="flex items-center justify-between gap-4">
					<p className="text-[2em] font-bold">Обувь</p>
					<p className="text-xl font-bold underline cursor-pointer underline-offset-2">
						больше товаров
					</p>
				</div>
				<div className="grid grid-cols-4 mt-8 gap-7">
					{data[0].Accessories.map((value) => (
						<div
							key={value.id}
							id={value.id}
							className="p-5 rounded-lg cursor-pointer hover:shadow-md tr">
							<div
								style={{
									backgroundImage: `url("${value.imgUrl}")`,
								}}
								className="w-full h-[15em] bg-center bg-contain bg-no-repeat relative">
								{allLikeData.some((product) => product.id === value.id) ? (
									<FaStar
										onClick={() => addLikeFunc(value)}
										className="absolute text-xl cursor-pointer top-3 right-3"
									/>
								) : (
									<LuStar
										onClick={() => addLikeFunc(value)}
										className="absolute text-xl cursor-pointer top-3 right-3"
									/>
								)}
							</div>
							<div className="text-xl font-bold">{value.title}</div>
							<p className="text-sm text-gray-800">
								от <span className="text-xl font-medium">{value.price} ₽</span>
							</p>
							<button
								onClick={() => addShopFunc(value)}
								className="w-full px-3 py-1 mt-2 text-xl border border-gray-300 rounded hover:border-gray-600 active:bg-gray-100">
								add shop
							</button>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ProductsComp;
