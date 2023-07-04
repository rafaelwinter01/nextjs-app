import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import "./globals.css";
import { Inter } from "next/font/google";

import { AuthProvider } from "@/components/AuthProvider";
import { ThemeProvider } from "@/context/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Winter Next.JS Example",
  description: "No description was provided",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>
            <div className="container">
              <NavBar />
              {children}
              <Footer />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
