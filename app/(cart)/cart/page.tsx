import { CartShoesItem, Container } from "@/shared/components/shared"
import { Button } from "@/shared/components/ui"

export default function Home() {
	return (
		<>
			<Container className="px-10">
				<div className="flex justify-center">
					<p className="font-bold text-xl pt-7.5 mb-7.5">Корзина</p>
				</div>
				<div className="max-h-[495px] overflow-auto mb-5">
					<div className="flex flex-col gap-5 mr-5">
						<CartShoesItem />
						<CartShoesItem />
						<CartShoesItem />
						<CartShoesItem />
					</div>
				</div>
				<div className="flex justify-between font-bold text-xl py-4 border-y border-foreground/50 mb-5 px-10">
					<p>Итого</p>
					<p>102 000 ₽</p>
					<p>7 шт.</p>
				</div>
				<Button className="w-full h-15" variant="gradient">
					Перейти к оформлению
				</Button>
				<p className="pt-40">Может быть интересно</p>
			</Container>
		</>
	)
}
