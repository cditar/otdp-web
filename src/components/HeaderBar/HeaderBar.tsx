import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faSpotify } from '@fortawesome/free-brands-svg-icons';
import './HeaderBar.css';

const SOCIAL_HREF = {
  instagram: 'https://www.instagram.com/orquestatipicadipasquale/',
  youtube: 'https://www.youtube.com/@orquestatipicadipasquale.',
  spotify: 'https://open.spotify.com/artist/1cPVrHTuBkDv34YxCqgIIc',
} as const;

export const HeaderBar = () => {
  return (
    <div className="header-bar">
      <div className="header-title">Orquesta Típica Di Pasquale</div>

      <div className="header-socials">
        <a
          href={SOCIAL_HREF.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="header-social-link header-social-link--instagram"
          aria-label="Instagram"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          href={SOCIAL_HREF.youtube}
          target="_blank"
          rel="noopener noreferrer"
          className="header-social-link header-social-link--youtube"
          aria-label="YouTube"
        >
          <FontAwesomeIcon icon={faYoutube} />
        </a>
        <a
          href={SOCIAL_HREF.spotify}
          target="_blank"
          rel="noopener noreferrer"
          className="header-social-link header-social-link--spotify"
          aria-label="Spotify"
        >
          <FontAwesomeIcon icon={faSpotify} />
        </a>
      </div>
    </div>
  );
};
