
import React, {useState} from 'react';
import {motion} from 'framer-motion';
import './App.css';
import './fonts/stylesheet.css';

import NavBar from './NavBar';

import Home from './Home';
import Home_YU from './Home_YU';
import Home_YA from './Home_YA';

import {BrowserRouter, BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import { ViewContext } from './ViewContext';
import {LangContext} from './LangContext';

import Background1 from './languages/bg/background1.jpeg';

import { SubjectContext } from './pages/yakut/Greeting';


import Subjects1 from './pages/yakut/Subjects';
import Subjects2 from './pages/yukaghir/Subjects';

function App(){
    const [currentView, setView] = useState('subjectSelect');
    const [currentLang, setLang] = useState('none');
    // style={{backgroundImage: `url(${Background1})`, backgroundSize:"cover", backgroundPosition: "center"}}
    return (
        <div className='app' style={{backgroundImage: `url(${Background1})`, backgroundRepeat: "no-repeat"}}>
            {/* <img className='appBackground' src={Background1}></img> */}
            {/* <Router>
                <LangContext.Provider value={{currentLang, setLang}}>
                <ViewContext.Provider value={{currentView, setView}}>
                    <NavBar />
                    <Home/>
                </ViewContext.Provider>
                </LangContext.Provider>
            </Router> */}
            <LangContext.Provider value={{currentLang, setLang}}>
            <ViewContext.Provider value={{currentView, setView}}>
            <Router>
                <NavBar/>
                <Routes>
                    <Route path="yakut" element={<Home_YA/>}/>
                    <Route path="yukaghir" element={<Home_YU/>}/>
                </Routes>
            </Router>
            </ViewContext.Provider>
                </LangContext.Provider>
        </div>
    );
}

export default App;