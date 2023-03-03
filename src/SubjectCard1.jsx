import React, {useState, useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { ViewContext } from './ViewContext';

import {motion} from 'framer-motion';

function SubjectCard ({subject, index}) {
    const {setView} = useContext(ViewContext);
    
    // style={{backgroundImage: `url(${language.Background})`, backgroundSize:"contain", backgroundColor: '#6DB3F2'}}
    return (
        <motion.div onClick={()=>setView(subject.View)} className='language'
        whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}>
            <div className='images'>
                {subject.Image  && <img src={subject.Image}/>}
                
            </div>
            <div>
                <h3>{subject.Title}</h3>
            </div>
            
        </motion.div>
    )
    // return (
    //     <div onClick={handleClick} className='languageCard' id={colorId}>
    //         <div className='image'>
    //             <img className='foreground' src={language.Image}/>
    //             <img className='background' src={language.Background}/>
    //         </div>
    //         <div className='title'>
    //             <h3>{language.Title}</h3>
    //         </div>
            
    //     </div>
    // )
}

export default SubjectCard;