import React, {useState, useContext} from 'react';
import LanguageCard from './LanguageCard';
import {motion} from 'framer-motion';

import { languages } from './Data';

import { ViewContext } from './ViewContext';

import allLanguages from './images/languages/allLanguages.png';

import Lang1 from './images/languages/1.png';
import Lang2 from './images/languages/2.png';
import Lang3 from './images/languages/3.png';
import Lang4 from './images/languages/4.png';
import Lang5 from './images/languages/5.png';
import Lang6 from './images/languages/6.png';
import Lang7 from './images/languages/7.png';

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
                    <div className='buttons'>
                        <LanguageCard language={languages[0]}/>
                        <LanguageCard language={languages[1]}/>
                        <LanguageCard language={languages[2]}/>
                        <LanguageCard language={languages[3]}/>
                    </div>
                    
                
            </motion.div>
        </ViewContext.Provider>
    )
}

export default Languages;