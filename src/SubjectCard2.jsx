import React, {useState, useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { ViewContext } from './ViewContext';

import {motion} from 'framer-motion';

function SubjectCard({ subject, index, subjectContext }) {
    const { setCurrentSubject } = useContext(subjectContext);

    // style={{backgroundImage: `url(${language.Background})`, backgroundSize:"contain", backgroundColor: '#6DB3F2'}}
    return (
        // <motion.button 
        //     key={index}
        //     className='quizOption'
        //     whileHover={{ scale: 1.05 }}
        //     whileTap={{ scale: 0.9 }}
        //     onClick={() => setCurrentSubject(subject.View)}
        //     >
        //     <h4>{subject.Title}</h4>
        // </motion.button>

        <motion.div onClick={() => setCurrentSubject(subject.View)} className='language' id={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}>
            <div className='images'>
                <img src={subject.Image} />
            </div>
            <div>
                <h3>{subject.Title}</h3>
            </div>

        </motion.div>
    )
}

export default SubjectCard;