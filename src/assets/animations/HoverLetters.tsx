import { motion } from 'framer-motion';
import * as React from 'react';
import './HoverLetters.css';

export const HoverLetters = ({ text }: { text?: string }) => {
  if (!text) return null;
  
  const letters = text.split('');

  return (
    <div className="hover-letters-container">
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          className="hover-letter"
          whileHover={{
            y: -10,
            x: Math.random() * 8 - 2,
            rotate: Math.random() * 100 - 5,
            scale: 1.4,
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 5,
          }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </div>
  );
};
