import React from "react";

const Footer = () => {
  return (
    <footer className="bg-red-900  text-white text-center py-4 mt-6 h-[4vw] shadow-lg sticky bottom-0">
      <p>
        For more information, visit our{" "}
        <span className="hover:text-lg transition-all ease-in-out"><a href="https://dharmawiki.org/index.php/Main_Page" className="text-blue-400 ">
        Dharma Wiki
        </a></span >.
      </p>
    </footer>
  );
};

export default Footer;
