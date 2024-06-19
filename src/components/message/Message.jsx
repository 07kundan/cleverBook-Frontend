import React, { useState } from "react";
import { PiNotificationBold } from "react-icons/pi";

function Message() {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsActive(!isActive)}
        className="relative bg-gradient-to-r from-indigo-500 to-purple-500 ml-5 p-3 text-xs rounded-full"
      >
        <PiNotificationBold />
        {isActive && (
          <div className="absolute py-2 -left-[19rem] top-1/2 -translate-y-1/2 w-72 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-md font-poetsen lg:left-12">
            I can further improve as per requirements
          </div>
        )}
      </button>
    </>
  );
}

export default Message;
