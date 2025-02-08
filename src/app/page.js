"use client";
// import { getQuestionsAndAnswers } from "./htmlfiles";
import Image from "next/image";
import Navbar from "./navbar";
import Questionscard from "./questionscard";
import faqData from "./faq.json"; // Import the JSON file
// import Dropdown from "./dropdown";
import { useState, useEffect } from "react";
import ToggleContent from "./dropdown";
import MyComponent from "./Mycomponent";
import Typewriter from "./typewriter";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="pt-24">
        <div className="bg-[url('kumbh3.jpg')] bg-cover bg-center h-[90vh] flex items-center justify-center">
          <div className="bg-[#000000a8] h-full w-full">
            <h2 className="text-4xl sm:text-5xl tiro text-white p-5 pt-20 pl-10">
              <Typewriter text="Kumbh Mela," delay={100} />
            </h2>
            <p className="text-lg sm:text-2xl tiro-small text-white p-7 pl-10 sm:pl-20">
              <Typewriter
                text="Kumbh Mela which translates to 'festival of the Sacred Pitcher', is an important Hindu pilgrimage, celebrated approximately every 6, 12 and 144 years, correlated with the partial or full revolution of Jupiter and representing the largest human gathering in the world. Traditionally, the riverside fairs at four major pilgrimage sites are recognised as the Kumbh Melas: Prayagraj (Ganges-Yamuna-Sarasvati rivers confluence), Haridwar (Ganges), Nashik-Trimbak (Godavari), and Ujjain (Shipra). It was asserted that, in 2022, after a 700-year break, Bansberia (Hooghly), hosted the pilgrimage again."
                speed={20}
              />
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 p-4 pl-20">
          <ToggleContent />
        </div>
      </div>
    </div>
  );
}
