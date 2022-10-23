import React, {useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import { ViewContext } from './ViewContext';

function LanguageCard ({language}) {
    const {setView} = useContext(ViewContext);

    return (
        <div onClick={()=>setView('languageView')} className='language'>

            <div>
                <h3>{language.Title}</h3>
            </div>
        </div>
    )
}

export default LanguageCard;