
import React, {useState} from 'react';

import './App.css';
import './fonts/stylesheet.css';

import NavBar from './NavBar';

import Home from './Home';

import {BrowserRouter as Router} from 'react-router-dom';

import { ViewContext } from './ViewContext';

const TypeScreen = ['home', 'languageSelect', 'subjectSelect', 'subjectView', 'languageView', 'familyView', 'natureView', 'animalsView', 'cultureFoodView', 'clothesView']

function App(){
    const [currentView, setView] = useState(TypeScreen[1]);

    return (
        <div className='app'>
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