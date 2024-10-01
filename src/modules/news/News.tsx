import { useNavigate } from 'react-router-dom';
import { Section } from '../../components';
import './News.css';

export const News = () => {
    const navigate = useNavigate();
    return (
        <Section theme='light' title='novedades' titleColor='black'>
            <div className="campaign-text-container" onClick={() => navigate('/campaign')}>
                <h2 className="campaign-title">Campaña de financiamiento</h2>
                <p className="campaign-subtitle">Colaborá con nuestro próximo disco</p>
            </div>
            <iframe 
                title='news_music' 
                style={{ width: 350, border: 'none' }} 
                src="https://open.spotify.com/embed/track/1ESowZSlA2jSrqPsG0SCHH?utm_source=generator&theme=0" 
                width="100%" 
                height="352" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
            ></iframe>
        </Section>
    )
}