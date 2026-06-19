import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import './VideoCard.css';

export const VideoCard = ({ id, index }: { id: string; index: number }) => {
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