// import ErrorBoundary from "@/lib/ErrorBoundary";
import "./globals.css";
import { Inter, IBM_Plex_Sans } from "next/font/google";

const ibm = IBM_Plex_Sans({ weight: "300", subsets: ["cyrillic"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <ErrorBoundary>
    <html lang="en">
      <body className={ibm.className}>{children}</body>
    </html>
    // </ErrorBoundary>
  );
}
