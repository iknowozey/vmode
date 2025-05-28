import { cn } from "@/lib/utils"
import Link from "next/link"
import React from "react"
import Image from "next/image"
import { Container } from "./container"
import { ToggleTheme } from "./toggle-theme"

interface Props {
	className?: string
}

export const HeaderCart: React.FC<Props> = ({ className }) => {
	return (
		<>
			<div className="sticky top-0 bg-background/80 z-10 backdrop-blur-xl border-b border-dashed">
				<Container>
					<header
						className={cn(
							"flex items-center justify-between py-3.5 px-10",
							className
						)}
					>
						<div className="flex items-center gap-10">
							<Link href="/">
								<Image
									className="block dark:hidden"
									src="/logo-dark.svg"
									alt="Логотип"
									width={110}
									height={22}
								/>
								<Image
									className="hidden dark:block"
									src="/logo-light.svg"
									alt="Логотип"
									width={110}
									height={22}
								/>
							</Link>
						</div>
						<ToggleTheme />
					</header>
				</Container>
			</div>
		</>
	)
}
