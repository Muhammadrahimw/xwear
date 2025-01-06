import React from "react";
import FooterComp from "../../components/footer";
import {IoIosSearch} from "react-icons/io";
import {GoStar} from "react-icons/go";
import {FaStar, FaUser} from "react-icons/fa";
import {MdOutlineShoppingBag} from "react-icons/md";
import {useDispatch, useSelector} from "react-redux";
import {LuStar} from "react-icons/lu";
import {addLike, addShop} from "../../redux/slices/itemSlice";
import {Link} from "react-router-dom";

const Like = () => {
	let likeData = useSelector((state) => state.items.like || []);

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

	return (
		<section>
			<nav className="bg-black">
				<div className="w-[75%] mx-auto flex items-center justify-between gap-4 py-6">
					<div className="logo">
						<Link to={`/`}>
							<img src="/src/assets/images/1.svg" alt="logo" />
						</Link>
					</div>
					<div className="flex items-center justify-between gap-[3.5em] text-sm tr text-white">
						<p>Одежда</p>
						<p>Обувь</p>
						<p>Аксессуары</p>
						<p>Бренды</p>
						<p>Расчет стоимости</p>
						<p>Информация</p>
					</div>
					<div className="flex items-center gap-5 text-xl text-white">
						<IoIosSearch className="text-xl cursor-pointer" />
						<Link to={`/like`}>
							<GoStar className="cursor-pointer" />
						</Link>
						<FaUser className="cursor-pointer" />
						<Link to={`/shop`}>
							<MdOutlineShoppingBag className="cursor-pointer" />
						</Link>
					</div>
				</div>
			</nav>
			<section className="w-[90%] mx-auto mt-[4em] grid grid-cols-4 gap-4">
				{likeData ? (
					likeData.map((value) => (
						<div
							key={value.id}
							id={value.id}
							className="p-5 rounded-lg cursor-pointer hover:shadow-md tr">
							<div
								style={{
									backgroundImage: `url("${value.imgUrl}")`,
								}}
								className="w-full h-[15em] bg-center bg-contain bg-no-repeat relative">
								{likeData.some((product) => product.id === value.id) ? (
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
					))
				) : (
					<p className="text-3xl text-center text-black">
						Sizda yoqtirilgan mahsulotlar yo'q!
					</p>
				)}
			</section>
			<FooterComp />
		</section>
	);
};

export default Like;
