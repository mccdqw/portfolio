import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("http://localhost:3000"),

	icons: {
		icon: '/icon.ico'
	},

	title: "Matthew Connealy",
	authors: {
		name: "Matthew Connealy",
	},

	description:
		"I am a full stack developer based out of Texas that is passionate about technology, building applications, and entrepreneurship.",
	openGraph: {
		title: "Portfolio",
		description:
			"Full stack developer portfolio",
		url: "http://localhost:3000",
		siteName: "Matthew Connealy Portfolio",
		type: "website",
	},
	keywords: ["software engineer", "portfolio", "coding"],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
	  <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={spaceGrotesk.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
