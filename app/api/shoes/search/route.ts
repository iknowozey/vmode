import prisma from "@/lib/prisma"
import {NextRequest, NextResponse} from "next/server"

export async function GET(req: NextRequest) {
  const query = req.nextUrl.searchParams.get("query") || ""

  const shoes = await prisma.shoes.findMany({
    where: {
      name: {
        contains: query,
        mode: "insensitive",
      },
    },
    take: 5,
  })
  return NextResponse.json(shoes)
}
