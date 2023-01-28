import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import { ViewContext } from './ViewContext';
import homeLogo from './icons/ui/home_logo.png';
import { LangContext } from './LangContext';

function NavBar(){
    const {currentView, setView} = useContext(ViewContext);
    const {currentLang, setLang} = useContext(LangContext);

    return(
        <div className='navbar'>
            <ul>
                <li className='navbarHome' onClick={()=>{setView('languageSelect')}}>
                    <img className='navbarHomeImage' width={'15px'} src={homeLogo}></img>Главная
                </li>
                {/* <li onClick={()=>{setView('subjectSelect')}}>Темы</li>
                <li onClick={()=>{setView('languageSelect')}}>Языки</li> */}
                {/* {currentView != 'subjectSelect' && currentView != 'languageSelect' && currentView != 'placeholderView' && <li className='back' onClick={()=>{setView('subjectSelect')}}>Вернуться к темам</li>} */}
                {currentLang == 'YA' && <li className='back' onClick={()=>{setView('YA_subjectSelect')}}>Вернуться к темам</li>}
                {currentLang == 'YU' && <li className='back' onClick={()=>{setView('YU_subjectSelect')}}>Вернуться к темам</li>}
            </ul>
        </div>
    )
}

export default NavBar;