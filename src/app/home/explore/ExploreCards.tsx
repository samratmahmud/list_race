import React from "react";
import Rating from "./Rating";

interface ExploreCardsProps {
  thumbnail: string;
  explore: {
    title: string;
  }[];
  title: string;
  ratingSide: {
    ratingpoint: string;
    ratingPerson: string;
    dolar: string;
    vanue: string;
    from: string;
    className: string;
  }[];
  picture: string;
  describtion: string;
  iconGroup: {
    offOn: string;
    icons: string[];
  }[];
}

function ExploreCards(props: ExploreCardsProps) {
  const {
    thumbnail,
    explore,
    title,
    ratingSide,
    picture,
    describtion,
    iconGroup,
  } = props;
  const [show, setShow] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      className="group border border-gray-100 rounded hover:shadow-4xl duration-300"
    >
      <div className="relative">
        <img className="w-full" src={thumbnail} alt="" />
        <div
          className={`absolute bottom-4 w-full px-2.5 animate__animated animate__faster	500ms ${
            show ? "animate__fadeInUp" : "animate__fadeOutDown"
          }`}
        >
          {explore.map(({title}, index) => (
            <div key={index} className="flex justify-between">
              <div
                role="button"
                className="text-xs bg-primary px-3.5 rounded text-gray-200 flex items-center justify-center capitalize"
              >
                {title}
              </div>
              <div className="flex gap-2">
                <span className="bg-gray-800 px-1.5 py-1.5 w-[30px] h-7">
                  <img src="/images/icons8-drag-50 (1).png" alt="" />
                </span>
                <span className="bg-gray-800 px-1.5 py-1.5 w-[30px] h-7">
                  <img src="/images/icons8-bookmark-32.png" alt="" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="py-6 pr-6 pl-4">
        <h3 className="text-md font-medium text-gray-800 capitalize mb-4">
          {title}
        </h3>
        <div>
          {ratingSide.map(
            (
              {ratingpoint, ratingPerson, dolar, vanue, className, from},
              index
            ) => (
              <Rating
                key={index}
                ratingpoint={ratingpoint}
                ratingPerson={ratingPerson}
                dolar={dolar}
                vanue={vanue}
                className={className}
                from={from}
              />
            )
          )}
        </div>
        <div className="flex md:flex-row flex-col md:mb-7 mb-5">
          <div className="flex-shrink-0">
            <img src={picture} alt="" />
          </div>
          <div className="text-xs text-gray-500 md:pl-4">{describtion}</div>
        </div>
        <div className="border border-slate-800 mb-5" />
        <div>
          {iconGroup.map(({offOn, icons}, index) => (
            <div
              key={index}
              className="flex md:flex-row flex-col gap-6 md:justify-between md:items-center"
            >
              <h3
                role="button"
                className={`text-xs ${
                  offOn === "Close Now" ? "text-primary" : "text-green-600"
                }`}
              >
                {offOn}
              </h3>
              <div className="flex gap-6">
                {icons.map((icon) => (
                  <img className="w-4 h-4 cursor-pointer" src={icon} alt="" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExploreCards;
