import { useEffect, useRef } from 'react';

function useHorizontalScroll(sensitivity: number = 1) {
  const elRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const el = elRef.current;
    if (el) {
      const onWheel = (event: WheelEvent) => {
        event.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + event.deltaY * sensitivity,
          behavior: 'smooth'
        });
      };
      el.addEventListener('wheel', onWheel);
      return () => el.removeEventListener('wheel', onWheel);
    }
  }, [sensitivity]);

  return elRef;
}

export default useHorizontalScroll;
