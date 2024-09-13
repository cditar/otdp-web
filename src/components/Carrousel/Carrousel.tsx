import "./Carrousel.css";
import elFiloImage from '../../assets/ElFilo.png';
import candombeImage from '../../assets/Candombe.jpg';
import mananitaImage from '../../assets/Mananita.jpg';
import continuidadesImage from '../../assets/Continuidades.jpg';
import { useNavigate } from "react-router-dom";
import { elFilo, candombe, mananita } from '../../const/albums';
import useHorizontalScroll from "../../hooks/useHorizontalScroll";

export const Carrousel = () => {
  // const ref = useRef(null);
  const navigate = useNavigate();
  const scrollRef = useHorizontalScroll(5);

  return (
    <div className="carrousel-container">
      <ul ref={scrollRef} className='carrousel-ul'>
        <li className='carrousel-li' onClick={() => navigate('/music/el-filo', { replace: true, state: { album: elFilo } })} >
          <img alt='disc6' src={elFiloImage} className='scrollable-zoom' />
          <p className='carrousel-text'> El Filo </p>
        </li>
        <li className='carrousel-li' onClick={() => navigate('/music/candombe', { replace: true, state: { album: candombe } })}>

          <img alt='disc1' src={candombeImage} className='scrollable-zoom' />
          <p className='carrousel-text'> Candombe del Niño Oscurito </p>
        </li>
        <li className='carrousel-li' onClick={() => navigate('/music/mananita', { replace: true, state: { album: mananita } })} >
          <img alt='disc2' src={mananitaImage} className='scrollable-zoom' />
          <p className='carrousel-text'> Mañanita </p>
        </li>
        <li className='carrousel-li' onClick={() => navigate('/music/continuidades')}><img alt='disc3' src={continuidadesImage} className='scrollable-zoom' />
          <p className='carrousel-text'> Continuidades </p>
        </li>
      </ul>
    </div>
  );
}
