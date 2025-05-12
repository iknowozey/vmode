import prisma from "@/lib/prisma"
import { notFound } from "next/navigation"

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

	return <div>{shoes.price}</div>
}
