import { useEffect, useState } from "react";
import axios from "axios";

import { Navigate, Outlet } from "react-router-dom";
import Home from "./Pages/Home";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import { Button } from "./components/ui/button";
import SidePannel from "./components/SidePannel";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // useEffect(() => {
  //   async function fetchApi() {
  //     const data = await axios.get("/api");
  //     console.log("data", data);
  //   }
  //   fetchApi();
  // }, []);

  if (!isLoggedIn) {
    return <Home />;
  }

  return (
    <div className="bg-zinc-600 flex">
      {/* <NavBar /> */}
      <SidePannel />
      <Outlet />
    </div>
  );

  // return <>{isLoggedIn ? <Outlet /> : <Home />} </>;
}

export default App;
