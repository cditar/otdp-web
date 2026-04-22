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
                    <div className="image-wrapper">
                        <img src={c1} alt="Campaign 1" className='campaignImage' />
                    </div>
                    <div className="image-wrapper">
                        <img src={c2} alt="Campaign 2" className='campaignImage' />
                    </div>
                    <div className="image-wrapper">
                        <img src={c3} alt="Campaign 3" className='campaignImage' />
                    </div>
                </div>
                <div className="campaign-buttons">
                    <Button 
                        width='100%' 
                        title="Argentina" 
                        variant 
                        onClick={() => navigate('/campaign/ar')} 
                    />
                    <Button 
                        width='100%' 
                        title="Resto del mundo" 
                        variant 
                        onClick={() => navigate('/campaign/world')} 
                    />
                </div>
            </div>
        </Section>
    )
}
