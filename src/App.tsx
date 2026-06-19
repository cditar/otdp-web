import './index.css';
import { Route, Routes, useLocation } from "react-router-dom";
import { ScrollableMain } from "./modules/ScrollableMain";
import { AnimatePresence } from 'framer-motion';
import { useScrollPosition } from './hooks/useScrollPosition';
import { useEffect } from 'react';
import { DiscoInfoPage } from './modules/disco-info/DiscoInfoPage';
import { motion, useScroll } from 'framer-motion';
import { Novedades } from './modules/novedades/Novedades';
import { Bio } from './modules/bio/Bio';
import { Press } from './modules/press/Press';
import { MusicaPopular } from './modules/musica-popular/MusicaPopular';
import { Videos } from './modules/videos/Videos';

function App() {
  const location = useLocation();
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    return () => {
      sessionStorage.setItem(`scrollPos-${location.pathname}`, window.scrollY.toString());
    };
  }, [location.pathname]);

  useEffect(() => {
    const scrollY = sessionStorage.getItem(`scrollPos-${location.pathname}`);
    if (scrollY) {
      window.scrollTo(0, parseInt(scrollY));
    }
  }, [location.pathname]);

  useScrollPosition();

  const RoutesComp = () => (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<ScrollableMain />} />
      <Route path="/novedades" element={<Novedades />} />
      <Route path="/disco/:slug" element={<DiscoInfoPage />} />
      <Route path="/bio" element={<Bio />} />
      <Route path="/prensa" element={<Press />} />
      <Route path="/videos" element={<Videos />} />
      <Route path="/que-pasa-con-la-musica-popular-hoy" element={<MusicaPopular />} />
    </Routes>
  )

  return (
    <AnimatePresence mode='wait'>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          zIndex: 999999,
          top: 100,
          left: 0,
          right: 0,
          height: 10,
          originX: 0,
          backgroundColor: "var(--hue-1)",
        }}
      />
      <RoutesComp />
    </AnimatePresence>
  );
}

export default App;