import { Section } from "../../components"
import { motion } from 'framer-motion';
import { HeaderBar } from "../../components/HeaderBar/HeaderBar";
import MusicaPopularOriginal from '../../assets/ciclo/Nota Que pasa con la musica popular hoy.jpg';
import './MusicaPopular.css';
import Footer from "../../components/Footer/Footer";
import { Timeline } from './Timeline';
import MusicaPopularImg from '../../assets/discos/MusicaPopularOriginal.png';
import { useNavigate } from "react-router-dom";

export const MusicaPopular = () => {
    const navigate = useNavigate();
    return (
        <>
            <Section title='¿QUÉ PASA CON LA MÚSICA POPULAR HOY?' titleColor='#ce3957' path='/que-pasa-con-la-musica-popular-hoy'>
            <HeaderBar />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                    <HeaderBar />
                    <Timeline />

                    <div className='musica-popular-container'>
                        <h1 className='musica-popular-title'>¿Qué pasa con la música popular hoy?</h1>

                        <div id="intro" className='musica-popular-section musica-popular-intro'>
                            <p>
                                En plena pandemia del año 2020, Juan I. Di Pasquale <b>se encuentra con una entrevista realizada en el diario “La Opinión”</b> a fines del año 1977 donde se convocaba a distintos referentes del <b>rock argentino y la música popular</b>.
                                <br /> <i>La pregunta quedo resonando en él durante todo el aislamiento.</i>
                               <br />
                               En 2022  decide llevar adelante un <b>ciclo de conciertos mensuales</b> que duraría 3 años, en los cuales se propondría intentar preguntarla, invitando a <b>compartir escenario y música</b> a grandes referentes de la amplia música popular.
                            </p>
                            <img src={MusicaPopularOriginal} alt="Música Popular Nota" className='musica-popular-image' />
                        </div>

                        <div id="conciertos" className='musica-popular-section musica-popular-content'>
                            <h2 className='musica-popular-content-title'>Conciertos</h2>
                            <p>Contenido pendiente...</p>
                        </div>

                        <div id="disco" className='musica-popular-section musica-popular-content'>
                            <h2 className='musica-popular-content-title'>Disco</h2>
                            <img src={MusicaPopularImg} alt="Música Popular Disco" className='musica-popular-image-disk' onClick={() => navigate('/disco/musica-popular')} />
                        </div>

                        <div id="invitados" className='musica-popular-section musica-popular-content'>
                            <h2 className='musica-popular-content-title'>Invitados</h2>
                            <p>Contenido pendiente...</p>
                        </div>

                        <div id="presentacion" className='musica-popular-section musica-popular-content'>
                            <h2 className='musica-popular-content-title'>Presentación</h2>
                            <p>Contenido pendiente...</p>
                            <img src={MusicaPopularImg} alt="Música Popular Disco" className='musica-popular-image-disk' onClick={() => navigate('/disco/musica-popular')} />

                        </div>
                    </div>
                </motion.div>
            </Section>
        </>
    )
}