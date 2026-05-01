import React, { useRef, useEffect, useState } from 'react';
import { Welcome } from './welcome/Welcome';
import { News2 } from './news/News2';
import { Discografia } from './discografia/Discografia';
import { Cycle } from './cycle/Cycle';
import { Videos } from './videos/Videos';
import { HeaderBar } from '../components/HeaderBar/HeaderBar';

export const ScrollableMain = () => {
    const welcomeRef = useRef<HTMLDivElement | null>(null);
    const [showHeader, setShowHeader] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // 👇 si Welcome está visible → ocultar header
                // 👇 si NO está visible → mostrar header
                setShowHeader(!entry.isIntersecting);
            },
            {
                root: null,
                threshold: 0.2, 
                // un poco de margen para que no “salte” demasiado temprano
            }
        );

        if (welcomeRef.current) {
            observer.observe(welcomeRef.current);
        }

        return () => {
            if (welcomeRef.current) {
                observer.unobserve(welcomeRef.current);
            }
        };
    }, []);

    console.log(showHeader);

    return (
        <div>
            {showHeader && <HeaderBar />}

            <div ref={welcomeRef}>
                <Welcome />
            </div>

            <News2 />
            <Discografia />
            {/* <Cycle /> */}
            <Videos />
        </div>
    );
};