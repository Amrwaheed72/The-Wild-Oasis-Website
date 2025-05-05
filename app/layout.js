import { Josefin_Sans } from "next/font/google";
import "./globals.css";

import Header from "@/app/_components/Header";


const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
})


export const metadata = {
  title: {
    template: "%s - The Wild Oasis",
    default: "Welcome - The Wild Oasis",
  },
  description: "The Wild Oasis is a unique and immersive experience that transports you to a world of tranquility and natural beauty. Nestled in the heart of nature, our oasis offers a serene escape from the hustle and bustle of everyday life. Whether you're seeking relaxation, adventure, or a blend of both, The Wild Oasis has something for everyone.",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body
        className={`${josefin.className} antialiased bg-primary-950 text-primary-100 flex flex-col min-h-screen`}
      >
        <Header />
        <div className="flex-1  px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
