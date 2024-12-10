import './Welcome.css';
import HoverVideoPlayer from 'react-hover-video-player';
import { motion, useIsPresent } from 'framer-motion';
import WelcomeVideo from '../../assets/PREVIEW_OTDP_WEB.mp4';
import { Section } from '../../components';
import { WelcomeTitle } from '../../assets/WelcomeTitle';

export const Welcome = () => {
    const isPresent = useIsPresent();

    return (
        <Section theme='dark'>
            <HoverVideoPlayer
                videoSrc={WelcomeVideo}
                focused={true}
                className='welcome-background'
                key='welcomeVideo's
                hoverOverlayWrapperClassName='overlayWrapper'
                hoverOverlay={<WelcomeTitle />}
                style={{ display: '-webkit-box', backgroundColor: 'black', objectFit: 'cover', width: '100vw', height: '100vh' }}
            />
            <motion.div
                initial={{ scaleX: 1 }}
                animate={{ scaleX: 0, transition: { duration: 0.5, ease: "circOut" } }}
                exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
                style={{ originX: isPresent ? 0 : 1 }}
                className="welcome-screen"
            />
        </Section>
    )
};