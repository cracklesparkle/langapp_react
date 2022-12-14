import React, {useContext, useState} from 'react';
import {motion} from 'framer-motion';

import {ViewContext, currentView} from './ViewContext';

import Languages from './Languages';
import Subjects from './Subjects';
import Subject from './Subject';
import Greeting from './Greeting';
import Language from './Language';

import Family from './Family';
import Nature from './Nature';
import Animals from './Animals';
import CultureFood from './CultureFood';
import Clothes from './Clothes';
import Tale from './Tale';
import Folklore from './Folklore';
import FamousPeople from './FamousPeople';

import PlaceholderPage from './PlaceholderPage';

import { languages } from './Data';

const TypeScreen = ['home', 'languageSelect', 'subjectSelect', 'introductionView', 'greetingView', 'familyView', 'natureView', 'animalsView', 'cultureFoodView', 'clothesView', 'taleView', 'folkloreView', 'famousPeopleView', 'placeholderView'];

function Home(){

    
    //const [currentView, setView] = useState(TypeScreen[0]);

    const {currentView, setView} = useContext(ViewContext);

    if (currentView == TypeScreen[0]){
        console.log(currentView);
        
        return(
            <motion.div 
                className='homeContainer'
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                >
                <button onClick={()=>setView(TypeScreen[1])} className='buttonLearn'>Выбрать язык</button>
            </motion.div>
        )
    }
    if (currentView == TypeScreen[1]){
        
        console.log(currentView);
        return(
            <ViewContext.Provider value={{currentView, setView}}>
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    >
                    <Languages />
                </motion.div>
            </ViewContext.Provider>
        )
    }
    if (currentView == TypeScreen[2]){
        console.log(currentView);
        return(
            <ViewContext.Provider value={{currentView, setView}}>
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    >
                    <Subjects/>
                </motion.div>
            </ViewContext.Provider>
        )
    }

    if (currentView == TypeScreen[3]){
        console.log(currentView);
        return(
            <ViewContext.Provider value={{currentView, setView}}>
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    >
                    <Language language={languages[localStorage.getItem('langId')]}/>
                </motion.div>
            </ViewContext.Provider>
        )
    }

    if (currentView == TypeScreen[4]){
        console.log(currentView);
        return(
            <ViewContext.Provider value={{currentView, setView}}>
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    >
                    <Greeting/>
                </motion.div>
            </ViewContext.Provider>
        )
    }

    

    if (currentView == TypeScreen[5]){
        console.log(currentView);
        return(
            <ViewContext.Provider value={{currentView, setView}}>
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    >
                    <Family/>
                </motion.div>
            </ViewContext.Provider>
        )
    }

    if (currentView == TypeScreen[6]){
        console.log(currentView);
        return(
            <ViewContext.Provider value={{currentView, setView}}>
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    >
                    <Nature/>
                </motion.div>
            </ViewContext.Provider>
        )
    }

    if (currentView == TypeScreen[7]){
        console.log(currentView);
        return(
            <ViewContext.Provider value={{currentView, setView}}>
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    >
                    <Animals/>
                </motion.div>
            </ViewContext.Provider>
        )
    }

    if (currentView == TypeScreen[8]){
        console.log(currentView);
        return(
            <ViewContext.Provider value={{currentView, setView}}>
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    >
                    <CultureFood/>
                </motion.div>
            </ViewContext.Provider>
        )
    }
    if (currentView == TypeScreen[9]){
        console.log(currentView);
        return(
            <ViewContext.Provider value={{currentView, setView}}>
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    >
                    <Clothes/>
                </motion.div>
            </ViewContext.Provider>
        )
    }
    if (currentView == TypeScreen[10]){
        console.log(currentView);
        return(
            <ViewContext.Provider value={{currentView, setView}}>
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    >
                    <Tale/>
                </motion.div>
            </ViewContext.Provider>
        )
    }
    if (currentView == TypeScreen[11]){
        console.log(currentView);
        return(
            <ViewContext.Provider value={{currentView, setView}}>
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    >
                    <Folklore/>
                </motion.div>
            </ViewContext.Provider>
        )
    }
    if (currentView == TypeScreen[12]){
        console.log(currentView);
        return(
            <ViewContext.Provider value={{currentView, setView}}>
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    >
                    <FamousPeople/>
                </motion.div>
            </ViewContext.Provider>
        )
    }
    if (currentView == TypeScreen[13]){
        console.log(currentView);
        return(
            <ViewContext.Provider value={{currentView, setView}}>
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    >
                    <PlaceholderPage/>
                </motion.div>
            </ViewContext.Provider>
        )
    }
}

export default Home;