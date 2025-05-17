import {
	Container,
	DescriptionShoes,
	ChooesSizes,
	WarrantyInfo,
	AddToCard,
} from "@/shared/components/shared"
import prisma from "@/lib/prisma"
import { notFound } from "next/navigation"
import { BreadCrumb } from "@/shared/components/shared"
import Image from "next/image"

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
		<Container className="px-40 pt-5">
			<div className="flex flex-col items-center">
				<div className="flex flex-col">
					<BreadCrumb shoes={shoes} />
					<div className="flex gap-10 pt-4">
						<div className="relative w-172.5 h-130 overflow-hidden rounded-lg">
							<Image
								className="w-full h-full"
								src={shoes.imagesUrl[0]}
								loading="lazy"
								fill
								alt={shoes.slug}
							/>
						</div>
						<div className="flex flex-col bg-accent/80 p-6 rounded-lg">
							<div>
								<div className="flex items-center justify-between mb-1">
									<p className="text-2xl font-bold">{shoes.name}</p>
									<p className="text-foreground/50 text-xl font-bold">
										{shoes.color}
									</p>
								</div>
								<p className="text-lg mb-2">{shoes.price} ₽</p>
								<ChooesSizes />
								<AddToCard />
								<div className="flex justify-between mb-5 pt-6">
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
										<div className="absolute inset-0 bg-black/50"></div>
									</div>
									<div className="relative w-40 h-30 overflow-hidden rounded-lg">
										<Image
											className="w-full h-full"
											src={shoes.imagesUrl[2]}
											loading="lazy"
											fill
											alt={shoes.slug}
										/>
										<div className="absolute inset-0 bg-black/50"></div>
									</div>
								</div>
							</div>
							<WarrantyInfo />
						</div>
					</div>
				</div>
			</div>
			<DescriptionShoes shoes={shoes} />
			<p className="pt-40">Может быть интересно</p>
		</Container>
	)
}
