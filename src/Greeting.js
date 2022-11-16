import React, {useContext, useState} from 'react';

import {motion} from 'framer-motion';
import { ViewContext } from './ViewContext';

import imgCulture1 from './languages/yukaghir/cultureFood/image1.jpg';
import imgCulture2 from './languages/yukaghir/cultureFood/image2.jpg';
import imgCulture3 from './languages/yukaghir/cultureFood/image3.jpg';
import imgCulture4 from './languages/yukaghir/cultureFood/image4.jpg';

import boy_1 from './languages/yukaghir/subject1/b_1.png';
import girl_1 from './languages/yukaghir/subject1/g_1.png';
import boy_2 from './languages/yukaghir/subject1/b_2.png';
import girl_2 from './languages/yukaghir/subject1/g_2.png';

import Bubble from './components/Bubble';

import ringer from './sounds/misc/ring06.wav';

const data = [
    [
        {
            "sentence": "Амучэ идьигойгирлэк!",
            "translation": "Доброе утро!",
            "avatar": "boy"
        },
        {
            "sentence": "Амучэ идьигойгирлэк!",
            "translation": "Доброе утро!",
            "avatar": "girl"
        }
    ],
    [
        {
            "sentence": "Амучэ чайлэлэк!",
            "translation": "Добрый день!",
            "avatar": "boy"
        },
        {
            "sentence": "Амучэ чайлэлэк!",
            "translation": "Добрый день!",
            "avatar": "girl"
        }
    ],
    [
        {
            "sentence": "Амучэ аwйааҕарлэк!",
            "translation": "Добрый вечер!",
            "avatar": "boy"
        },
        {
            "sentence": "Амучэ аwйааҕарлэк!",
            "translation": "Добрый вечер!",
            "avatar": "girl"
        }
    ],
    [
        {
            "sentence": "Амучэ чиҥичэлэк!",
            "translation": "Доброй ночи!",
            "avatar": "boy"
        },
        {
            "sentence": "Амучэ чиҥичэлэк!",
            "translation": "Доброй ночи!",
            "avatar": "girl"
        }
    ],
    [
        {
            "sentence": "Тэт кирийэ кинэк?",
            "translation": "Как тебя зовут?",
            "avatar": "boy"
        },
        {
            "sentence": "Мэт кирийэ Wадулика.",
            "translation": "Меня зовут Wадулика.",
            "avatar": "girl"
        }
    ],
    [
        {
            "sentence": "Тэт кирийэ кинэк?",
            "translation": "Как тебя зовут?",
            "avatar": "girl"
        },
        {
            "sentence": "Мэт кирийэ Коля.",
            "translation": "Меня зовут Коля.",
            "avatar": "boy"
        }
    ],
    [
        {
            "sentence": "Тэт хуодэбандьэ классха ураанук?",
            "translation": "В каком классе ты учишься?",
            "avatar": "girl"
        },
        {
            "sentence": "Мэт йалмасчэ классха ураануйэҥ.",
            "translation": "Я учусь в третьем классе.",
            "avatar": "boy"
        }
    ],
    [
        {
            "sentence": "Тан тэт хуодэбандьэ классха ураанук?",
            "translation": "А ты в каком классе учишься?",
            "avatar": "boy"
        },
        {
            "sentence": "Мэт кийуодьисчэ классха ураануйэҥ.",
            "translation": "Я учусь во втором классе.",
            "avatar": "girl"
        }
    ],
    [
        {
            "sentence": "Тэт хабун сукунмольҕалньэк?",
            "translation": "Тебе сколько лет?",
            "avatar": "boy"
        },
        {
            "sentence": "Мэтха wальҕарумкуруонь сукунмольҕал.",
            "translation": "Мне 9 лет.",
            "avatar": "girl"
        }
    ],
    [
        {
            "sentence": "Ньийуолгитньэр.",
            "translation": "Пока!",
            "avatar": "boy"
        },
        {
            "sentence": "Ньийуолгитньэр.",
            "translation": "До свидания!",
            "avatar": "girl"
        }
    ]
];

var currentDialogue = 0;

const Sound = () => {
    const audio = new Audio(ringer);
    audio.loop = true;
  
    return (
      <div>
        <button
          onClick={() => {
            audio.loop = false;
            audio.play();
          }}
        >
          Play
        </button>
        <button onClick={() => (audio.loop = false)}>Pause</button>
      </div>
    );
  };

function Greeting() {
    const {setView} = useContext(ViewContext);

    const [page, setPage] = useState(0);

    const handleClick = event =>{
        currentDialogue++;
        setPage(currentDialogue);
        console.log(page);
        // if(page == 0){
        //     setPage(1)
            
        // }
        // if(page == 1){
        //     setPage(2)
            
        // }
        // if(page == 2){
        //     setPage(3)
            
        // }
        // if(page == 3){
        //     setPage(4)
            
        // }
        if(page == data.length - 1){
            currentDialogue = 0;
            setView('subjectSelect');

            var key = JSON.parse(localStorage.getItem('2'));
            key.available = 1;
            localStorage.setItem(2, JSON.stringify(key));
        }

        // window.scrollTo(0, 0);
    };
  return (
    <ViewContext.Provider value={{setView}}>
    <motion.div className='greetingPage' initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 1}}>
            
            <div className="container">
            <h1 className='header'>Приветствие и знакомство на тундренном юкагирском языке.</h1>
                            {currentDialogue < data.length && <Dialogue sentence={data[currentDialogue]} translation={data[currentDialogue]}/>}
                            {/* {page == 0 && <Animal/>}
                            {page == 1 && <Birds/>} */}
                        </div>
            <div className="bottomNavbar">
                <button className='buttonLearn' onClick={handleClick}>Далее</button>
            </div>
        

    </motion.div>
    </ViewContext.Provider>
  )
}

function Dialogue(props){
    return(
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 1}} className="dialogue">
                            <div className="speech">
                                <Bubble sentence={props.sentence[0].sentence} translation={props.translation[0].translation} audio={ringer}/>
                                <img className="personImage" src={boy_2}></img>
                            </div>
                            <div className="speech">
                                <Bubble sentence={props.sentence[1].sentence} translation={props.translation[1].translation} audio={ringer}/>
                                
                                
                                <img className="personImage" src={girl_2}></img>
                            </div>
        </motion.div>
    );
}

function Animal(){
    return (
        <div className='culture'>
            <h1 className='header'>Культура юкагиров (яранга, оленеводство, рыболовство).</h1>
            <div className='animal'>
                <h1>Яранга – традиционное переносное жилище из жердей и оленьих шкур.</h1>
                <h1>Wадун нимэ- тидаатэҥ хануойирэҥ иwильҕат wиэнунҥа, илэн саwаҕат иирэйуолнуни. </h1>
                <div className='image'>
                    <img src={imgCulture1}></img>
                </div>
            </div>
        </div>
      )
}

function Birds(){
    return (
        <div className='birds'>
            <div className='animal'>
                <h1>Уйэньэйрукунпэ</h1>
                <h1>Птицы</h1>
                <div className='image'>
                    <img src={imgCulture1}></img>
                </div>
            </div>
        </div>
      )
}

export default Greeting