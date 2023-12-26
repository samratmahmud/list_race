import React from "react";
import InputField from "../../components/common/InputField";
import Link from "next/link";

function Header() {
  return (
    <section
      id="header"
      className="bg-headerImages bg-center bg-cover bg-no-repeat pt-[155px] pb-60 relative"
    >
      <div
        className="w-full top-0 bottom-0 absolute"
        style={{
          backgroundImage: `linear-gradient(rgba(11, 11, 43, 0.5) 0%, rgba(11, 11, 43, 0.6) 27%`,
        }}
      />
      <div className="container relative z-10">
        <h1 className="text-4xl text-white font-bold text-center mb-6">
          BEST PLACE TO FIND AND EXPLORE <br /> THAT ALL YOU NEED
        </h1>
        <p className="text-base text-gray-200 text-center mb-20">
          Find Best Place, Restaurant, Hotel, Real State and many more think in
          just One click
        </p>
        <div className="flex gap-7">
          <div className="flex bg-white rounded w-full">
            <span className="w-full">
              <InputField
                className="text-sm placeholder:capitalize capitalize"
                title="what?"
                icon="/images/icons8-bulleted-list-48.png"
                placeholder="Ex: palce, resturent, food, automobile"
              />
            </span>
            <span className="w-full">
              <InputField
                className="text-sm placeholder:capitalize capitalize"
                title="location"
                icon="/images/icons8-eye-24.png"
                placeholder="Ex: london, newyork, rome"
              />
            </span>
          </div>
          <Link
            href=""
            className="bg-red-500 hover:bg-red-600 duration-300 rounded flex gap-3 items-center cursor-pointer px-[50px] py-[25px]"
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
    </section>
  );
}

export default Header;
