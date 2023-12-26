import Link from "next/link";
import React from "react";

const navbarLinks = [
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
  {
    name: "MY ACCOUNT",
    href: "/",
  },
];

function Footer() {
  return (
    <section>
      <div className="md:px-5 py-[3px]">
        <div className="container flex items-center justify-between gap-2">
          <div className="text-lg font-bold py-11">
            List<span className="text-primary">Race</span>
          </div>
          <div className="flex gap-[42px]">
            {navbarLinks.map(({name, href}, index) => (
              <Link
                href={href}
                key={index}
                className="text-sm font-medium text-slate-500 uppercase hover:text-primary duration-200 py-[30px]"
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
