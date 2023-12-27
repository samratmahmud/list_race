"use client";
import Link from "next/link";
import React from "react";
import SocialMedia from "./SocialMedia";

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

const socialLinks = [
  {
    icon: "/images/icons8-fb-24.png",
    icon2: "/images/icons8-fb-30.png",
    href: "/",
  },
  {
    icon: "/images/icons8-twitter-24.png",
    icon2: "/images/icons8-twitter-30.png",
    href: "/",
  },
  {
    icon: "/images/icons8-linkedin-30.png",
    icon2: "/images/icons8-linkedin-32.png",
    href: "/",
  },
  {
    icon: "/images/icons8-google-plus-50.png",
    icon2: "/images/icons8-google-plus-50 (1).png",
    href: "/",
  },
];

function Footer() {
  const [callIcon, setCallIcon] = React.useState(false);
  return (
    <section>
      <div className="container">
        <div className="flex md:flex-row flex-col md:items-center md:justify-between gap-5 py-11">
          <div className="text-lg font-bold">
            List<span className="text-primary">Race</span>
          </div>
          <div className="flex flex-wrap lg:gap-[42px] gap-4">
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
        <div className="border border-slate-800" />
        <div className="py-10 flex md:flex-row flex-col md:items-center md:justify-between gap-5">
          <p className="text-sm text-slate-300 capitalize">
            ©Copyright. Designed And Developed By{" "}
            <Link href="https://themesine.com/">Themesine</Link>{" "}
          </p>
          <div className="flex sm:flex-row flex-col md:gap-4 sm:gap-7 gap-4 sm:items-center">
            <span
              className="flex text-slate-300 hover:text-primary duration-300 flex-shrink-0"
              onMouseEnter={() => setCallIcon(true)}
              onMouseLeave={() => setCallIcon(false)}
            >
              <img
                className="w-5 h-5"
                src={`${
                  callIcon
                    ? "/images/icons8-call-30.png"
                    : "/images/icons8-call-25.png"
                }`}
                alt=""
              />
              <p className="text-sm"> +1 (222) 777 8888</p>
            </span>
            <div className="flex gap-4">
              {socialLinks.map(({icon, icon2, href}, index) => (
                <SocialMedia
                  key={index}
                  href={href}
                  icon={icon}
                  icon2={icon2}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
