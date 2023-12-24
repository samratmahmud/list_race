"use client";
import React from "react";

const vanuecards = [
  {
    thumbnail: "/images/e1.jpg",
    explore: [
      {
        title: "best rated",
        icon: "/images/icons8-drag-50.png",
        icon2: "/images/icons8-bookmark-32.png",
      },
    ],
    title: "Tommy Helfinger Bar",
    ratingpoint: "5.0",
    ratingPerson: "10 Ratings ",
    dolar: "Form 5$-300$",
    vanue: " Resturent",
    picture: "/images/person.png",
    describtion:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua....",
    offOn: "Close Now",
    iconGroup: [
      {
        location: "/images/",
        download: "/images/",
        like: "/images/",
      },
    ],
  },
];

function Explore() {
  const [show, setShow] = React.useState(false);
  return (
    <section className="bg-slate-200 pt-[117px] pb-24">
      <div className="container">
        <h2 className="text-xl font-medium mb-6 text-slate-500 text-center">
          EXPLORE
        </h2>
        <p className="text-md text-slate-400 mb-20 text-center">
          Explore New place, food, culture around the world and many more
        </p>
        <div
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
        >
          {vanuecards.map(({thumbnail, explore}, index) => (
            <div key={index} className="relative group">
              <div>
                <img className="w-full" src={thumbnail} alt="" />
              </div>
              <div
                className={`absolute bottom-4 w-full px-2.5 animate__animated animate__faster	500ms ${
                  show ? "animate__fadeInUp" : "animate__fadeOutDown"
                }`}
              >
                {explore.map(({title, icon, icon2}, index) => (
                  <div key={index} className="flex justify-between">
                    <div
                      role="button"
                      className="text-xs bg-primary px-3.5 rounded text-gray-200 flex items-center justify-center capitalize"
                    >
                      {title}
                    </div>
                    <div className="bg-gray-800 px-2 flex gap-2 py-1 h-7 w-[74px]">
                      <span>
                        <img className="w-5 h-5 rotate-12" src={icon} alt="" />
                      </span>
                      <span>
                        <img className="w-5 h-5" src={icon2} alt="" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Explore;
