import { useState, useEffect } from 'react';

const Typewriter = ({ text, speed = 50, className = "" }) => {
  // index represents the current position in the text
  const [index, setIndex] = useState(0);
  // displayedText is the substring of text that has been "typed" so far
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    // Only schedule a timeout if there are more characters to show
    if (index < text.length) {
      const timer = setTimeout(() => {
        setIndex((prevIndex) => prevIndex + 1);
      }, speed);
      return () => clearTimeout(timer);
    }
  }, [index, text, speed]);

  // Update displayedText whenever index changes
  useEffect(() => {
    setDisplayedText(text.slice(0, index));
  }, [index, text]);

  // Reset the typewriter effect if the text prop changes
  useEffect(() => {
    setIndex(0);
    setDisplayedText("");
  }, [text]);

  return <span className={className}>{displayedText}</span>;
};

export default Typewriter;
