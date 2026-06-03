import HoverVideoPlayer from 'react-hover-video-player';
import './News2.css';
import portadaYoutube from '../../assets/youtube.JPG';
import portadaInstagram from '../../assets/instagram.JPG';
import carbonera from '../../assets/carbonera.jpeg';
import portadaSpotify from '../../assets/spotify.jpeg';

type NovedadItem = {
  tag: string;
  title: string;
  subtitle?: string;
  image: string;
  ft: string;
  videoSrc?: string;
  link?: string;
};

const NOVEDADES_ITEMS: NovedadItem[] = [
  {
    tag: 'Instagram',
    title: 'Instagram',
    subtitle: ' ',
    image: portadaInstagram,
    ft: ' ',
    link: 'https://www.instagram.com/orquestatipicadipasquale/'
  },
  {
    tag: 'Youtube',
    title: 'Youtube',
    subtitle: ' ',
    image: portadaYoutube,
    ft: ' ',
    //videoSrc: previewVideo,
    link: 'https://www.youtube.com/@orquestatipicadipasquale.',
  },
  {
    tag: 'Spotify',
    title: 'Spotify',
    subtitle: ' ',
    image: portadaSpotify,
    ft: ' ',
  },
];

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
                    style={{ cursor: item.link ? 'pointer' : 'default' }}
                    onClick={() => onClick(item)}
                  >
                    <article className="novedades-card">
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
                      <p className="novedades-card-footer-ft">{item.ft}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
    </section>
  );
};
