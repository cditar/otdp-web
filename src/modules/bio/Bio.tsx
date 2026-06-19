import { Section } from "../../components"
import './Bio.css';

export const Bio = () => {  
    return (
        <Section title='Bio' path='/bio' withHeaderBar withFooter> 
            <div className='bio-container'>
                <div className='bio-content'>
                    <h1>Bio</h1>
                </div>
            </div>
        </Section>
    )
}