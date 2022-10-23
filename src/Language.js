import React, {useContext, useState} from 'react';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import { ViewContext } from './ViewContext';

import SubjectCard from './SubjectCard';
import Background from './images/languages/yukaghir/yukaghir-bg.png';
import yukaghir1 from './images/languages/yukaghir/yukaghir1.jpg';
import yukaghir1_1 from './images/languages/yukaghir/yukaghir1-1.jpg';
import yukaghir1_3 from './images/languages/yukaghir/yukaghir1-3.jpg';
import yukaghir1_4 from './images/languages/yukaghir/yukaghir1-4.jpg';

import {Navigate, Link} from 'react-router-dom';

import {motion} from 'framer-motion';

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

const items = [
    <div className="item" data-value="1"></div>,
    <div className="item" data-value="2"></div>,
    <div className="item" data-value="3"></div>,
    <div className="item" data-value="4"></div>,
    <div className="item" data-value="5"></div>,
];

const Carousel = () => (
    <AliceCarousel
        autoWidth
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
    />
);

const Language = ({language}) =>{
    const {setView} = useContext(ViewContext);

    return(
            <motion.div className='language-page' initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>    
                <ViewContext.Provider value={{setView}}>
                    <h1>{language.Heading}</h1>
                    <div>
                        <img className="photo" src={`${yukaghir1}`} alt=""></img>
                    </div>
                    <div>
                        
                    </div>
                    <p>{language.Description}</p>
                    <button onClick={()=>setView('subjectSelect')} className='buttonLearn'>Перейти к изучению</button>
                </ViewContext.Provider>
                
            </motion.div>     
    );
};

export default Language;