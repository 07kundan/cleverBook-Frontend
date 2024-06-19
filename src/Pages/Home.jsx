import { useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import SignUpLogin from "../components/SignUpLogin";
import NavBar from "../components/Navbar";
import WhyCleverBook from "../components/WhyCleverBook";
import Footer from "../components/Footer";
import FeatruesTab from "../components/FeatruesTab";
import CallToAction from "../components/CallToAction";
import Review from "../components/Review";
import HeroSection from "../components/HeroSection";
import KeyProblem from "../components/keyProblems/KeyProblems";

function Home() {
  const [visible, setVisible] = useState(true);
  const { scrollYProgress } = useScroll();
  const [signUpActive, setSignUpActive] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious();

      if (scrollYProgress.get() < 0) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <div className="bg-zinc-900 text-white">
      {signUpActive && (
        <SignUpLogin
          signUpActive={signUpActive}
          setSignUpActive={setSignUpActive}
        />
      )}

      <NavBar
        visible={visible}
        signUpActive={signUpActive}
        setSignUpActive={setSignUpActive}
      />
      <HeroSection
        signUpActive={signUpActive}
        setSignUpActive={setSignUpActive}
      />
      <KeyProblem />
      <WhyCleverBook />
      <Review />
      <FeatruesTab />
      <CallToAction
        signUpActive={signUpActive}
        setSignUpActive={setSignUpActive}
      />
      <Footer />
    </div>
  );
}

export default Home;
