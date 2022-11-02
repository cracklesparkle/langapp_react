import React, {useContext} from 'react';
import {Navigate, Link} from 'react-router-dom';
import { ViewContext } from './ViewContext';

function SubjectCard ({subject}) {
    const {setView} = useContext(ViewContext);
    return (
            
            <div onClick={()=>setView(subject.View)} className='subject'>
                <div>
                    <h3>{subject.Title}</h3>
                </div>
        
                <div>
                    <img src={subject.Image} alt={subject.Title}/>
                </div>
            </div>
    )
}

export default SubjectCard;