"use client";
import React, { useState } from "react";

const LanguageToggle = () => {
  const [isHindi, setIsHindi] = useState(false);

  const toggleLanguage = () => {
    setIsHindi((prev) => !prev);
  };

  return (
    <div className="flex items-center space-x-[1.15vw]">
      <span className={isHindi ? "text-gray-500" : "text-black font-bold"} style={{ fontSize: "0.86vw" }}>English</span>
      <div
        className="relative bg-gray-300 rounded-full cursor-pointer p-[0.29vw]"
        style={{ width: "4.61vw", height: "2.3vw" }}
        onClick={toggleLanguage}
      >
        <div
          className={`absolute bg-white rounded-full shadow-md transition-transform duration-300 ease-in-out ${isHindi ? "translate-x-[2.3vw]" : ""}`}
          style={{ width: "1.73vw", height: "1.73vw", top: "0.29vw", left: "0.29vw" }}
        ></div>
      </div>
      <span className={isHindi ? "text-black font-bold" : "text-gray-500"} style={{ fontSize: "0.86vw" }}>हिन्दी</span>
    </div>
  );
};

export default LanguageToggle;
