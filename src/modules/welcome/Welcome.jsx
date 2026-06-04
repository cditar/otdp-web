import './Welcome.css';
import HoverVideoPlayer from 'react-hover-video-player';
import { motion, useIsPresent } from 'framer-motion';
import { Section } from '../../components';
import welcomeVideo from '../../assets/welcomeVideo.mp4'
import { useIsDesktop } from '../../hooks/useIsDesktop';
import { BlurIn } from '../../assets/animations/BlurIn';
import { HoverLetters } from '../../assets/animations/HoverLetters';


export const Welcome = () => {
    const isPresent = useIsPresent();
    const isDesktop = useIsDesktop();


    return (
        <Section theme='dark'>
            {isDesktop ? (
                <HoverVideoPlayer
                    videoSrc={welcomeVideo}
                    focused={false}
                    muted={true}    
                    className='welcome-background'
                    key='welcomeVideo'
                    hoverOverlayWrapperClassName='overlayWrapper'
                    hoverOverlay={<BlurIn><HoverLetters text='Orquesta Típica Di Pasquale' /></BlurIn>}
                    style={{ 
                        display: '-webkit-box', 
                        backgroundColor: 'black', 
                        objectFit: 'cover', 
                        width: '100vw', 
                        height: '100vh' 
                    }}
                />
            ) : (
                <div className="welcome-mobile">
                    <h1>
                        <span className="regular">ORQUESTA TIPICA</span>
                        <span className="bold">DI PASQUALE</span>
                    </h1>
                </div>
            )}

            <motion.div
                initial={{ scaleX: 1 }}
                animate={{ scaleX: 0, transition: { duration: 0.5, ease: "circOut" } }}
                exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
                style={{ originX: isPresent ? 0 : 1 }}
                className="welcome-screen"
            />
        </Section>
    );
};