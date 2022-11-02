import React, {useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import { ViewContext } from './ViewContext';

function LanguageCard ({language, colorId}) {
    const {setView} = useContext(ViewContext);

    return (
        <div onClick={()=>setView('subjectSelect')} className='language' id={colorId}>

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