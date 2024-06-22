import { icons } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

const menuList = [
  {
    icon: "",
    name: "Home",
    link: "",
  },
  {
    icon: "",
    name: "Explore",
    link: "",
  },
  {
    icon: "",
    name: "Notification",
    link: "",
  },
  {
    icon: "",
    name: "Create",
    link: "",
  },
  {
    icon: "",
    name: "Profile",
    link: "",
  },
];

function SidePannel() {
  return (
    <div className="w-[20vw]  bg-fuchsia-800 h-screen py-12 space-y-16">
      <div>Clever Books</div>

      {/* mapping content */}
      <div className="flex flex-col justify-center gap-8">
        {menuList.map((item) => (
          <Button variant="outline">{item.name}</Button>
        ))}
      </div>
      {/* --------------- */}

      <Button>
        <span>icon</span>
        <span>More</span>
      </Button>
    </div>
  );
}

export default SidePannel;
