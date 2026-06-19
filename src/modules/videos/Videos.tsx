import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import './Videos.css';
import { Section, VideoCard } from '../../components';
import { videoIds } from '../../const/videos';
import { HeaderBar } from '../../components/HeaderBar/HeaderBar';
import Footer from '../../components/Footer/Footer';

export const Videos = () => {
    return (
        <Section title="Videos" path="/videos" withHeaderBar>
            <Box
                sx={{ flexGrow: 1, padding: 2 }}
                style={{
                    marginBottom: '20px',
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <Grid container spacing={2} style={{ width: '95%' }}>
                    {videoIds.map((id: string, index: number) => (
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
        </Section>
    );
};