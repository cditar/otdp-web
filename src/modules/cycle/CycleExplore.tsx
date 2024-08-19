import React from 'react';
import { Button, Section } from '../../components';
import { useNavigate } from 'react-router-dom';

export const CycleExplore = () => {
    const navigate = useNavigate();
    return (
        <Section theme='dark'>
            <div style={{ display: 'flex', flexDirection: 'column', width: '100vw' }}>
                <div className='cycle-header'>
                    <Button title='volver' onClick={() => navigate(-1)} />
                </div>
                <div className='cycle-explore-container'>
                    <div className='cycle-explore-year-22'>2022</div>
                    <div className='cycle-explore-year-23'>2023</div>
                    <div className='cycle-explore-year-24'>2024</div>
                </div>
                <div className='cycle-description'>
                    Se trata de un espacio de encuentro entre referentes de distintas vertientes de la música popular (tango, folklore, jazz, candombe, etc) 
                    <br/>
                    y la Orquesta Típica Di Pasquale.
                    <br/>
                    <br/>
                    En las ya 20 ediciones del mismo han pasado grandes figuras de la escena, tales como Pipi Piazzolla, Inés Cuello, Florencia Bobadilla Oliva, Noelia Recalde, Nadia Larcher, Marcelo Moguilevsky, Milagros Caliva, Carlos Moscardini, Flor Ruiz, entre otros..
                    <br/>
                    <br/>
                    ¡Ingresa para acceder a arreglos orquestales creados exclusivamente para ser interpretados por los invitados y la orquesta!
                </div>
            </div>
        </Section>
    )
}