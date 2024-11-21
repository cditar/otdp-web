import { useNavigate } from 'react-router-dom';
import { Section, Button } from '../../components';
import './Campaign.css';

export const Campaign = () => {
    const navigate = useNavigate();
    return (
        <Section theme='dark' withArrowBack path='/' >
            <div className="campaign-buttons">
                <Button width='170px' title="Argentina" variant onClick={() => navigate('/campaign/ar')} />
                <Button width='170px' title="Resto del mundo" variant onClick={() => navigate('/campaign/world')} />
            </div>
        </Section>
    )
}
