import {FaFacebook, FaTelegram} from "react-icons/fa";
import {IoLogoWhatsapp} from "react-icons/io";

const FooterComp = () => {
	return (
		<footer className="py-10 bg-black mt-[8em]">
			<div className="w-[90%] mx-auto grid grid-cols-4 gap-4">
				<div className="text-white">
					<p className="mb-4 text-xl font-bold tracking-wide">Каталог</p>
					<p className="mb-3 text-sm">Одежда</p>
					<p className="mb-3 text-sm">Обувь</p>
					<p className="mb-3 text-sm">Аксессуары</p>
					<p className="mb-3 text-sm">Расчет стоимости</p>
					<div className="mt-12">
						<img src="/src/assets/images/10.svg" alt="logo" />
					</div>
				</div>
				<div className="text-white">
					<p className="mb-4 text-xl font-bold tracking-wide">Информация</p>
					<p className="mb-3 text-sm">Блог</p>
					<p className="mb-3 text-sm">Контакты</p>
					<p className="mb-3 text-sm">Доставка</p>
					<p className="mb-3 text-sm">Оплата</p>
					<p className="mb-3 text-sm">FAQ</p>
					<div className="mt-7">
						<img src="/src/assets/images/11.svg" alt="logo" />
					</div>
				</div>
				<div className="text-white">
					<p className="mb-4 text-xl font-bold tracking-wide">Контакты</p>
					<p className="mb-3 text-sm">info@xwear.info</p>
					<p className="mb-3 text-sm">+7 993 608 38 85</p>
					<p className="mb-3 text-sm">Мессенджеры</p>
					<div className="flex items-center gap-2 mb-1 text-2xl">
						<FaTelegram />
						<IoLogoWhatsapp />
					</div>
					<p className="mb-3 text-sm">Наши соц.сети</p>
					<FaFacebook className="text-2xl" />
				</div>
				<div className="text-white">
					<p className="mb-4 text-xl font-bold tracking-wide">
						Подписка на новости
					</p>
					<p className="mb-3 text-sm">Будьте в курсе скидок и новостей</p>
					<hr className="mb-2" />
					<p className="mb-3 text-sm">
						Подписываясь на рассылку вы <br /> соглашатесь с обработкой
						персональных <br /> данных
					</p>
					<p className="text-sm underline">Политика конфиденциальности</p>
					<p className="text-sm underline">Пользовательское соглашение</p>
				</div>
			</div>
		</footer>
	);
};

export default FooterComp;
