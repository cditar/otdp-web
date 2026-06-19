import { useNavigate } from 'react-router-dom';
import './Novedades.css';
import { motion } from 'framer-motion';
import MusicaPopularOriginal from '../../assets/discos/MusicaPopularOriginal.png';
import { News2 } from '../news/News2';
import { Section } from '../../components';

export const Novedades = () => {
    const navigate = useNavigate();

    return (
        <Section title='Novedades' path='/novedades' withHeaderBar withFooter>
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
            <div className='novedades-container'>
                <div className='novedades-hero'>
                    <img 
                        src={MusicaPopularOriginal} 
                        alt="Música Popular Original"
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

                <div className='novedades-content'>
                    <News2 />
                    {/* Aquí irán las últimas novedades */}
                </div>
            </div>
        </motion.div>
        </Section>
    )
}