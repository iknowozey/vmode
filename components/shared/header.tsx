import { cn } from "@/lib/utils"
import Link from "next/link"
import React from "react"
import Image from "next/image"
import { Button, Input } from "../ui"
import { ArrowRight, ShoppingBasket } from "lucide-react"
import { ModeToggle } from "./mode-toggle"

interface Props {
	className?: string
}

export const Header: React.FC<Props> = ({ className }) => {
	return (
		<header
			className={cn(
				"",
				"container border-x border-b mx-auto flex items-center justify-between py-4 px-10",
				className
			)}
		>
			<Link href="/">
				<Image
					className="block dark:hidden"
					src="/logo-dark.svg"
					alt="Логотип (светлая тема)"
					width={110}
					height={22}
				/>
				<Image
					className="hidden dark:block"
					src="/logo-light.svg"
					alt="Логотип (темная тема)"
					width={110}
					height={22}
				/>
			</Link>
			<Link href="/about">
				<p className="text-xs">О нас</p>
			</Link>
			<Link href="/contacts">
				<p className="text-xs">Контакты</p>
			</Link>
			<Input placeholder="Поиск" className="w-164.5" />
			<Link href="https://github.com/iknowozey">
				<p className="text-xs">GitHub</p>
			</Link>
			<Button variant="outline">Войти</Button>
			<Button className={cn("group relative", className)} variant='outline'>
				<b className="text-xs font-normal">0 ₽</b>
				<span className="h-full w-[1px] bg-primary mx-1" />
				<div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
					<ShoppingBasket className="relative" strokeWidth={1} />
					<b className="text-xs font-normal">0</b>
				</div>
				<ArrowRight
					size={20}
					className="absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
				/>
			</Button>
			<ModeToggle />
		</header>
	)
}
