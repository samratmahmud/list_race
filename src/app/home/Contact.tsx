import InputField from "@/components/common/InputField";
import React from "react";

function Contact() {
  return (
    <section id="contact" className="bg-slate-200 py-[150px]">
      <div className="container">
        <h2 className="text-xl font-medium uppercase mb-7 text-gray-800 text-center">
          DO YOU WANT TO ADD YOUR BUSINESS LISTING WITH US?
        </h2>
        <p className="text-md font-medium text-gray-400 text-center mb-[52px]">
          Listrace offer you to list your business with us and we very much able
          to promote your Business.
        </p>
        <label className="flex max-w-[630px] m-auto shadow-md hover:shadow-5xl duration-200">
          <span className="w-full py-4 bg-white">
            <InputField
              className="text-md"
              type="email"
              placeholder="Enter your email here"
            />
          </span>
          <button className="bg-red-600 text-md text-white font-medium flex-shrink-0 px-8 capitalize rounded-r">
            creat account
          </button>
        </label>
      </div>
    </section>
  );
}

export default Contact;
