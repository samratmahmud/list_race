"use client";
import Link from "next/link";
import React, {useEffect, useState} from "react";

function UpButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handelScroll = () => {
      if (window.scrollY >= 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    handelScroll();

    window.addEventListener("scroll", () => {
      handelScroll();
    });
  }, []);

  return isVisible ? (
    <Link
      href="#header"
      className="bg-primary p-3 rounded-full flex items-center justify-center w-10 h-10 fixed bottom-6 right-5 z-50"
    >
      <img
        className="animate-bounce-custom"
        src="/images/icons8-arrow-up-30.png"
        alt=""
      />
    </Link>
  ) : null;
}

export default UpButton;
