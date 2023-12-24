import React from "react";

const vanuecards = [
  {
    thumbnail: "/images/e1.jpg",
    explore: [{title: "best rated", icon: "/images/", icon2: "/images/"}],
  },
];

function Explore() {
  return (
    <section className="bg-slate-200 pt-[117px] pb-24">
      <div className="container">
        <h2 className="text-xl font-medium mb-6 text-slate-500 text-center">
          EXPLORE
        </h2>
        <p className="text-md text-slate-400 mb-20 text-center">
          Explore New place, food, culture around the world and many more
        </p>
        <div>
          {vanuecards.map(({thumbnail, explore}, index) => (
            <div key={index}>
              <div>
                <img src={thumbnail} alt="" />
              </div>
              <div>
                {explore.map(({title, icon, icon2}, index) => (
                  <div key={index}>
                    <div>{title}</div>
                    <div>
                      <span>
                        <img src={icon} alt="" />
                      </span>
                      <span>
                        <img src={icon2} alt="" />
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
