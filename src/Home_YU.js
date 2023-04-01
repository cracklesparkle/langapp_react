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
                    
                    {currentView === 'subjectSelect' && <YU_Subjects/>}
                    {currentView === 'YU_introductionView' && <YU_Language language={languages[3]}/>}
                    {currentView === 'YU_greetingView' && <YU_Greeting/>}
                    {currentView === 'YU_familyView' && <YU_Family/>}
                    {currentView === 'YU_natureView' && <YU_Nature/>}
                    {currentView === 'YU_animalsView' && <YU_Animals/>}
                    {currentView === 'YU_cultureFoodView' && <YU_CultureFood/>}
                    {currentView === 'YU_clothesView' && <YU_Clothes/>}
                    {currentView === 'YU_taleView' && <YU_Tale/>}
                    {currentView === 'YU_folkloreView' && <YU_Folklore/>}
                    {currentView === 'YU_famousPeopleView' && <YU_FamousPeople/>}
                </motion.div>
            </ViewContext.Provider>
            </LangContext.Provider>
    )
}

export default Home;