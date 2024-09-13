import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export function useScrollPosition() {
  const { pathname } = useLocation();
  const scrollPositions = useRef<{ [key: string]: number }>({});

  useEffect(() => {
    const handleScroll = () => {
      scrollPositions.current[pathname] = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  useEffect(() => {
    if (scrollPositions.current[pathname]) {
      window.scrollTo(0, scrollPositions.current[pathname]);
    }
  }, [pathname]);
}