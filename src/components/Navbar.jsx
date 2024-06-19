import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CgMenuBoxed } from "react-icons/cg";
import Png1 from "../assets/Png1.png";

const NavItems = [
  { name: "Home" },
  { name: "KeyFeatures" },
  { name: "WhyCleverBook" },
  { name: "Reviews" },
  { name: "Featrues" },
  { name: "CTA" },
];

function NavBar({ visible, signUpActive, setSignUpActive }) {
  const [menuIsActive, setMenuIsActive] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePage = (index) => {
    const element = document.getElementById(index.name);
    if (element) {
      window.scrollTo({
        // top: element.offsetHeight * index.index,

        top: element.offsetTop + (window.innerWidth < 768 ? 0 : 20),
        behavior: "smooth",
      });
    }
    setMenuIsActive(false);
  };

  return (
    <>
      <motion.div
        initial={{ translateX: "-50%" }}
        animate={{
          y: visible ? 0 : -100,
        }}
        transition={{
          ease: "linear",
          duration: 0.3,
        }}
        className="w-[95vw] m-auto p-2 px-8 flex justify-between items-center z-30 bg-transparent/80 fixed top-2 left-1/2 rounded-2xl lg:justify-around lg:p-2.5 lg:px-5 lg:w-[92vw] "
      >
        {/* Name */}
        <motion.span
          initial={{ rotateZ: 6 }}
          animate={{
            rotateZ: 0,
          }}
          transition={{
            ease: "backIn",
            duration: 0.5,
          }}
          className="flex  items-center gap-1 text-xl leading-10 w-fit font-semibold tracking-tighter"
        >
          <img className="h-8" src={`${Png1}`} alt="" />
          Clever Books
        </motion.span>
        {/* dots */}
        <button
          className="lg:hidden text-3xl"
          onClick={() => {
            setMenuIsActive(!menuIsActive);
          }}
        >
          <CgMenuBoxed />
        </button>

        {/* ------- */}
        {/*  For Big Screen */}
        {isLargeScreen && (
          <>
            <div className="flex justify-around gap-4 p-1 px-3">
              {/* Routes */}
              {NavItems.map((item) => (
                <button
                  className="text-base hover:underline underline-offset-2"
                  onClick={() => {
                    handlePage(item);
                  }}
                  key={item.name}
                >
                  {item.name}
                </button>
              ))}
            </div>
            {/* -------------- */}

            <div className="space-x-6">
              <button onClick={() => setSignUpActive(!signUpActive)}>
                Login
              </button>
              <button className="px-6 py-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full">
                Contact us
              </button>
            </div>
          </>
        )}
      </motion.div>

      {/* smaller screen */}
      {menuIsActive && (
        <div className="h-screen w-full text-lg bg-transparent/90 fixed top-0 z-10 text-center space-y-12 pt-32 px-12">
          <div className="space-y-8 text-xl font-mono font-extrabold tracking-tighter">
            {NavItems.map((item) => (
              <button
                onClick={() => {
                  handlePage(item);
                }}
                className="text-left block"
                key={item.name}
              >
                {item.name}
              </button>
            ))}
          </div>
          <button className="font-poetsen rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 px-6 py-2">
            Contact Us
          </button>
        </div>
      )}
    </>
  );
}

export default NavBar;
