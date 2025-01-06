import React from "react";
import {LuChevronRight} from "react-icons/lu";

const AboutComp = () => {
	return (
		<section className="w-[90%] mx-auto mt-[4em]">
			<div
				className={`bg-[url("/src/assets/images/3.png")] bg-no-repeat bg-cover bg-center text-white w-full py-[6em] px-[5em] rounded-md`}>
				<div className="w-[42em] leading-none tracking-wide">
					<h2 className="text-[3em] font-bold">
						Рассчитать <br /> стоимость
					</h2>
					<p className="my-4 text-xl leading-snug">
						Если вам не удалось найти то, что искали, вы всегда можете
						воспользоваться автоматическим расчетом стоимость заказа на
						маркетплейсе Poizon, включая комиссию сервиса и доставку.
					</p>
					<div className="flex items-center gap-12 text-white">
						<div className="flex items-center gap-5">
							<div className="w-[4em] h-[4em] rounded-full border-white border flex items-center justify-center font-medium">
								1
							</div>
							<p className="leading-tight">
								Подробная, пошаговая <br /> статья о том, как установить <br />
								приложение Poizon
							</p>
						</div>
						<div className="flex items-center gap-5">
							<div className="w-[4em] h-[4em] rounded-full border-white border flex items-center justify-center font-medium">
								2
							</div>
							<p className="leading-tight">
								Напишите нам в Telegram <br /> или WhatsApp какую вещь <br />
								хотите купить
							</p>
						</div>
					</div>
					<button className="flex items-center gap-3 px-5 py-4 mt-10 text-white bg-black rounded">
						<p>Рассчитать стоимость</p>
						<LuChevronRight className="mt-[0.15em]" />
					</button>
				</div>
			</div>
			<div className="mt-[5em] flex items-center justify-between gap-4">
				<div className="w-[45em]">
					<h2 className="text-[2.25em] font-bold leading-none tracking-wide">
						О интернет- <br />
						магазине xwear
					</h2>
					<p className="mt-4">
						Команда XWEAR предоставляет услугу доставки только оригинальных
						товаров cкрупнейшего китайского маркетплейса Poizon, чтобы наши
						клиенты экономилиболее 40% на каждой покупке. <br />
						<br />
						Работаем без посредников, благодаря чему можем предоставлять лучшую
						цену. Быстрая, бесплатная доставка.
						<br />
						<br />
						Сайт, на котором можно будет удобно оформить покупку, не скачивая
						китайское мобильное приложение Poizon, с удобной фильтрацией
						огромного количества товаров, а так же с возможностью сразу увидеть
						окончательную цену товара.
					</p>
				</div>
				<div className="px-10 py-8 rounded shadow-xl">
					<div className="flex items-start gap-7">
						<div>
							<img src="/src/assets/images/4.svg" alt="" />
						</div>
						<p className="text-sm font-light leading-tight">
							<span className="font-bold">
								Бесплатная доставка <br /> до России <br />
							</span>
							Доставим вам заказ абсолютно <br /> бесплатно до России
						</p>
					</div>
					<div className="flex items-start mt-8 gap-7">
						<div>
							<img src="/src/assets/images/5.svg" alt="" />
						</div>
						<p className="text-sm font-light leading-tight">
							<span className="font-bold">
								мы Работаем без <br /> посредников <br />
							</span>
							Между нами и клиентом нет <br /> третьего лишнего
						</p>
					</div>
					<div className="flex items-start mt-8 gap-7">
						<div>
							<img src="/src/assets/images/6.svg" alt="" />
						</div>
						<p className="text-sm font-light leading-tight">
							<span className="font-bold">
								простота в заказе и <br /> использовании <br />
							</span>
							Для заказа с Poizon не нужно <br /> никаких приложений
						</p>
					</div>
				</div>
			</div>
			<div className="mt-[4em]">
				<div className="flex items-center justify-between gap-4">
					<h2 className="text-[2em] font-bold">Наш блог</h2>
					<p className="text-xl font-bold underline underline-offset-4">
						больше статей
					</p>
				</div>
				<div className="grid grid-cols-3 gap-8 mt-8">
					<div>
						<img
							className="w-full rounded"
							src="/src/assets/images/7.png"
							alt=""
						/>
						<p className="mt-3 text-2xl font-bold">
							Делаем скидки на всю женскую одежду осеннего сезона
						</p>
						<p className="mt-3 text-sm">
							Мы запускаем акцию. Готовься к осени с лета. На протяжении всего
							лета покупайте женские осенние вещи со скидками.
						</p>
						<div className="flex items-center justify-between gap-4 mt-3">
							<p className="font-bold">Узнать подробнее</p>
							<p className="text-sm text-gray-400">16 июня 2023</p>
						</div>
					</div>
					<div>
						<img
							className="w-full rounded"
							src="/src/assets/images/8.png"
							alt=""
						/>
						<p className="mt-3 text-2xl font-bold">
							Джинсы для всех друзей. Скидки на большие покупки
						</p>
						<p className="mt-3 text-sm">
							Мы запускаем акцию. Готовься к осени с лета. На протяжении всего
							лета покупайте женские осенние вещи со скидками.
						</p>
						<div className="flex items-center justify-between gap-4 mt-3">
							<p className="font-bold">Узнать подробнее</p>
							<p className="text-sm text-gray-400">16 июня 2023</p>
						</div>
					</div>
					<div>
						<img
							className="w-full rounded"
							src="/src/assets/images/9.png"
							alt=""
						/>
						<p className="mt-3 text-2xl font-bold">
							Джинсы для всех друзей. Скидки на большие покупки
						</p>
						<p className="mt-3 text-sm">
							Мы запускаем акцию. Готовься к осени с лета. На протяжении всего
							лета покупайте женские осенние вещи со скидками.
						</p>
						<div className="flex items-center justify-between gap-4 mt-3">
							<p className="font-bold">Узнать подробнее</p>
							<p className="text-sm text-gray-400">16 июня 2023</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutComp;
