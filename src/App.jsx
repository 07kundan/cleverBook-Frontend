import { useEffect, useState } from "react";
import axios from "axios";

import { Outlet } from "react-router-dom";
import Home from "./Pages/Home";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    async function fetchApi() {
      const data = await axios.get("/api");
      console.log("data", data);
    }
    fetchApi();
  }, []);

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }

  return <Outlet />;

  // return <>{isLoggedIn ? <Outlet /> : <Home />} </>;
}

export default App;
