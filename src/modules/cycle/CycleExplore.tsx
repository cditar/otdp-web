import React from 'react';
import { Button, Section } from '../../components';
import { useNavigate, useNavigation } from 'react-router-dom';

export const CycleExplore = () => {
    const navigate = useNavigate();
    return (
        <Section theme='dark'>
            <div style={{ display: 'flex', flexDirection: 'column', width: '100vw'}}>
            <div style={{ paddingLeft: '50px', backgroundColor: 'transparent', height: '70px', width: '100vw', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Button title='volver' onClick={() => navigate(-1)} />
                 </div>
            <div className='cycle-explore-container'>
                <p className='cycle-explore-year-22'>2022</p>
                <p className='cycle-explore-year-23'>2023</p>
                <p className='cycle-explore-year-24'>2024</p>
            </div>
            </div>
        </Section>
    )
}