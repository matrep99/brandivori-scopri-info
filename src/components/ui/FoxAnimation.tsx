
import { useState, useEffect } from "react";

interface FoxAnimationProps {
  onAnimationComplete: () => void;
}

const FoxAnimation = ({ onAnimationComplete }: FoxAnimationProps) => {
  const [animationState, setAnimationState] = useState<'idle' | 'disappearing' | 'gone'>('idle');

  useEffect(() => {
    // Start disappearing animation after a delay
    const timer = setTimeout(() => {
      setAnimationState('disappearing');
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (animationState === 'disappearing') {
      // Notify parent when fox disappears
      const timer = setTimeout(() => {
        setAnimationState('gone');
        onAnimationComplete();
      }, 700); // Match animation duration

      return () => clearTimeout(timer);
    }
  }, [animationState, onAnimationComplete]);

  if (animationState === 'gone') {
    return null;
  }

  return (
    <div 
      className={`flex flex-col items-center transition-all ${
        animationState === 'idle' ? 'animate-fox-appear' : 'animate-fox-disappear'
      }`}
    >
      <div className="text-8xl mb-2">🦊</div>
      <p className="text-2xl font-medium text-center mb-4">
        Vuoi sapere tutto su un brand?
      </p>
      <p className="text-xl text-center text-gray-600">
        Sei nel posto giusto.
      </p>
    </div>
  );
};

export default FoxAnimation;
