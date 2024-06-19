import React, { useState } from "react";
import Profile1 from "../assets/Profile1.jpg";
import Profile2 from "../assets/Profile2.jpg";
import Profile3 from "../assets/Profile3.jpg";
import Book from "../assets/Book.jpg";

const content = [
  {
    text: "As someone who devours books like they're going out of style, CleverBook has been a game-changer. Their vast library offers something for every mood and interest, from classic novels to the latest bestsellers. I love the personalized recommendations that help me discover hidden gems, and the ability to adjust font size and background lighting makes reading a truly comfortable experience. ",
    author: "Pyara Chuha",
    role: "Co-founder, Chori",
    image: Profile1, // Placeholder image URL
  },
  {
    text: "CleverBook isn't just about entertainment; it's a fantastic tool for lifelong learning. Their extensive collection of non-fiction titles, audiobooks, and even educational articles allows me to explore new subjects and expand my knowledge base. The curated reading lists on various topics are fantastic for focused learning, and the note-taking and highlighting features make it easy to retain key information.",
    author: "Shwet Bhed",
    role: "Co-founder, Wool ",
    image: Profile2, // Placeholder image URL
  },
  {
    text: "With kids of different ages, finding reading materials that cater to everyone can be a challenge. CleverBook solves this problem perfectly! Their curated children's section offers age-appropriate books, interactive stories, and even educational games that keep my kids engaged and entertained. It's a fantastic way to instill a love of reading from a young age.",
    author: "Chalak Lomdi",
    role: "Co-founder, Chalak",
    image: Profile3, // Placeholder image URL
  },
];

function Review() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? content.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === content.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div id="Reviews" className="py-16 lg:px-10 ">
      <h2 className="font-poetsen text-center text-3xl"> Reviews</h2>
      <div className="font-mono tracking-tighter min-h-screen lg:h-screen flex flex-col-reverse justify-between gap-10 p-4 py-6 lg:flex-row lg:gap-0">
        {/* left section */}
        <div className="lg:flex-1 lg:max-w-3xl">
          <div className="p-3 relative h-[50vh] lg:h-80">
            {content.map((item, index) => (
              <div
                key={index}
                className={`absolute transition-opacity duration-700 space-y-12 ease-in-out ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                {/* descrioption */}
                <p className="text-base lg:text-lg">{item.text}</p>

                {/* person */}
                <div className="flex items-center mt-4">
                  <img
                    className="w-12 h-12 rounded-full mr-4"
                    src={item.image}
                    alt={item.author}
                  />
                  <div>
                    <p className="font-poetsen">{item.author}</p>
                    <p className="">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* arrows */}
          <div className="pl-7 my-8 hidden lg:flex justify-start lg:gap-4">
            <button onClick={prevSlide} className="p-[2px] relative h-10 w-10">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
              <div className="h-full w-full bg-black rounded-full relative flex items-center justify-center group transition duration-200 text-white hover:bg-transparent">
                &lt;
              </div>
            </button>

            <button onClick={nextSlide} className="p-[2px] relative h-10 w-10">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
              <div className="h-full w-full bg-black rounded-full relative flex items-center justify-center group transition duration-200 text-white hover:bg-transparent">
                &gt;
              </div>
            </button>
          </div>

          {/* below button */}
          <div className=" flex flex-wrap justify-around gap-y-7 lg:flex-nowrap lg:gap-0 lg:justify-around lg:items-center">
            <button className="">
              <div className="px-8 py-4 rounded-xl lg:px-14 lg:py-4 bg-gradient-to-r from-indigo-500 to-purple-500 lg:rounded-3xl">
                <p className="font-bold text-xl">Upto 95%</p>
                <p className="text-sm">Demand Fulfilment</p>
              </div>
            </button>
            <button className="">
              <div className="px-8 py-4 rounded-xl lg:px-14 lg:py-4 bg-gradient-to-r from-indigo-500 to-purple-500 lg:rounded-3xl">
                <p className="font-bold text-xl">&lt; 3%</p>
                <p className="text-sm">Daily Stock-out</p>
              </div>
            </button>

            <button className="p-[2px] relative">
              <div className="absolute inset-0 bg-gradient-to-r rounded-full from-indigo-500 to-purple-500 lg:rounded-3xl" />
              <div className="px-8 py-3 lg:px-16 lg:py-4 rounded-full  bg-black lg:rounded-3xl relative group transition duration-200 text-white">
                <span className="text-xl font-bold">Read Story</span>{" "}
                <br className="hidden lg:block" />
                &rarr;
              </div>
            </button>

            {/*for small screen arrows */}
            <div className="flex items-center gap-4 mr-8 lg:hidden ">
              <button
                onClick={prevSlide}
                className="p-[2px] relative h-10 w-10"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
                <div className="h-full w-full bg-black rounded-full relative flex items-center justify-center group transition duration-200 text-white hover:bg-transparent">
                  &lt;
                </div>
              </button>

              <button
                onClick={nextSlide}
                className="p-[2px] relative h-10 w-10"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
                <div className="h-full w-full bg-black rounded-full relative flex items-center justify-center group transition duration-200 text-white hover:bg-transparent">
                  &gt;
                </div>
              </button>
            </div>
            {/* ------- */}
          </div>
        </div>

        {/* right image */}
        <div className=" w-full flex justify-center items-center mt-8 md:mt-0 lg:w-[30%]">
          <img
            className="w-[70%] h-auto rounded-3xl lg:w-full"
            src={`${Book}`}
            alt="Samosa Party"
          />
        </div>
      </div>
    </div>
  );
}

export default Review;
