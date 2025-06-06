import prisma from "@/lib/prisma"
import {ChooseShoes} from "@/shared/components/shared"
import {notFound} from "next/navigation"

export default async function ShoesPage({
                                          params: {slug},
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

  return <ChooseShoes shoes={shoes} />
}
