import React from "react";

const counterProps = [
  {
    count: 100,
    title: "Listings",
  },
  {
    count: 500,
    title: "Projects Done",
  },
  {
    count: 100,
    title: "Awards Won",
  },
  {
    count: 100,
    title: "Cups of Coffee",
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
          <div className="flex gap-10">
            {counterProps.map(({count, title}, index) => (
              <div key={index}>
                <div className="flex items-center justify-center">
                  <div className="text-white text-4xl font-bold">{count}</div>
                  <div className="text-white text-2xl font-bold">{title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReviewCounter;
