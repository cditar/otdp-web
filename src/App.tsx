import './index.css';
import { Route, Routes, useLocation } from "react-router-dom";
import { CycleExplore } from "./modules/cycle/CycleExplore";
import { ScrollableMain } from "./modules/ScrollableMain";
import { InsideMusic } from './modules/music/InsideMusic';
import { AnimatePresence } from 'framer-motion';
import { CycleByYear } from './modules/cycle/CycleByYear';
import { useScrollPosition } from './hooks/useScrollPosition';
import { Music } from './modules/music/Music';
import { Continuidades } from './modules/music/Continuidades';

function App() {
  useScrollPosition();

  const location = useLocation();

  const RoutesComp = () => (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<ScrollableMain />} />
      <Route path="/ciclo" element={<CycleExplore />} />
      <Route path="/ciclo/2024" element={<CycleByYear />} />
      <Route path="/music" element={<Music />} />
      <Route path="/music/el-filo" element={<InsideMusic />} />
      <Route path="/music/candombe" element={<InsideMusic />} />
      <Route path="/music/mananita" element={<InsideMusic />} />
      <Route path="/music/continuidades" element={<Continuidades />} />
    </Routes>
  )

  return (
    <AnimatePresence mode='wait'>
      <RoutesComp />
    </AnimatePresence>
  );
}

export default App;