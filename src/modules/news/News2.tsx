import './News2.css';
import '../novedades/Novedades.css';
import { useNavigate } from 'react-router-dom';
import MusicaPopularImg from '../../assets/discos/MusicaPopularOriginal.png';
import { motion } from 'framer-motion';


export const News2 = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
    <section className="novedades-section">
        <div className='novedades-hero'>
                    <img 
                        src={MusicaPopularImg} 
                        alt="Música Popular Disco"
                        className='novedades-hero-image'
                    />
                    <div className='novedades-hero-overlay'>
                        <div className='novedades-hero-content'>
                            <h1 className='novedades-hero-title'>Último lanzamiento</h1>
                            <h2 className='novedades-hero-subtitle'>¿Qué pasa con la música popular hoy?</h2>
                            <button 
                                className='novedades-hero-button'
                                onClick={() => navigate('/que-pasa-con-la-musica-popular-hoy')}
                            >
                                explorar
                            </button>
                        </div>
                    </div>
                </div>
    </section>
    </motion.div>
  );
};
