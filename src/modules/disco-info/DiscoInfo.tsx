import { ReactNode } from 'react';
import { Section } from '../../components';
import './DiscoInfo.css';

export interface DiscoInfoProps {
  title: string;
  original: string;
  subtitle?: string;
  info: ReactNode;
  color?: string; // Color predominante (título, etiquetas). Por defecto #ce3957
}

export const DiscoInfo = ({ title, original, subtitle, info, color = '#ce3957' }: DiscoInfoProps) => {
  return (
    <Section theme="dark" withArrowBack path="/" titleColor={color}>
      <div className="disco-info-page" style={{ '--disco-accent-color': color } as React.CSSProperties}>
        <h1 className="disco-info-title">{title.toUpperCase()}</h1>
        <div className="disco-info-content">
          <div className="disco-info-disc-wrap">
            <div className="disco-info-disc">
              <div className="disco-info-disc-inner">
                <img src={original} alt={title} className="disco-info-disc-img" />
              </div>
                  <div className="info-footer">
                    <a href={''} target="_blank" rel="noopener noreferrer">
                      PARTITURA
                    </a>
                    <a href={''} target="_blank" rel="noopener noreferrer">
                      LETRA
                    </a>
                  </div>
            </div>
          </div>
          <div className="disco-info-info">{info}</div>
        </div>
      </div>
    </Section>
  );
};
