import React from "react";

const articlesCards = [
  {
    thumbnail: "/images/b1.jpg",
    title: "How to find your Desired Place more quickly",
    postman: "Posted By ",
    admin: "admin",
    date: " March 2018",
    description:
      "Lorem ipsum dolor sit amet, consectetur de adipisicing elit, sed do eiusmod tempore incididunt ut labore et dolore magna.",
  },
  {
    thumbnail: "/images/b2.jpg",
    title: "How to find your Desired Place more quickly",
    postman: "Posted By ",
    admin: "admin",
    date: " March 2018",
    description:
      "Lorem ipsum dolor sit amet, consectetur de adipisicing elit, sed do eiusmod tempore incididunt ut labore et dolore magna.",
  },
  {
    thumbnail: "/images/b3.jpg",
    title: "How to find your Desired Place more quickly",
    postman: "Posted By ",
    admin: "admin",
    date: " March 2018",
    description:
      "Lorem ipsum dolor sit amet, consectetur de adipisicing elit, sed do eiusmod tempore incididunt ut labore et dolore magna.",
  },
];

function ArticlesBlog() {
  return (
    <section>
      <div className="container my-[120px]">
        <h2 className="text-xl font-medium mb-6 text-slate-500 text-center">
          NEWS AND ARTICLES
        </h2>
        <p className="text-md text-slate-400 mb-20 text-center">
          Always upto date with our latest News and Articles
        </p>
        <div className="grid grid-cols-3 gap-7">
          {articlesCards.map(
            ({thumbnail, title, postman, admin, date, description}, index) => (
              <div
                key={index}
                className="group shadow-md hover:shadow-4xl duration-300"
              >
                <img className="w-full" src={thumbnail} alt="" />
                <div className="py-[26px] px-7">
                  <h2 className="text-md font-medium group-hover:text-primary duration-300 mb-3">
                    {title}
                  </h2>
                  <h4 className="text-sm text-gray-300 mb-5">
                    <span>{postman}</span>
                    <span className="uppercase text-gray-800 font-medium">
                      {admin}
                    </span>
                    <span className="border border-gray-700 mx-3.5" />
                    <span>{date}</span>
                  </h4>
                  <p className="text-sm text-slate-400">{description}</p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default ArticlesBlog;
