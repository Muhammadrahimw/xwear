import {FaChevronLeft, FaChevronRight, FaUser} from "react-icons/fa";
import {GoStar} from "react-icons/go";
import {IoIosSearch} from "react-icons/io";
import {LuChevronRight} from "react-icons/lu";
import {MdOutlineShoppingBag} from "react-icons/md";
import {Link} from "react-router-dom";

const HeaderComp = () => {
	return (
		<header>
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
			<div
				className={`w-[90%] mx-auto mt-12 bg-[url("/src/assets/images/2.png")] bg-no-repeat bg-center bg-cover rounded-md`}>
				<div className="w-[30em] py-[6em] px-[5em]">
					<h1 className="text-[3em] font-extrabold leading-tight tracking-wide">
						Широкий ассортимент Одежды
					</h1>
					<p className="mt-4 text-[1.1em]">
						Одежда от известные брендов у нас в каталоге. Только качественные
						вещи.
					</p>
					<button className="flex items-center gap-3 px-5 py-4 mt-4 text-white bg-black rounded">
						<p>Перейти в каталог </p>
						<LuChevronRight className="mt-[0.15em]" />
					</button>
					<div className="mt-[4em] flex items-center gap-4">
						<div className="w-[4em] h-[4em] rounded-full bg-white flex items-center justify-center cursor-pointer">
							<FaChevronLeft />
						</div>
						<div className="w-[4em] h-[4em] rounded-full bg-white flex items-center justify-center cursor-pointer">
							<FaChevronRight />
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default HeaderComp;
