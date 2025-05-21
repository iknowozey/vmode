import type { Metadata } from "next"
import { HeaderCart, ScrollToTopWrapper } from "@/shared/components/shared"
import { ThemeProvider } from "@/shared/components/providers/theme-provider"

export const metadata: Metadata = {
	title: "vmode",
	description: "vmode - магазин стильных кроссовок",
}

export default function AboutLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<main>
			<ThemeProvider
				attribute="class"
				defaultTheme="system"
				enableSystem
				disableTransitionOnChange
			>
				<HeaderCart />
				<ScrollToTopWrapper />
				{children}
			</ThemeProvider>
		</main>
	)
}
