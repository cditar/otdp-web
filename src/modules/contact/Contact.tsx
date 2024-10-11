import React, { useState } from 'react';
import { Section } from '../../components';
import './Contact.css';
import contactImage from '../../assets/contactImage.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        content: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission here (e.g., send data to server)
        console.log('Form submitted:', formData);
    };

    return (
        <Section theme='dark' titleColor='#D9D9D9'>
            <div className='contact-container' style={{
                position: 'relative',
                width: '100vw',
                height: '100vh',
                overflow: 'hidden',
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${contactImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: 2,
                }} />
                <div className='contact-content'>
                    <div className='contact-text'>
                    <h2 className='contact-title'>Contacto</h2>
                        <p><FontAwesomeIcon icon={faUser} width={18} style={{ marginRight: 18 }}/> Juan Ignacio Di Pasquale</p>
                        <p><FontAwesomeIcon icon={faEnvelope} width={18} style={{ marginRight: 18 }} /> dipasqualemngt@gmail.com</p>
                        <p><FontAwesomeIcon icon={faInstagram} width={18} style={{ marginRight: 18 }} /> @orquestatipicadipasquale</p>
                    </div>
                    <form className='contact-form' onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Nombre"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="text"
                            name="subject"
                            placeholder="Asunto"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                        />
                        <textarea
                            name="content"
                            placeholder="Mensaje"
                            value={formData.content}
                            onChange={handleChange}
                            required
                        ></textarea>
                        <button type="submit">Enviar</button>
                    </form>
                </div>
            </div>
        </Section>
    )
}