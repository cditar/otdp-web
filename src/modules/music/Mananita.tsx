import { Button, LyricsModal, Section } from '../../components';
import './Music.css';
import { mananita } from '../../const/albums';
import { useCallback, useState } from 'react';

interface Musicians {
    instrument: string;
    musician: string;
}

export const Mananita = () => {
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

    const handleOnClose = useCallback(() => {
        setModalIsOpen(false);
    }, []);


    return (
        <Section theme='dark' withArrowBack path='/'>
            <div className='inside-music-container'>
                <div
                    className='album-art'
                    style={{
                        backgroundImage: `url(${mananita.art})`,
                    }} />
                <div className='inside-music-text'>
                    <div style={{
                        marginTop: '35px',
                        display: 'flex',
                        width: '30vw',
                        justifyContent: 'start',
                        alignItems: 'center',
                        height: '10%',
                    }}>
                        <p style={{ fontSize: '28px' }}> {mananita.name} </p>
                    </div>

                    <div className='list-container'>
                        {
                            mananita.musicians.map((item: Musicians) => (
                                <div className='list-row'>
                                    <p style={{ color: '#4e64b5', marginRight: 10, fontWeight: 600 }}> {item.instrument} </p>
                                    <p style={{ color: '#D9D9D9', fontWeight: 300 }}> {item.musician} </p>
                                </div>
                            ))
                        }
                    </div>

                    <div className='list-container'>
                        <div className='list-row-secondary'>
                            <p> Dirección y Arreglos: </p>
                            <p style={{ color: '#D9D9D9', marginLeft: '5px' }}> {mananita.direction} </p>
                        </div>
                        <div className='list-row-secondary'>
                            <p> Música: </p>
                            <p style={{ color: '#D9D9D9', marginLeft: '5px' }}> {mananita.composedBy} </p>
                        </div>
                        <div className='list-row-secondary'>
                            <p> Letra: </p>
                            <p style={{ color: '#D9D9D9', marginLeft: '5px' }}> {mananita.author} </p>
                        </div>
                        <div className='list-row-secondary'>
                            <p> Arte de Tapa: </p>
                            <p style={{ color: '#D9D9D9', marginLeft: '5px' }}> {mananita.design} </p>
                        </div>
                        <div className='list-row-secondary'>
                            <p> Grabación: </p>
                            <p style={{ color: '#D9D9D9', marginLeft: '5px' }}> {mananita.recordedBy} </p>
                        </div>
                        <div className='list-row-secondary'>
                            <p> Mastering: </p>
                            <p style={{ color: '#D9D9D9', marginLeft: '5px' }}> {mananita.mastering} </p>
                        </div>
                        <div className='list-row-secondary'>
                            <p> Mezcla: </p>
                            <p style={{ color: '#D9D9D9', marginLeft: '5px' }}> {mananita.mix} </p>
                        </div>
                        <div className='list-row-secondary'>
                            <p style={{ color: '#D9D9D9', fontWeight: 500 }}> {mananita.recordedIn} </p>
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
                            el tiempo se deshace, todo pierde sentido.
                        </p>
                    </div>
                } />
            }
        </Section >
    )
}