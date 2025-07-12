import React, { useEffect, useState } from "react";

interface TypingTextProps {
  text: string;
  speed?: number; 
  trigger?: boolean;
  onComplete?: () => void;
}

const TypingText: React.FC<TypingTextProps> = ({ 
  text, 
  speed = 100, 
  trigger = true,
  onComplete 
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Reset animation when trigger changes or text changes
    if (trigger) {
      setDisplayedText("");
      setIndex(0);
    }
  }, [trigger, text]);

  useEffect(() => {
    if (trigger && index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((i) => i + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else if (trigger && index === text.length && onComplete) {
      // Animation completed
      onComplete();
    }
  }, [index, text, speed, trigger, onComplete]);

  return (
    <span className="bg-gradient-to-r from-white to-green-500 bg-clip-text text-transparent">
      {displayedText}
    </span>
  );
};

export default TypingText;