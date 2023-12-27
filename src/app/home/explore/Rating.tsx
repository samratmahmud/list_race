import React from "react";

interface RatingProps {
  ratingpoint: string;
  ratingPerson: string;
  dolar: string;
  vanue: string;
  from: string;
  className: string;
}

function Rating(props: RatingProps) {
  const {ratingpoint, ratingPerson, dolar, vanue, from, className} = props;

  return (
    <div className="text-xs font-medium capitalize flex flex-wrap gap-2.5 items-center mb-5">
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
  );
}

export default Rating;
