import React, {useState, useContext} from 'react';
import LanguageCard from './LanguageCard';
import {motion} from 'framer-motion';

import { languages } from './Data';

import { ViewContext } from './ViewContext';

import allLanguages from './languages/allLanguages.png';

function Languages(props){
    
    const {currentView, setView} = useContext(ViewContext);

    return(
        <ViewContext.Provider value={{currentView, setView}}>
            <motion.div className='languagesPage' initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
                {/* <ul className='circle-container'>
                    <li className='triangle'><img src={Lang1}/></li>
                    <li className='triangle'><img src={Lang2}/></li>
                    <li className='triangle'><img src={Lang3}/></li>
                    <li className='triangle'><img src={Lang4}/></li>
                    <li className='triangle'><img src={Lang5}/></li>
                    <li className='triangle'><img src={Lang6}/></li>
                    <li className='triangle'><img src={Lang7}/></li>
                </ul> */}
                
                    <div className='allLanguages'><img src={allLanguages}></img></div>
                    <h3>Выберите язык для изучения:</h3>
                    <div className='buttonsContainer'>
                            <LanguageCard language={languages[0]} colorId='coloredCard1' langId={0}/>
                            <LanguageCard language={languages[1]} colorId='coloredCard2' langId={1}/>
                            <LanguageCard language={languages[2]} colorId='coloredCard3' langId={2}/>
                            <LanguageCard language={languages[3]} colorId='coloredCard4' langId={3}/>
                            <LanguageCard language={languages[4]} colorId='coloredCard5' langId={4}/>
                            <LanguageCard language={languages[5]} colorId='coloredCard6' langId={5}/>
                        
                    </div>
                    
                
            </motion.div>
        </ViewContext.Provider>
    )
}

export default Languages;