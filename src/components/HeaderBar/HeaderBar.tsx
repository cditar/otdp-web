import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faSpotify } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';
import menuImage1 from '../../assets/menu1.jpg';
import menuImage2 from '../../assets/menu2.jpg';
import menuImage3 from '../../assets/menu3.jpg';
import menuImage4 from '../../assets/menu4.jpg';
import menuImage5 from '../../assets/menu5.jpg';
import menuImage6 from '../../assets/menu6.jpg';
import { useState } from 'react';
import { MenuItem } from './MenuItem';
import './HeaderBar.css';
import { useNavigate } from 'react-router-dom';

const SOCIAL_HREF = {
  instagram: 'https://www.instagram.com/orquestatipicadipasquale/',
  youtube: 'https://www.youtube.com/@orquestatipicadipasquale.',
  spotify: 'https://open.spotify.com/artist/1cPVrHTuBkDv34YxCqgIIc',
} as const;

const MENU_ITEMS = [
  {
    label: 'Inicio',
    image: menuImage1,
    link: '/',
  },
  {
    label: 'Novedades',
    image: menuImage2,
    link: '/novedades',
  },
  
  {
    label: 'Discografia',
    image: menuImage3,
    link: '/discografia',
  },
  {
    label: 'Videos',
    image: menuImage4,
    link: '/videos',
  },
  {
    label: 'Bio',
    image: menuImage5,
    link: '/bio',
  },
  {
    label: 'Prensa',
    image: menuImage6,
    link: '/prensa',
  },
]
export const HeaderBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<string>(menuImage2);
  const navigate = useNavigate();

  const onMenuClick = (link: string) => {
    navigate(link);
    setIsMenuOpen(false);
  }

  return (
    <>
      <div className="header-bar">
        <button 
          className="header-hamburger"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Abrir menú"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>

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

    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          className="fullscreen-menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <button 
            className="menu-close-button"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Cerrar menú"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
          
          <div className="menu-split-container">
            <motion.div
              className="menu-left"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -50, opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <nav className="menu-nav">
                {MENU_ITEMS.map((item) => (
                  <MenuItem 
                    key={item.label}
                    onClick={() => onMenuClick(item.link)}
                    onHover={() => setCurrentImage(item.image)}
                  >
                    {item.label}
                  </MenuItem>
                ))}                
              </nav>
            </motion.div>

            <motion.div
              className="menu-right"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 50, opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <motion.img 
                key={currentImage}
                src={currentImage}
                alt="Orquesta"
                className="menu-image"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </>
  );
};
