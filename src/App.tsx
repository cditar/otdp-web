import './index.css';
import { Route, Routes, useLocation } from "react-router-dom";
import { CycleExplore } from "./modules/cycle/CycleExplore";
import { ScrollableMain } from "./modules/ScrollableMain";
import { InsideMusic } from './modules/music/InsideMusic';

function App() {
  const location = useLocation();

  const RoutesComp = () => (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<ScrollableMain />} />
      <Route path="/ciclo" element={<CycleExplore />} />
      <Route path="/musica/el-filo" element={<InsideMusic />} />
    </Routes>
  )

  return (
    <>
      <RoutesComp />
    </>
  );
}

export default App;