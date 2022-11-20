import React, {useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import { ViewContext } from './ViewContext';

function LanguageCard ({language, colorId, langId}) {
    const {setView} = useContext(ViewContext);

    const handleClick = event =>{
        setView(language.View)
        localStorage.setItem('langId', JSON.stringify(langId));
    };

    return (
        <div onClick={handleClick} className='language' id={colorId}>

            <div>
                <h3>{language.Title}</h3>
            </div>
            <div>
                <img src={language.Image}/>
            </div>
        </div>
    )
}

export default LanguageCard;