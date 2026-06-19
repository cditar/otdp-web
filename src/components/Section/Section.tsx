import { ReactNode } from 'react';
import './Section.css';
import { ArrowDownwardRounded } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { HeaderBar } from '../HeaderBar/HeaderBar';
import Footer from '../Footer/Footer';

interface SectionProps {
    children: ReactNode;
    title?: string;
    titleColor?: string;
    backgroundColor?: string;
    path?: string;
    withArrowBack?: boolean;
    withHeaderBar?: boolean;
    withFooter?: boolean;
    titleCentered?: boolean;
    isContainer?: boolean;
}

export const Section = ({ children, title, titleColor, backgroundColor = '#0A0A0A', path, withArrowBack, withHeaderBar, withFooter, titleCentered, isContainer = false }: SectionProps) => {
    const navigate = useNavigate();

    const handleNavigateHome = () => {
        if (path) {
            navigate(path);
        } else {
            navigate(-1);
        }
    };

    return (
        <div className={`section-container ${withHeaderBar ? 'section-container--with-header' : ''} ${isContainer ? 'section-container--content-height' : ''}`} style={{ backgroundColor: backgroundColor }}>
            {withHeaderBar && <HeaderBar/>}
            <div className={`section-arrow-title-container ${titleCentered ? 'section-arrow-title-container--centered' : ''}`}>
                {
                    withArrowBack &&
                    <button
                        className="section-arrow-back"
                        onClick={handleNavigateHome}
                    >
                        <ArrowDownwardRounded />
                    </button>
                }
                {!!title && <div className={`section-title ${titleCentered ? 'section-title--centered' : ''}`} style={{ color: titleColor }}> {title} </div>}
            </div>
            <div className="section-content">
                {children}
            </div>
            {withFooter && <Footer />}
        </div>
    );
};
