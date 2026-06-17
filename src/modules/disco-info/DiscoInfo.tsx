import { ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faSpotify } from '@fortawesome/free-brands-svg-icons';
import { Section } from '../../components';
import './DiscoInfo.css';

export interface DiscoInfoProps {
  title: string;
  original: string;
  subtitle?: string;
  info: ReactNode;
  color?: string; // Color predominante (título, etiquetas). Por defecto #ce3957
  partituraUrl?: string;
  letraUrl?: string;
  youtubeUrl?: string;
  spotifyUrl?: string;
}

export const DiscoInfo = ({
  title,
  original,
  subtitle,
  info,
  color = '#ce3957',
  partituraUrl,
  letraUrl,
  youtubeUrl,
  spotifyUrl,
}: DiscoInfoProps) => {
  return (
    <Section theme="dark" withArrowBack titleColor={color}>
      <div className="disco-info-page" style={{ '--disco-accent-color': color } as React.CSSProperties}>
        <h1 className="disco-info-title">{title.toUpperCase()}</h1>
        <div className="disco-info-content">
          <div className="disco-info-disc-wrap">
            <div className="disco-info-disc">
              <div className="disco-info-disc-inner">
                <img src={original} alt={title} className="disco-info-disc-img" />
              </div>
                  <div className="info-footer">
                    <div className="info-footer-links">
                      {partituraUrl ? (
                        <a href={partituraUrl} target="_blank" rel="noopener noreferrer">
                          PARTITURA
                        </a>
                      ) : (
                        <span className="info-footer-text">PARTITURA</span>
                      )}
                      {letraUrl ? (
                        <a href={letraUrl} target="_blank" rel="noopener noreferrer">
                          LETRA
                        </a>
                      ) : (
                        <span className="info-footer-text">LETRA</span>
                      )}
                    </div>
                    {(youtubeUrl || spotifyUrl) && (
                      <div className="info-footer-stream" aria-label="Escuchar en streaming">
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
          <div className="disco-info-info">{info}</div>
        </div>
      </div>
    </Section>
  );
};
