import React from "react";
import { GrResources } from "react-icons/gr";
import { GiBookPile } from "react-icons/gi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaBlackTie } from "react-icons/fa";

import styles from "./styles.module.css";

const content = [
  {
    title: "Diverse Resources",
    description:
      " CleverBook aggregates diverse resources from various disciplines, providing users with comprehensive access to books, articles, Magazine all in one place.",
    icon: <GrResources />,
  },
  {
    title: "Costs of Books",
    description:
      "CleverBook offers affordable access to a wide range of educational materials, and in some cases, provides free resources to support learning for all users.",

    icon: <GiBookPile />,
  },
  {
    title: "Online Learning",
    description:
      "CleverBook fosters a sense of community by incorporating social features, such as discussion forums, group projects, and peer-to-peer learning opportunities, encouraging collaboration and interaction among users.",
    icon: <BsFillPersonLinesFill />,
  },
  {
    title: "Personalized Learning",
    description:
      "CleverBook uses AI and machine learning algorithms to personalize the learning experience, adapting to the user’s learning style, pace, and progress to provide customized content and recommendations.",
    icon: <FaBlackTie />,
  },
];

function KeyProblems() {
  return (
    <section
      id="KeyFeatures"
      className="py-16 px-4 space-y-14 lg:space-y-4 lg:min-h-screen lg:flex lg:flex-col lg:justify-center lg:items-center lg:gap-12"
    >
      <h2 className="text-center lg:text-3xl font-bold tracking-tight font-poetsen">
        Some key issues that{" "}
        <span className="bg-gradient-to-r mx-1.5 from-indigo-500/80 to-purple-500/80 px-2 py-1 rounded-lg text-black">
          CleverBook
        </span>
        , aims to target and solve
      </h2>

      <div className="w-full flex flex-col lg:flex-row lg:justify-center gap-6 ">
        {content.map((item) => (
          <div
            key={item.title}
            className="font-mono p-5 space-y-2 bg-transparent/40 rounded-3xl lg:py-8 lg:space-y-4 lg:min-h-[60vh] lg:w-[22%] "
          >
            <div
              className={` pl-4 text-5xl font-semibold bg-gradient-to-r from-indigo-500 to-purple-500 inline-block px-3 py-2 rounded-md text-black`}
            >
              {item.icon}
            </div>
            <h3 className="font-semibold font-sans text-lg lg:text-2xl lg:tracking-tight ">
              {item.title}
            </h3>
            <p className="text-sm leading-tight tracking-tighter lg:text-sm ">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default KeyProblems;
