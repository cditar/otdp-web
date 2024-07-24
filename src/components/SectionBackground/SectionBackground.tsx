import React, { ReactNode } from 'react';
import './SectionBackground.css';

interface SectionProps {
    children: ReactNode;
    background: any;
    title?: string;
    titleColor?: string;
}

export const SectionBackground = ({ children, title, titleColor, background }: SectionProps) => {
    return (
        <div style={{
            width: '100%',
            overflowX: 'hidden',
            overflowY: 'hidden',
            height: '100vh',
            flexDirection: 'column',
            display: 'flex',
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
            filter: 'grayscale(100%)'
        }}>
                { !!title && <div className='section-background-title' style={{ color: titleColor}}> {title} </div>}
            <div className="section-background-content">
                {children}
            </div>
        </div>
    );
};