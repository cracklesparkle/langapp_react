import React, {useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import { ViewContext } from './ViewContext';

function LanguageCard ({language}) {
    const {setView} = useContext(ViewContext);

    return (
        <div onClick={()=>setView('subjectSelect')} className='language'>

            <div>
                <h3>{language.Title}</h3>
            </div>

            <div>
                {/* <img src={subject.Image !== 'N/A' ? subject.Image : 'https://via.placeholder.com/400'} alt={subject.Title}/> */}
                <img src={language.Image} alt={language.Title}/>
            </div>
        </div>
    )
}

export default LanguageCard;