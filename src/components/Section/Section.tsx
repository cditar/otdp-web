import React, { ReactNode } from 'react';
import './Section.css';

interface SectionProps {
    children: ReactNode;
    theme: 'dark' | 'light';
    title?: string;
    titleColor?: string;
}

const Section = ({ children, theme, title, titleColor }: SectionProps) => {
    return (
        <div className={theme === 'dark' ? "section-container-dark" : "section-container-light"}>
                { !!title && <div className='section-title' style={{ color: titleColor}}> {title} </div>}
            <div className="section-content">
                {children}
            </div>
        </div>
    );
};

export default Section;
