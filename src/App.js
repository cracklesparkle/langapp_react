
import React, {useState} from 'react';

import './App.css';
import './fonts/stylesheet.css';

import NavBar from './NavBar';

import Home from './Home';

import {BrowserRouter as Router} from 'react-router-dom';

import { ViewContext } from './ViewContext';

import Background1 from './languages/bg/background1.jpeg';

const TypeScreen = ['home', 'languageSelect', 'subjectSelect', 'introductionView', 'greetingView', 'familyView', 'natureView', 'animalsView', 'cultureFoodView', 'clothesView', 'taleView', 'folkloreView', 'famousPeopleView', 'placeholderView']

function App(){
    const [currentView, setView] = useState(TypeScreen[1]);
    // style={{backgroundImage: `url(${Background1})`, backgroundSize:"cover", backgroundPosition: "center"}}
    return (
        <div className='app' style={{backgroundImage: `url(${Background1})`, backgroundSize:"100% auto", backgroundPosition: "0% 0%", backgroundRepeat: "no-repeat"}}>
            {/* <img className='appBackground' src={Background1}></img> */}
            <Router>
                <ViewContext.Provider value={{currentView, setView}}>
                    <NavBar />
                    <Home/>
                </ViewContext.Provider>
            </Router>
            
        </div>
    );
}

export default App;