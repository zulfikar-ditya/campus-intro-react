import type { Metadata } from "next";
import { Lexend, Lexend_Deca } from "next/font/google";
import "./globals.css";

const lexendSans = Lexend({
	variable: "--font-lexend-sans",
	subsets: ["latin"],
});

const lexendMono = Lexend_Deca({
	variable: "--font-lexend-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "@Ayush Barnwal | Webflow Developer - UI/UX Designer",
	description: "@Ayush Barnwal | Webflow Developer - UI/UX Designer",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${lexendSans.variable} ${lexendMono.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
