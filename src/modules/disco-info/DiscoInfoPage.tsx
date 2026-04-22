import { useParams, Navigate } from 'react-router-dom';
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
    <DiscoInfo
      title={disco.title}
      original={disco.original}
      subtitle={disco.subtitle}
      info={getDiscoInfo(disco)}
      color={disco.color}
    />
  );
};
