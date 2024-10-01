import React from 'react';
import { Section, Button } from '../../components';
import './Campaign.css';
import image from '../../assets/009.jpg';

export const Campaign = () => {
    return (
        <Section theme='dark'>
            <div className='campaign-container'>
                <div className='campaign-info'>
                    <h2>Campaña de financiamiento</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.</p>
                    <h3>Resumen proyecto</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.</p>
                    <h3>Premios</h3>
                    <ul>
                        <li>$3000: descuento</li>
                        <li>$5000: descuento y besito</li>
                        <li>$10000: entrada</li>
                        <li>$15000: clase</li>
                    </ul>
                </div>
                <div className='campaign-visual'>
                    <div className='campaign-image' style={{ backgroundImage: `url(${image})` }} />
                    <div className='campaign-buttons'>
                        <Button title='$3000' variant onClick={() => { }} />
                        <Button title='$5000' variant onClick={() => { }} />
                        <Button title='$10000' variant onClick={() => { }} />
                        <Button title='$15000' variant onClick={() => { }} />

                    </div>
                </div>
            </div>
        </Section>
    )
}