import React, {useContext, useState, useEffect} from 'react';

import {motion} from 'framer-motion';
import { ViewContext } from './ViewContext';

import Button from './components/Button';

import imgCulture1 from './languages/yukaghir/cultureFood/image1.jpg';
import imgCulture2 from './languages/yukaghir/cultureFood/image2.jpg';
import imgCulture3 from './languages/yukaghir/cultureFood/image3.jpg';
import imgCulture4 from './languages/yukaghir/cultureFood/image4.jpg';
import imgCulture5 from './languages/yukaghir/cultureFood/image5.jpg';
import imgCulture6 from './languages/yukaghir/cultureFood/image6.jpg';
import imgCulture7 from './languages/yukaghir/cultureFood/image7.jpg';
import imgCulture8 from './languages/yukaghir/cultureFood/image8.jpg';
import imgCulture9 from './languages/yukaghir/cultureFood/image9.jpeg';

import audio76 from "./languages/yukaghir/nature/audio/76. яранга традиционное переносное жилище.mp3";
import audio77 from "./languages/yukaghir/nature/audio/77. оленеводство основная традиционная отрасль юкагиров.mp3";
import audio78 from "./languages/yukaghir/nature/audio/78. это рыба.mp3";
import audio79 from "./languages/yukaghir/nature/audio/79. чир.mp3";
import audio80 from "./languages/yukaghir/nature/audio/80. чир большой.mp3";
import audio81 from "./languages/yukaghir/nature/audio/81. юкола.mp3";
import audio82 from "./languages/yukaghir/nature/audio/82. юкола висит.mp3";
import audio83 from "./languages/yukaghir/nature/audio/83. строганина.mp3";
import audio84 from "./languages/yukaghir/nature/audio/84. строганина вкусная.mp3";
import audio85 from "./languages/yukaghir/nature/audio/85. щука.mp3";
import audio86 from "./languages/yukaghir/nature/audio/86. у щуки много зубов.mp3";
import audio87 from "./languages/yukaghir/nature/audio/87. налим.mp3";

import SoundButton from './components/SoundButton';

import { quizData6 } from './quizData';
import Quiz from './Quiz';

function CultureFood() {
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
    <motion.div className='naturePage' initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 1}}>
        <ViewContext.Provider value={{setView}}>
        
            {page !== 1 && <div className="container">
                {page == 0 && <Animal/>}
            </div>}
            {page == 1 && <Quiz questions={quizData6.questions} quizTitle='Культура юкагиров' stateChanger={setState}/>}
            {page !== 1 && <div className="bottomNavbar">
                {/* <button className='buttonLearn' onClick={handleClick}>Вернуться к темам</button> */}
                <Button text='Перейти к тесту' handleClick={handleClick}/>
            </div>}
        </ViewContext.Provider>

    </motion.div>
  )
}

function Animal(){
    return (
        <motion.div className='earth' initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 1}}>
            <h1 className='header'>Культура юкагиров (яранга, оленеводство, рыболовство).</h1>
            <div className='block'>
                <div className='audio-text' id='sentence'>
                    <SoundButton audio={audio76}/>
                    <p className='natureSentence'>Wадун нимэ- тидаатэҥ хануойирэҥ иwильҕат wиэнунҥа, илэн саwаҕат иирэйуолнуни.</p>
                </div>
                <p className='natureSentence'>Яранга – традиционное переносное жилище из жердей и оленьих шкур.</p>
                <br></br>
                
                <div className='image-culture'>
                    <img src={imgCulture1}></img>
                </div>
            </div>
    
            <div className='block'>
                <div className='audio-text' id='sentence'>
                    <SoundButton audio={audio77}/>
                    <p className='natureSentence'>Wадун чии тидаатэҥ илэлэк саҕанаҥи, эwрэҥи, эньҥи.</p>
                </div>
                <p className='natureSentence'>Оленеводство – основная традиционная отрасль юкагиров.</p>
                <br></br>
                
                <div className='image-culture'>
                    <img src={imgCulture2}></img>
                </div>
            </div>


            <EarthCard audio={audio78} header={'Тэн альҕа'} subheader={'Это рыба'} image={imgCulture3}/>
            <PlantCard audio1={audio79} audio2={audio80} header={'Муоха'} subheader={'Чир'} sentence={'Муоха чамуонь'} subsentence={'Чир большой.'} image={imgCulture9}/>

            <PlantCard audio1={audio81} audio2={audio82} header={'Тэльиэдальҕа'} subheader={'Юкола'} sentence={'Тэльиэдальҕа wалуонь'} subsentence={'Юкола висит.'} image={imgCulture8}/>
            
            <PlantCard audio1={audio83} audio2={audio84} header={'Чааха'} subheader={'Строганина'} sentence={'Чааха ньанбэлич.'} subsentence={'Строганина вкусная.'}/>
            <PlantCard audio1={audio85} audio2={audio86} header={'Умуйэ'} subheader={'Щука'} sentence={'Умуйэ пойуодьэ сальҕарииньэй wалуонь'} subsentence={'У щуки много зубов.'} image={imgCulture6}/>
            <PlantCard audio1={audio87} header={'Көсльэ'} subheader={'Налим'} image={imgCulture5}/>
        </motion.div>
      )
}

function EarthCard(props){
    return(
        <div className='block'>
            <div className='audio-text-header'>
                <SoundButton audio={props.audio}/>
                <h1>{props.header}</h1>
            </div>
            <h3 className='subheader'>{props.subheader}</h3>
            {props.image && <div className='image'>
                <img src={props.image}></img>
            </div>}
        </div>
    )
}

function PlantCard(props){
    return(
        <div className='block'>
            <div className='audio-text-header' id='sentence'>
                <SoundButton audio={props.audio1}/>
                <h1>{props.header}</h1>
            </div>
            <h3 className='subheader'>{props.subheader}</h3>
            {props.sentence && <div className='audio-text'>
                <SoundButton audio={props.audio2}/>
                <p className='natureSentence'>{props.sentence}</p>
            </div>}
            {props.subsentence && <div>
                <p className='natureSentence'>{props.subsentence}</p>
            </div>}
            <div className='image'>
                <img src={props.image}></img>
            </div>
        </div>
    );
}

export default CultureFood