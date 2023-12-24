import React from "react";

interface ExploreCardsProps {
  thumbnail: string;
  explore: {
    title: string;
    icon: string;
    icon2: string;
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
      <div className="relative ">
        <img className="w-full" src={thumbnail} alt="" />
        <div
          className={`absolute bottom-4 w-full px-2.5 animate__animated animate__faster	500ms ${
            show ? "animate__fadeInUp" : "animate__fadeOutDown"
          }`}
        >
          {explore.map(({title, icon, icon2}, index) => (
            <div className="flex justify-between">
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
              <div className="text-xs font-medium capitalize flex gap-2.5 items-center mb-5">
                <span className={`text-white px-2 rounded ${className}`}>
                  {ratingpoint}
                </span>
                <span className="text-gray-500">{ratingPerson}</span>
                <div className="">
                  <span className="border border-gray-700" />
                  <span className="text-gray-500 pl-2">{from}</span>
                  <span className="text-primary pr-2">{dolar}</span>
                  <span className="border border-gray-700" />
                </div>
                <span className="text-gray-500">{vanue}</span>
              </div>
            )
          )}
        </div>
        <div className="flex mb-7">
          <div className="flex-shrink-0">
            <img src={picture} alt="" />
          </div>
          <div className="text-xs text-gray-500 px-4">{describtion}</div>
        </div>
        <div className="border border-slate-800 mb-5" />
        <div>
          {iconGroup.map(({offOn, icons}, index) => (
            <div className="flex gap-6 justify-between items-center">
              <h3 role="button" className="text-xs text-primary">
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