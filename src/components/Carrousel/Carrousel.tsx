import "./Carrousel.css";
import elFilo from '../../assets/EL_FILO.png';
import candombe from '../../assets/2.png';
import mañanita from '../../assets/1.png';
import { useNavigate } from "react-router-dom";

export const Carrousel = () => {
  // const ref = useRef(null);
  const navigate = useNavigate();

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
        <li onClick={() => navigate('/musica/el-filo')} >
          <img alt='disc6' src={elFilo} className='scrollable-zoom'/></li>
        <li><img alt='disc1' src={candombe} className='scrollable-zoom'/></li>
        <li><img alt='disc2' src={mañanita} className='scrollable-zoom'/></li>
        <li><img alt='disc3' src={elFilo} className='scrollable-zoom'/></li>
        <li><img alt='disc4' src={candombe} className='scrollable-zoom'/></li>
        <li><img alt='disc5' src={mañanita} className='scrollable-zoom'/></li>
      </ul>
    </div>
  );
}
