import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import './Videos.css';
import { Section, VideoCard } from '../../components';
import { videoIds } from '../../const/videos';

export const Videos = () => {
    return (
        <Section title="Videos" path="/videos" withHeaderBar withFooter mobileTitleFontSize='40px'>
            <Box sx={{ width: '100%', maxWidth: '100%', paddingLeft: '20px', paddingRight: '20px' }}>
                <Grid container spacing={3}>
                    {videoIds.map((id: string, index: number) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
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
    );
};