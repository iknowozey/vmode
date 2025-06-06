import prisma from "@/lib/prisma"
import {NextResponse} from "next/server"

export async function GET() {
  const shoes = await prisma.shoes.findMany({})

  return NextResponse.json(shoes)
}
