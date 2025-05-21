import React from "react"
import { Container } from "@/shared/components/shared"
import { Copyright } from "lucide-react"

export const About: React.FC = () => {
	return (
		<Container className="h-lvh">
			<div className="flex flex-col items-center font-bold">
				<h3 className="text-xl pt-30 mb-5">НАША МИССИЯ:</h3>
				<p className="max-w-[992px] text-[36px] text-center leading-[250%] mb-5">
					ОБЕСПЕЧИТЬ МАКСИМАЛЬНО КОМФОРТНЫЙ И ПЕРСОНАЛИЗИРОВАННЫЙ ОПЫТ ПОКУПОК.
					МЫ ПОСТОЯННО РАЗВИВАЕМСЯ И СТРЕМИМСЯ СТАТЬ ДЛЯ ВАС НЕ ПРОСТО
					МАГАЗИНОМ, А НАДЕЖНЫМ ПРОВОДНИКОМ В МИРЕ КРОССОВОК
				</p>
				<div className="flex items-center justify-center gap-1">
					<p className="text-xs">vmode 2025</p>
					<Copyright size={8} />
				</div>
			</div>
		</Container>
	)
}
