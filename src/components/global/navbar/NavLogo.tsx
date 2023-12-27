import Link from "next/link";
import React from "react";

interface navLogoprops {
  toggle: () => void;
  icon: string;
}

function NavLogo(props: navLogoprops) {
  const {toggle, icon} = props;

  return (
    <div className="flex items-center gap-[35%]">
      <div
        className="lg:hidden border border-primary rounded py-3 cursor-pointer px-1.5 flex-shrink-0"
        onClick={toggle}
      >
        <img className="w-6 h-6 " src={icon} alt="" />
      </div>
      <Link href="/" className="text-lg font-bold lg:py-[30px] py-5">
        List<span className="text-primary">Race</span>
      </Link>
    </div>
  );
}

export default NavLogo;
