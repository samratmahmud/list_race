import React from "react";
import InputField from "../../components/common/InputField";
import Link from "next/link";

function Header() {
  return (
    <section
      id="header"
      className="bg-headerImages bg-center bg-cover bg-no-repeat md:pt-[155px] pt-20 md:pb-60 pb-24 relative"
    >
      <div
        className="w-full top-0 bottom-0 absolute"
        style={{
          backgroundImage: `linear-gradient(rgba(11, 11, 43, 0.5)40%, rgba(11, 11, 43, 0.6) 27%`,
        }}
      />
      <div className="container relative z-10">
        <h1 className="lg:text-4xl md:text-3xl text-xl text-white font-bold text-center tracking-[2.4px] mb-6">
          BEST PLACE TO FIND AND EXPLORE <br /> THAT ALL YOU NEED
        </h1>
        <p className="text-base text-gray-200 text-center leading-[1.8] mb-20">
          Find Best Place, Restaurant, Hotel, Real State and many more think in
          just One click
        </p>
        <div className="flex lg:flex-row flex-col gap-7">
          <div className="flex md:flex-row flex-col md:bg-white rounded w-full gap-7 md:gap-0">
            <span className="w-full bg-white rounded">
              <InputField
                className="text-sm placeholder:capitalize capitalize"
                title="what?"
                icon="/images/icons8-bulleted-list-48.png"
                placeholder="Ex: palce, resturent, food, automobile"
              />
            </span>
            <span className="w-full bg-white rounded">
              <InputField
                className="text-sm placeholder:capitalize capitalize"
                title="location"
                icon="/images/icons8-eye-24.png"
                placeholder="Ex: london, newyork, rome"
              />
            </span>
          </div>
          <div className="flex justify-center">
            <Link
              href=""
              className="bg-red-500 hover:bg-red-600 duration-300 rounded flex gap-3 items-center cursor-pointer px-[50px] md:py-[25px] py-5"
            >
              <p className="text-sm text-white">Search </p>
              <img
                className="w-5 h-5"
                src="/images/icons8-search-30.png"
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
