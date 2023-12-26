"use client";
import React, {useEffect, useRef} from "react";
import NavLinks from "./NavLinks";

const navbarLinks = [
  {
    name: "Home",
    href: "#header",
  },
  {
    name: "how it works",
    href: "#howIt",
  },
  {
    name: "explore",
    href: "#explore",
  },
  {
    name: "review",
    href: "#review",
  },
  {
    name: "blog",
    href: "#article",
  },
  {
    name: "contact",
    href: "#contact",
  },
];

function Navbar() {
  const [tab, setTab] = React.useState(-1);

  return (
    <nav className="sticky top-0 z-[1020]">
      <div className="md:px-5 py-[3px] bg-white shadow-3xl">
        <div className="container flex items-center justify-between gap-2">
          <div className="text-lg font-bold py-[30px]">
            List<span className="text-primary">Race</span>
          </div>
          <div className="flex gap-[42px]">
            {navbarLinks.map(({name, href}, index) => (
              <NavLinks
                key={index}
                name={name}
                href={href}
                isActive={index === tab}
                handelClick={() => setTab(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
