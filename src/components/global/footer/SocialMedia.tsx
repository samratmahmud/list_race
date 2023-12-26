"use client";
import Link from "next/link";
import React from "react";

interface mediaProps {
  icon: string;
  icon2: string;
  href: string;
}

function SocialMedia(props: mediaProps) {
  const {icon, icon2, href} = props;
  const [iconShow, setIconShow] = React.useState(false);

  return (
    <Link
      href={href}
      onMouseEnter={() => setIconShow(true)}
      onMouseLeave={() => setIconShow(false)}
      className="bg-slate-100 px-2 py-1.5 rounded-full hover:bg-primary duration-300 w-9 h-9 flex items-center justify-center"
    >
      <img src={`${!iconShow ? `${icon}` : `${icon2}`}`} alt="" />
    </Link>
  );
}

export default SocialMedia;
