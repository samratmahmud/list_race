import React from "react";

const counterProps = [
  {
    count: 100,
    title: "Listings",
  },
  {
    count: 500,
    title: "Listing Categories",
  },
  {
    count: 100,
    title: "Visitors",
  },
  {
    count: 100,
    title: "Happy Clients",
  },
];

function ReviewCounter() {
  return (
    <section className="relative">
      <div className="relative">
        <img
          className="bg-cover bg-no-repeat"
          src="/images/counter-banner.jpg"
          alt=""
        />
        <div className="bg-[rgba(75,75,75,.60)] w-full h-full absolute top-0 bottom-0" />
      </div>
      <div className="container">
        <div className="absolute top-32 bottom-32 z-30">
          <div className="flex gap-8">
            {counterProps.map(({count, title}, index) => (
              <div key={index} className="mb-6 flex flex-col items-center">
                <div className="text-5xl text-white">
                  {count}
                  <span>K+</span>
                </div>
                <h3 className="text-white text-xl capitalize font-medium">
                  {title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReviewCounter;
