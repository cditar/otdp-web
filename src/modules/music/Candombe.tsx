import { Button, LyricsModal, Section } from '../../components';
import './Music.css';
import { useNavigate } from 'react-router-dom';
import { ArrowDownwardRounded } from '@mui/icons-material';
import { candombe } from '../../const/albums';
import { useCallback, useState } from 'react';

interface Musicians {
    instrument: string;
    musician: string;
}

export const Candombe = () => {
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
    const navigate = useNavigate();

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
                    backgroundImage: `url(${candombe.art})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'round',
                }} />
                <button
                    onClick={() => {
                        const scrollY = window.scrollY;
                        navigate('/');
                        setTimeout(() => window.scrollTo(0, scrollY), 0);
                    }}
                    style={{
                        background: 'white',
                        width: '40px',
                        height: '40px',
                        border: '1px solid white',
                        borderRadius: '50%',
                        padding: '10px',
                        marginTop: '50px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transform: 'rotate(90deg)',
                        position: 'absolute',
                        top: '-5%',
                        left: '1%',
                    }}>
                    <ArrowDownwardRounded />
                </button>
                <div className='inside-music-text'>
                    <div style={{
                        marginTop: '35px',
                        display: 'flex',
                        width: '30vw',
                        justifyContent: 'start',
                        alignItems: 'center',
                        height: '10%',
                    }}>
                        <p style={{ fontSize: '28px' }}> {candombe.name} </p>
                    </div>

                    <div className='list-container'>
                        {
                            candombe.musicians.map((item: Musicians) => (
                                <div className='list-row'>
                                    <p style={{ color: '#1A8E8E', marginRight: 10, fontWeight: 600 }}> {item.instrument} </p>
                                    <p style={{ color: '#D9D9D9', fontWeight: 300 }}> {item.musician} </p>
                                </div>
                            ))
                        }
                    </div>

                    <div className='list-container'>
                        <div className='list-row-secondary'>
                            <p> Dirección y Arreglos: </p>
                            <p style={{ color: '#D9D9D9', marginLeft: '5px' }}> {candombe.direction} </p>
                        </div>
                        <div className='list-row-secondary'>
                            <p> Música: </p>
                            <p style={{ color: '#D9D9D9', marginLeft: '5px' }}> {candombe.composedBy} </p>
                        </div>
                        <div className='list-row-secondary'>
                            <p> Letra: </p>
                            <p style={{ color: '#D9D9D9', marginLeft: '5px' }}> {candombe.author} </p>
                        </div>
                        <div className='list-row-secondary'>
                            <p> Arte de Tapa: </p>
                            <p style={{ color: '#D9D9D9', marginLeft: '5px' }}> {candombe.design} </p>
                        </div>
                        <div className='list-row-secondary'>
                            <p> Grabación: </p>
                            <p style={{ color: '#D9D9D9', marginLeft: '5px' }}> {candombe.recordedBy} </p>
                        </div>
                        <div className='list-row-secondary'>
                            <p> Mastering: </p>
                            <p style={{ color: '#D9D9D9', marginLeft: '5px' }}> {candombe.mastering} </p>
                        </div>
                        <div className='list-row-secondary'>
                            <p> Mezcla: </p>
                            <p style={{ color: '#D9D9D9', marginLeft: '5px' }}> {candombe.mix} </p>
                        </div>
                        <div className='list-row-secondary'>
                            <p style={{ color: '#D9D9D9', fontWeight: 500 }}> {candombe.recordedIn} </p>
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
                <LyricsModal title='Candombe del niño oscurito' onClose={handleOnClose} content={
                    <div className='lyricText'>
                        <p>
                            Un niño oscurito, llorando en el suelo,<br />
                            Lo lleva la yuta, robó unas cositas.<br />
                            Un niño solito, tentando su suerte,<br />
                            Lo arrastran un poco, en medio de la gente.<br />
                            <br />
                            El niño no clama, el niño no ruega,<br />
                            Sabe que mañana no hay que ir a la escuela.<br />
                            El niño ni ríe, el niño no sueña,<br />
                            Al que robó su vida nadie lo encarcela.<br />
                            <br />
                            Al niño oscurito, no le dan juguetes,<br />
                            Le dan un revólver, le dan un paquete.<br />
                            <br />
                            ¡Ay precioso niño! Va a cambiar la suerte,<br />
                            Que el mundo es de todos, no de los que tienen.<br />
                            ¡Ay precioso niño! Maldita tu suerte.<br />
                            Unos tantas cosas, y otros que revienten.<br />
                            <br />
                            ¡Ay oscuro niño! Maldita tu suerte.<br />
                            Unos tantas cosas, y otros que revienten.<br />
                            ¡Ay precioso niño! Maldita tu suerte.<br />
                            Unos tantas cosas, y otros que revienten.<br />
                        </p>
                    </div>
                } />
            }
        </Section >
    )
}