import React from 'react';
import './Cycle.css';
import { Button } from '../../components';
import cycleVideo from '../../assets/cycleVideo.mp4';
import HoverVideoPlayer from 'react-hover-video-player';
import { useNavigate } from 'react-router-dom';

export const Cycle = () => {
    const navigate = useNavigate();

    return (
        <>
            <HoverVideoPlayer
                videoSrc={cycleVideo}
                focused={true}
                className='welcome-background'
                key='welcomeVideo'
                hoverOverlay={
                    <div style={{
                        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
                    }}>
                        <div className='cycle-title'>¿qué pasa con la música popular hoy?</div>
                        <Button onClick={() => navigate("/ciclo")} title='explorar' />
                        <div className='cycle-subtitle'>conocé más de nuestro ciclo</div>
                    </div>
                }
                hoverOverlayWrapperClassName='overlayWrapper'
                style={{ display: '-webkit-box', backgroundColor: 'black', objectFit: 'cover', width: '100vw', height: '100vh' }}
            />
        </>
        // </SectionBackground>
    )
}