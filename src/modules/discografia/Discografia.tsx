import { useNavigate } from 'react-router-dom';
import { DISCOS, Singles } from '../../const/discos';
import './Discografia.css';

export const Discografia = () => {
  const navigate = useNavigate();

  return (
    <section className="discografia-section">
      <h2 className="discografia-sidebar-title">Discografía</h2>
      <div className="discografia-list">
        {DISCOS.map((disco, i) => (
          <article
            key={disco.slug}
            className="discografia-item discografia-item-clickable"
            onClick={() => navigate(`/disco/${disco.slug}`)}
          >
            <div className="discografia-item-graphic">
              <img src={disco.image} alt={disco.title} className="discografia-cover-album" />
              <div className="discografia-item-content">
                <h3 className="discografia-item-title">{disco.title}</h3>
                <p className="discografia-item-subtitle">{disco.subtitle}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
      <h2 className="discografia-sidebar-title">Singles</h2>
      <div className="discografia-list">
        {Singles.map((disco, i) => (
          <article
            key={disco.slug}
            className="discografia-item discografia-item-clickable"
            onClick={() => navigate(`/disco/${disco.slug}`)}
          >
            <div className="discografia-item-graphic">
              <img src={disco.image} alt={disco.title} className="discografia-cover" />
              <div className="discografia-item-content">
                <h3 className="discografia-item-title">{disco.title}</h3>
                <p className="discografia-item-subtitle">{disco.subtitle}</p>
                {disco.ft && <p className="discografia-item-ft">{disco.ft}</p>}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
