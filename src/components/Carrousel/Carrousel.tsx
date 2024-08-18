import "./Carrousel.css";
import elFiloImage from '../../assets/ElFilo.png';
import candombeImage from '../../assets/Candombe.jpg';
import mananitaImage from '../../assets/Mananita.jpg';
import continuidades from '../../assets/Continuidades.jpg';
import { useNavigate } from "react-router-dom";
import { elFilo, candombe, mananita } from '../../const/albums';

export const Carrousel = () => {
  // const ref = useRef(null);
  const navigate = useNavigate();

  return (
    <div className="carrousel-container">
      <ul>
        <li onClick={() => navigate('/el-filo', { replace: true, state: { album: elFilo } })} >
          <img alt='disc6' src={elFiloImage} className='scrollable-zoom'/></li>
        <li onClick={() => navigate('/candombe', { replace: true, state: { album: candombe } })}><img alt='disc1' src={candombeImage} className='scrollable-zoom'/></li>
        <li  onClick={() => navigate('/mananita', { replace: true, state: { album: mananita } })} ><img alt='disc2' src={mananitaImage} className='scrollable-zoom'/></li>
        <li><img alt='disc3' src={continuidades} className='scrollable-zoom'/></li>
      </ul>
    </div>
  );
}
