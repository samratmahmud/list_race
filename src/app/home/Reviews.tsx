import React from "react";

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
];

function Reviews() {
  return (
    <section>
      <div className="containe my-28">
        <h2 className="text-xl font-medium mb-6 text-slate-500 text-center">
          CLIENTS REVIEWS
        </h2>
        <p className="text-md text-slate-400 mb-9 text-center">
          What our client say about us
        </p>
        <div className="flex justify-between gap-5">
          {reviewsCards.map(({name, picture, address, description}, index) => (
            <div
              key={index}
              className="hover:shadow-4xl duration-300 border border-slate-800 py-[50px] px-[30px] max-w-[415px] m-auto"
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
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;
