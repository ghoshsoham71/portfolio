import React, { useEffect, useState } from "react";

interface TypingTextProps {
  text: string;
  speed?: number; 
}

const TypingText: React.FC<TypingTextProps> = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((i) => i + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return (
  <span className="bg-gradient-to-r from-white to-green-500 bg-clip-text text-transparent">
    {displayedText}
  </span>
);

};

export default TypingText;
