import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image1 from "../assets/features/Image1.jpg";
import Image2 from "../assets/features/Image2.jpg";
import Image3 from "../assets/features/Image3.jpg";
import Image4 from "../assets/features/Image4.jpg";
import Image5 from "../assets/features/Image5.jpg";

const content = [
  {
    title: "Extensive Genre Collection",
    content:
      " CleverBook provides a vast and diverse collection of books,manga, magazines, articles, and newspapers, ensuring that users can find content that matches their interests. Whether you're afan of fantasy novels, scientific journals, or daily news, CleverBook has something for everyone.",
    Image: Image1,
  },
  {
    title: "Personalized Recommendations",
    content:
      " Using advanced algorithms, CleverBook offers personalized reading suggestions based on user preferences, reading history, and ratings. This feature helps users discover new books and articles that match their tastes, ensuring a customized and enjoyable reading experience.",
    Image: Image2,
  },
  {
    title: "User-Friendly Interface with Advanced Search",
    content:
      "CleverBook features a clean, user-friendly interface that makes it easy to navigate and find specific reading materials. The advanced search function allows users to filter by genre, author, publication date, popularity, and more, making it effortless to locate desired content quickly.",
    Image: Image3,
  },
  {
    title: "Integrated Reading Experience",
    content:
      "CleverBook includes an integrated e-reader that allows users to read their purchased materials directly on the platform. The e-reader offers customizable settings such as font size, background color, and reading mode (day/night), enhancing readability and comfort.",
    Image: Image4,
  },
  {
    title: "Community and Social Features",
    content:
      "CleverBook fosters a sense of community among readers by providing discussion forums where users can share reviews, discuss books, and connect with like-minded individuals. Additionally, social sharing features allow users to share their favorite reads and recommendations on social media platforms, creating a vibrant and interactive community.",
    Image: Image5,
  },
];

function FeatruesTab() {
  const ref = useRef(null);
  const [isIndex, setIsIndex] = useState(0);
  const isInView = useInView(ref, { amount: 0.3 });
  const animationControl = useAnimation();

  useEffect(() => {
    if (isInView) {
      animationControl.start("final");
    }
  }, [isInView, isIndex]);

  return (
    <section id="Featrues" ref={ref} className="text-center py-16  font-mono">
      {/* heading */}
      <h2 className="font-poetsen px-8 lg:text-3xl lg:leading-relaxed tracking-tight lg:px-0">
        Discover{" "}
        <span className="bg-gradient-to-r mx-1.5 from-indigo-500/80 to-purple-500/80 px-2 py-1 rounded-lg text-black">
          CleverBook
        </span>
        : The Ultimate Online Bookstore for Every Reader
      </h2>

      {/* main  */}
      <div className="flex flex-col-reverse gap-8 lg:gap-0 lg:flex-row">
        {/* left-section */}
        <div className="px-5 space-y-7 lg:w-1/2 lg:px-12 lg:py-2 lg:pt-10 lg:space-y-5 ">
          {content.map((item, index) => (
            <div key={index}>
              <div className="text-left w-full space-y-5 lg:space-y-5">
                <button
                  className="text-left text-sm w-full lg:py-3 font-poetsen lg:text-lg"
                  onClick={() => setIsIndex(index)}
                >
                  {item.title}
                </button>
                {index === isIndex && (
                  <motion.div
                    initial={{ height: 0, opacity: 0, color: "transparent" }}
                    animate={{
                      height: "fit-content",
                      opacity: 1,
                      color: "white",
                    }}
                    transition={{ ease: "easeIn", duration: 0.35 }}
                    className="space-y-5 pb-3 text-sm lg:space-y-6 lg:text-base"
                  >
                    <p>{item.content}</p>
                    <button className="">Learn more &#8594;</button>
                  </motion.div>
                )}
                <hr />
              </div>
            </div>
          ))}
        </div>

        {/* right-section */}
        <div className=" lg:w-1/2 mt-8 lg:h-[80vh] rounded-s-3xl flex items-center justify-center">
          <motion.div
            variants={{
              initial: { y: 200, opacity: 0 },
              final: { y: 0, opacity: 1 },
            }}
            initial="initial"
            animate={animationControl}
            transition={{
              ease: "linear",
              duration: 0.6,
            }}
            className=" flex justify-center"
          >
            <img
              className="h-60 rounded-2xl"
              src={`${content[isIndex].Image}`}
              alt=""
            />
          </motion.div>
        </div>
      </div>
      {/* -------- */}

      {/* button */}
      <button className="p-[2px] relative font-bold tracking-tighter mt-10">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
        <div className="px-8 py-2  bg-black rounded-full  relative group transition duration-200 text-white hover:bg-transparent">
          View all features
        </div>
      </button>
    </section>
  );
}

export default FeatruesTab;
