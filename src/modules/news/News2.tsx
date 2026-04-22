import HoverVideoPlayer from 'react-hover-video-player';
import './News2.css';
import previewVideo from '../../assets/PREVIEW_OTDP_WEB.mp4';
import candombeImage from '../../assets/discos/CandombeBailadorOriginal.jpeg';
import vidaMuerteImage from '../../assets/discos/LavidaLamuerteOriginal.jpg';
import flyer1 from '../../assets/flyer1.jpg';

type NovedadItem = {
  tag: string;
  title: string;
  subtitle: string;
  image: string;
  ft: string;
  videoSrc?: string;
  link?: string;
};

const NOVEDADES_ITEMS: NovedadItem[] = [
  {
    tag: '¿Qué pasa con la música popular hoy?',
    title: 'La Carbonera',
    subtitle: '¿Qué pasa con la música popular hoy?',
    image: flyer1,
    ft: 'Martes 12, 19 y 26 de Mayo',
    link: 'http://localhost:3000/disco/el-extranante',
  },
  {
    tag: 'Instagram',
    title: 'Instagram',
    subtitle: ' ',
    image: candombeImage,
    ft: ' ',
  },
  {
    tag: 'Youtube',
    title: 'Youtube',
    subtitle: ' ',
    image: candombeImage,
    ft: ' ',
    videoSrc: previewVideo,
    link: 'https://www.youtube.com/@orquestatipicadipasquale.',
  },
  {
    tag: 'Spotify',
    title: 'Spotify',
    subtitle: ' ',
    image: vidaMuerteImage,
    ft: ' ',
  },
];

const CARD_WIDTH_PX = 280;
const CARD_HEIGHT_PX = 340; /* solo barra + artwork, título va fuera */

export const News2 = () => {
  const onClick = (item: NovedadItem) => {
    if (item.link) {
      window.open(item.link, '_blank');
    }
  }

  return (
    <section className="novedades-section">
      <div className="novedades-frame">
        <div className="novedades-main">
          <h2 className="novedades-title">Novedades</h2>

            <div className="novedades-track">
                {NOVEDADES_ITEMS.map((item, i) => (
                  <div
                    key={i}
                    className="novedades-slide"
                    style={{ minWidth: CARD_WIDTH_PX, cursor: item.link ? 'pointer' : 'default' }}
                    onClick={() => onClick(item)}
                  >
                    <article
                      className="novedades-card"
                      style={{
                        width: CARD_WIDTH_PX,
                        minWidth: CARD_WIDTH_PX,
                        height: CARD_HEIGHT_PX,
                        minHeight: CARD_HEIGHT_PX,
                      }}
                    >
                      <div className="novedades-card-title-bar">
                        <span className="novedades-card-tag">. {item.tag} .</span>
                      </div>
                      <div className="novedades-card-artwork">
                        {item.videoSrc ? (
                          <HoverVideoPlayer
                            videoSrc={item.videoSrc}
                            sizingMode="container"
                            className="novedades-card-artwork-hover"
                            pausedOverlayWrapperClassName="novedades-card-artwork-paused-wrap"
                            pausedOverlay={
                              item.image ? (
                                <img
                                  src={item.image}
                                  alt=""
                                  className="novedades-card-artwork-poster-img"
                                  aria-hidden
                                />
                              ) : null
                            }
                            muted
                            loop
                            preload="metadata"
                            videoStyle={{ objectFit: 'cover' }}
                          />
                        ) : (
                          item.image && (
                            <img src={item.image} alt={item.title} className="novedades-card-artwork-img" />
                          )
                        )}
                      </div>
                    </article>
                    <div className="novedades-card-footer">
                      <h3 className="novedades-card-footer-title">{item.title}</h3>
                      <p className="novedades-card-footer-ft">({item.ft})</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
    </section>
  );
};
