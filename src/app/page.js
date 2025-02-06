"use client";
// import { getQuestionsAndAnswers } from "./htmlfiles";
import Image from "next/image";
import Navbar from "./navbar";
import Questionscard from "./questionscard";
import faqData from "./faq.json"; // Import the JSON file
// import Dropdown from "./dropdown";
// import { useState } from "react";
import ToggleContent from "./dropdown";


import { useEffect, useState } from 'react';

const ToggleContentSection = ({ title }) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchContent = async () => {
      const res = await fetch(`/api/getContent?title=${title}`);
      const data = await res.json();
      setContent(data.map(item => item.content).join('\n'));
    };

    fetchContent();
  }, [title]);

  return <ToggleContent title={title} content={content} className="border-none" />;
};

export default function Home() {

  const titles = [
    "Astronomical Aspects",
    "Dharmic Activities during Kumbh",
    "History of Kumbh",
    "Kumbh And Ayurveda",
    "Kumbh In Ancient Literature",
    "Kumbh mela as a Tirthayatra",
    "Social Aspects about Kumbh",
    "Spiritual Significance of Kumbh"
  ];
  
  return (
    <div>
      <Navbar />
      <div className="pt-24">
        <div className="bg-[url('kumbh3.jpg')] bg-cover bg-center h-[500px] flex items-center justify-center">
        <div className="bg-[#000000a8] h-full w-full">
          <h2 className="text-5xl tiro text-white p-5 pt-20 pl-10">
            Kumbh Mela,
          </h2>
          <p className="text-2xl tiro-small text-white p-7 pl-20">
          Kumbh Mela which translates to 'festival of the Sacred Pitcher', is an important Hindu pilgrimage, celebrated approximately every 6, 12 and 144 years, correlated with the partial or full revolution of Jupiter and representing the largest human gathering in the world. Traditionally, the riverside fairs at four major pilgrimage sites are recognised as the Kumbh Melas: Prayagraj (Ganges-Yamuna-Sarasvati rivers confluence), Haridwar (Ganges), Nashik-Trimbak (Godavari), and Ujjain (Shipra). It was asserted that, in 2022, after a 700-year break, Bansberia (Hooghly), hosted the pilgrimage again.
          </p>
        </div>
        </div>
        <h1 className="text-4xl tiro font-extrabold p-4 pl-10">
          Frequently Asked Questions:
        </h1>
        <div className="grid grid-cols-1 gap-4 p-4 pl-20">
        
        <ToggleContentSection key={'lol'} title={'Astronomical Aspects'} />
        </div>
      </div>
    </div>
  );
}
