import { motion } from 'framer-motion';

interface HandwrittenLineProps {
  width: number;
  isHovered: boolean;
}

export const HandwrittenLine = ({ width, isHovered }: HandwrittenLineProps) => {
  // Generar una línea horizontal desprolija
  const generatePath = () => {
    if (width === 0) return 'M 0,20 L 0,20';
    
    const points = [];
    const numPoints = Math.max(15, Math.floor(width / 15));
    const centerY = 20;
    
    for (let i = 0; i <= numPoints; i++) {
      const x = (i / numPoints) * width;
      // Variaciones para hacer la línea desprolija
      const wobble = Math.sin(i * 0.3) * 1.5 + (Math.random() - 0.5) * 2;
      const y = centerY + wobble;
      points.push({ x, y });
    }
    
    // Crear el path
    let path = `M ${points[0].x} ${points[0].y}`;
    
    for (let i = 1; i < points.length; i++) {
      path += ` L ${points[i].x} ${points[i].y}`;
    }
    
    return path;
  };

  return (
    <svg
      width={width}
      height="40"
      style={{
        position: 'absolute',
        top: '50%',
        left: '0',
        transform: 'translateY(-50%)',
        pointerEvents: 'none',
      }}
    >
      <motion.path
        d={generatePath()}
        stroke="white"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0, stroke: 'white' }}
        animate={{
          pathLength: isHovered ? 1 : 0,
          opacity: isHovered ? 1 : 0,
          stroke: 'red',
        }}
        transition={{
          pathLength: { duration: 0.4, ease: "easeOut" },
          opacity: { duration: 0.2 },
        }}
      />
    </svg>
  );
};
