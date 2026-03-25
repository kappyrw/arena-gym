'use client';

import { useEffect, useState } from 'react';

export function TypingAnimation({ text }: { text: string }) {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (displayedText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, 80);
      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
    }
  }, [displayedText, text]);

  return (
    <h1 className="text-5xl md:text-7xl font-black leading-tight text-white min-h-[120px] md:min-h-[160px]">
      {displayedText}
      {!isComplete && <span className="animate-pulse">|</span>}
    </h1>
  );
}
