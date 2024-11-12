import { useNavigate } from 'react-router-dom';
import { Section } from '../../components';
import './News.css';

export const News = () => {
    const navigate = useNavigate();
    return (
        <Section theme='light' title='novedades' titleColor='black'>
            <div className='main-container'>
                <div className="campaign-text-container">
                    <h2 className="campaign-title">Campaña de financiamiento</h2>
                    <p className="campaign-subtitle">Colaborá con nuestro próximo disco</p>
                </div>
                <div style={{
                    width: 350,
                    height: 352,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '10px',
                    overflow: 'hidden'
                }}>
                    <iframe
                        title='news_music'
                        style={{ width: '100%', height: '100%', border: 'none' }}
                        src="https://open.spotify.com/embed/track/1ESowZSlA2jSrqPsG0SCHH?utm_source=generator&theme=0"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </Section>
    )
}