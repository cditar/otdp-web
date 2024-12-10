import { useNavigate } from 'react-router-dom';
import { Section, Button } from '../../components';
import './Campaign.css';
import c1 from '../../assets/c1.jpeg';
import c2 from '../../assets/c2.jpeg';
import c3 from '../../assets/c3.jpeg';


export const Campaign = () => {
    const navigate = useNavigate();
    return (
        <Section theme='dark' withArrowBack path='/' >
            <div className="campaign-container">
            <div className="campaign-images">
                <img src={c1} alt="Campaign 1" />
                <img src={c2} alt="Campaign 2" />
                <img src={c3} alt="Campaign 3" />
            </div>
            <div className="campaign-buttons">
                <Button width='170px' title="Argentina" variant onClick={() => navigate('/campaign/ar')} />
                <Button width='170px' title="Resto del mundo" variant onClick={() => navigate('/campaign/world')} />
            </div>
            </div>
        </Section>
    )
}
