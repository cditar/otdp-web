import React, { useCallback, useState } from 'react';
import { Button, LyricsModal, Section } from '../../components';
import './Music.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';
import { ArrowBackIos } from '@mui/icons-material';

interface Musicians {
    instrument: string;
    musician: string;
}

interface Tracks {
    trackTitle: string;
}

interface Album {
    name: string;
    description: string;
    tracks: Tracks[];
    musicians: Musicians[];
    edition: string;
    art: string;
    design: string;
    production: string;
    studio: string;
}

interface InsideMusicProps {
    album: Album;
}

const PlayIcon = () => (
    <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M22.5 0C10.081 0 0 10.0819 0 22.5C0 34.9181 10.0819 45 22.5 45C34.9181 45 45 34.9181 45 22.5C45 10.081 34.9181 0 22.5 0ZM22.5 3C33.2622 3 41.9998 11.7377 41.9998 22.5008C41.9998 33.263 33.2621 42.0006 22.5 42.0006C11.7378 42.0006 2.99924 33.2629 2.99924 22.5008C2.99924 11.7386 11.7369 3 22.5 3Z" fill="#F0F0F0" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M29.633 24.766C30.4864 24.1483 31 23.112 31 22.0002C31 20.8881 30.4864 19.8517 29.633 19.234L21.7703 13.558C20.8286 12.8785 19.618 12.8147 18.6207 13.3935C17.6233 13.9707 17 15.0975 17 16.3227V27.6772C17 28.9025 17.6233 30.0296 18.6207 30.6064C19.618 31.1851 20.8286 31.1218 21.7703 30.4419L29.633 24.766ZM28.0861 22.2509L20.2233 27.9281C20.1382 27.9899 20.0281 27.9963 19.9375 27.9434C19.8468 27.8902 19.7897 27.789 19.7897 27.6773V16.3229C19.7897 16.2112 19.8468 16.11 19.9375 16.0571C20.0281 16.0043 20.1382 16.0103 20.2233 16.0721L28.0861 21.7496C28.1629 21.8055 28.2103 21.8992 28.2103 22.0004C28.2103 22.1016 28.1629 22.1953 28.0861 22.2511V22.2509Z" fill="#F0F0F0" />
    </svg>
)

export const InsideMusic = () => {
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
    const navigate = useNavigate();
    const { state } = useLocation();

    const { album } = state;

    const handleOnClose = useCallback(() => {
        setModalIsOpen(false);
    }, []);

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
                    backgroundImage: `url(${album.art})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'round',
                }} />
                <IconButton
                    style={{
                        position: 'absolute',
                        top: '10px',
                        left: '10px',
                        color: '#FFFFFF',
                        backgroundColor: 'white',
                    }}
                    onClick={() => navigate('/')} // Go back to the previous page
                >
                    <ArrowBackIos fontSize="large" style={{ color: 'black' }} />
                </IconButton>
                <div className='inside-music-text'>
                    <div style={{
                        marginTop: '15px',
                        display: 'flex',
                        width: '30vw',
                        justifyContent: 'start',
                        alignItems: 'center',
                        fontSize: 50,
                        height: '10%',
                    }}>
                        <PlayIcon />
                        <p style={{ marginLeft: 20, fontSize: '25px' }}> {album.name} </p>
                    </div>

                    <div className='list-container'>
                        {
                            album.musicians.map((item: Musicians) => (
                                <div className='list-row'>
                                    <p style={{ color: '#1A8E8E', marginRight: 10, fontWeight: 600 }}> {item.instrument} </p>
                                    <p style={{ color: '#D9D9D9', fontWeight: 300 }}> {item.musician} </p>

                                </div>
                            ))
                        }
                    </div>

                    <div className='list-container'>
                        <div className='list-row-secondary'>
                            <p> Composición, Dirección y Arreglos: </p>
                            <p style={{ color: '#D9D9D9', marginLeft: '5px' }}> {album.direction} </p>
                        </div>
                        <div className='list-row-secondary'>
                            <p> Arte de Tapa: </p>
                            <p style={{ color: '#D9D9D9', marginLeft: '5px' }}> {album.design} </p>
                        </div>
                        <div className='list-row-secondary'>
                            <p> Grabación: </p>
                            <p style={{ color: '#D9D9D9', marginLeft: '5px' }}> {album.recordedBy} </p>
                        </div>
                        <div className='list-row-secondary'>
                            <p> Mastering: </p>
                            <p style={{ color: '#D9D9D9', marginLeft: '5px' }}> {album.mastering} </p>
                        </div>
                        <div className='list-row-secondary'>
                            <p> Mezcla: </p>
                            <p style={{ color: '#D9D9D9', marginLeft: '5px' }}> {album.mix} </p>
                        </div>
                        <div className='list-row-secondary'>
                            <p style={{ color: '#D9D9D9', fontWeight: 500 }}> {album.recordedIn} </p>
                        </div>
                    </div>

                    <div className='buttonsRow'>
                        <Button variant onClick={() => console.log('hola')} title='Partitura' />
                        <Button variant onClick={() => setModalIsOpen(true)} title='Letras' />
                    </div>

                </div>
            </div>
            {
                modalIsOpen &&
                <LyricsModal title='Mañanita' onClose={handleOnClose} content={
                    <div className='lyricText'>
                        <p>
                            Mañanita sin sol, mañanita negra.<br />
                            Ando buscando luz en la tristeza.<br /><br />
                            Aparece un rayito, cuando él se acerca,<br />
                            alivia mi dolor esa tibieza.<br />
                            Alivia mi dolor esa tibieza.<br /><br />
                            Mariposas cansadas vuelan sobre el abismo,<br />
                            juegan a hacer en el viento,<br />
                            se pierden en la nada,<br />
                            mariposa de sombra rondan mis desvaríos,<br />
                            el tiempo se desase, todo pierde sentido.<br /><br />
                            Fumo otro cigarrillo,<br />
                            mientras el mundo se rompe en la ventana lleno de ruido,<br />
                            se rompe la ventana lleno de ruido.<br /><br />
                            Mariposas cansadas vuelan sobre el abismo,<br />
                            juegan a hacer en el viento,<br />
                            se pierden en la nada,<br />
                            mariposa de sombra rondan mis desvaríos,<br />
                            el tiempo se desase, todo pierde sentido.
                        </p>
                    </div>
                } />
            }
        </Section >
    )
}