
import React, {useState} from 'react';

import './App.css';
import './fonts/stylesheet.css';

import NavBar from './NavBar';

import Home from './Home';

import {BrowserRouter as Router} from 'react-router-dom';

import { ViewContext } from './ViewContext';
import {LangContext} from './LangContext';

import Background1 from './languages/bg/background1.jpeg';

import { SubjectContext } from './pages/yakut/Greeting';

function App(){
    const [currentView, setView] = useState('languageSelect');
    const [currentLang, setLang] = useState('none');
    // style={{backgroundImage: `url(${Background1})`, backgroundSize:"cover", backgroundPosition: "center"}}
    return (
        <div className='app' style={{backgroundImage: `url(${Background1})`, backgroundRepeat: "no-repeat"}}>
            {/* <img className='appBackground' src={Background1}></img> */}
            <Router>
                <LangContext.Provider value={{currentLang, setLang}}>
                <ViewContext.Provider value={{currentView, setView}}>
                    <NavBar />
                    <Home/>
                </ViewContext.Provider>
                </LangContext.Provider>
            </Router>
            
        </div>
    );
}

export default App;