import type {Metadata} from "next"
import {Header, ScrollToTopWrapper} from "@/shared/components/shared"
import {ThemeProvider} from "@/shared/components/providers/theme-provider"

export const metadata: Metadata = {
  title: "vmode",
  description: "vmode - магазин стильных кроссовок",
}

export default function MainLayout({
                                     children,
                                     modal,
                                   }: Readonly<{
  children: React.ReactNode
  modal: React.ReactNode
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
        <ScrollToTopWrapper />
        {children}
        {modal}
      </ThemeProvider>
    </main>
  )
}
