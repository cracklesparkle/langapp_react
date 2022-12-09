import React, {useContext, useState, useEffect} from 'react';

import {motion} from 'framer-motion';
import { ViewContext } from './ViewContext';

import b_left from './languages/yukaghir/greeting/b_left.png';
import b_right from './languages/yukaghir/greeting/b_right.png';
import g_left from './languages/yukaghir/greeting/g_left.png';
import g_right from './languages/yukaghir/greeting/g_right.png';

import Quiz from './Quiz';
import { quizData1, quizData2, quizData3 } from './quizData';

import Bubble from './components/Bubble';

import Button from './components/Button';
import SoundButton from './components/SoundButton';

import audio1 from "./languages/yukaghir/greeting/audio/1. доброе утро.mp3";
import audio2 from "./languages/yukaghir/greeting/audio/2. добрый день.mp3";
import audio3 from "./languages/yukaghir/greeting/audio/3. добрый вечер.mp3";
import audio4 from "./languages/yukaghir/greeting/audio/4. доброй ночи.mp3";
import audio5 from "./languages/yukaghir/greeting/audio/5. как тебя зовут.mp3";
import audio6 from "./languages/yukaghir/greeting/audio/6. меня зовут вадулика.mp3";
import audio7 from "./languages/yukaghir/greeting/audio/7. как тебя зовут.mp3";
import audio8 from "./languages/yukaghir/greeting/audio/8. меня зовут коля.mp3";
import audio9 from "./languages/yukaghir/greeting/audio/9. в каком классе ты учишься.mp3";
import audio10 from "./languages/yukaghir/greeting/audio/10. я учусь в третьем классе.mp3";
import audio11 from "./languages/yukaghir/greeting/audio/11. а ты в каком классе учишься.mp3";
import audio12 from "./languages/yukaghir/greeting/audio/12. я учусь во втором классе.mp3";
import audio13 from "./languages/yukaghir/greeting/audio/13. тебе сколько лет.mp3";
import audio14 from "./languages/yukaghir/greeting/audio/14. мне 9 лет.mp3";
import audio15 from "./languages/yukaghir/greeting/audio/15. пока.mp3";
import audio16 from "./languages/yukaghir/greeting/audio/16. до свидания.mp3";


const data = [
    [
        {
            "sentence": "Амучэ идьигойгирлэк!",
            "translation": "Доброе утро!",
            "avatar": "boy",
            "audio": audio1
        },
        {
            "sentence": "Амучэ чайлэлэк!",
            "translation": "Добрый день!",
            "avatar": "girl",
            "audio": audio2
        }
    ],
    [
        {
            "sentence": "Амучэ аwйааҕарлэк!",
            "translation": "Добрый вечер!",
            "avatar": "boy",
            "audio": audio3
        },
        {
            "sentence": "Амучэ чиҥичэлэк!",
            "translation": "Доброй ночи!",
            "avatar": "girl",
            "audio": audio4
        }
    ],
    [
        {
            "sentence": "Тэт кирийэ кинэк?",
            "translation": "Как тебя зовут?",
            "avatar": "boy",
            "audio": audio5
        },
        {
            "sentence": "Мэт кирийэ Wадулика.",
            "translation": "Меня зовут Wадулика.",
            "avatar": "girl",
            "audio": audio6
        }
    ],
    [
        {
            "sentence": "Тэт кирийэ кинэк?",
            "translation": "Как тебя зовут?",
            "avatar": "girl",
            "audio": audio7
        },
        {
            "sentence": "Мэт кирийэ Коля.",
            "translation": "Меня зовут Коля.",
            "avatar": "boy",
            "audio": audio8
        }
    ],
    [
        {
            "sentence": "Тэт хуодэбандьэ классха ураанук?",
            "translation": "В каком классе ты учишься?",
            "avatar": "girl",
            "audio": audio9
        },
        {
            "sentence": "Мэт йалмасчэ классха ураануйэҥ.",
            "translation": "Я учусь в третьем классе.",
            "avatar": "boy",
            "audio": audio10
        }
    ],
    [
        {
            "sentence": "Тан тэт хуодэбандьэ классха ураанук?",
            "translation": "А ты в каком классе учишься?",
            "avatar": "boy",
            "audio": audio11
        },
        {
            "sentence": "Мэт кийуодьисчэ классха ураануйэҥ.",
            "translation": "Я учусь во втором классе.",
            "avatar": "girl",
            "audio": audio12
        }
    ],
    [
        {
            "sentence": "Тэт хабун сукунмольҕалньэк?",
            "translation": "Тебе сколько лет?",
            "avatar": "boy",
            "audio": audio13
        },
        {
            "sentence": "Мэтха wальҕарумкуруонь сукунмольҕал.",
            "translation": "Мне 9 лет.",
            "avatar": "girl",
            "audio": audio14
        }
    ],
    [
        {
            "sentence": "Ньийуолгитньэр.",
            "translation": "Пока!",
            "avatar": "boy",
            "audio": audio15
        },
        {
            "sentence": "Ньийуолгитньэр.",
            "translation": "До свидания!",
            "avatar": "girl",
            "audio": audio16
        }
    ]
];

var currentDialogue = 0;

function Greeting() {
    const {setView} = useContext(ViewContext);

    const [page, setPage] = useState(0);

    const [dialogue, setDialogue] = useState(0);

    const handleClick = event =>{
        
        //currentDialogue++;
        //setDialogue(currentDialogue);
        setDialogue(dialogue+1)

        if(page == 0 && dialogue == data.length - 1){
            setPage(1)
        }
        // if(dialogue == data.length - 1){
        //     currentDialogue = 0;
        //     setView('subjectSelect');

        //     var key = JSON.parse(localStorage.getItem('2'));
        //     key.available = 1;
        //     localStorage.setItem(2, JSON.stringify(key));
        //     window.scrollTo(0, 0);
        // }
    };

    const handleBack = event =>{
        if (dialogue > 0){
            //currentDialogue--;
            //setDialogue(currentDialogue);
            setDialogue(dialogue-1)
        }

        window.scrollTo(0, 0);
    };

    //pass to quiz
    const[state, setState]=useState(false);

    useEffect(() => {
        if(page == 1){
            setPage(0)
            setDialogue(dialogue-1)
            setState(false)
        }
        
    },[state])

  return (
    <ViewContext.Provider value={{setView}}>
    <motion.div className='greetingPage' initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 1}}>
            {page == 0 &&
                <>
            
                    <div className="container">
                        <h1 className='header'>Приветствие и знакомство на тундренном юкагирском языке.</h1>
                        {dialogue < data.length && <Dialogue dialogue={data[dialogue]}/>}
                    </div>
                    <div className="bottomNavbar">
                        {dialogue != 0 ? <Button text='Назад' handleClick={handleBack}/> : <Button available={false} text='Назад'/>}
                        {/* <button className='buttonLearn' onClick={handleClick}>Далее</button> */}
                        <Button text={dialogue == data.length-1 ? 'Перейти к тесту' : 'Далее'} handleClick={handleClick}/>
                    </div>
                </>
            }
            {page == 1 && <Quiz questions={quizData2.questions} quizTitle='Приветствие и знакомство на тундренном юкагирском языке.' stateChanger={setState}/>}
    </motion.div>
    </ViewContext.Provider>
  )
}

function Dialogue(props){
    return(
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 1}} className="dialogue">
                        <div className='speechBubbles'>
                            <div className="speech">
                                <Bubble sentence={props.dialogue[0].sentence} translation={props.dialogue[0].translation} audio={props.dialogue[0].audio}/>
                            </div>
                            <div className="speech">
                                <Bubble sentence={props.dialogue[1].sentence} translation={props.dialogue[1].translation} audio={props.dialogue[1].audio}/>
                            </div>
                        </div>

                        <div className='speechText'>
                            <div className="speech">
                                <img className="personImage" src={props.dialogue[0].avatar == 'boy' ? b_left : g_left}></img>
                            </div>
                            <div className="speech">                      
                                <img className="personImage" src={props.dialogue[1].avatar == 'boy' ? b_right : g_right}></img>
                            </div>
                        </div>
                            
        </motion.div>
    );
}

export default Greeting