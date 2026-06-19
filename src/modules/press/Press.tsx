import { Section } from "../../components";
import { PressData } from "../../const/press";
import { motion } from 'framer-motion';
import './Press.css';

export const Press = () => {
    return (
        <>
            <Section title='Prensa' path='/prensa' withHeaderBar withFooter>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                        <div className='press-grid'>
                            {PressData.map((item: any, index: number) => (
                                <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className='press-card'>
                                    <div className='press-image'>
                                        {item.img ? <img src={item.img} alt={item.title} /> : <div className='press-placeholder'></div>}
                                    </div>
                                    <div className='press-info'>
                                        <span className='press-category'>{item.subtitle || 'PRESS'}</span>
                                        <span className='press-date'>{item.date}</span>
                                    </div>
                                    <h3 className='press-card-title'>{item.title}</h3>
                                </a>
                            ))}
                        </div>
                </motion.div>
            </Section>
        </>
    )
}