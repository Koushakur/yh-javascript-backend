import type { Metadata } from "next";
import Header from "./components/sections/header/Header";
import Footer from "./components/sections/footer/Footer";

import 'bootstrap/dist/css/bootstrap.min.css'
import "./globals.scss";

export const metadata: Metadata = {
   title: "Silicon",
   description: "The best company ever",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />

            <script src="https://kit.fontawesome.com/41c8b474e2.js" crossOrigin="anonymous" />
         </head>

         <body>

            <Header />

            <main>
               {children}
            </main>

            <Footer />

         </body>
      </html>
   );
}
