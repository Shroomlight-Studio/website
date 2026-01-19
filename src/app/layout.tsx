import type { Metadata } from "next";
import "../styles/index.css";

export const metadata: Metadata = {
  title: "Shroomlight Studio",
  description: "Official website of Shroomlight Studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body>
        {children}
      </body>
    </html>
  );
}
