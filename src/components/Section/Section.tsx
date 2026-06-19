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
    path?: string;
    withArrowBack?: boolean;
    withHeaderBar?: boolean;
}

export const Section = ({ children, title, titleColor, path, withArrowBack, withHeaderBar }: SectionProps) => {
    const navigate = useNavigate();

    const handleNavigateHome = () => {
        if (path) {
            sessionStorage.setItem('scrollPos-/', window.scrollY.toString());
            navigate(path);
        } else {
            // Si no hay path definido, volver atrás en el historial
            navigate(-1);
        }
    };

    return (
        <div className={`section-container ${withHeaderBar ? 'section-container--with-header' : ''}`}>
            {withHeaderBar && <HeaderBar/>}
            <div className="section-arrow-title-container">
                {
                    withArrowBack &&
                    <button
                        className="section-arrow-back"
                        onClick={handleNavigateHome}
                    >
                        <ArrowDownwardRounded />
                    </button>
                }
                {!!title && <div className='section-title' style={{ color: titleColor }}> {title} </div>}
            </div>
            <div className="section-content">
                {children}
            </div>
            <Footer />
        </div>
    );
};
