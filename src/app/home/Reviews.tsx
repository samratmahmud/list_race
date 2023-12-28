"use client";
import React, {useState} from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const reviewsCards = [
  {
    name: "Tom Leakar",
    picture: "/images/c1.png",
    address: "london, UK",
    description: `
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.
  `,
  },
  {
    name: "Shohrab Hossain",
    picture: "/images/c3.png",
    address: "london, UK",
    description: `
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.
  `,
  },
  {
    name: "monirul islam",
    picture: "/images/c2.png",
    address: "london, UK",
    description: `
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.
  `,
  },
  {
    name: "Tom Leakar",
    picture: "/images/c4.png",
    address: "london, UK",
    description: `
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.
  `,
  },
  {
    name: "Tom Leakar",
    picture: "/images/c1.png",
    address: "london, UK",
    description: `
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.
  `,
  },
  {
    name: "Shohrab Hossain",
    picture: "/images/c3.png",
    address: "london, UK",
    description: `
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.
  `,
  },
  {
    name: "monirul islam",
    picture: "/images/c2.png",
    address: "london, UK",
    description: `
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.
  `,
  },
  {
    name: "Tom Leakar",
    picture: "/images/c4.png",
    address: "london, UK",
    description: `
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.
  `,
  },
];

function Reviews() {
  const [middleItemIndex, setMiddleItemIndex] = useState(
    Math.floor(reviewsCards.length / 2)
  );
  const handleSliderBeforeChange = (currentIndex: number) => {
    setMiddleItemIndex(currentIndex + 1);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 19200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="review">
      <div className="containe lg:my-28 md:my-20 my-14 overflow-hidden">
        <h2 className="text-xl font-medium md:mb-6 mb-4 text-slate-500 text-center">
          CLIENTS REVIEWS
        </h2>
        <p className="text-md text-slate-400 mb-9 text-center">
          What our client say about us
        </p>
        <Slider {...settings} beforeChange={handleSliderBeforeChange}>
          {reviewsCards.map(({name, picture, address, description}, index) => (
            <div key={index} className="md:px-3 px-1">
              <div
                className={`${
                  index === middleItemIndex
                    ? "shadow-4xl duration-200"
                    : "hover:shadow-md duration-200 opacity-50"
                } border border-slate-800 py-[50px] px-[30px] max-w-[415px] m-auto my-6`}
              >
                <div className="flex items-center gap-6 mb-5">
                  <div>
                    <img src={picture} alt="" />
                  </div>
                  <div>
                    <h2 className="text-base text-gray-800 font-medium mb-2.5">
                      {name}
                    </h2>
                    <div className="text-sm text-gray-300 capitalize mb-1">
                      {address}
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, index) => (
                        <img
                          key={index}
                          className="w-4 h-4"
                          src="/images/icons8-star-48.png"
                          alt=""
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-300 leading-[1.8]">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Reviews;
