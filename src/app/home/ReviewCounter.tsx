"use client";
import React from "react";
import CountUp from "react-countup";

const counterProps = [
  {
    count: <CountUp start={0} end={90} duration={8} />,
    title: "Listings",
  },
  {
    count: <CountUp start={0} end={40} duration={8} />,
    title: "Listing Categories",
  },
  {
    count: <CountUp start={0} end={65} duration={8} />,
    title: "Visitors",
  },
  {
    count: <CountUp start={0} end={50} duration={8} />,
    title: "Happy Clients",
  },
];

function ReviewCounter() {
  return (
    <section>
      <div className="container py-32">
        <div className="flex justify-between gap-8 m-auto">
          {counterProps.map(({count, title}, index) => (
            <div
              key={index}
              className="mb-6 flex flex-col items-center text-white relative z-20"
            >
              <div className="text-5xl">
                {count}
                <span>K+</span>
              </div>
              <h3 className="text-xl capitalize font-medium">{title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ReviewCounter;
