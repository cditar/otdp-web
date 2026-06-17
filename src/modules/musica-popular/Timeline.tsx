import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import './Timeline.css';

interface TimelinePoint {
  id: string;
  label: string;
}

const timelinePoints: TimelinePoint[] = [
  { id: 'intro', label: 'Introducción' }, // idea y foto música popular original
  { id: 'conciertos', label: 'Ciclo de conciertos' }, // flyers de trilce y algunas imágenes
  { id: 'disco', label: 'Disco' }, // unla, tapa del disco (navigate)
  { id: 'invitados', label: 'Invitados' }, // fotos comparación
  { id: 'presentacion', label: 'Presentación' } // fotos, videos, etc.
];

export const Timeline = () => {
  const [activeSection, setActiveSection] = useState('intro');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = timelinePoints.map(point => document.getElementById(point.id));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(timelinePoints[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="timeline">
      <div className="timeline-line" />
      {timelinePoints.map((point, index) => (
        <motion.div
          key={point.id}
          className={`timeline-point ${activeSection === point.id ? 'active' : ''}`}
          onClick={() => scrollToSection(point.id)}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="timeline-circle" />
          <span className="timeline-label">{point.label}</span>
        </motion.div>
      ))}
    </div>
  );
};
