import { Section } from '../../components';
import { useNavigate } from 'react-router-dom';
import './Novedades.css';
import { motion } from 'framer-motion';
import { HeaderBar } from '../../components/HeaderBar/HeaderBar';

export const Novedades = () => {
    const navigate = useNavigate();

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
            <HeaderBar />
            <div className='novedades-container'>
                <div className='novedades-header'>
                    <h1 className='novedades-title'>Novedades</h1>
                </div>
            </div>
        </motion.div>
    )
}