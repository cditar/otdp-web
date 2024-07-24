import "./Carrousel.css";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import elFilo from '../../assets/EL_FILO.png';
import candombe from '../../assets/2.png';
import mañanita from '../../assets/1.png';
import { useNavigate } from "react-router-dom";

export const Carrousel = () => {
  const ref = useRef(null);
  const navigate = useNavigate();
  const { scrollXProgress } = useScroll({ container: ref });

  return (
    <div className="carrousel-container">
      {/* <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          pathLength="1"
          className="indicator"
          style={{ pathLength: scrollXProgress }}
        />
      </svg> */}
      <ul>
        <li onClick={() => navigate('/musica/el-filo')} ><img src={elFilo} className='scrollable-zoom'/></li>
        <li><img src={candombe} className='scrollable-zoom'/></li>
        <li><img src={mañanita} className='scrollable-zoom'/></li>
        <li><img src={elFilo} className='scrollable-zoom'/></li>
        <li><img src={candombe} className='scrollable-zoom'/></li>
        <li><img src={mañanita} className='scrollable-zoom'/></li>
      </ul>
    </div>
  );
}
