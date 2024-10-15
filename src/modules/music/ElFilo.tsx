import { Button, Section } from '../../components';
import './Music.css';
import { elFilo } from '../../const/albums';

interface Musicians {
    instrument: string;
    musician: string;
}

export const ElFilo = () => {
 return (
        <Section theme='dark' withArrowBack path='/'>
            <div className='inside-music-container'>
                <div 
                    className='album-art'
                    style={{
                        backgroundImage: `url(${elFilo.art})`,
                    }} 
                />
                <div className='inside-music-text' style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}>
                    <div style={{
                        marginTop: '35px',
                        display: 'flex',
                        width: '30vw',
                        justifyContent: 'start',
                        alignItems: 'center',
                        height: '10%',
                    }}>
                        <p style={{ fontSize: '28px' }}> {elFilo.name} </p>
                    </div>

                    <div className='list-container'>
                        {
                            elFilo.musicians.map((item: Musicians) => (
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
                            <p style={{ color: '#D9D9D9', marginLeft: '5px' }}> {elFilo.direction} </p>
                        </div>
                        <div className='list-row-secondary'>
                            <p> Arte de Tapa: </p>
                            <p style={{ color: '#D9D9D9', marginLeft: '5px' }}> {elFilo.design} </p>
                        </div>
                        <div className='list-row-secondary'>
                            <p> Grabación: </p>
                            <p style={{ color: '#D9D9D9', marginLeft: '5px' }}> {elFilo.recordedBy} </p>
                        </div>
                        <div className='list-row-secondary'>
                            <p> Mastering: </p>
                            <p style={{ color: '#D9D9D9', marginLeft: '5px' }}> {elFilo.mastering} </p>
                        </div>
                        <div className='list-row-secondary'>
                            <p> Mezcla: </p>
                            <p style={{ color: '#D9D9D9', marginLeft: '5px' }}> {elFilo.mix} </p>
                        </div>
                        <div className='list-row-secondary'>
                            <p style={{ color: '#D9D9D9', fontWeight: 500 }}> {elFilo.recordedIn} </p>
                        </div>
                    </div>

                    <div className='buttonsRow'>
                        <Button variant onClick={() => console.log('hola')} title='Partitura' />
                    </div>

                </div>
            </div>
        </Section >
    )
}
