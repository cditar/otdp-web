import React from 'react';
import './Button.css';

interface ButtonProps {
    onClick: any;
    title: string;
    variant?: boolean;
}

export const Button = ({ onClick, title, variant } : ButtonProps) => {
    return (
        <div className={ variant ? 'button-container-variant' : 'button-container'} onClick={() => onClick()}>
            {title}
        </div>
    )
}