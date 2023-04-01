import React, { useContext, useState, useEffect, createContext } from 'react';

import { motion } from 'framer-motion';
import { ViewContext } from '../../ViewContext';

import b_left from '../../languages/yukaghir/greeting/b_left.png';
import b_right from '../../languages/yukaghir/greeting/b_right.png';
import g_left from '../../languages/yukaghir/greeting/g_left.png';
import g_right from '../../languages/yukaghir/greeting/g_right.png';

import AvatarMan from '../../languages/yakut/man.png'
import AvatarTeacher from '../../languages/yakut/teacher.png'
import AvatarStudent from '../../languages/yakut/student.png'

import SubjectCard from '../../SubjectCard2';

import Quiz from '../../Quiz';
import { quizGreeting1, quizGreeting2, quizGreeting3 } from '../../pages/yakut/quizData';

import Bubble from '../../components/Bubble';

import Button from '../../components/Button';
import SoundButton from '../../components/SoundButton';
//import SubjectCard from '../../SubjectCard1';

import image1 from "../../languages/yakut/greeting/greeting.png";

import { greeting_dialogue1, greeting_dialogue2, greeting_dialogue3, greeting_dictionary } from './audio';

import IntroductionIcon from '../../icons/yakut/introduction.png';
import DictionaryIcon from '../../icons/yakut/dictionary.png';


import { dictionary, dialogue1, dialogue2, dialogue3 } from './Greeting_staticData';

const subjects = [
    {
        "Title": "Введение",
        "Image": IntroductionIcon,
        "View": 1
    },
    {
        "Title": "Словарь",
        "Image": DictionaryIcon,
        "View": 2
    },
    {
        "Title": "Приветствие, вежливое отношение",
        "Image": IntroductionIcon,
        "View": 3
    },
    {
        "Title": "Давайте познакомимся",
        "Image": IntroductionIcon,
        "View": 4
    },
    {
        "Title": "Знакомство со студентом",
        "Image": IntroductionIcon,
        "View": 5
    }
];

export const SubjectContext = createContext({
    currentSubject: 0,
    setCurrentSubject: () => { }
});

function Greeting() {
    const { currentView, setView } = useContext(ViewContext);
    const [currentSubject, setCurrentSubject] = useState(0);

    const [page, setPage] = useState(0);

    const [dialogue, setDialogue] = useState(0);

    const handleClick = event => {
        setCurrentSubject(currentSubject + 1)
        if (currentSubject === 5) setCurrentSubject(0)
    };

    const handleBack = event => {

        if (currentSubject == 1) {
            setCurrentSubject(0)
        }

        setCurrentSubject(currentSubject - 1)
        if (dialogue > 0) {
            setDialogue(dialogue - 1)
        }

        window.scrollTo(0, 0);
    };

    //pass to quiz
    const [state, setState] = useState(false);

    useEffect(() => {
        if (page == 2) {
            setPage(0)
            setDialogue(dialogue - 1)
            setState(false)
        }

    }, [state])

    return (
        <ViewContext.Provider value={{ currentView, setView }}>
            <SubjectContext.Provider value={{ currentSubject, setCurrentSubject }}>
                <motion.div className='subjectsPage' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    {currentSubject === 0 && <div className='buttonsContainer'>
                        <SubjectCard subject={subjects[0]} index='coloredCard1' subjectContext={SubjectContext}/>
                        <SubjectCard subject={subjects[1]} index='coloredCard2' subjectContext={SubjectContext}/>
                        {/* <SubjectCard subject={subjects[2]} index='coloredCard3' subjectContext={SubjectContext}/>
                        <SubjectCard subject={subjects[3]} index='coloredCard4' subjectContext={SubjectContext}/>
                        <SubjectCard subject={subjects[4]} index='coloredCard5' subjectContext={SubjectContext}/> */}
                    </div>}
                    {currentSubject === 1 && <Page1 />}
                    {currentSubject === 2 && <Page2 />}
                    {currentSubject === 3 && <Page3 />}
                    {currentSubject === 4 && <Page4 />}
                    {currentSubject === 5 && <Page5 />}

                    {currentSubject != 0 && currentSubject != 3 && currentSubject != 4 && currentSubject != 5 && <div className="bottomNavbar">
                        <Button text={currentSubject === 1 ? 'Вернуться к теме' : 'Назад'} handleClick={handleBack} />
                        {/* <button className='buttonLearn' onClick={handleClick}>Далее</button> */}
                        <Button text={currentSubject === 5 ? 'Вернуться к теме' : 'Далее'} handleClick={handleClick} />
                    </div>}
                </motion.div>
            </SubjectContext.Provider>

        </ViewContext.Provider>
    )
}

function Page1() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }} className="greeting-introduction">
            <div className="container">
                <h1 className='header'>Урок № 2 / Иккис дьарык</h1>
                <h3>Тема урока: “Приветствие. Знакомство”. В этом уроке мы научимся основам общения, узнаем как приветствовать собеседника, как спросить его имя, как представиться самому.</h3>
                <p>Слова приветствия – самое первое, что мы учим при знакомстве с якутским языком. И это отлично, ведь с их помощью можно поздороваться и начать разговор. Для этого сперва выучим несколько самых нужных слов и фраз, затем составим диалог на тему: "Знакомство". И в конце занятия выполним онлайн-тест.</p>
                <div className='greetingImage'>
                    <img src={image1}></img>
                    <p className='imageSubtitle'>Рис. Василия Корякина.</p>
                </div>
            </div>
        </motion.div>
    )
}

function Page2() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }} className="greeting-dictionary">
            <div className="container">
                <h1 className='header'>Словарь. Тылдьыт.</h1>
                
                <div className='dictionaryTable'>
                    <div className='aside'>
                        <h3>Приветствие. Знакомство</h3>
                        <h3>Эҕэрдэлэһии. Билсиһии</h3>
                    </div>
                    {dictionary.map((e, i) => {
                        return (
                            <div className='aside'>
                                <div className='colored-sentence-left'>
                                    <p>{e.sentence}</p>
                                </div>
                                <div className='colored-sentence-right'>
                                    <SoundButton audio={e.audio}/>
                                    <p>{e.translation}</p>
                                </div>
                                
                            </div>
                        );
                    })
                    }
                </div>
                <div>
                    <p className='greeting-info'>Использованная литература: Поговорим по-якутски : самоучитель языка саха. – 4-е изд. С изм. – Якутск : СахаКнигаТорг, 2013. – 192.</p>
                </div>
            </div>
        </motion.div>
    )
}

function Page3() {
    const { currentSubject, setCurrentSubject } = useContext(SubjectContext);
    const PageContext = createContext({
        currentPage: 0,
        setCurrentPage: () => { }
    });
    const [currentPage, setCurrentPage] = useState(0);


    const [dialogue, setDialogue] = useState(0);

    const handleClick = event => {
        if (dialogue < dialogue1.length - 1) {
            setDialogue(dialogue + 1)
        }
        if (dialogue == dialogue1.length - 1) {
            setCurrentPage(1)
        }
    };

    const handleBack = event => {
        if (dialogue > 0) {
            setDialogue(dialogue - 1)
        }
        window.scrollTo(0, 0);
    };

    const handleBackSubject = event => {
        setCurrentSubject(currentSubject - 1);
        window.scrollTo(0, 0);
    };


    //pass to quiz
    const [stateNavigate, setStateNavigate] = useState('none');

    useEffect(() => {
        if (currentPage == 1) {
            setCurrentSubject(currentSubject + 1);
        }

    }, [stateNavigate])

    return (
        <PageContext.Provider value={{ currentPage, setCurrentPage }}>
            <SubjectContext.Provider value={{ currentSubject, setCurrentSubject }}>
                <div className="">
                    {currentPage === 0 &&
                        <div className="container">
                            <h1 className='header'>Приветствие, вежливое отношение</h1>
                            <h3 className='greeting-subheader'>Эҕэрдэлэһии, эйэҕэс сыһыан</h3>
                            {dialogue < dialogue1.length && <Dialogue dialogue={dialogue1[dialogue]} />}
                        </div>
                    }
                    {currentPage === 1 &&
                        <Quiz questions={quizGreeting1.questions} quizTitle={quizGreeting1.quizTitle} stateNavigate={setStateNavigate} />
                    }

                    {currentPage === 0 && <div className="bottomNavbar">
                        {dialogue != 0 ? <Button text='Назад' handleClick={handleBack} /> : <Button text='Назад' handleClick={handleBackSubject} />}
                        {/* <button className='buttonLearn' onClick={handleClick}>Далее</button> */}
                        <Button text={dialogue == dialogue1.length - 1 ? 'Перейти к тесту' : 'Далее'} handleClick={handleClick} />
                    </div>}
                </div>
            </SubjectContext.Provider>
        </PageContext.Provider>
    )
}

function Page4() {
    const { currentSubject, setCurrentSubject } = useContext(SubjectContext);
    const PageContext = createContext({
        currentPage: 0,
        setCurrentPage: () => { }
    });
    const [currentPage, setCurrentPage] = useState(0);


    const [dialogue, setDialogue] = useState(0);

    const handleClick = event => {
        if (dialogue < dialogue2.length - 1) {
            setDialogue(dialogue + 1)
        }
        if (dialogue == dialogue2.length - 1) {
            setCurrentPage(1)
        }
    };

    const handleBack = event => {
        if (dialogue > 0) {
            setDialogue(dialogue - 1)
        }
        window.scrollTo(0, 0);
    };

    const handleBackSubject = event => {
        setCurrentSubject(currentSubject - 1);
        window.scrollTo(0, 0);
    };


    //pass to quiz
    const [stateNavigate, setStateNavigate] = useState('none');

    useEffect(() => {
        if (currentPage == 1) {
            setCurrentSubject(currentSubject + 1);
        }

    }, [stateNavigate])

    return (
        <PageContext.Provider value={{ currentPage, setCurrentPage }}>
            <div className="">
                {currentPage === 0 &&
                    <div className="container">
                        <h1 className='header'>Давайте познакомимся</h1>
                        <h3 className='greeting-subheader'>Билсиһиэххэ эрэ</h3>
                        {dialogue < dialogue2.length && <Dialogue dialogue={dialogue2[dialogue]} />}
                    </div>
                }
                {currentPage === 1 &&
                    <Quiz questions={quizGreeting2.questions} quizTitle={quizGreeting2.quizTitle} stateNavigate={setStateNavigate} />
                }

                {currentPage === 0 && <div className="bottomNavbar">
                    {dialogue != 0 ? <Button text='Назад' handleClick={handleBack} /> : <Button text='Назад' handleClick={handleBackSubject} />}
                    {/* <button className='buttonLearn' onClick={handleClick}>Далее</button> */}
                    <Button text={dialogue == dialogue2.length - 1 ? 'Перейти к тесту' : 'Далее'} handleClick={handleClick} />
                </div>}
            </div>
        </PageContext.Provider>
    )
}

function Page5() {
    const { currentSubject, setCurrentSubject } = useContext(SubjectContext);
    const PageContext = createContext({
        currentPage: 0,
        setCurrentPage: () => { }
    });
    const [currentPage, setCurrentPage] = useState(0);


    const [dialogue, setDialogue] = useState(0);

    const handleClick = event => {
        if (dialogue < dialogue3.length - 1) {
            setDialogue(dialogue + 1)
        }
        if (dialogue == dialogue3.length - 1) {
            setCurrentPage(1)
        }
    };

    const handleBack = event => {
        if (dialogue > 0) {
            setDialogue(dialogue - 1)
        }
        window.scrollTo(0, 0);
    };

    const handleBackSubject = event => {
        setCurrentSubject(currentSubject - 1);
        window.scrollTo(0, 0);
    };


    //pass to quiz
    const [stateNavigate, setStateNavigate] = useState('none');

    useEffect(() => {
        if (currentPage == 1) {
            setCurrentSubject(currentSubject + 1);
        }

    }, [stateNavigate])

    return (
        <PageContext.Provider value={{ currentPage, setCurrentPage }}>
            <div>
                {currentPage === 0 &&
                    <div className="container">
                        <h1 className='header'>Знакомство со студентом</h1>
                        <h3 className='greeting-subheader'>Устудьуону кытта билсиһии</h3>
                        {dialogue < dialogue3.length && <Dialogue dialogue={dialogue3[dialogue]} />}
                    </div>
                }
                {currentPage === 1 &&
                    <Quiz questions={quizGreeting3.questions} quizTitle={quizGreeting3.quizTitle} />
                }

                {currentPage === 0 && <div className="bottomNavbar">
                    {dialogue != 0 ? <Button text='Назад' handleClick={handleBack} /> : <Button text='Назад' handleClick={handleBackSubject} />}
                    {/* <button className='buttonLearn' onClick={handleClick}>Далее</button> */}
                    <Button text={dialogue == dialogue3.length - 1 ? 'Перейти к тесту' : 'Далее'} handleClick={handleClick} />
                </div>}
            </div>
        </PageContext.Provider>
    )
}

function DialogueAvatar(avatar){
    if (avatar == 'teacher') return AvatarTeacher
    if (avatar == 'student') return AvatarStudent
    if (avatar == 'man') return AvatarMan
}

function Dialogue(props) {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }} className="dialogue">
            <div className='speechBubbles'>
                <div className="speech">
                    {props.dialogue[0].sentence != '' && <Bubble sentence={props.dialogue[0].sentence} translation={props.dialogue[0].translation} audio={props.dialogue[0].audio} />}
                </div>
                <div className="speech">
                    {props.dialogue[1].sentence != '' && <Bubble sentence={props.dialogue[1].sentence} translation={props.dialogue[1].translation} audio={props.dialogue[1].audio} />}
                </div>
            </div>

            <div className='speechText'>
                <div className="speech">
                    {/* <img className="personImage" src={props.dialogue[0].avatar == 'boy' ? b_left : g_left}></img> */}
                    <img className="personImage" src={DialogueAvatar(props.dialogue[0].avatar)}></img>
                </div>
                <div className="speech">
                    {/* <img className="personImage" src={props.dialogue[1].avatar == 'boy' ? b_right : g_right}></img> */}
                    <img className="personImage" src={DialogueAvatar(props.dialogue[1].avatar)}></img>
                </div>
            </div>

        </motion.div>
    );
}

export default Greeting