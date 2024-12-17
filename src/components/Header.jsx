"use client";
import { Power, Handshake, Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  const navLinks = [
    { id: "1", name: "Solar" },
    { id: "2", name: "Generators" },
    { id: "3", name: "Fabrication" },
  ];

  return (
    <div
      className={
        pathname === "/" ? "container mx-auto px-1 sticky" : "  px-6 sticky"
      }
    >
      <div className="flex justify-between items-center h-16">
        <Link href="/" className={` hover:text-yellow-500  transition`}>
          <div className="flex items-center space-x-2">
            {pathname !== "/" ? (
              <Home className="h-5 w-5 text-yellow-500" />
            ) : (
              <Power className="h-8 w-8 text-yellow-500 " />
            )}

            <span className="text-1xl font-bold">
              {pathname === "/" ? "Power All" : "Home"}
            </span>
          </div>
        </Link>
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => {
            const isActive = pathname.startsWith(`/services/${link.id}`);
            return (
              <Link
                key={link.id}
                href={`/services/${link.id}`}
                className={`${
                  isActive && "text-yellow-500"
                } hover:text-yellow-500  transition`}
                replace
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
        {pathname === "/" ? (
          <div className="flex items-center space-x-2 hover:text-yellow-500 transition">
            <Handshake className="h-5 w-5 text-yellow-500" />
            <span className="hidden md:block">Partner Portal</span>
          </div>
        ) : (
          <div className="flex items-center space-x-2">
            <Power className="h-5 w-5 text-yellow-500 " />

            <span className="text-1xl font-bold">Power All</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
