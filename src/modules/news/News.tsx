import React from 'react';
import { Section } from '../../components';
import elFilo from '../../assets/EL_FILO.png';
import './News.css';
import { useNavigate } from 'react-router-dom';

export const News = () => {
    const navigate = useNavigate();
    return (
        <Section theme='light' title='novedades' titleColor='black'>
            <iframe style={{ width: 600}} src="https://open.spotify.com/embed/track/1ESowZSlA2jSrqPsG0SCHH?utm_source=generator&theme=0" width="100%" height="352" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            {/* <img onClick={() => navigate('/musica/el-filo')} alt='newselfilo' src={elFilo} className='zoom'/> */}
        </Section>
    )
}