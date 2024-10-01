import { Section } from '../../components';
import './Music.css';
import {  useNavigate } from 'react-router-dom';
import { ArrowDownwardRounded } from '@mui/icons-material';
import continuidadesImage from '../../assets/Continuidades.jpg';

const songs = [
    {
        name: 'Fanfarria del Olvido',
    },
    {
        name: 'Canción sin Nombre',
    },
    {
        name: 'El plan de Dios',
    },
    {
        name: 'Mar adentro',
    },
    {
        name: 'Vals del laberinto',
    },
    {
        name: 'Balvanera',
    }
];

export const Continuidades = () => {
    const navigate = useNavigate();

    const handleNavigateHome = () => {
        sessionStorage.setItem('scrollPos-/', window.scrollY.toString());
        navigate('/');
    };

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
                    backgroundImage: `url(${continuidadesImage})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'round',
                }} />
                <button
                    onClick={handleNavigateHome}
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
                    <p style={{ fontSize: '48px' }}> Continuidades </p>

                    <div className='list-container'>
                        {
                            songs.map((item: any) => (
                                <div className='list-column'>
                                    <div style={{ color: '#dc435e', fontWeight: 600 }}> {item.name} </div>
                                    <div style={{ color: '#D9D9D9', fontWeight: 300 }}> Orquesta Típica Di Pasquale ft. Victoria Di Raimondo </div>
                                </div>
                            ))
                        }
                    </div>

                    <div className='list-container'>
                        <div className='list-row-secondary'>
                            <p> Edición: </p>
                            <p style={{ color: '#D9D9D9', marginLeft: '5px' }}> Norberto Villagra </p>
                        </div>
                        <div className='list-row-secondary'>
                            <p> Mezcla y Mastering: </p>
                            <p style={{ color: '#D9D9D9', marginLeft: '5px' }}> Jorge "Portugués" Da Silva y Norberto Villagra </p>
                        </div>
                        <div className='list-row-secondary'>
                            <p style={{ color: '#D9D9D9'}}> Grabado en estudios Fort el 12 de diciembre de 2021. </p>
                        </div>
                    </div>

                </div>
            </div>
        </Section >
    )
}