import React, {useContext, useState} from 'react';
import {motion} from 'framer-motion';

import {ViewContext, currentView} from './ViewContext';

import Languages from './Languages';
import Subjects from './Subjects';
import Subject from './Subject';

const TypeScreen = ['home', 'languageSelect', 'subjectSelect', 'subjectView']

function Home(){

    //const [currentView, setView] = useState(TypeScreen[0]);

    const {currentView, setView} = useContext(ViewContext);

    if (currentView == TypeScreen[0]){
        console.log(currentView);
        
        return(
            <motion.div 
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
                    <Subject/>
                </motion.div>
            </ViewContext.Provider>
        )
    }
}

export default Home;