import React from 'react';

import { languages, subjects } from './Data';

import {motion} from 'framer-motion';

import Quiz from './Quiz';

const Subject = ({subject}) =>{
    return(
        <motion.div className='container' initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 1}}>
            <div className='language-page'>
                <h3>Приветствие и знакомство на тундренном юкагирском языке.</h3>
                <Quiz subject='geography'/>
            </div>
        </motion.div>
        
    )
};

export default Subject;