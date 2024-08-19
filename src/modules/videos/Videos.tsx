import React from 'react';
import { Section } from '../../components';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export const Videos = () => {
    const videoIds = [
        '0ypvoFSh2O8', // Replace with your YouTube video IDs
        'HWag8EnMPeM',
        'E5bj1bqciko',
        'eLZyXlotAh0',
        'NLLcy-gFvjg',
        '_aAemTgAM88',
    ];
    return (
        <Section theme='dark' title='videos' titleColor='#D9D9D9'>
            <Box sx={{ flexGrow: 1, padding: 2 }} style={{ marginTop: '50px', marginBottom: '120px'}}>
                <Grid container spacing={2}>
                    {videoIds.map((id, index) => (
                        <Grid item xs={12} sm={4} key={index}>
                            <Box
                                sx={{
                                    position: 'relative',
                                    paddingTop: '56.25%', // 16:9 Aspect Ratio
                                }}
                            >
                                <iframe
                                    src={`https://www.youtube.com/embed/${id}`}
                                    title={`YouTube video ${index + 1}`}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                    }}
                                />
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Section>
    )
}