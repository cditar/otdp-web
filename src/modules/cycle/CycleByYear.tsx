import React from 'react';
import { Button, Section } from '../../components';
import { useNavigate } from 'react-router-dom';
import cycle202403 from '../../assets/ciclo/202403.jpg'
import cycle202404 from '../../assets/ciclo/202404.jpg'
import cycle202405 from '../../assets/ciclo/202405.jpg'
import cycle202406 from '../../assets/ciclo/202406.jpg'
import cycle202407 from '../../assets/ciclo/202407.jpg'
import cycle202408 from '../../assets/ciclo/202408.jpg'
import useHorizontalScroll from '../../hooks/useHorizontalScroll';


export const CycleByYear = () => {
    const navigate = useNavigate();
    const scrollRef = useHorizontalScroll(5);
    

    return (
        <Section theme='dark' withArrowBack path='/'>
            <div style={{ display: 'flex', flexDirection: 'column', width: '100vw' }}>
                <div className='cycle-explore-container'>
                    <div className="cycle-carrousel-container">
                        <ul ref={scrollRef} className='cycle-ul'>
                            <img alt='disc6' src={cycle202403} className='cycle-scrollable-zoom' />
                            <img alt='disc1' src={cycle202404} className='cycle-scrollable-zoom' />
                            <img alt='disc3' src={cycle202405} className='cycle-scrollable-zoom' />
                            <img alt='disc3' src={cycle202406} className='cycle-scrollable-zoom' />
                            <img alt='disc3' src={cycle202407} className='cycle-scrollable-zoom' />
                            <img alt='disc3' src={cycle202408} className='cycle-scrollable-zoom' />
                        </ul>
                    </div>
                </div>
            </div >
        </Section >
    )
}