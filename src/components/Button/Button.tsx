import React from 'react';
import './Button.css';

interface ButtonProps {
    onClick: any;
    title: string;
}

export const Button = ({ onClick, title } : ButtonProps) => {
    return (
        <div className='button-container' onClick={() => onClick()}>
            {title}
        </div>
    )
}