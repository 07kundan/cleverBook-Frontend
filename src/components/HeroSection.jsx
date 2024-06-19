import React from "react";
import Message from "./message/Message";
import Png1 from "../assets/Png1.png";
import { BackgroundBeams } from "./ui/background-beams";

function HeroSection({ signUpActive, setSignUpActive }) {
  return (
    <div
      id="Home"
      className="relative h-screen flex flex-col-reverse items-center bg-zinc-800/70 rounded-se-[15rem] lg:rounded-ee-full lg:pt-20 lg:flex-row"
    >
      <BackgroundBeams />

      {/* Message */}
      <div className="absolute top-[12%] right-[10%] lg:top-[20%] lg:right-[38%] ">
        <Message />
      </div>

      {/* Left-section */}
      <div className="h-[55%] py-8 text-center space-y-12 lg:space-y-20 lg:p-3 lg:h-fit lg:w-1/2 lg:pl-12">
        <div className="space-y-8 text-left pl-6 lg:pl-0">
          <h1 className="font-poetsen leading-loose text-xl font-semibold lg:text-3xl lg:font-bold lg:space-y-2">
            Meet the{" "}
            <span className="bg-gradient-to-r mx-1 from-indigo-500 to-purple-500 px-2 py-1 rounded-lg text-black">
              CleverBook
            </span>{" "}
            -:
            <p className="lg:pl-24 lg:text-2xl">
              Your Ultimate Learning Companion
            </p>
          </h1>
          <p className="text-base font-mono">
            Unlock a world of knowledge with the Clever Book. Designed to
            revolutionize your learning experience, this innovative tool
            combines traditional reading with cutting-edge technology.Dive into
            a smarter way of learning today.
          </p>
        </div>

        <button
          onClick={() => setSignUpActive(!signUpActive)}
          className="p-[3px] relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
          <div className="px-8 py-2 bg-black rounded-full  relative group transition duration-200 text-white hover:bg-transparent">
            Get Started with CleverBook
          </div>
        </button>
      </div>

      {/* Right section */}
      <div className="h-[45%] flex justify-center items-center pt-24 lg:w-1/2 lg:h-full">
        <img className="h-full lg:h-[80%]" src={`${Png1}`} alt="" />
      </div>
    </div>
  );
}

export default HeroSection;
