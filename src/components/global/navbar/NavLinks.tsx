import Link from "next/link";
import React from "react";

interface INavLinks {
  name: string;
  href: string;
  isActive?: boolean;
  handelClick?: () => void;
}

function NavLinks(props: INavLinks) {
  const {name, href, isActive, handelClick} = props;
  return (
    <div onClick={handelClick}>
      <Link
        href={href}
        className={`text-sm font-medium uppercase hover:text-primary duration-200 py-[30px] ${
          isActive ? "text-primary" : "text-slate-600"
        }`}
      >
        {name}
      </Link>
    </div>
  );
}

export default NavLinks;
