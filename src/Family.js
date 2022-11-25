import React, {useContext, useState} from 'react';

import {motion} from 'framer-motion';
import { ViewContext } from './ViewContext';
import Button from './components/Button';
import SoundButton from './components/SoundButton';

import { quizData3 } from './quizData';
import Quiz from './Quiz';

import imgMember1 from './languages/yukaghir/family/image1.png';
import imgMember2 from './languages/yukaghir/family/image2.png';
import imgMember3 from './languages/yukaghir/family/image3.png';
import imgMember4 from './languages/yukaghir/family/image4.png';
import imgMember5 from './languages/yukaghir/family/image5.png';
import imgMember6 from './languages/yukaghir/family/image6.png';
import imgMember7 from './languages/yukaghir/family/image7.png';
import imgMember8 from './languages/yukaghir/family/image8.png';

import audio1 from "./languages/yukaghir/family/audio/1. мама.mp3";
import audio2 from "./languages/yukaghir/family/audio/2. маму зовут анна.mp3";
import audio3 from "./languages/yukaghir/family/audio/3. папа.mp3";
import audio4 from "./languages/yukaghir/family/audio/4. папу зовут николай.mp3";
import audio5 from "./languages/yukaghir/family/audio/5. бабушка.mp3";
import audio6 from "./languages/yukaghir/family/audio/6. бабушка красиво поет.mp3";
import audio7 from "./languages/yukaghir/family/audio/7. дедушка.mp3";
import audio8 from "./languages/yukaghir/family/audio/8. мой дедушка рыбак.mp3";
import audio9 from "./languages/yukaghir/family/audio/9. старший брат.mp3";
import audio10 from "./languages/yukaghir/family/audio/10. мой старший брат учится в десятом классе.mp3";
import audio11 from "./languages/yukaghir/family/audio/11. старшая сестра.mp3";
import audio12 from "./languages/yukaghir/family/audio/12. старшая сестра учится в университете.mp3";
import audio13 from "./languages/yukaghir/family/audio/13. младший брат сестра.mp3";
import audio14 from "./languages/yukaghir/family/audio/14. моя сестренка учится в четвертом классе.mp3";
import audio15 from "./languages/yukaghir/family/audio/15. дядя старший брат мамы.mp3";
import audio16 from "./languages/yukaghir/family/audio/16. дядя работает на электростанции.mp3";
import audio17 from "./languages/yukaghir/family/audio/17. дядя младший брат мамы.mp3";
import audio18 from "./languages/yukaghir/family/audio/18. дядя работает в жкх.mp3";
import audio19 from "./languages/yukaghir/family/audio/19. тетя старшая сестра мамы.mp3";
import audio20 from "./languages/yukaghir/family/audio/20. моя тетя врач.mp3";
import audio21 from "./languages/yukaghir/family/audio/21. тетя младшая сестра мамы.mp3";
import audio22 from "./languages/yukaghir/family/audio/22. у тети трое детей.mp3";
import audio23 from "./languages/yukaghir/family/audio/23. дядя старший брат папы.mp3";
import audio24 from "./languages/yukaghir/family/audio/24. дядя учитель русского языка.mp3";
import audio25 from "./languages/yukaghir/family/audio/25. дядя младший брат папы.mp3";
import audio26 from "./languages/yukaghir/family/audio/26. мой дядя спортсмен.mp3";
import audio27 from "./languages/yukaghir/family/audio/27. тетя старгая сестра папы.mp3";
import audio28 from "./languages/yukaghir/family/audio/28. тетя работает в детском саду она бухгалтер.mp3";
import audio29 from "./languages/yukaghir/family/audio/29. тетя младшая сестра папы.mp3";
import audio30 from "./languages/yukaghir/family/audio/30. моя тетя швея.mp3";
import audio31 from "./languages/yukaghir/family/audio/31. невестка жена брата.mp3";
import audio32 from "./languages/yukaghir/family/audio/32. невестка живет в москве.mp3";
import audio33 from "./languages/yukaghir/family/audio/33. зять муж сестры.mp3";
import audio34 from "./languages/yukaghir/family/audio/34. зятя зовут дима.mp3";

const data = [
    {
        "header1": "Мама",
        "subheader1": "Эньиэ",
        "audio1": audio1,
        "header2": "Маму зовут Анна.",
        "subheader2": "Эньиэ кирийэ Анна.",
        "audio2": audio2,
        "images": [imgMember5]
    },
    {
        "header1": "Папа",
        "subheader1": "Амаа",
        "audio1": audio3,
        "header2": "Папу зовут Николай",
        "subheader2": "Эньиэ кирийэ Николай.",
        "audio2": audio4,
        "images": [imgMember6]
    },
    {
        "header1": "Бабушка",
        "subheader1": "Абучиэ",
        "audio1": audio5,
        "header2": "Бабушка красиво поёт",
        "subheader2": "Абучиэ амутнэ йахтаануй",
        "audio2": audio6,
        "images": [imgMember2]
    },
    {
        "header1": "Дедушка",
        "subheader1": "Хайчиэ",
        "audio1": audio7,
        "header2": "Мой дедушка рыбак",
        "subheader2": "Мэт хайчиэ саабандьэбаниэчэ.",
        "audio2": audio8,
        "images": [imgMember3]
    },
    {
        "header1": "Старший брат",
        "subheader1": "Акаа",
        "audio1": audio9,
        "header2": "Мой старший брат учится в десятом классе",
        "subheader2": "Мэт акаа кунильисчэ классха ураануй.",
        "audio2": audio10,
        "images": [imgMember6]
    },
    {
        "header1": "Старшая сестра",
        "subheader1": "Экыа",
        "audio1": audio11,
        "header2": "Старшая сестра учится в университете",
        "subheader2": "Экыа университетха ураануй",
        "audio2": audio12,
        "images": [imgMember8]
    },
    {
        "header1": "Младший брат, сестра",
        "subheader1": "Эмдьэ",
        "audio1": audio13,
        "header2": "Моя сестрёнка учится в четвертом классе",
        "subheader2": "Мэт эмдьэ йэлэклисчэ классха ураануй",
        "audio2": audio14,
        "images": [imgMember4, imgMember7]
    }
]

const data1 = [
    {
        "header1": "Дядя (старший брат мамы)",
        "subheader1": "Хаwдьаа",
        "audio1": audio15,
        "header2": "Дядя работает на электростанции",
        "subheader2": "Xawдьаа электростанцияҕа чаҕадьаануй",
        "audio2": audio16
    },
    {
        "header1": "Дядя (младший брат мамы)",
        "subheader1": "Хаwдьидиэ",
        "audio1": audio17,
        "header2": "Дядя работает в ЖКХ",
        "subheader2": "Xawдьидиэ ЖКХҕа чаҕадьаануй",
        "audio2": audio18
    },
    {
        "header1": "Тётя (старшая сестра мамы)",
        "subheader1": "Чамийа",
        "audio1": audio19,
        "header2": "Моя тётя врач",
        "subheader2": "Мэт чамийа амаладьаачэ",
        "audio2": audio20
    },
    {
        "header1": "Тётя (младшая сестра мамы)",
        "subheader1": "Йаадиэ",
        "audio1": audio21,
        "header2": "У тёти трое детей",
        "subheader2": "Йаадиэ йаан уоньэй",
        "audio2": audio22
    },
    {
        "header1": "Дядя (старший брат папы)",
        "subheader1": "Чумуочиэ",
        "audio1": audio23,
        "header2": "Дядя учитель русского языка",
        "subheader2": "Чумуочиэ waawэч аруу ураричиичэлэҥ",
        "audio2": audio24
    },
    {
        "header1": "Дядя (младший брат папы)",
        "subheader1": "Өчидиэ",
        "audio1": audio25,
        "header2": "Мой дядя спортсмен",
        "subheader2": "Мэт өчидиэ спортсменлэҥ",
        "audio2": audio26
    },
    {
        "header1": "Тётя (старшая сестра папы)",
        "subheader1": "Эпиэ",
        "audio1": audio27,
        "header2": "Тётя работает в детском саду, она бухгалтер",
        "subheader2": "Эпиэ детсадха чаҕадьаануй, тудэл бухгалтер",
        "audio2": audio28
    },
    {
        "header1": "Тётя (младшая сестра папы)",
        "subheader1": "Эwдьуо",
        "audio1": audio29,
        "header2": "Моя тётя швея",
        "subheader2": "Мэт эwдьуо иҥдьийиэ",
        "audio2": audio30
    },
    {
        "header1": "Невестка (жена брата)",
        "subheader1": "Иидиэ",
        "audio1": audio31,
        "header2": "Невестка живет в Москве",
        "subheader2": "Иидиэ Москваҕа эннуй",
        "audio2": audio32
    },
    {
        "header1": "Зять (муж сестры)",
        "subheader1": "Пулийэ",
        "audio1": audio33,
        "header2": "Зятя зовут Дима",
        "subheader2": "Мэт пулийэ кирийэ Дима",
        "audio2": audio34
    }
]

function Family() {
    const {setView} = useContext(ViewContext);
    var current = 0;

    const [page, setPage] = useState(0);


    const handleClick = event =>{
        if(page == 0){
            setPage(1)
        }
        if(page == 1){
            setPage(2)
        }
        if(page == 2){
            setView('subjectSelect');
            var key = JSON.parse(localStorage.getItem('3'));
            key.available = 1;
            localStorage.setItem(3, JSON.stringify(key));
            window.scrollTo(0, 0);
        }

        window.scrollTo(0, 0);
    };

    const handleBack = event =>{
        if(page == 0){
            setView('subjectSelect');
        }
        if(page == 1){
            setPage(0)
        }

        window.scrollTo(0, 0);
    };

  return (
    <motion.div className='familyPage' initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 1}}>
        <ViewContext.Provider value={{setView}}>
        
        <div className="container">
                    <h1 className='header'>Семья</h1>
                        {page == 0 && <Page1/>}
                        {page == 1 && <Page2/>}
                        {page == 2 && <Quiz quiz={quizData3}/>}
                    </div>
                    <div className="bottomNavbar">
                        <Button text='Назад' handleClick={handleBack}/>
                        {/* <button className='buttonLearn' onClick={handleClick}>Далее</button> */}
                        <Button text='Далее' handleClick={handleClick}/>
                    </div>
        </ViewContext.Provider>

    </motion.div>
  )
}

function FamilyMember({props}){
    return(
        <div className='member'>
            {/* <img className='memberImg' src={imgMember5}></img> */}
            <Images props={props.images}/>
            <div className='asideKeepLeft'>
                <div className='asideKeep'>
                    <SoundButton audio={props.audio1}/>
                    <div className='asideVert'>
                        <h3 className='a'>{props.header1}</h3>
                        <p>{props.subheader1}</p>
                    </div>
                </div>
                <div className='asideKeep'>
                    <SoundButton audio={props.audio2}/>
                    <div className='asideVert'>
                        <h3 className='a'>{props.header2}</h3>
                        <p>{props.subheader2}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function OtherFamilyMember({props}){
    return(
        <div className='member'>
            <div className='asideKeepLeft'>
                <div className='asideKeep'>
                    <SoundButton audio={props.audio1}/>
                    <div className='asideVert'>
                        <h3 className='a'>{props.header1}</h3>
                        <p>{props.subheader1}</p>
                    </div>
                </div>
                <div className='asideKeep'>
                    <SoundButton audio={props.audio2}/>
                    <div className='asideVert'>
                        <h3 className='a'>{props.header2}</h3>
                        <p>{props.subheader2}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Images({props}){
    if (props.length > 1){
        return(
            <div className='asideKeep'>
                {props.map((image, i) => {
                    return (
                        <img className='memberImg' src={image} key={i}></img>
                    );
                })}
            </div>
        );
    }
    if (props.length == 1){
        return(
            props.map((image, i) => {
                return (
                    <img className='memberImg' src={image} key={i}></img>
                );
            })
        )
    }
}

function Page1(){
    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 1}}>
            <div className='tables'>
                <div className='family'>
                        {data.map((e, i) => {
                                return (
                                        <FamilyMember props={e} key={i}/>
                                    );
                                })
                        }
                    </div>
                <div className='otherMembers'>
                        {data1.map((e, i) => {
                                return (
                                        <OtherFamilyMember props={e} key={i}/>
                                    );
                                })
                        }
                </div>
            </div>
        </motion.div>
    );
}

function Page2(){
    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 1}} className='aside'>
            <div className='text'>
                <h3>«Мит нимэндуул»</h3>
                <p>
                    <br></br>Эньиэ, амаа тадаат мэтэк – 
                    <br></br>Тэн мит нимэндуул ҥотэй!
                    <br></br>Эмдьэ, акаа тадаат экыа – 
                    <br></br>Wаай мит нимэндуул чии!
                    <br></br>Эпиэ, хаwдьаа, йаадиэ, хайчиэ – 
                    <br></br>Мит нимэндуул чии, титтэл!
                    <br></br>Wайи: иидиэ, пулийэ, абучиэ – 
                    <br></br>Туҥ чии, нимэндуул чии!
                    <br></br>Йаwнэр маархан нимэн чии – 
                    <br></br>Нимэндуул чии ҥотэйли!
                    <br></br><br></br><span>Николай Курилов</span><br></br>
                </p>               
            </div>

            <div className='text'>
                <h3>«Наша семья»</h3>
                <p>
                    <br></br>Мама, папа и я – 
                    <br></br>это наша семья!
                    <br></br>Сестренка, старшие брат и сестра – 
                    <br></br>тоже наша семья!
                    <br></br>Тётя, дядя, дедушка – 
                    <br></br>они - наша семья!
                    <br></br>Еще: невестка, зять, бабушка – 
                    <br></br>эти люди - семья!
                    <br></br>Все мы одна семья -
                    <br></br>будем мы семьёй!
                </p>               
            </div>
        </motion.div>
    );
}

export default Family