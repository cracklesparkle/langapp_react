import React, {useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import { ViewContext } from './ViewContext';
import {motion} from 'framer-motion';
import { LangContext } from './LangContext';

function LanguageCard ({language, colorId, langId, lang}) {
    const {currentLang, setLang} = useContext(LangContext);
    const {setView} = useContext(ViewContext);

    const handleClick = event =>{
        
        setView(language.View)
        
        
        localStorage.setItem('langId', JSON.stringify(langId));
        window.scrollTo(0, 0);

        setLang(lang)
        console.log(currentLang)
    };
    // style={{backgroundImage: `url(${language.Background})`, backgroundSize:"contain", backgroundColor: '#6DB3F2'}}
    return (
        <motion.div onClick={handleClick} className='language' id={colorId}
        whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
        >
            <div className='images'>
                <img src={language.Image}/>
                <img src={language.Background}/>
            </div>
            <div>
                <h3>{language.Title}</h3>
            </div>
            
        </motion.div>
    )
    // return (
    //     <div onClick={handleClick} className='languageCard' id={colorId}>
    //         <div className='image'>
    //             <img className='foreground' src={language.Image}/>
    //             <img className='background' src={language.Background}/>
    //         </div>
    //         <div className='title'>
    //             <h3>{language.Title}</h3>
    //         </div>
            
    //     </div>
    // )
}

export default LanguageCard;