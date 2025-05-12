import { Container } from "@/components/shared"
import prisma from "@/lib/prisma"
import { notFound } from "next/navigation"
import { BreadCrumb } from "@/components/shared"
import Image from "next/image"
import { BadgeCheck, ChevronDown, CircleHelp } from "lucide-react"
import { Button } from "@/components/ui"

export default async function ShoesPage({
	params: { slug },
}: {
	params: { slug: string }
}) {
	const shoes = await prisma.shoes.findFirst({
		where: {
			slug,
		},
	})

	if (!shoes) {
		return notFound()
	}

	return (
		<Container className="pt-5">
			<div className="flex flex-col items-center">
				<div className="flex flex-col items-start">
					<BreadCrumb shoes={shoes} />
					<div className="flex gap-10 pt-4">
						<div className="relative w-162.5 h-118 overflow-hidden rounded-lg">
							<Image
								className="w-full h-full"
								src={shoes.imagesUrl[0]}
								loading="lazy"
								fill
								alt={shoes.slug}
							/>
						</div>
						<div>
							<div className="flex items-center justify-between mb-4">
								<p className="text-xl font-bold">{shoes.name}</p>
								<p className="text-foreground/50 text-xl font-bold">
									{shoes.color}
								</p>
							</div>
							<Button
								className="flex items-center justify-between px-4 border border-foreground w-full h-12 rounded-lg mb-4 font-normal"
								variant="outline"
							>
								<p className="text-sm">Размер</p>
								<div className="flex items-center gap-1">
									<p>RUS 38</p>
									<ChevronDown size={16} />
								</div>
							</Button>
							<div className="flex items-center justify-between mb-6">
								<p className="text-xl">{shoes.price} ₽</p>
								<Button className="w-1/2 h-10">Добавить в корзину</Button>
							</div>
							<div className="flex justify-between gap-5 mb-5">
								<div className="relative w-40 h-30 overflow-hidden rounded-lg">
									<Image
										className="w-full h-full"
										src={shoes.imagesUrl[0]}
										loading="lazy"
										fill
										alt={shoes.slug}
									/>
								</div>
								<div className="relative w-40 h-30 overflow-hidden rounded-lg">
									<Image
										className="w-full h-full"
										src={shoes.imagesUrl[1]}
										loading="lazy"
										fill
										alt={shoes.slug}
									/>
								</div>
								<div className="relative w-40 h-30 overflow-hidden rounded-lg">
									<Image
										className="w-full h-full"
										src={shoes.imagesUrl[2]}
										loading="lazy"
										fill
										alt={shoes.slug}
									/>
								</div>
							</div>
							<div className="flex flex-col gap-4">
								<div className="flex items-center gap-2">
									<CircleHelp size={14} />
									<p className="max-w-120 leading-none text-sm">
										Мы отвечаем за каждую проданную модель на vmode. Если мы
										допустили ошибку - мы ее исправим.
									</p>
								</div>
								<div className="flex items-center gap-2">
									<BadgeCheck size={14} />
									<p className="max-w-120 leading-none text-sm">
										Проверено. Наши сотрудники проверили товар и убедились в
										подлинности. Вы с уверенностью можете приобрести его.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Container>
	)
}
