import React from 'react';
import { Welcome } from './welcome/Welcome';
import { News } from './news/News';
import { Music } from './music/Music';
import { Cycle } from './cycle/Cycle';
import { Videos } from './videos/Videos';
import { Contact } from './contact/Contact';

export const ScrollableMain = () => {
    return (
        <div>
            <Welcome />
            <News />
            <Music />
            <Cycle />
            <Videos />
            <Contact />
        </div>
    )
}