import React from 'react';
import elFilo from '../../assets/EL_FILO.png';
import { List, Section } from '../../components';
import './Music.css';

const PlayIcon = () => (
    <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M22.5 0C10.081 0 0 10.0819 0 22.5C0 34.9181 10.0819 45 22.5 45C34.9181 45 45 34.9181 45 22.5C45 10.081 34.9181 0 22.5 0ZM22.5 3C33.2622 3 41.9998 11.7377 41.9998 22.5008C41.9998 33.263 33.2621 42.0006 22.5 42.0006C11.7378 42.0006 2.99924 33.2629 2.99924 22.5008C2.99924 11.7386 11.7369 3 22.5 3Z" fill="#F0F0F0" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M29.633 24.766C30.4864 24.1483 31 23.112 31 22.0002C31 20.8881 30.4864 19.8517 29.633 19.234L21.7703 13.558C20.8286 12.8785 19.618 12.8147 18.6207 13.3935C17.6233 13.9707 17 15.0975 17 16.3227V27.6772C17 28.9025 17.6233 30.0296 18.6207 30.6064C19.618 31.1851 20.8286 31.1218 21.7703 30.4419L29.633 24.766ZM28.0861 22.2509L20.2233 27.9281C20.1382 27.9899 20.0281 27.9963 19.9375 27.9434C19.8468 27.8902 19.7897 27.789 19.7897 27.6773V16.3229C19.7897 16.2112 19.8468 16.11 19.9375 16.0571C20.0281 16.0043 20.1382 16.0103 20.2233 16.0721L28.0861 21.7496C28.1629 21.8055 28.2103 21.8992 28.2103 22.0004C28.2103 22.1016 28.1629 22.1953 28.0861 22.2511V22.2509Z" fill="#F0F0F0" />
    </svg>
)

export const InsideMusic = () => {
    return (
        <Section theme='dark'>
            <div className='inside-music-container'>
                <div style={{
                    overflowX: 'hidden',
                    overflowY: 'hidden',
                    width: '50vw',
                    height: '100vh',
                    flexDirection: 'column',
                    backgroundPositionY: 0,
                    display: 'flex',
                    backgroundImage: `url(${elFilo})`,
                    backgroundSize: 'cover',
                }} />
                <div className='inside-music-text'>
                    <p> música / el filo</p>
                    
                    <div style={{
                        display: 'flex',
                        width: '30vw',
                        justifyContent: 'start',
                        alignItems: 'center',
                        fontSize: 50
                    }}>
                        <PlayIcon />
                        <p style={{ marginLeft: 30 }}> El Filo </p>
                    </div>

                    <List />
                </div>
            </div>
        </Section>
    )
}