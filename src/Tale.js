import React, {useContext, useState} from 'react';

import {motion} from 'framer-motion';
import { ViewContext } from './ViewContext';

import imgCulture1 from './languages/yukaghir/cultureFood/image1.jpg';
import imgCulture2 from './languages/yukaghir/cultureFood/image2.jpg';
import imgCulture3 from './languages/yukaghir/cultureFood/image3.jpg';
import imgCulture4 from './languages/yukaghir/cultureFood/image4.jpg';

import video from './languages/yukaghir/tale/tale.mp4';

function Tale() {
    const {setView} = useContext(ViewContext);

    const [page, setPage] = useState(0);

    const handleClick = event =>{
        setView('subjectSelect');
    };

  return (
    <motion.div className='talePage' initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 1}}>
        <ViewContext.Provider value={{setView}}>
        
        <div className="container">
                        <h1>Юкагирская сказка</h1>
                        <h1>Н. Курилов "Почему у куропатки на лапах щётки"</h1>
                        <video width="750" height="500" controls controlsList='nodownload'>
                            <source src={video} type="video/mp4"/>
                        </video>

        </div>
                    <div className="bottomNavbar">
                        <button className='buttonLearn' onClick={handleClick}>Вернуться</button>
                    </div>
        </ViewContext.Provider>

    </motion.div>
  )
}

export default Tale