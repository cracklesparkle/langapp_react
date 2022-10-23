import React from 'react';

import SubjectCard from './SubjectCard';
import Background from './images/languages/yukaghir/yukaghir-bg.png';
import yukaghir1 from './images/languages/yukaghir/yukaghir1.jpg';
import yukaghir1_1 from './images/languages/yukaghir/yukaghir1-1.jpg';
import yukaghir1_3 from './images/languages/yukaghir/yukaghir1-3.jpg';
import yukaghir1_4 from './images/languages/yukaghir/yukaghir1-4.jpg';
import './Language.css';

import Slider from './components/Carousel';

import {Navigate, Link} from 'react-router-dom';

const Language = ({language}) =>{
    return(
            <div className='language-page'>    
                <h1>{language.Heading}</h1>
                <div>
                    <img className="photo" src={`${yukaghir1}`} alt=""></img>
                </div>
                <p>{language.Description}</p>
                <h3>Перейти к изучению ↓</h3>
            </div>     
    );
};

export default Language;