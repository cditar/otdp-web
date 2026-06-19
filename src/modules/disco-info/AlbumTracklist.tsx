import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faSpotify } from '@fortawesome/free-brands-svg-icons';
import { Section } from '../../components';
import type { DiscoData } from '../../const/discos';
import './AlbumTracklist.css';

export interface AlbumTracklistProps {
  title: string;
  original: string;
  subtitle?: string;
  color?: string;
  tracks: DiscoData['tracks'];
  youtubeUrl?: string;
  spotifyUrl?: string;
}

export const AlbumTracklist = ({
  title,
  original,
  subtitle,
  color = '#ce3957',
  tracks,
  youtubeUrl,
  spotifyUrl,
}: AlbumTracklistProps) => {
  const navigate = useNavigate();

  return (
    <Section title={title} withArrowBack titleColor={color} withFooter>
      <div className="album-tracklist-page" style={{ '--disco-accent-color': color } as React.CSSProperties}>
        {/* <h1 className="album-tracklist-title">{title.toUpperCase()}</h1> */}
        <div className="album-tracklist-content">
          <div className="album-tracklist-disc-wrap">
            <div className="album-tracklist-disc">
              <div className="album-tracklist-disc-inner">
                <img src={original} alt={title} className="album-tracklist-disc-img" />
              </div>
              <div className="info-footer">
                {(youtubeUrl || spotifyUrl) && (
                  <div className="info-footer-stream" aria-label="Escuchar álbum completo">
                    {youtubeUrl && (
                      <a
                        href={youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="info-footer-stream-link info-footer-stream-link--youtube"
                        aria-label="Escuchar en YouTube"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    )}
                    {spotifyUrl && (
                      <a
                        href={spotifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="info-footer-stream-link info-footer-stream-link--spotify"
                        aria-label="Escuchar en Spotify"
                      >
                        <FontAwesomeIcon icon={faSpotify} />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="album-tracklist-info">
            <div className="album-tracklist-list">
              {tracks?.map((track, index) => (
                <div
                  key={track.slug}
                  className="album-track-item"
                  onClick={() => navigate(`/disco/${track.slug}`)}
                >
                  <span className="album-track-number">{String(index + 1).padStart(2, '0')}</span>
                  <div className="album-track-details">
                    <h3 className="album-track-title">{track.title}</h3>
                    {track.ft && <p className="album-track-ft">{track.ft}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
