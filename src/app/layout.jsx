// next
import localFont from "next/font/local";

// styles
import "./globals.css";

// components
import Header from "@/components/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: {
    default: "Power-All",
    template: "%s - Power-All",
  },
  description: "Solar and Generator, Power Solutions",
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="h-screen">
          <div className="flex flex-col h-screen overflow-hidden">
            <div className="flex-shrink-0">
              <header
                style={{
                  backgroundColor: "#18181b",
                  color: "white",
                  boxShadow: " 0px 0px 15px 0px rgba(255, 255, 255, 0.07)",
                  zIndex: 999,
                }}
              >
                <Header />
              </header>
            </div>
            <div className="flex-grow overflow-y-auto custom-scrollbar scrollbar-gutter">
              {children}
            </div>
            <div className="flex-shrink-0">
              <footer className="bg-zinc-900 text-white py-6  z-index: 999; ">
                <div className="container mx-auto px-4 text-center">
                  <p>&copy; 2024 PowerGen Solutions. All rights reserved.</p>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
