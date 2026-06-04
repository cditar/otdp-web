import { useEffect, useState } from 'react';

interface ThreeTransitionProps {
  isActive: boolean;
  onComplete?: () => void;
  fadeOutDuration?: number;
  fadeInDuration?: number;
}

export const ThreeTransition = ({ 
  isActive, 
  onComplete, 
  fadeOutDuration = 400,
  fadeInDuration = 500
}: ThreeTransitionProps) => {
  const [overlayOpacity, setOverlayOpacity] = useState(0);

  useEffect(() => {
    if (!isActive) {
      setOverlayOpacity(0);
      return;
    }

    let timeoutId: NodeJS.Timeout;

    // Phase 1: Fade out to black
    setOverlayOpacity(0);
    requestAnimationFrame(() => {
      setOverlayOpacity(1);
    });

    // Phase 2: Trigger navigation after fade out completes
    timeoutId = setTimeout(() => {
      if (onComplete) {
        onComplete();
      }
      
      // Phase 3: Fade in new content
      setTimeout(() => {
        setOverlayOpacity(0);
      }, 50);
    }, fadeOutDuration);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isActive, fadeOutDuration, fadeInDuration, onComplete]);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#000000',
        opacity: overlayOpacity,
        zIndex: 9998,
        pointerEvents: isActive ? 'all' : 'none',
        transition: `opacity ${overlayOpacity === 1 ? fadeOutDuration : fadeInDuration}ms ease-in-out`,
        display: isActive || overlayOpacity > 0 ? 'block' : 'none'
      }}
    />
  );
};
