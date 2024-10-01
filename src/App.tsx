import './index.css';
import { Route, Routes, useLocation } from "react-router-dom";
import { CycleExplore } from "./modules/cycle/CycleExplore";
import { ScrollableMain } from "./modules/ScrollableMain";
import { AnimatePresence } from 'framer-motion';
import { CycleByYear } from './modules/cycle/CycleByYear';
import { useScrollPosition } from './hooks/useScrollPosition';
import { Music } from './modules/music/Music';
import { Continuidades } from './modules/music/Continuidades';
import { Campaign } from './modules/campaign/Campaign';
import { ElFilo } from './modules/music/ElFilo';
import { Candombe } from './modules/music/Candombe';
import { Mananita } from './modules/music/Mananita';
import { useEffect } from 'react';

function App() {
  const location = useLocation();

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
      <Route  path="/" element={<ScrollableMain />} />
      <Route path="/ciclo" element={<CycleExplore />} />
      <Route path="/ciclo/2024" element={<CycleByYear />} />
      <Route path='/campaign' element={<Campaign />} />
      <Route path="/music" element={<Music />} />
      <Route path="/el-filo" element={<ElFilo />} />
      <Route path="/candombe" element={<Candombe />} />
      <Route path="/mananita" element={<Mananita />} />
      <Route path="/continuidades" element={<Continuidades />} />
    </Routes>
  )

  return (
    <AnimatePresence mode='wait'>
      <RoutesComp />
    </AnimatePresence>
  );
}

export default App;