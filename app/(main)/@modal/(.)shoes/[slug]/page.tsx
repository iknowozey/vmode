import {ChooseShoesModal} from "@/shared/components/shared"
import prisma from "@/lib/prisma"
import {notFound} from "next/navigation"

export default async function ShoesModal({
                                           params,
                                         }: {
  params: { slug: string }
}) {
  const shoes = await prisma.shoes.findFirst({
    where: {slug: params.slug},
  })

  if (!shoes) {
    return notFound()
  }

  return <ChooseShoesModal shoes={shoes} />
}
