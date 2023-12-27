import React from "react";

const itemsCards = [
  {
    icon: "/images/icons8-restaurant-64.png",
    title: "Resturent",
    description: "150 listings",
  },
  {
    icon: "/images/icons8-bus-50.png",
    title: "Destination",
    description: "214 listings",
  },
  {
    icon: "/images/icons8-building-100.png",
    title: "Hotels",
    description: "185 listings",
  },
  {
    icon: "/images/icons8-pills-64.png",
    title: "Healthcaree",
    description: "200 listings",
  },
  {
    icon: "/images/icons8-air-recirculation-50.png",
    title: "Automotion",
    description: "120 listings",
  },
];

const loremCards = [
  {
    icon: "/images/icons8-lightbulb-64.png",
    title: "Choose what to Do",
    contain:
      "Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt ut laboremagna aliqua.",
    btn: "Read More",
  },
  {
    icon: "/images/icons8-binoculars-32.png",
    title: "Find what you want",
    contain:
      "Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt ut laboremagna aliqua.",
    btn: "Read More",
  },
  {
    icon: "/images/icons8-location-64.png",
    title: "Explore amazing Place",
    contain:
      "Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt ut laboremagna aliqua.",
    btn: "Read More",
  },
];

function HowItWork() {
  return (
    <section>
      <div id="howIt" className="container mb-[90px]">
        <div className="flex flex-wrap md:gap-7 gap-5 lg:justify-between md:mb-5 relative md:-top-24 z-50 my-[60px] md:my-0">
          {itemsCards.map(({icon, title, description}, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center py-[25px] sm:max-w-[205px] px-1 w-full shadow-lg group bg-white hover:bg-primary duration-300 rounded"
            >
              <img className="w-11 h-11" src={icon} alt="" />
              <h2 className="text-md font-medium text-gray-800 group-hover:text-white mt-4 mb-2">
                {title}
              </h2>
              <p className="text-sm text-slate-400 group-hover:text-white">
                {description}
              </p>
            </div>
          ))}
        </div>
        <h2 className="text-xl font-medium text-slate-500 text-center mb-6">
          HOW IT WORKS
        </h2>
        <p className="text-md text-slate-400 text-center mb-[73px]">
          Learn More about how our website works
        </p>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-7">
          {loremCards.map(({icon, title, contain, btn}, index) => (
            <div
              key={index}
              className="py-[50px] px-[42px] w-full shadow-md hover:bg-primary duration-500 rounded group flex flex-col justify-center items-center"
            >
              <div className="mb-9 bg-slate-100 px-5 py-5 group-hover:bg-white rounded-full w-20 h-20 flex items-center justify-center">
                <img src={icon} alt="" />
              </div>
              <h2 className="text-base font-medium group-hover:text-white text-gray-800 mb-5">
                {title}
              </h2>
              <p className="text-sm leading-relaxed text-center text-slate-400 group-hover:text-white mb-6">
                {contain}
              </p>
              <button className="text-xs text-slate-400 border border-gray-600 rounded px-5 py-1.5 group-hover:bg-white">
                {btn}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWork;
