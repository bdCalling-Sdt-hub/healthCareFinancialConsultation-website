import type { Metadata } from "next";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Poppins } from "next/font/google";
import "./globals.css";
import CustomProvider from "@/utils/CustomProvider";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "hcfinconsults",
  description: "hcfinconsults",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <AntdRegistry>
          <CustomProvider>{children}</CustomProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
