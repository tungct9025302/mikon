import type { Metadata } from "next";
import PrelineScript from "../components/PrelineScript";
import "./globals.css";
import { ReduxProvider } from "@/components/redux/provider";

export const metadata: Metadata = {};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
      <PrelineScript />
    </html>
  );
}
