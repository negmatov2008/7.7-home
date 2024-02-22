import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <header className="container mb-[60px] max-w-[1110px] flex justify-between items-center pt-12 mx-auto">
          <div className="flex gap-[110px] items-center">
            <Link href={"/"}>
              <img width={135} height={38} src="./logo.best.png" alt="" />
            </Link>
            <ul className="flex gap-6">
              <li>
                <Link
                  className="text-[#36536B] font-bold text-[15px] opacity-55 active:opacity-100"
                  href={"/Pricing"}
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  className="text-[#36536B] font-bold text-[15px] opacity-55 active:opacity-100"
                  href={"/About"}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="text-[#36536B] font-bold text-[15px] opacity-55 active:opacity-100"
                  href={"/contact"}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <button className="bg-[#BA4270] py-3 px-6 rounded-3xl z-10 active:bg-[#DA6D97] text-white">
            Schedule a Demo
          </button>
        </header>

        {children}
        <div className="max-w-full mb-24 mt-24">
          <img src="./abovefooter.png" className="mx-auto" alt="" />
        </div>
        <footer className="max-w-full ml-12 relative">
          <img
            className="absolute -z-30 bg-cover  "
            src="./footer.png"
            alt=""
          />
          <div className="flex max-w-[75%] py-8 mx-auto justify-between items-center">
            <div className="flex gap-[100px]">
              <Link href={"/"}>
                <img src="./logofoot.png" alt="" />
              </Link>
              <ul className="flex items-center gap-10">
                <li>
                  <Link
                    className="text-[#FBFCFE] font-bold opacity-[70%] active:opacity-[100%]"
                    href={"/Pricing"}
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-[#FBFCFE] font-bold opacity-[70%] active:opacity-[100%]"
                    href={"/About"}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-[#FBFCFE] font-bold opacity-[70%] active:opacity-[100%]"
                    href={"/contact"}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <img src="./links.png" alt="" />
          </div>
        </footer>
      </body>
    </html>
  );
}
