import { motion, useInView } from 'framer-motion';
import * as React from 'react';
import './BlurIn.css';
 
export const BlurIn = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ filter: 'blur(80px)', opacity: 1, scale: 0.5 }}
      whileInView={{ filter: 'blur(0px)', opacity: 1, scale: 1 }}
      transition={{
                duration: 1.1,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
            }}
    className="blur-in-text"
  >
    {children}
  </motion.div>
)};