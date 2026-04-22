import React from 'react';
import './HeaderBar.css';
import { Instagram, YouTube } from '@mui/icons-material';

export const HeaderBar = () => {
    return (
        <div className="header-bar">
            <div className="header-title">Orquesta Típica Di Pasquale</div>

            <div className="header-socials">
                <span><Instagram /></span>
                <span><YouTube /></span>
            </div>
        </div>
    );
};