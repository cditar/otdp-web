import { Section } from "../../components"
import { HeaderBar } from "../../components/HeaderBar/HeaderBar";
import './Bio.css';

export const Bio = () => {  
    return (
        <Section title='Bio' path='/bio' withHeaderBar>
            <div className='bio-container'>
                <div className='bio-content'>
                    <h1>Bio</h1>
                </div>
            </div>
        </Section>
    )
}