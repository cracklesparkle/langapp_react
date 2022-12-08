import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import { ViewContext } from './ViewContext';
import homeLogo from './icons/ui/home_logo.png';

function NavBar(){
    const {currentView, setView} = useContext(ViewContext);

    return(
        <div className='navbar'>
            <ul>
                <li className='navbarHome' onClick={()=>{setView('languageSelect')}}>
                    <img className='navbarHomeImage' width={'15px'} src={homeLogo}></img>Главная
                </li>
                {/* <li onClick={()=>{setView('subjectSelect')}}>Темы</li>
                <li onClick={()=>{setView('languageSelect')}}>Языки</li> */}
                {currentView != 'subjectSelect' && currentView != 'home' && currentView != 'languageSelect' && currentView != 'placeholderView' && <li className='back' onClick={()=>{setView('subjectSelect')}}>Вернуться к темам</li>}
                
            </ul>
        </div>
    )
}

export default NavBar;