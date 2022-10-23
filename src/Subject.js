import React from 'react';

import { languages, subjects } from './Data';

import {motion} from 'framer-motion';

import Header from './components/Header';

import Quiz from './Quiz';

const Subject = ({subject}) =>{
    return(
        <motion.div className='subjectPage' initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 1}}>
            <div className='language-page'>
                <h3 className='subHeader'>Приветствие и знакомство на тундренном юкагирском языке.</h3>
                <Quiz subject='s1'/>
            </div>
        </motion.div>
        
    )
};

export default Subject;