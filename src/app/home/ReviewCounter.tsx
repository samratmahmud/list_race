"use client";
import React, {useState} from "react";
import VisibilitySensor from "react-visibility-sensor";
import CountUp from "react-countup";

const counterProps = [
  {
    end: 90,
    title: "Listings",
  },
  {
    end: 40,
    title: "Listing Categories",
  },
  {
    end: 65,
    title: "Visitors",
  },
  {
    end: 50,
    title: "Happy Clients",
  },
];

function ReviewCounter() {
  const [isVisible, setIsVisible] = useState(false);

  const onVisibilityChange = (isVisible: any) => {
    if (isVisible) {
      setIsVisible(true);
    }
  };

  return (
    <section>
      <div className="container py-32">
        <div className="flex justify-between gap-8 m-auto">
          {counterProps.map(({end, title}, index) => (
            <VisibilitySensor key={index} onChange={onVisibilityChange}>
              <div className="mb-6 flex flex-col items-center text-white relative z-20">
                <div className="text-5xl">
                  {isVisible && <CountUp start={0} end={end} duration={8} />}
                  <span>K+</span>
                </div>
                <h3 className="text-xl capitalize font-medium">{title}</h3>
              </div>
            </VisibilitySensor>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ReviewCounter;
