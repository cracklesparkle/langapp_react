import React, {useContext, useState} from 'react';
import {motion} from 'framer-motion';

import {ViewContext, currentView} from './ViewContext';
import { LangContext } from './LangContext';

import Languages from './Languages';
import PlaceholderPage from './PlaceholderPage';

import YU_Subjects from './pages/yukaghir/Subjects';
import YU_Greeting from './pages/yukaghir/Greeting';
import YU_Language from './pages/yukaghir/Language';
import YU_Family from './pages/yukaghir/Family';
import YU_Nature from './pages/yukaghir/Nature';
import YU_Animals from './pages/yukaghir/Animals';
import YU_CultureFood from './pages/yukaghir/CultureFood';
import YU_Clothes from './pages/yukaghir/Clothes';
import YU_Tale from './pages/yukaghir/Tale';
import YU_Folklore from './pages/yukaghir/Folklore';
import YU_FamousPeople from './pages/yukaghir/FamousPeople';

import YA_Subjects from './pages/yakut/Subjects';
import YA_Greeting from './pages/yakut/Greeting';
import YA_Language from './pages/yakut/Language';
import YA_Family from './pages/yakut/Family';
import YA_Animals from './pages/yakut/Animals';
import YA_CultureFood from './pages/yakut/CultureFood';
import YA_Clothes from './pages/yakut/Clothes';
import YA_Tale from './pages/yakut/Tale';
import YA_Folklore from './pages/yakut/Folklore';
import YA_FamousPeople from './pages/yakut/FamousPeople';


import { languages } from './Data';

function Home({view, lang}){
    //const [currentView, setView] = useState(TypeScreen[0]);
    const {currentLang, setLang} = useContext(LangContext);

    const {currentView, setView} = useContext(ViewContext);

    //setView(lang);
    
    return(
        <LangContext.Provider value={{currentLang, setLang}}>
        <ViewContext.Provider value={{currentView, setView}}>
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    >
                    {currentView === 'placeholderView' && <PlaceholderPage/>}
                    {currentView === 'languageSelect' && <Languages/>}
                    
                    {currentView === 'subjectSelect' && <YA_Subjects/>}
                    {currentView === 'YA_introductionView' && <YA_Language language={languages[localStorage.getItem('langId')]}/>}
                    {currentView === 'YA_greetingView' && <YA_Greeting/>}
                    {currentView === 'YA_familyView' && <YA_Family/>}
                    {currentView === 'YA_animalsView' && <YA_Animals/>}
                    {currentView === 'YA_cultureFoodView' && <YA_CultureFood/>}
                    {currentView === 'YA_clothesView' && <YA_Clothes/>}
                    {currentView === 'YA_taleView' && <YA_Tale/>}
                    {currentView === 'YA_folkloreView' && <YA_Folklore/>}
                    {currentView === 'YA_famousPeopleView' && <YA_FamousPeople/>}
                </motion.div>
            </ViewContext.Provider>
            </LangContext.Provider>
    )
}

export default Home;