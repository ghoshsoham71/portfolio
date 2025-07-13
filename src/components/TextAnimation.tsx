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
  onComplete,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (trigger) {
      setDisplayedText("");
      setIndex(0);
      setIsComplete(false);
    }
  }, [trigger, text]);

  useEffect(() => {
    if (trigger && index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((i) => i + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else if (trigger && index === text.length) {
      setIsComplete(true);
      if (onComplete) onComplete();
    }
  }, [index, text, speed, trigger, onComplete]);

  return (
    <span className="bg-gradient-to-b from-green-400 to-green-100 bg-clip-text text-transparent">
      {displayedText}
      {!isComplete && (
        <span className="ml-1 animate-blink text-muted-foreground">|</span>
      )}
    </span>
  );
};

export default TypingText;
