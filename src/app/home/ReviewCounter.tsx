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
      <div className="bg-cover bg-center bg-no-repeat min-h-[390px] bg-count relative">
        <div className="bg-[rgba(75,75,75,.60)] w-full h-full absolute top-0 bottom-0" />
        <div className="container lg:py-32 md:py-24 py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 md:justify-between justify-center gap-7 m-auto">
            {counterProps.map(({end, title}, index) => (
              <VisibilitySensor key={index} onChange={onVisibilityChange}>
                <div className="flex flex-col items-center text-white relative z-20">
                  <div className="xl:text-5xl text-3xl">
                    {isVisible && <CountUp start={0} end={end} duration={8} />}
                    <span>K+</span>
                  </div>
                  <h3 className="xl:text-xl text-base capitalize font-medium">
                    {title}
                  </h3>
                </div>
              </VisibilitySensor>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReviewCounter;
