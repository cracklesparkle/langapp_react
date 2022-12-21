import React, {useContext, useState, useEffect} from 'react';

import { ViewContext } from './ViewContext';

import SubjectCard from './SubjectCard';
import Background from './languages/yukaghir/yukaghir-bg.png';
import yukaghir1 from './languages/yukaghir/yukaghir1.jpg';
import yukaghir1_1 from './languages/yukaghir/yukaghir1-1.jpg';
import yukaghir1_3 from './languages/yukaghir/yukaghir1-3.jpg';
import yukaghir1_4 from './languages/yukaghir/yukaghir1-4.jpg';

import {Navigate, Link} from 'react-router-dom';

import Quiz from './Quiz';
import { quizData1, quizData2, quizData3 } from './quizData';

import {motion} from 'framer-motion';

import Button from './components/Button';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const items = [
    <div className="item" data-value="1"></div>,
    <div className="item" data-value="2"></div>,
    <div className="item" data-value="3"></div>,
    <div className="item" data-value="4"></div>,
    <div className="item" data-value="5"></div>,
];

const Language = ({language}) =>{
    const {setView} = useContext(ViewContext);

    const [page, setPage] = useState(0);


    //pass to quiz
    const[state, setState]=useState(false);

    useEffect(() => {
        if(page == 1){
            setPage(0)
            setState(false)
        }
        
    },[state])

    return(
            <motion.div className='language-page' initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>    
                <ViewContext.Provider value={{setView}}>
                    
                    {page == 0 && <Info language={language} pageChanger={setPage}/>}
                    {page == 1 && <Quiz questions={quizData1.questions} quizTitle='Семья' stateChanger={setState}/>}
                </ViewContext.Provider>
                
            </motion.div>     
    );
};

function Info({language, pageChanger}){
    const {setView} = useContext(ViewContext);
    return(
        <>    
            <ViewContext.Provider value={{setView}}>
                <h1 className='language-page-heading'>{language.Heading}</h1>
                {/* <div>
                    <img className="photo" src={`${yukaghir1}`} alt=""></img>
                </div> */}
                <p className='description'>{language.Description}</p>
                {/* <button onClick={()=> {
                    setView('subjectSelect');
                    var key = JSON.parse(localStorage.getItem('1'));
                    key.available = 1;
                    localStorage.setItem(1, JSON.stringify(key));
                }} className='buttonLearn'>Перейти к изучению</button> */}
                <Button text='Перейти к тесту' handleClick={()=> {
                    pageChanger(1);
                    var key = JSON.parse(localStorage.getItem('1'));
                    key.available = 1;
                    localStorage.setItem(1, JSON.stringify(key));
                    window.scrollTo(0, 0);
                }}/>
                <div>
                    <Carousel className='carousel' 
                            emulateTouch
                            autoPlay={true}
                            dynamicHeight={false}
                            centerMode
                            centerSlidePercentage={100}
                            showStatus={false}
                            showArrows={true}
                            showIndicators={true}
                            showThumbs={false}
                            axis={'horizontal'}
                            interval={2000}
                            transitionTime={1000}
                            infiniteLoop={true}
                        >
                        <div>
                            <img className="photo" src={`${yukaghir1}`} alt=""></img>
                        </div>
                        <div>
                            <img className="photo" src={`${yukaghir1_1}`} alt=""></img>
                        </div>
                        <div>
                            <img className="photo" src={`${yukaghir1_3}`} alt=""></img>
                        </div>
                        <div>
                            <img className="photo" src={`${yukaghir1_4}`} alt=""></img>
                        </div>
                    </Carousel>
                </div>
                
            </ViewContext.Provider>
            
        </>     
);
}

export default Language;