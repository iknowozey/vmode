import React from "react"
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/shared/components/ui/breadcrumb"
import { cn } from "@/lib/utils"
import { Shoes } from "@/lib/generated/prisma"

interface Props {
	className?: string
	shoes: Shoes
}

export const BreadCrumb: React.FC<Props> = ({ className, shoes }) => {
	return (
		<>
			<Breadcrumb className={cn("", className)}>
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink href="/">Главная</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbLink href={`/shoes/${shoes.slug.split("-")[0]}`}>
							{shoes.name.split(" ")[0]}
						</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbPage>{shoes.name}</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>
		</>
	)
}
