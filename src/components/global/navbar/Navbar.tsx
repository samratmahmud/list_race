"use client";
import React from "react";
import NavLinks from "./NavLinks";
import "react-modern-drawer/dist/index.css";
import Drawer from "react-modern-drawer";
import NavLogo from "./NavLogo";

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
  const [open, setOpen] = React.useState(false);
  const toggle = () => setOpen((prev) => !prev);

  return (
    <nav className="sticky top-0 z-[1020]">
      <div className="md:px-5 py-[3px] bg-white shadow-3xl">
        <div className="container lg:flex items-center justify-between gap-2">
          <div className="lg:hidden">
            <NavLogo toggle={toggle} icon="/images/icons8-menu-64.png" />
          </div>
          <div className="text-lg font-bold lg:py-[30px] py-[22px] hidden lg:block">
            List<span className="text-primary">Race</span>
          </div>
          <div className="hidden lg:block">
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
        <div className="lg:hidden">
          <Drawer
            open={open}
            onClose={toggle}
            direction="top"
            style={{height: "65%"}}
          >
            <div className="container">
              <div>
                <NavLogo toggle={toggle} icon="/images/icons8-close-30.png" />
              </div>
              <div className="flex flex-col gap-6 mt-4">
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
          </Drawer>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
