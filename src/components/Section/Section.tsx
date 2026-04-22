import { ReactNode } from 'react';
import './Section.css';
import { ArrowDownwardRounded } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

interface SectionProps {
    children: ReactNode;
    theme: 'dark' | 'light';
    title?: string;
    titleColor?: string;
    path?: string;
    withArrowBack?: boolean;
}

export const Section = ({ children, theme, title, titleColor, path, withArrowBack }: SectionProps) => {
    const navigate = useNavigate();

    const handleNavigateHome = () => {
        sessionStorage.setItem('scrollPos-/', window.scrollY.toString());
        navigate(path || '/');
    };

    return (
        <div className={theme === 'dark' ? "section-container-dark" : "section-container-light"}>
            {
                withArrowBack &&
                <button
                    className="section-arrow-back"
                    onClick={handleNavigateHome}
                    style={titleColor ? { background: titleColor, borderColor: titleColor } : undefined}
                >
                        <ArrowDownwardRounded />
                    </button>
                }
            {!!title && <div className='section-title' style={{ color: titleColor }}> {title} </div>}
            <div className="section-content">
                {children}
            </div>
        </div>
    );
};
