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
    icon: "/images/icons8-restaurant-64.png",
    title: "Healthcaree",
    description: "200 listings",
  },
  {
    icon: "/images/icons8-restaurant-64.png",
    title: "Automotion",
    description: "120 listings",
  },
];

function HowItWork() {
  return (
    <section>
      <div className="container">
        <div className="flex gap-5 justify-between mb-5 relative -top-24 z-50">
          {itemsCards.map(({icon, title, description}, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center py-[25px] px-[68px] shadow-lg group bg-white hover:bg-primary duration-300 rounded"
            >
              <img className="w-11 h-11" src={icon} alt="" />
              <h2 className="text-md font-medium text-gray-800 group-hover:text-white mt-4 mb-3">
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
      </div>
    </section>
  );
}

export default HowItWork;
