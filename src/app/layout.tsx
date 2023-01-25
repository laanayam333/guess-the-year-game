import "./globals.css";

import { Inter } from "@next/font/google";
import clsx from "clsx";

import { Footer } from "@/components/navigation/Footer";
import { Header } from "@/components/navigation/Header";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={clsx(inter.className)}>
			{/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
			<head />
			<body>
				<Header />
				<main className="min-h-screen">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
