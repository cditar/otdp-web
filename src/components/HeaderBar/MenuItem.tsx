import { useState, useRef, useEffect } from 'react';
import { HandwrittenLine } from './HandwrittenLine';

interface MenuItemProps {
  children: string;
  onClick: () => void;
  onHover?: () => void;
}

export const MenuItem = ({ children, onClick, onHover }: MenuItemProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [width, setWidth] = useState(0);
  const textRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const updateWidth = () => {
      if (textRef.current) {
        const rect = textRef.current.getBoundingClientRect();
        setWidth(rect.width);
      }
    };

    updateWidth();
    
    // Actualizar en el próximo frame para asegurar que el DOM esté listo
    const timeout = setTimeout(updateWidth, 100);
    
    return () => clearTimeout(timeout);
  }, [children]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (onHover) {
      onHover();
    }
  };

  return (
    <button
      ref={textRef}
      className="menu-item"
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span style={{ position: 'relative', display: 'inline-block' }}>
        {children}
        {width > 0 && <HandwrittenLine width={width} isHovered={isHovered} />}
      </span>
    </button>
  );
};
