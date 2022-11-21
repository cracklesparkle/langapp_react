import React, {useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import { ViewContext } from './ViewContext';

function LanguageCard ({language, colorId, langId}) {
    const {setView} = useContext(ViewContext);

    const handleClick = event =>{
        setView(language.View)
        localStorage.setItem('langId', JSON.stringify(langId));
    };
    // style={{backgroundImage: `url(${language.Background})`, backgroundSize:"contain", backgroundColor: '#6DB3F2'}}
    return (
        <div onClick={handleClick} className='language' id={colorId}>
            <div className='images'>
                <img src={language.Image}/>
                <img src={language.Background}/>
            </div>
            <div>
                <h3>{language.Title}</h3>
            </div>
            
        </div>
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