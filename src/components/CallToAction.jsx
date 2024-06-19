import React, { useState } from "react";

function CallToAction({ signUpActive, setSignUpActive }) {
  return (
    <>
      <div id="CTA" className="relative py-20 lg:py-28 ">
        {/* body */}
        <div className="w-[86%] bg-gradient-to-r from-indigo-500 to-purple-500 space-y-6 m-auto text-center px-8 py-8 rounded-3xl lg:w-[85%] lg:py-32 lg:space-y-10">
          {/* main */}
          <div className="space-y-8 lg:space-y-10">
            <h3 className="text-xl lg:text-4xl font-poetsen">
              You can grow faster than you think!
            </h3>
            <p className="text-center lg:text-lg lg:w-[55%] lg:m-auto font-mono">
              Plan with Crest to fulfil your demand today, and dreams tomorrow.
              We bring the methods and technologies of large global companies to
              help brands of all sizes scale.
            </p>
          </div>

          {/* button */}
          <button
            onClick={() => setSignUpActive(!signUpActive)}
            className="font-mono font-bold px-7 py-2 bg-black rounded-full relative group transition duration-200 text-white hover:bg-transparent/60 lg:px-6 tracking-tighter"
          >
            Get started with CleverBook
          </button>
        </div>
      </div>
    </>
  );
}

export default CallToAction;
