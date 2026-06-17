import { useRef, useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { motion, useInView } from 'framer-motion';
import './Videos.css';

const VideoCard = ({ id, index }: { id: string; index: number }) => {
    const [playing, setPlaying] = useState(false);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <motion.div 
            ref={ref}
            className="video-card" 
            onClick={() => setPlaying(true)}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ 
                duration: 0.6, 
                ease: "easeOut",
                delay: isInView ? index * 0.1 : 0
            }}
        >
            {!playing && (
                <>
                    <img
                        src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
                        className="video-thumb"
                    />
                    <div className="video-overlay">
                        <div className="play-button" />
                    </div>
                </>
            )}

            {playing && (
                <iframe
                    src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`}
                    title="YouTube video"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                />
            )}
        </motion.div>
    );
};

export const Videos = () => {
    const videoIds = [
        'plE-Nq6n_AU',
        'rFA2gQxc-vM',
        'wi0a90ahD7Y',
        'gEKxaZEpS_M',
        '0ypvoFSh2O8',
        'HWag8EnMPeM',
        'E5bj1bqciko',
        'eLZyXlotAh0',
        'NLLcy-gFvjg',
    ];

    return (
        <section className="videos-section">
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
                    {videoIds.map((id, index) => (
                        <Grid item xs={12} sm={4} key={index}>
                            <Box
                                sx={{
                                    position: 'relative',
                                    paddingTop: '56.25%', // 👈 esto lo mantenemos
                                }}
                            >
                                <VideoCard id={id} index={index} />
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </section>
    );
};