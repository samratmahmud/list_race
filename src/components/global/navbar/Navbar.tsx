import Link from "next/link";
import React from "react";

const navbarLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "how it works",
    href: "/",
  },
  {
    name: "explore",
    href: "/",
  },
  {
    name: "review",
    href: "/",
  },
  {
    name: "blog",
    href: "/",
  },
  {
    name: "contact",
    href: "/",
  },
];

function Navbar() {
  return (
    <nav>
      <div className="container flex items-center justify-between gap-2">
        <div className="text-lg font-bold py-[30px]">
          List<span className="text-primary">Race</span>
        </div>
        <div className="flex gap-[42px]">
          {navbarLinks.map(({name, href}, index) => (
            <Link
              href={href}
              key={index}
              className="text-sm font-medium text-slate-500 uppercase hover:text-primary duration-200"
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
