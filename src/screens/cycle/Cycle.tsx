import React from 'react';
import SectionBackground from '../../components/SectionBackground/SectionBackground';
import cycleBackground from '../../assets/014.jpg';
import './Cycle.css';
import { Button } from '../../components';
import cycleVideo from '../../assets/cycleVideo.mp4';
import HoverVideoPlayer from 'react-hover-video-player';

export const Cycle = () => {
    return (
        // <SectionBackground background={cycleBackground}>
        //     <div style={{
        //         display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
        //     }}>
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
                        <Button onClick={() => console.log("enter")} title='explorar' />
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