import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { DiscoInfo } from './DiscoInfo';
import { AlbumTracklist } from './AlbumTracklist';
import { getDiscoBySlug } from '../../const/discos';
import { getDiscoInfo } from './discoInfoContent';
import type { DiscoData } from '../../const/discos';
import Footer from '../../components/Footer/Footer';
import { HeaderBar } from '../../components/HeaderBar/HeaderBar';

export const DiscoInfoPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const disco = slug ? getDiscoBySlug(slug) : undefined;

  if (!disco) {
    return <Navigate to="/" replace />;
  }

  // Si el disco tiene tracks, mostrar AlbumTracklist
  const isAlbumWithTracks = (d: typeof disco): d is DiscoData & { tracks: NonNullable<DiscoData['tracks']> } => {
    return 'tracks' in d && Array.isArray(d.tracks) && d.tracks.length > 0;
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        {isAlbumWithTracks(disco) ? (
          <AlbumTracklist
            title={disco.title}
            original={disco.original}
            subtitle={disco.subtitle}
            color={disco.color}
            tracks={disco.tracks}
            youtubeUrl={disco.youtubeUrl}
            spotifyUrl={disco.spotifyUrl}
          />
        ) : (
          <DiscoInfo
            title={disco.title}
            original={disco.original}
            subtitle={disco.subtitle}
            info={getDiscoInfo(disco)}
            color={disco.color}
            partituraUrl={disco.partituraUrl}
            letraUrl={disco.letraUrl}
            youtubeUrl={disco.youtubeUrl}
            spotifyUrl={disco.spotifyUrl}
          />
        )}
      </motion.div>
    </>
  );
};
