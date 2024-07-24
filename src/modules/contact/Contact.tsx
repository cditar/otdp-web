import React from 'react';
import { Section } from '../../components';
import './Contact.css';
import contactImage from '../../assets/contactImage.jpg';

export const Contact = () => {
    return (
        <Section theme='dark' title='contacto' titleColor='#D9D9D9'>
            <div className='contact-container'>
                        <div style={{
                            overflowX: 'hidden',
                            overflowY: 'hidden',
                            width: '65vw',
                            height: '100vh',
                            flexDirection: 'column',
                            backgroundPositionY: 1000,
                            display: 'flex',
                            backgroundImage: `url(${contactImage})`,
                            backgroundSize: 'cover',
                            // mixBlendMode: 'screen'
                        }} />
                        <div className='contact-text'>
                            <p> Juan Ignacio Di Pasquale</p>
                            <p> dipasqualemngt@gmail.com</p>
                            <p> @orquestatipicadipascuale</p>

                        </div>
            </div>
        </Section>
    )
}