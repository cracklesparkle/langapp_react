import React, {useContext, useState} from 'react';

import {motion} from 'framer-motion';
import { ViewContext } from './ViewContext';
import Button from './components/Button';

function PlaceholderPage() {
    const {setView} = useContext(ViewContext);

    const [page, setPage] = useState(0);

    const handleClick = event =>{
        console.log(page);
        setView('languageSelect');
        // if(page == 1){
        //     setPage(2)
            
        // }
        // if(page == 2){
        //     setPage(3)
            
        // }
        // if(page == 3){
        //     setPage(4)
            
        // }

        window.scrollTo(0, 0);
    };
  return (
    <ViewContext.Provider value={{setView}}>
    <motion.div className='placeholderPage' initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 1}}>
            
            <div className="container">
            <h1 className='header'>Извините, страница находится в разработке</h1>

            </div>
            <div className="bottomNavbar">
                {/* <motion.button className='buttonLearn' onClick={handleClick} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>На главную</motion.button> */}
                <Button text='На главную' handleClick={handleClick}/>
            </div>
        

    </motion.div>
    </ViewContext.Provider>
  )
}


export default PlaceholderPage