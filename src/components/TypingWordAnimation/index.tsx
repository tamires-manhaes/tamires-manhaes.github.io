'use client';

import { useState, useEffect } from 'react';

const TypingAnimation = ({
  text,
  speed = 200,
  pause = 1000,
}: {
  text: string;
  speed?: number;
  pause?: number;
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayedText('');
        setIndex(0);
      }, pause);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed, pause]);

  return (
    <div className="inline-block text-5xl font-bold mb-6 dark:text-textColor font-mono">
      <span>{displayedText}</span>
      <span className="ml-1 w-1 h-6 bg-black inline-block animate-blink"></span>
    </div>
  );
};

export default TypingAnimation;
