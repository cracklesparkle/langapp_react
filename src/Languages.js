import React, {useState, useContext} from 'react';
import LanguageCard from './LanguageCard';
import {motion} from 'framer-motion';

import { languages } from './Data';

import { ViewContext } from './ViewContext';

import allLanguages from './languages/allLanguages.png';

import allLanguagesSvg from './languages/allLanguages.svg';
import { LangContext } from './LangContext';

function Languages(props){
    
    const {currentView, setView} = useContext(ViewContext);
    const {currentLang, setLang} = useContext(LangContext);

    return(
        <LangContext.Provider value={{currentLang, setLang}}>
        <ViewContext.Provider value={{currentView, setView}}>
            <motion.div className='languagesPage' initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
                
                    <div className='allLanguages'>
                        <img src={allLanguagesSvg} className='rotate'></img>
                    </div>
                    <div className='chooseLang'>
                        <h2>ВЫБЕРИТЕ ЯЗЫК ДЛЯ ИЗУЧЕНИЯ:</h2>
                    </div>
                    
                    <div className='buttonsContainer'>
                            <LanguageCard language={languages[0]} colorId='coloredCard1' langId={0} lang={'YA'}/>
                            <LanguageCard language={languages[1]} colorId='coloredCard2' langId={1} lang={'EV'}/>
                            <LanguageCard language={languages[2]} colorId='coloredCard3' langId={2} lang={'EK'}/>
                            <LanguageCard language={languages[3]} colorId='coloredCard4' langId={3} lang={'YU'}/>
                            <LanguageCard language={languages[4]} colorId='coloredCard5' langId={4} lang={'CH'}/>
                            <LanguageCard language={languages[5]} colorId='coloredCard6' langId={5} lang={'DO'}/>
                        
                    </div>
            </motion.div>
        </ViewContext.Provider>
        </LangContext.Provider>
    )
}

export default Languages;