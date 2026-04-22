import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import './Videos.css';

const VideoCard = ({ id }: { id: string }) => {
    const [playing, setPlaying] = React.useState(false);

    return (
        <div className="video-card" onClick={() => setPlaying(true)}>
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
        </div>
    );
};

export const Videos = () => {
    const videoIds = [
        '0ypvoFSh2O8',
        'HWag8EnMPeM',
        'E5bj1bqciko',
        'eLZyXlotAh0',
        'NLLcy-gFvjg',
        '_aAemTgAM88',
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
                                <VideoCard id={id} />
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </section>
    );
};