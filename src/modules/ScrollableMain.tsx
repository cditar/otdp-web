import { useRef, useEffect, useState } from 'react';
import { Welcome } from './welcome/Welcome';
import { News2 } from './news/News2';
import { Discografia } from './discografia/Discografia';
import { HeaderBar } from '../components/HeaderBar/HeaderBar';
import Footer from '../components/Footer/Footer';
import { Box, Grid, Button } from '@mui/material';
import { VideoCard } from '../components';
import { videoIds, videoIdsScrollableMain } from '../const/videos';
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
            <div className="videos-section">
                <h2 className="videos-sidebar-title">Videos</h2>
                <Box
                    sx={{ flexGrow: 1, padding: 2 }}
                    style={{
                        marginBottom: '20px',
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <Grid container spacing={2} style={{ width: '95%' }}>
                        {videoIdsScrollableMain.map((id: string, index: number) => (
                            <Grid item xs={12} sm={4} key={index}>
                                <Box
                                    sx={{
                                        position: 'relative',
                                        paddingTop: '56.25%', // 👈 esto lo mantenemos
                                    }}
                                >
                                    <VideoCard id={id as string} index={index} />
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginBottom: '40px',
                    }}
                >
                    <Button
                        component={Link}
                        to="/videos"
                        variant="outlined"
                        sx={{
                            padding: '10px 30px',
                            fontSize: '16px',
                            textTransform: 'none',
                            borderColor: 'var(--hue-1)',
                            color: 'var(--hue-1)',
                            '&:hover': {
                                borderColor: 'var(--hue-1)',
                                backgroundColor: 'rgba(var(--hue-1-rgb), 0.1)',
                            },
                        }}
                    >
                        Ver más
                    </Button>
                </Box>
            </div>
            <Footer />
        </div>
    );
};