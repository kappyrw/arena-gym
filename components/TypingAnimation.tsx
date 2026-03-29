'use client';

import { useEffect, useState } from 'react';

export function TypingAnimation({ text, language = 'en' }: { text: string; language?: 'en' | 'fr' }) {
  const [displayedWelcome, setDisplayedWelcome] = useState('');
  const [displayedText, setDisplayedText] = useState('');
  const [stage, setStage] = useState<'welcome' | 'main' | 'complete'>('welcome');
  
  const welcomeText = language === 'en' ? 'WELCOME TO...' : 'BIENVENUE À...';

  useEffect(() => {
    if (stage === 'welcome') {
      if (displayedWelcome.length < welcomeText.length) {
        const timeout = setTimeout(() => {
          setDisplayedWelcome(welcomeText.slice(0, displayedWelcome.length + 1));
        }, 60);
        return () => clearTimeout(timeout);
      } else {
        // Wait before moving to main text
        const timeout = setTimeout(() => {
          setStage('main');
        }, 500);
        return () => clearTimeout(timeout);
      }
    } else if (stage === 'main') {
      if (displayedText.length < text.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(text.slice(0, displayedText.length + 1));
        }, 80);
        return () => clearTimeout(timeout);
      } else {
        setStage('complete');
      }
    }
  }, [displayedWelcome, displayedText, stage, welcomeText, text]);

  return (
    <div className="space-y-2">
      <div className="text-5xl md:text-4xl font-bold text-red-600 min-h-[40px] md:min-h-[50px]">
        {displayedWelcome}
        {stage === 'welcome' && displayedWelcome.length === welcomeText.length && <span className="animate-pulse">|</span>}
      </div>
      <h1 className="text-5xl md:text-7xl font-black leading-tight text-white min-h-[120px] md:min-h-[160px]">
        {displayedText}
        {stage === 'main' && stage !== 'complete' && <span className="animate-pulse">|</span>}
      </h1>
    </div>
  );
}
