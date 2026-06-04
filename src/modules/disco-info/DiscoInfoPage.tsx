import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { DiscoInfo } from './DiscoInfo';
import { getDiscoBySlug } from '../../const/discos';
import { getDiscoInfo } from './discoInfoContent';

export const DiscoInfoPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const disco = slug ? getDiscoBySlug(slug) : undefined;

  if (!disco) {
    return <Navigate to="/" replace />;
  }

  return (
    <>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
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
      </motion.div>
    </>
  );
};
