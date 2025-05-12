"use client"

import React from "react"
import { Input } from "../ui"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { useSearchShoes } from "@/shared/hooks"

interface Props {
	className?: string
}

export const SearchInput: React.FC<Props> = ({ className }) => {
	const { searchQuery, setSearchQuery, shoes, focused, setFocused, ref } =
		useSearchShoes()

	return (
		<>
			<div className="relative w-220">
				<div className={cn("flex items-center", className)} ref={ref}>
					<Input
						placeholder="Поиск"
						onFocus={() => setFocused(true)}
						value={searchQuery}
						onChange={e => setSearchQuery(e.target.value)}
					/>
				</div>
				{shoes.length > 0 && (
					<div
						className={cn(
							"absolute w-220 border bg-background rounded-lg top-8 py-2 shadow-md transition-all duration-200 invisible opacity-0 z-10",
							focused && "visible opacity-100 top-11"
						)}
					>
						{shoes.map(item => (
							<Link
								key={item.id}
								href={`/shoes/${item.slug}`}
								className="flex items-center gap-2 px-3 py-3 hover:bg-foreground/10"
							>
								<span className="text-xs">{item.name}</span>
							</Link>
						))}
					</div>
				)}
			</div>
		</>
	)
}
