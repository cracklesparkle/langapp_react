import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import { ViewContext } from './ViewContext';

function NavBar(){
    const {currentView, setView} = useContext(ViewContext);
    return(
        <div className='navbar'>
            <ul>
                <li onClick={()=>{setView('languageSelect')}}>Главная</li>
                {/* <li onClick={()=>{setView('subjectSelect')}}>Темы</li>
                <li onClick={()=>{setView('languageSelect')}}>Языки</li> */}
            </ul>
        </div>
    )
}

export default NavBar;