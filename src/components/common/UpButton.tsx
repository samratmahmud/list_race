import React from "react";

function UpButton() {
  return (
    <section className="flex">
      <div className="bg-primary p-3 rounded-full flex items-center justify-center w-10 h-10">
        <img
          className="animate-bounce"
          src="/images/icons8-arrow-up-30.png"
          alt=""
        />
      </div>
    </section>
  );
}

export default UpButton;
