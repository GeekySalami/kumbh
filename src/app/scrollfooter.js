import { useState, useEffect } from "react";

const ScrollFooter = () => {
  const [showFooter, setShowFooter] = useState(false);
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY) {
        setShowFooter(true); // Show footer when scrolling up
      } else {
        setShowFooter(false); // Hide footer when scrolling down
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 w-full bg-gray-800 text-white text-center p-4 transition-transform duration-300 ${
        showFooter ? "translate-y-0" : "translate-y-full"
      }`}
    >
      I turn into a footer when you scroll up!
    </div>
  );
};

export default ScrollFooter;
