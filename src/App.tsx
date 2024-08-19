import './index.css';
import { Route, Routes, useLocation } from "react-router-dom";
import { CycleExplore } from "./modules/cycle/CycleExplore";
import { ScrollableMain } from "./modules/ScrollableMain";
import { InsideMusic } from './modules/music/InsideMusic';
import { AnimatePresence } from 'framer-motion';
import { CycleByYear } from './modules/cycle/CycleByYear';

function App() {
  const location = useLocation();

  const RoutesComp = () => (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<ScrollableMain />} />
      <Route path="/ciclo" element={<CycleExplore />} />
      <Route path="/ciclo/2024" element={<CycleByYear />} />
      <Route path="/el-filo" element={<InsideMusic />} />
      <Route path="/candombe" element={<InsideMusic />} />
      <Route path="/mananita" element={<InsideMusic />} />
    </Routes>
  )

  return (
    <AnimatePresence mode='wait'>
      <RoutesComp />
    </AnimatePresence>
  );
}

export default App;