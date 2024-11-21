import React from 'react';
import './Button.css';

interface ButtonProps {
    onClick: any;
    title: string;
    variant?: boolean;
    width?: string;
    color?: string;
    background?: string;
}

export const Button = ({ onClick, title, variant, width, color, background } : ButtonProps) => {
    return (
        <div style={{ width: width, backgroundColor: background, color: color }} className={ variant ? 'button-container-variant' : 'button-container'} onClick={() => onClick()}>
            {title}
        </div>
    )
}