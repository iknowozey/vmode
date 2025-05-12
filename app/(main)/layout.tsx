import type { Metadata } from "next"
import { Header } from "@/components/shared"
import { ThemeProvider } from "@/components/providers/theme-provider"

export const metadata: Metadata = {
	title: "vmode",
	description: "vmode - магазин стильных кроссовок",
}

export default function MainLayout({
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
				<Header />
				{children}
			</ThemeProvider>
		</main>
	)
}
