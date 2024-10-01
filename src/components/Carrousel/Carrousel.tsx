import "./Carrousel.css";
import elFiloImage from '../../assets/ElFilo.png';
import candombeImage from '../../assets/Candombe.jpg';
import mananitaImage from '../../assets/Mananita.jpg';
import continuidadesImage from '../../assets/Continuidades.jpg';
import { useNavigate } from "react-router-dom";
import useHorizontalScroll from "../../hooks/useHorizontalScroll";

export const Carrousel = () => {
  const navigate = useNavigate();
  const scrollRef = useHorizontalScroll(5);

  return (
    <div className="carrousel-container">
      <ul className='carrousel-ul' ref={scrollRef}>
        <li className='carrousel-li' onClick={() => navigate('/el-filo')} >
          <img alt='disc6' src={elFiloImage} className='scrollable-zoom' />
          <p className='carrousel-text'> El Filo </p>
        </li>
        <li className='carrousel-li' onClick={() => navigate('/candombe')}>

          <img alt='disc1' src={candombeImage} className='scrollable-zoom' />
          <p className='carrousel-text'> Candombe del Niño Oscurito </p>
        </li>
        <li className='carrousel-li' onClick={() => navigate('/mananita')} >
          <img alt='disc2' src={mananitaImage} className='scrollable-zoom' />
          <p className='carrousel-text'> Mañanita </p>
        </li>
        <li className='carrousel-li' onClick={() => navigate('/continuidades')}>
          <img alt='disc3' src={continuidadesImage} className='scrollable-zoom' />
          <p className='carrousel-text'> Continuidades </p>
        </li>
      </ul>
    </div>
  );
}
