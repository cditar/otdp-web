import { useRef, useEffect, useState } from 'react';
import { Welcome } from './welcome/Welcome';
import { News2 } from './news/News2';
import { Discografia } from './discografia/Discografia';
import { HeaderBar } from '../components/HeaderBar/HeaderBar';
import Footer from '../components/Footer/Footer';
import { Box, Grid, Button } from '@mui/material';
import { Section, VideoCard } from '../components';
import { videoIdsScrollableMain } from '../const/videos';
import { Link } from 'react-router-dom';

export const ScrollableMain = () => {
    const welcomeRef = useRef<HTMLDivElement | null>(null);
    const [showHeader, setShowHeader] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setShowHeader(!entry.isIntersecting);
            },
            {
                root: null,
                threshold: 0.2,
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

    useEffect(() => {
        const hasNavigated = sessionStorage.getItem('hasNavigated');

        if (hasNavigated === 'true' && welcomeRef.current) {
            const welcomeHeight = welcomeRef.current.offsetHeight;
            window.scrollTo({
                top: welcomeHeight,
                behavior: 'smooth'
            });
        } else {
            window.scrollTo(0, 0);
        }
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
            <Section title='Videos' path='/videos' backgroundColor='#e0e0de' isContainer>
                <Box sx={{ width: '100%', maxWidth: '100%' }}>
                    <Grid container spacing={2}>
                        {videoIdsScrollableMain.map((id: string, index: number) => (
                            <Grid item xs={12} sm={4} key={index}>
                                <Box
                                    sx={{
                                        position: 'relative',
                                        paddingTop: '56.25%',
                                    }}
                                >
                                    <VideoCard id={id as string} index={index} />
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Section>
            <Footer />
        </div>
    );
};