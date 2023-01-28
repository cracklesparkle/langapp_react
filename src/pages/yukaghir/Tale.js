import React, {useContext, useState, useEffect} from 'react';

import {motion} from 'framer-motion';
import { ViewContext } from '../../ViewContext';
import Button from '../../components/Button';
import imgCulture1 from '../../languages/yukaghir/cultureFood/image1.jpg';
import imgCulture2 from '../../languages/yukaghir/cultureFood/image2.jpg';
import imgCulture3 from '../../languages/yukaghir/cultureFood/image3.jpg';
import imgCulture4 from '../../languages/yukaghir/cultureFood/image4.jpg';
import video from '../../languages/yukaghir/tale/tale.mp4';

import { quizData8 } from '../../quizData';
import Quiz from '../../Quiz';

function Tale() {
    const {setView} = useContext(ViewContext);

    const [page, setPage] = useState(0);

    const handleClick = event =>{
        if(page == 0){
            // setView('subjectSelect');
            // var key = JSON.parse(localStorage.getItem('6'));
            // key.available = 1;
            // localStorage.setItem(6, JSON.stringify(key));
            window.scrollTo(0, 0);
            setPage(1)
        }
    };

    //pass to quiz
    const[state, setState]=useState(false);

    useEffect(() => {
        if(page == 1){
            setPage(0)
            setState(false)
        }
        
    },[state])

  return (
    <motion.div className='talePage' initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 1}}>
        <ViewContext.Provider value={{setView}}>
        
        {page != 1 && <div className="container">
                        <h1>Юкагирская сказка</h1>
                        <h1>Н. Курилов "Почему у куропатки на лапах щётки"</h1>
                        <video width="750" height="500" controls controlsList='nodownload' onEnded={() => {
                            
                        }}>
                            <source src={video} type="video/mp4"/>
                        </video>
        </div>}
        {page == 1 && <Quiz questions={quizData8.questions} quizTitle='Юкагирская сказка' stateChanger={setState}/>}
        {page != 1 && <div className="bottomNavbar">
            {/* <button className='buttonLearn' onClick={handleClick}>Вернуться к темам</button> */}
            <Button text='Перейти к тесту' handleClick={handleClick}/>
        </div>}
        </ViewContext.Provider>

    </motion.div>
  )
}

export default Tale