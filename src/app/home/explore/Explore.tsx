"use client";
import React from "react";
import ExploreCards from "./ExploreCards";

const vanuecards = [
  {
    thumbnail: "/images/e1.jpg",
    explore: [
      {
        title: "best rated",
      },
    ],
    title: "Tommy Helfinger Bar",
    ratingSide: [
      {
        ratingpoint: "5.0",
        ratingPerson: "10 Ratings ",
        dolar: "5$-300$",
        vanue: " Resturent",
        from: "from",
        className: "bg-purple-400",
      },
    ],
    picture: "/images/person.png",
    describtion:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua....",
    iconGroup: [
      {
        offOn: "Close Now",
        icons: [
          "/images/icons8-location-48 (1).png",
          "/images/icons8-upload-48.png",
          "/images/icons8-love-24.png",
        ],
      },
    ],
  },
  {
    thumbnail: "/images/e2.jpg",
    explore: [
      {
        title: "featured",
      },
    ],
    title: "Swim And Dine Resort",
    ratingSide: [
      {
        ratingpoint: "4.5",
        ratingPerson: "8 Ratings ",
        dolar: "50$-500$",
        vanue: "Hotel",
        from: "from",
        className: "bg-green-600",
      },
    ],
    picture: "/images/person.png",
    describtion:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua....",
    iconGroup: [
      {
        offOn: "Open Now",
        icons: [
          "/images/icons8-location-48 (1).png",
          "/images/icons8-upload-48.png",
          "/images/icons8-love-24.png",
        ],
      },
    ],
  },
  {
    thumbnail: "/images/e3.jpg",
    explore: [
      {
        title: "best rated",
      },
    ],
    title: "Europe Tour",
    ratingSide: [
      {
        ratingpoint: "5.0",
        ratingPerson: "15 Ratings ",
        dolar: "5k$-10k$",
        vanue: "Destination",
        from: "from",
        className: "bg-orange-500",
      },
    ],
    picture: "/images/person.png",
    describtion:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua....",
    iconGroup: [
      {
        offOn: "Close Now",
        icons: [
          "/images/icons8-location-48 (1).png",
          "/images/icons8-upload-48.png",
          "/images/icons8-love-24.png",
        ],
      },
    ],
  },
  {
    thumbnail: "/images/e4.jpg",
    explore: [
      {
        title: "most view",
      },
    ],
    title: "Banglow With Swiming Pool",
    ratingSide: [
      {
        ratingpoint: "5.0",
        ratingPerson: "10 Ratings ",
        dolar: "10k$-15k$",
        vanue: "Real Estate",
        from: "from",
        className: "bg-purple-400",
      },
    ],
    picture: "/images/person.png",
    describtion:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua....",
    iconGroup: [
      {
        offOn: "Close Now",
        icons: [
          "/images/icons8-location-48 (1).png",
          "/images/icons8-upload-48.png",
          "/images/icons8-love-24.png",
        ],
      },
    ],
  },
  {
    thumbnail: "/images/e5.jpg",
    explore: [
      {
        title: "featured",
      },
    ],
    title: "Vintage Car Expo",
    ratingSide: [
      {
        ratingpoint: "4.2",
        ratingPerson: "8 Ratings ",
        dolar: "500$-1200$",
        vanue: "Automotion",
        from: "from",
        className: "bg-green-600",
      },
    ],
    picture: "/images/person.png",
    describtion:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua....",
    iconGroup: [
      {
        offOn: "Open Now",
        icons: [
          "/images/icons8-location-48 (1).png",
          "/images/icons8-upload-48.png",
          "/images/icons8-love-24.png",
        ],
      },
    ],
  },
  {
    thumbnail: "/images/e6.jpg",
    explore: [
      {
        title: "best rated",
      },
    ],
    title: "Europe Tour",
    ratingSide: [
      {
        ratingpoint: "5.0",
        ratingPerson: "15 Ratings ",
        dolar: "5k$-10k$",
        vanue: "Destination",
        from: "from",
        className: "bg-red-300",
      },
    ],
    picture: "/images/person.png",
    describtion:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua....",
    iconGroup: [
      {
        offOn: "Close Now",
        icons: [
          "/images/icons8-location-48 (1).png",
          "/images/icons8-upload-48.png",
          "/images/icons8-love-24.png",
        ],
      },
    ],
  },
];

function Explore() {
  return (
    <section
      id="explore"
      className="bg-slate-200 lg:pt-[117px] md:pt-20 pt-12 lg:pb-24 md:pb-16 pb-12"
    >
      <div className="container">
        <h2 className="text-xl font-medium md:mb-6 mb-4 text-slate-500 text-center">
          EXPLORE
        </h2>
        <p className="text-md text-slate-400 lg:mb-20 md:mb-14 mb-12 text-center">
          Explore New place, food, culture around the world and many more
        </p>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-7">
          {vanuecards.map(
            (
              {
                thumbnail,
                explore,
                ratingSide,
                title,
                describtion,
                picture,
                iconGroup,
              },
              index
            ) => (
              <ExploreCards
                key={index}
                thumbnail={thumbnail}
                explore={explore}
                ratingSide={ratingSide}
                title={title}
                describtion={describtion}
                picture={picture}
                iconGroup={iconGroup}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default Explore;
