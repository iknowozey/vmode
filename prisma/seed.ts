import { hashSync } from "bcrypt"
import { categories } from "./constants"
import { PrismaClient, UserRole } from "../lib/generated/prisma"

const prisma = new PrismaClient()

async function up() {
	function generateRandomCode(): string {
		const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
		const numbers = "0123456789"

		let result = ""

		for (let i = 0; i < 4; i++) {
			result += numbers.charAt(Math.floor(Math.random() * numbers.length))
		}

		result += chars.charAt(Math.floor(Math.random() * chars.length))

		for (let i = 0; i < 3; i++) {
			result += numbers.charAt(Math.floor(Math.random() * numbers.length))
		}

		return result
	}

	function generateRandomPrice(
		min: number = 10000,
		max: number = 60000,
		step: number = 500
	): number {
		const range = (max - min) / step
		const randomSteps = Math.floor(Math.random() * (range + 1))
		return min + randomSteps * step
	}

	await prisma.user.createMany({
		data: [
			{
				fullName: "Admin",
				email: "admin",
				password: hashSync("admin", 10),
				role: UserRole.ADMIN,
				verified: new Date(),
			},
			{
				fullName: "User",
				email: "user",
				password: hashSync("user", 10),
				role: UserRole.USER,
				verified: new Date(),
			},
		],
	})

	await prisma.category.createMany({
		data: categories,
	})

	await prisma.cart.createMany({
		data: [
			{
				userId: 1,
				totalAmount: 0,
				token: "11111",
			},
			{
				userId: 2,
				totalAmount: 0,
				token: "222222",
			},
		],
	})

	// Мужские

	await prisma.shoes.create({
		data: {
			name: "Nike Air Force Low 1",
			slug: "nike-air-force-low-1",
			imagesUrl: [
				"/shoes/nike-air-force-low-1/main.jpg",
				"/shoes/nike-air-force-low-1/second.jpg",
				"/shoes/nike-air-force-low-1/third.jpg",
			],
			price: generateRandomPrice(),
			desc: "Белые кроссовки Nike Air Force 1 – бессмертная классика. Пара Air Force – отличный вариант для повседневной жизни и занятия спортом. С этими кроссовками каждый сможет дополнить свой образ яркой деталью. Верх модели выполнен из практичной прессованной кожи. Носок и боковые части пары получили перфорацию для лучшей воздухопродуваемости. Подошва кроссовок Nike Air Force 1 сделана по известной технологии Air. Она обеспечивает мягкую амортизацию. Подметка модели с глубокими протекторами помогает устоять на ногах на любой поверхности.",
			color: "Белый",
			sex: "Унисекс",
			activity: "Спортивный стиль",
			season: "Лето",
			code: generateRandomCode(),
			country: "Вьетнам",
			categories: {
				connect: [
					{
						id: 1,
					},
					{
						id: 2,
					},
				],
			},
			sizesEU: [40, 41, 42, 43, 44],
			sizesRUS: [39, 40, 41, 42, 43],
		},
	})

	await prisma.shoes.create({
		data: {
			name: "Adidas ZX 750",
			slug: "adidas-zx-750",
			imagesUrl: [
				"/shoes/adidas-zx-750/main.jpg",
				"/shoes/adidas-zx-750/second.jpg",
				"/shoes/adidas-zx-750/third.jpg",
			],
			price: generateRandomPrice(),
			desc: "Adidas ZX 750 — классические кроссовки для повседневной жизни и спорта. С ними можно легко сочетать стиль и комфорт. Верх удобных кроссовок ZX 750 выполнен из сочетания текстиля и замши. Пара получила фирменные три полоски и трилистник. В пяточной зоне пары находится полиуретановая (TPU) вставка для поддержки и защиты стопы. Подошва ZX 750 выполнена из EVA-материала с мягкой амортизацией. Подметка кроссовок сделана из резины с протектором для лучшего сцепления..",
			color: "Черный",
			sex: "Мужской",
			activity: "Спортивный стиль",
			season: "Лето",
			code: generateRandomCode(),
			country: "Индонезия",
			categories: {
				connect: {
					id: 2,
				},
			},
			sizesEU: [34, 35, 36, 37, 38, 39, 40, 41, 42],
			sizesRUS: [35, 36, 37, 38, 39, 40],
		},
	})

	await prisma.shoes.create({
		data: {
			name: "Adidas Drop Step",
			slug: "adidas-drop-step",
			imagesUrl: [
				"/shoes/adidas-drop-step/main.jpg",
				"/shoes/adidas-drop-step/second.jpg",
				"/shoes/adidas-drop-step/third.jpg",
			],
			price: generateRandomPrice(),
			desc: "Adidas Drop Step — модные кроссовки, вдохновленные эстетикой ретро 80-х. Пара получила узнаваемый баскетбольный силуэт, который отлично сочетается с повседневными образами в спортивном и стритвир-стиле.",
			color: "Серый",
			sex: "Мужской",
			activity: "Спортивный стиль",
			season: "Лето",
			code: generateRandomCode(),
			country: "Индонезия",
			categories: {
				connect: {
					id: 2,
				},
			},
			sizesEU: [38, 39, 40, 41, 42],
			sizesRUS: [35, 36, 37, 38, 39, 40, 41, 42, 43],
		},
	})

	await prisma.shoes.create({
		data: {
			name: "Puma Suede XL",
			slug: "puma-suede-xl",
			imagesUrl: [
				"/shoes/puma-suede-xl/main.jpg",
				"/shoes/puma-suede-xl/second.jpg",
				"/shoes/puma-suede-xl/third.jpg",
			],
			price: generateRandomPrice(),
			desc: "Puma Suede XL — дутые кроссовки в стиле скейтерской обуви получили минималистичный дизайн с фирменной полоской «Пума». Это отличная модель для повседневной жизни, которая сочетается одинаково хорошо с разными видами одежды.",
			color: "Белый",
			sex: "Мужской",
			activity: "Спортивный стиль",
			season: "Демисезон",
			code: generateRandomCode(),
			country: "Япония",
			categories: {
				connect: {
					id: 2,
				},
			},
			sizesEU: [34, 35, 36, 37, 38],
			sizesRUS: [35, 36, 37, 38, 39],
		},
	})

	await prisma.shoes.create({
		data: {
			name: "New Balance 2002R",
			slug: "new-balance-2002r",
			imagesUrl: [
				"/shoes/new-balance-2002r/main.jpg",
				"/shoes/new-balance-2002r/second.jpg",
				"/shoes/new-balance-2002r/third.jpg",
			],
			price: generateRandomPrice(),
			desc: "New Balance 2002R — стильные кроссовки с ретро-дизайном. Технологичная обувь вдохновлена беговыми кроссовками из нулевых и объединяет в себе лучшие разработки NB. Верх NB 2002R выполнен из сочетания текстиля и замшевого материала. Модные кроссовки получили несколько технологий в подошве: амортизирующий прочный гель-материал N-ergy, промежуточная подошва ABZORB, смягчающая шаг, и поддерживающая вставка Stability Web в середине подошвы. На резиновой подметке модели нанесен выраженный протектор для надежного сцепления.",
			color: "Серый",
			sex: "Мужской",
			activity: "Спортивный стиль",
			season: "Демисезон",
			code: generateRandomCode(),
			country: "Китай",
			categories: {
				connect: {
					id: 2,
				},
			},
			sizesEU: [34, 35, 36, 37, 38, 39, 40, 41],
			sizesRUS: [35, 36, 37, 38, 39, 40],
		},
	})

	await prisma.shoes.create({
		data: {
			name: "Reebok Classic Leather Suede",
			slug: "reebok-classic-leather-suede",
			imagesUrl: [
				"/shoes/reebok-classic-leather-suede/main.jpg",
				"/shoes/reebok-classic-leather-suede/second.jpg",
				"/shoes/reebok-classic-leather-suede/third.jpg",
			],
			price: generateRandomPrice(),
			desc: "Reebok Classic Leather Suede – самые узнаваемые кроссовки бренда, которые попадают в повседневный гардероб уже больше 30 лет! Когда они были просто беговой обувью, но сегодня это универсальные кроссовки на каждый день.",
			color: "Черный",
			sex: "Мужской",
			activity: "Спортивный стиль",
			season: "Демисезон",
			code: generateRandomCode(),
			country: "Китай",
			categories: {
				connect: {
					id: 2,
				},
			},
			sizesEU: [35, 36, 37, 38, 39, 40, 41],
			sizesRUS: [35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46],
		},
	})

	await prisma.shoes.create({
		data: {
			name: "New Balance 574",
			slug: "new-balance-574",
			imagesUrl: [
				"/shoes/new-balance-574/main.jpg",
				"/shoes/new-balance-574/second.jpg",
				"/shoes/new-balance-574/third.jpg",
			],
			price: generateRandomPrice(),
			desc: "New Balance 574 — вечная классика в мире кроссовок. Модель держит планку универсальной и удобной обуви уже 40 лет. С тех пор NB 574 не потеряли популярности среди спортсменов и любителей уличной моды.",
			color: "Серый",
			sex: "Мужской",
			activity: "Спортивный стиль",
			season: "Демисезон",
			code: generateRandomCode(),
			country: "США",
			categories: {
				connect: {
					id: 2,
				},
			},
			sizesEU: [35, 36, 37, 38, 39, 40, 41],
			sizesRUS: [35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46],
		},
	})

	await prisma.shoes.create({
		data: {
			name: "Nike Air Vapormax Plus",
			slug: "nike-air-vapormax-plus",
			imagesUrl: [
				"/shoes/nike-air-vapormax-plus/main.jpg",
				"/shoes/nike-air-vapormax-plus/second.jpg",
				"/shoes/nike-air-vapormax-plus/third.jpg",
			],
			price: generateRandomPrice(),
			desc: "Nike Air VaporMax Plus — кроссовки с по-настоящему воздушной подошвой. Вставки Air Max заняли весь низ, чтобы амортизировать каждый шаг. Верх футуристичных кроссовок VaporMax сделан из неопрена, эластичного и легкого материала. В дополнение к нему пара получила полиуретановые вставки (TPU), защищающие ноги от травм и фиксирующие стопу.",
			color: "Белый",
			sex: "Мужской",
			activity: "Бег",
			season: "Демисезон",
			code: generateRandomCode(),
			country: "Россия",
			categories: {
				connect: {
					id: 2,
				},
			},
			sizesEU: [36, 37, 38, 39, 40],
			sizesRUS: [38, 39, 40, 41, 42, 43, 44, 45, 46],
		},
	})

	await prisma.shoes.create({
		data: {
			name: "Nike Air Max 2013",
			slug: "nike-air-max-2013",
			imagesUrl: [
				"/shoes/nike-air-max-2013/main.jpg",
				"/shoes/nike-air-max-2013/second.jpg",
				"/shoes/nike-air-max-2013/third.jpg",
			],
			price: generateRandomPrice(),
			desc: "Nike Air Max 2013 – переизданные кроссовки с воздушной подушкой и ретро дизайном. Это универсальная обувь, которую можно носить с разными образами. «Аир Максы» 2013 года сделаны из удобного и дышащего материала Hyperfuse в сочетании с нейлоном. Для улучшенной амортизации дизайнеры Nike сделали большую часть подошвы из комбинации пеноматериала и воздушной подушки Air Max. Лишь нижняя часть конструкции, подметка, выполнена из прочной резины с протектором для сцепления.",
			color: "Красный",
			sex: "Мужской",
			activity: "Бег",
			season: "Лето",
			code: generateRandomCode(),
			country: "Франция",
			categories: {
				connect: {
					id: 2,
				},
			},
			sizesEU: [36, 37, 38, 39, 40],
			sizesRUS: [38, 39, 40, 41, 42, 43],
		},
	})

	await prisma.shoes.create({
		data: {
			name: "Asics Gel Kahana 8",
			slug: "asics-gel-kahana-8",
			imagesUrl: [
				"/shoes/asics-gel-kahana-8/main.jpg",
				"/shoes/asics-gel-kahana-8/second.jpg",
				"/shoes/asics-gel-kahana-8/third.jpg",
			],
			price: generateRandomPrice(),
			desc: "Asics Gel Kahana 8 — кроссовки для активного образа жизни. Эту модель выбирают любители хайкинга и треккинга – бега по пересеченной местности. Но Kahana 8 подойдет и просто ценителям удобной и стильной обуви. Каждый найдет в модели что-то свое.",
			color: "Черный",
			sex: "Мужской",
			activity: "Спортивный стиль",
			season: "Лето",
			code: generateRandomCode(),
			country: "Германия",
			categories: {
				connect: {
					id: 2,
				},
			},
			sizesEU: [36, 37, 38, 39, 40, 41, 42],
			sizesRUS: [36, 37, 38, 39, 40, 41, 42, 43],
		},
	})

	// Женские

	await prisma.shoes.create({
		data: {
			name: "Adidas Court Tourino Bold",
			slug: "adidas-court-tourino-bold",
			imagesUrl: [
				"/shoes/adidas-court-tourino-bold/main.jpg",
				"/shoes/adidas-court-tourino-bold/second.jpg",
				"/shoes/adidas-court-tourino-bold/third.jpg",
			],
			price: generateRandomPrice(),
			desc: "Adidas Court Tourino Bold – повседневные кроссовки в стиле ретро. Эта модель напоминает культовый дизайн Stan Smith. Верх Adidas Court из прессованной кожи и текстильного язычка. Фирменные три полоски сделаны в виде перфорации для продуваемости обуви. У Tourino Bold высокая износостойкая подошва из резины. Дизайнеры «Адидас» нанесли на подметку ребристый протектор.",
			color: "Белый",
			sex: "Женский",
			activity: "Спортивный стиль",
			season: "Демисезон",
			code: generateRandomCode(),
			country: "Польша",
			categories: {
				connect: {
					id: 3,
				},
			},
			sizesEU: [36, 37, 38, 39, 40],
			sizesRUS: [40, 41, 42, 43],
		},
	})

	await prisma.shoes.create({
		data: {
			name: "Nike M2K Tekno",
			slug: "nike-m2k-tekno",
			imagesUrl: [
				"/shoes/nike-m2k-tekno/main.jpg",
				"/shoes/nike-m2k-tekno/second.jpg",
				"/shoes/nike-m2k-tekno/third.jpg",
			],
			price: generateRandomPrice(),
			desc: "Nike M2K Tekno — кроссовки нулевых на массивной подошве. Яркая модель в стилистике Y2K идеально подходит для жизни в городе. Любите вы спортивный стиль, джинсовую классику или стритвир – все это будет блистать, когда на ногах Nike M2K Tekno.",
			color: "Белый",
			sex: "Женский",
			activity: "Спортивный стиль",
			season: "Демисезон",
			code: generateRandomCode(),
			country: "Китай",
			categories: {
				connect: {
					id: 3,
				},
			},
			sizesEU: [36, 37, 38, 39, 40],
			sizesRUS: [40, 41, 42, 43],
		},
	})

	await prisma.shoes.create({
		data: {
			name: "Dior Chrono",
			slug: "dior-chrono",
			imagesUrl: [
				"/shoes/dior-chrono/main.jpg",
				"/shoes/dior-chrono/second.jpg",
				"/shoes/dior-chrono/third.jpg",
			],
			price: generateRandomPrice(),
			desc: "Dior Chrono – массивные кроссовки в стиле ретро беговых моделей. Эта пара получила не только яркий дизайн, но и «счастливую звезду» бренда. Кроссовки в стиле 00-х сделаны из комбинации дышащего текстиля и прессованной кожи. Для дополнительной выразительности пара получила эстетические вставки и петельки для обувания.",
			color: "Серый",
			sex: "Женский",
			activity: "Спортивный стиль",
			season: "Лето",
			code: generateRandomCode(),
			country: "Вьетнам",
			categories: {
				connect: {
					id: 3,
				},
			},
			sizesEU: [37, 38, 39, 40, 41, 42, 43],
			sizesRUS: [36, 37, 38, 39, 40, 41, 42, 43],
		},
	})

	await prisma.shoes.create({
		data: {
			name: "Vans Knu Skool",
			slug: "vans-knu-skool",
			imagesUrl: [
				"/shoes/vans-knu-skool/main.jpg",
				"/shoes/vans-knu-skool/second.jpg",
				"/shoes/vans-knu-skool/third.jpg",
			],
			price: generateRandomPrice(),
			desc: "Vans Knu Skool — скейтерские кеды, которые подойдут для повседневной жизни. Дизайнеры Vans вдохновились классикой 90-х, чтобы создать этот уникальный дизайн. Верх «вансов» сделан из замшевого материала. Специально для скейтеров дизайнеры Vans добавили мягкие бортики, подушечку в пяточной зоне и дутый язычок. Все это нацелено на защиту стопы во время катания на скейтборде.",
			color: "Розовый",
			sex: "Женский",
			activity: "Скейтборд",
			season: "Демисезон",
			code: generateRandomCode(),
			country: "Сингапур",
			categories: {
				connect: {
					id: 3,
				},
			},
			sizesEU: [37, 38, 39, 40],
			sizesRUS: [38, 39, 40, 41, 42, 43],
		},
	})

	await prisma.shoes.create({
		data: {
			name: "Adidas Vento XLG Deluxe",
			slug: "adidas-vento-xlg-deluxe",
			imagesUrl: [
				"/shoes/adidas-vento-xlg-deluxe/main.jpg",
				"/shoes/adidas-vento-xlg-deluxe/second.jpg",
				"/shoes/adidas-vento-xlg-deluxe/third.jpg",
			],
			price: generateRandomPrice(),
			desc: "Adidas Vento XLG Deluxe — кроссовки, которые притягивают внимание. Такой необычный дизайн от «Адидас» — редкость и предмет охоты для коллекционеров. Верхняя часть кроссовок Vento XLG сделана из комбо: текстиля и прессованной кожи. Благодаря полиуретановой вставки (TPU) кроссовки получили дополнительную поддержку для стопы и необычные детали.",
			color: "Серый",
			sex: "Женский",
			activity: "Бег",
			season: "Лето",
			code: generateRandomCode(),
			country: "Северная Корея",
			categories: {
				connect: {
					id: 3,
				},
			},
			sizesEU: [37, 38, 39, 40, 41, 42, 43, 44, 45],
			sizesRUS: [38, 39, 40, 41, 42, 43, 44, 45],
		},
	})

	await prisma.shoes.create({
		data: {
			name: "Nike Pegasus Plus",
			slug: "nike-pegasus-plus",
			imagesUrl: [
				"/shoes/nike-pegasus-plus/main.jpg",
				"/shoes/nike-pegasus-plus/second.jpg",
				"/shoes/nike-pegasus-plus/third.jpg",
			],
			price: generateRandomPrice(),
			desc: "Nike Pegasus Plus — универсальные беговые кроссовки, в которых удобно заниматься не только спортом, но и повседневными делами. Это легкая обувь с мягкой амортизацией и дышащим верхом. Беговая обувь Nike Pegasus сделана из легкого, дышащего и прочного текстиля Flyknit. В задней части кроссовок находятся светоотражающие-рефлективные вставки, которые оказывают безопасность бегуну даже в темное время суток.",
			color: "Розовый",
			sex: "Женский",
			activity: "Бег",
			season: "Лето",
			code: generateRandomCode(),
			country: "Северная Корея",
			categories: {
				connect: {
					id: 3,
				},
			},
			sizesEU: [37, 38, 39, 40, 41, 42],
			sizesRUS: [39, 40, 41, 42, 43, 44, 45],
		},
	})

	await prisma.shoes.create({
		data: {
			name: "Balenciaga 3XL",
			slug: "balenciaga-3xl",
			imagesUrl: [
				"/shoes/balenciaga-3xl/main.jpg",
				"/shoes/balenciaga-3xl/second.jpg",
				"/shoes/balenciaga-3xl/third.jpg",
			],
			price: generateRandomPrice(),
			desc: "Кроссовки Balenciaga 3XL — скандальная обувь, которая заставит выделяться. Провокационные кроссовки увеличивают ваш рост и вносят в образ детали, которые может позволить себе лишь «Баленсиага»: вторая шнуровка вокруг кроссовок, 4-сантиметровая массивная подошва и «эффект старения». В этой паре дизайнеры делают отсылку к беговым кроссовкам 1990-х и начала 2000-х годов.",
			color: "Розовый",
			sex: "Женский",
			activity: "Спортивный стиль",
			season: "Лето",
			code: generateRandomCode(),
			country: "Южная Корея",
			categories: {
				connect: {
					id: 3,
				},
			},
			sizesEU: [38, 39, 40, 41, 42],
			sizesRUS: [39, 40, 41, 42, 43, 44],
		},
	})

	await prisma.shoes.create({
		data: {
			name: "New Balance 1906R",
			slug: "new-balance-1906r",
			imagesUrl: [
				"/shoes/new-balance-1906r/main.jpg",
				"/shoes/new-balance-1906r/second.jpg",
				"/shoes/new-balance-1906r/third.jpg",
			],
			price: generateRandomPrice(),
			desc: "New Balance 1906R — первая модель линейки NB 1906. Это кроссовки со своим неповторимым стилем, который дополнит повседневный или спортивный образ. Верх кроссовок 1906R сделан из комбинации материалов: дышащего текстиля, прессованной кожи и прочного полиуретана (TPU) в задней части обуви. Для лучшей продуваемости пара получила перфорированный носок.",
			color: "Белый",
			sex: "Женский",
			activity: "Спортивный стиль",
			season: "Демисезон",
			code: generateRandomCode(),
			country: "Бразилия",
			categories: {
				connect: {
					id: 3,
				},
			},
			sizesEU: [39, 40, 41, 42, 43, 44, 45],
			sizesRUS: [41, 42, 43, 44, 45],
		},
	})

	await prisma.shoes.create({
		data: {
			name: "Osiris D3",
			slug: "osiris-d3",
			imagesUrl: [
				"/shoes/osiris-d3/main.jpg",
				"/shoes/osiris-d3/second.jpg",
				"/shoes/osiris-d3/third.jpg",
			],
			price: generateRandomPrice(),
			desc: "Кроссовки Osiris D3 – это отличный выбор для тех, кто ищет надежную и стильную обувь для активных видов спорта или повседневной носки. Верхняя часть кроссовок изготовлена из прессованной кожи. Многослойные материалы и рефлективные детали — всё это придаёт модели нужный баланс",
			color: "Серый",
			sex: "Женский",
			activity: "Скейтборд",
			season: "Демисезон",
			code: generateRandomCode(),
			country: "Россия",
			categories: {
				connect: {
					id: 3,
				},
			},
			sizesEU: [39, 40, 41, 42, 43],
			sizesRUS: [38, 39, 40, 41, 42, 43, 44, 45],
		},
	})

	await prisma.shoes.create({
		data: {
			name: "Adidas Campus",
			slug: "adidas-campus",
			imagesUrl: [
				"/shoes/adidas-campus/main.jpg",
				"/shoes/adidas-campus/second.jpg",
				"/shoes/adidas-campus/third.jpg",
			],
			price: generateRandomPrice(),
			desc: "Кроссовки Adidas Campus – подойдут для занятий скейтбордингом, а также для повседневной носки. Низкий профиль кроссовок не стесняет движения голеностопа. Верхняя часть изготовлена из замши и имеет фирменное брендирование. Подошва из EVA обеспечит оптимальный уровень комфорта при повседневном использовании. Рисунок подошвы обеспечивает сцепление с разными поверхностями.",
			color: "Фиолетовый",
			sex: "Женский",
			activity: "Спортивный стиль",
			season: "Демисезон",
			code: generateRandomCode(),
			country: "Китай",
			categories: {
				connect: {
					id: 3,
				},
			},
			sizesEU: [39, 40, 41, 42, 43, 44],
			sizesRUS: [38, 39, 40],
		},
	})

	await prisma.cartItem.create({
		data: {
			shoesId: 1,
			cartId: 1,
			quantity: 2,
		},
	})
}

async function down() {
	await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`
	await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`
	await prisma.$executeRaw`TRUNCATE TABLE "Shoes" RESTART IDENTITY CASCADE`
	await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`
	await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`
	await prisma.$executeRaw`TRUNCATE TABLE "Order" RESTART IDENTITY CASCADE`
}

async function main() {
	try {
		await down()
		await up()
	} catch (error) {
		console.log(error)
	}
}

main()
	.then(async () => {
		await prisma.$disconnect()
	})
	.catch(async e => {
		console.error(e)
		await prisma.$disconnect()
		process.exit(1)
	})
