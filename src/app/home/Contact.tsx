import InputField from "@/components/common/InputField";
import React from "react";

function Contact() {
  return (
    <section id="contact" className="bg-slate-200 lg:py-[150px] md:py-24 py-16">
      <div className="container">
        <h2 className="md:text-xl text-base font-medium uppercase md:mb-7 mb-5 text-gray-800 text-center">
          DO YOU WANT TO ADD YOUR BUSINESS LISTING WITH US?
        </h2>
        <p className="text-md font-medium text-gray-400 text-center mb-[52px]">
          Listrace offer you to list your business with us and we very much able
          to promote your Business.
        </p>
        <label className="flex md:flex-row flex-col gap-8 md:gap-0 max-w-[630px] m-auto group">
          <span className="w-full py-4 bg-white shadow-md group-hover:shadow-5xl duration-200">
            <InputField
              className="text-md"
              type="email"
              placeholder="Enter your email here"
            />
          </span>
          <div className="flex justify-center">
            <button className="bg-red-600 text-md text-white font-medium flex-shrink-0 px-8 capitalize rounded-r py-4 shadow-md group-hover:shadow-5xl duration-200">
              creat account
            </button>
          </div>
        </label>
      </div>
    </section>
  );
}

export default Contact;
