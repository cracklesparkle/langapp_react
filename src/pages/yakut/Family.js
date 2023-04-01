import React, { useContext, useState, useEffect, createContext } from 'react';

import { motion } from 'framer-motion';
import { ViewContext } from '../../ViewContext';
import Button from '../../components/Button';
import SoundButton from '../../components/SoundButton';

import { quizFamily1 } from '../../pages/yakut/quizData';
import Quiz from '../../Quiz';

import SubjectCard from '../../SubjectCard2';

import imgMember1 from '../../languages/yukaghir/family/image1.png';
import imgMember2 from '../../languages/yukaghir/family/image2.png';
import imgMember3 from '../../languages/yukaghir/family/image3.png';
import imgMember4 from '../../languages/yukaghir/family/image4.png';
import imgMember5 from '../../languages/yukaghir/family/image5.png';
import imgMember6 from '../../languages/yukaghir/family/image6.png';
import imgMember7 from '../../languages/yukaghir/family/image7.png';
import imgMember8 from '../../languages/yukaghir/family/image8.png';

import image1 from '../../languages/yakut/family/Сельская семья.jpg';
import image2 from '../../languages/yakut/family/якусткая семья.jpg';
import image3 from '../../languages/yakut/family/семья.png';

import { text1, text2, text3, dictionary, phrases } from './Family_staticData';

import IntroductionIcon from '../../icons/yakut/introduction.png';
import DictionaryIcon from '../../icons/yakut/dictionary.png';
import PhrasebookIcon from '../../icons/yakut/phrasebook.png';
import BookIcon from '../../icons/yakut/book.png';
import DialogueIcon from '../../icons/yakut/dialogue.png';
import QuizIcon from '../../icons/yakut/quiz.png';


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
        "Title": "Разговорник",
        "Image": PhrasebookIcon,
        "View": 3
    },
    {
        "Title": "Моя семья",
        "Image": BookIcon,
        "View": 4
    },
    {
        "Title": "Диалог. Кэпсэтии",
        "Image": DialogueIcon,
        "View": 5
    },
    {
        "Title": "Диалог. Сэһэргэһии",
        "Image": DialogueIcon,
        "View": 6
    },
    {
        "Title": "Тест",
        "Image": QuizIcon,
        "View": 7
    }
];

// {
//     "Title": "Моя семья / Мин дьиэ кэргэним",
//     "Image": BookIcon,
//     "View": 4
// },
// {
//     "Title": "Диалог / Кэпсэтии",
//     "Image": DialogueIcon,
//     "View": 5
// },
// {
//     "Title": "Диалог / Сэһэргэһии",
//     "Image": DialogueIcon,
//     "View": 6
// },
// {
//     "Title": "Тест / тургутук",
//     "Image": IntroductionIcon,
//     "View": 7
// }

export const SubjectContext = createContext({
    currentSubject: 0,
    setCurrentSubject: () => { }
});

function Family() {
    const { view, setView } = useContext(ViewContext);
    const [currentSubject, setCurrentSubject] = useState(0);

    const [page, setPage] = useState(0);

    const handleClick = event => {
        setCurrentSubject(currentSubject + 1)
        if (currentSubject === 7) setCurrentSubject(0)
    };

    const handleBack = event => {
        setCurrentSubject(currentSubject - 1)


        window.scrollTo(0, 0);
    };

    //pass to quiz
    const [state, setState] = useState(false);

    useEffect(() => {
        if (page == 2) {
            setPage(1)
            setState(false)
        }

    }, [state])

    return (
        <ViewContext.Provider value={{ view, setView }}>
            <SubjectContext.Provider value={{ currentSubject, setCurrentSubject }}>
                <motion.div className='subjectsPage' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
                    {currentSubject === 0 && <div className='buttonsContainer'>
                        <SubjectCard subject={subjects[0]} index='coloredCard1' subjectContext={SubjectContext} />
                        <SubjectCard subject={subjects[1]} index='coloredCard2' subjectContext={SubjectContext} />
                        <SubjectCard subject={subjects[2]} index='coloredCard3' subjectContext={SubjectContext} />
                        <SubjectCard subject={subjects[3]} index='coloredCard4' subjectContext={SubjectContext} />
                        <SubjectCard subject={subjects[4]} index='coloredCard5' subjectContext={SubjectContext} />
                        <SubjectCard subject={subjects[5]} index='coloredCard6' subjectContext={SubjectContext} />
                        <SubjectCard subject={subjects[6]} index='coloredCard7' subjectContext={SubjectContext} />
                    </div>}
                    {currentSubject === 1 && <Introduction />}
                    {currentSubject === 2 && <Dictionary />}
                    {currentSubject === 3 && <Phrases />}
                    {currentSubject === 4 && <Text1 />}
                    {currentSubject === 5 && <Text2 />}
                    {currentSubject === 6 && <Text3 />}
                    {currentSubject === 7 && <Test />}

                    {currentSubject != 0 && currentSubject != 7 && <div className="bottomNavbar">
                        {currentSubject > 1 ? <Button text='Назад' handleClick={handleBack} /> : <Button available={false} text='Назад' />}
                        {/* <button className='buttonLearn' onClick={handleClick}>Далее</button> */}
                        <Button text={currentSubject === 7 ? 'Вернуться к теме' : 'Далее'} handleClick={handleClick} />
                    </div>}




                </motion.div>
            </SubjectContext.Provider>
        </ViewContext.Provider>
    )
}

function FamilyMember({ props }) {
    return (
        <div className='member'>
            {/* <img className='memberImg' src={imgMember5}></img> */}
            <Images props={props.images} />
            <div className='asideKeepLeft'>
                <div className='asideKeep'>
                    <SoundButton audio={props.audio1} />
                    <div className='asideVert'>
                        <h3 className='a'>{props.header1}</h3>
                        <p>{props.subheader1}</p>
                    </div>
                </div>
                <div className='asideKeep'>
                    <SoundButton audio={props.audio2} />
                    <div className='asideVert'>
                        <h3 className='a'>{props.header2}</h3>
                        <p>{props.subheader2}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function OtherFamilyMember({ props }) {
    return (
        <div className='member'>
            <div className='asideKeepLeft'>
                <div className='asideKeep'>
                    <SoundButton audio={props.audio1} />
                    <div className='asideVert'>
                        <h3 className='a'>{props.header1}</h3>
                        <p>{props.subheader1}</p>
                    </div>
                </div>
                {props.header2 && <div className='asideKeep'>
                    <SoundButton audio={props.audio2} />
                    <div className='asideVert'>
                        <h3 className='a'>{props.header2}</h3>
                        <p>{props.subheader2}</p>
                    </div>
                </div>}
            </div>
        </div>
    );
}

function Images({ props }) {
    if (props.length > 1) {
        return (
            <div className='asideKeep'>
                {props.map((image, i) => {
                    return (
                        <img className='memberImg' src={image} key={i}></img>
                    );
                })}
            </div>
        );
    }
    if (props.length == 1) {
        return (
            props.map((image, i) => {
                return (
                    <img className='memberImg' src={image} key={i}></img>
                );
            })
        )
    }
}


function Introduction() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }} className='greeting-introduction'>
            <div className='container'>
                <h1 className='header'>Урок № 3 / Үһүс дьарык</h1>
                <h3 className='greeting-subheader'>Тема урока: “Семья”. Цель занятия — научить использовать в своей речи лексику на заданную тему, создавать связный текст по теме и принимать участие в простых диалогах.</h3>
                <p>
                    Cамое дорогое, что может быть у человека – семья. Величайшее в жизни счастье — это уверенность в том, твоя семья тебя любит, любит за то, что мы такие, какие мы есть, или несмотря на то, что мы такие, какие мы есть.
                </p>
                <p>
                    Семья – главная ценность любого общества. Это крепкий дом, это дети и внуки, это наша поддержка и опора, это самое дорогое, что у нас есть. Залог семейного счастья – это создание и поддержка гармоничных, теплых взаимоотношений, основанных на доверии, уважении и любви.
                </p>
                <p>
                    В семьях саха всегда почитали мать – жену, хозяйку, воспитателя детей. По мнению многих исследователей, женщины в якутском обществе никогда не находились в подчиненном положении. Одним из доказательств этого суждения является первостепенное значение образа женщины в народном эпосе – олонхо.
                </p>
                <p>
                    Мужчина как добытчик, как основной содержатель благополучия семьи, постоянно находился вне дома. Домой он приходил, когда дети уже спали и уходил из дому, когда дети еще спали.
                </p>
                <p>
                    Женщина сама воспитывала детей до подросткового возраста. В большинстве случаев отец не вмешивался в воспитание. Когда достигали подросткового периода, то их приучали к трудовой деятельности. Мальчики начинали ходить с отцом на охоту, занимались скотоводством, а девочек мать учила шить, готовить, помогать по хозяйству.
                </p>
                <p>
                    В девочке прежде всего воспитывали такие качества, как скромность, целомудренность. Это считалось основой морали. Мальчика учили быть ответственным, выносливым, сильным духом и телом.
                </p>
                <p>
                    Современная якутская семья мало отличается от среднестатистической российской. Средняя численность семей составляет 3-5 человек. В большинстве случаев связь между родителями и их детьми в якутском обществе поддерживается на протяжении всей жизни.
                </p>

                <img className='greetingImage' src={image1}></img>
                <img className='greetingImage' src={image2}></img>
                <div>
                    <p className='greeting-info'>Использованы фотографии ГБУ РС(Я) «Якутский государственный объединенный музей истории и культуры народов Севера им. Ем. Ярославского» и  победителей конкурса “Семья года”</p>
                </div>
            </div>
        </motion.div>
    );
}

function Dictionary() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }} className="greeting-dictionary">
            <div className="container">
                <h1 className='header'>Словарь. Тылдьыт.</h1>

                <div className='dictionaryTable'>
                    <div className='aside'>
                        <h3>Семья</h3>
                        <h3>Дьиэ кэргэн, ыал</h3>
                    </div>
                    {dictionary.map((e, i) => {
                        return (
                            <div className='aside'>
                                <div className='colored-sentence-left'>
                                    <p>{e.sentence}</p>
                                </div>
                                <div className='colored-sentence-right'>
                                    <SoundButton audio={e.audio} />
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

function Text1() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }} className="greeting-introduction">
            <div className='container'>
                <h1 className='header'>Моя семья / Мин дьиэ кэргэним</h1>
                <h3 className='greeting-subheader'>(Рассказ школьника / үөрэнээччи кэпсээнэ)</h3>
                <img className='greetingImage' src={image3}></img>
                <div className='tables'>
                    <div className='story'>
                        {text1.map((e, i) => {
                            return (
                                <div className='aside'>
                                    <div className='story-sentence-left'>
                                        <p>{e.header1}</p>
                                    </div>
                                    <div className='story-sentence-right'>
                                        <SoundButton audio={e.audio1} />
                                        <p>{e.subheader1}</p>
                                    </div>

                                </div>
                            );
                        })
                        }
                    </div>

                </div>
            </div>
        </motion.div>
    );
}

function Text2() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }} className='greeting-introduction'>
            <div className='container'>
                <h1 className='header'>Моя семья / Мин дьиэ кэргэним</h1>
                <h3 className='greeting-subheader'>(Рассказ школьника/ үөрэнээччи кэпсээнэ)</h3>
                <div className='tables'>
                    <div className='story'>
                        {text2.map((e, i) => {
                            return (
                                <div className='aside'>
                                    <div className='story-sentence-left'>
                                        <p>{e.header1}</p>
                                    </div>
                                    <div className='story-sentence-right'>
                                        <SoundButton audio={e.audio1} />
                                        <p>{e.subheader1}</p>
                                    </div>

                                </div>
                            );
                        })
                        }
                    </div>

                </div>
            </div>
        </motion.div>
    );
}

function Text3() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }} className="greeting-introduction">
            <div className='container'>
                <h1 className='header'>Моя семья / Мин дьиэ кэргэним</h1>
                <h3 className='greeting-subheader'>(Рассказ школьника/ үөрэнээччи кэпсээнэ)</h3>
                <div className='tables'>
                    <div className='story'>
                        {text3.map((e, i) => {
                            return (
                                <div className='aside'>
                                    <div className='story-sentence-left'>
                                        <p>{e.header1}</p>
                                    </div>
                                    <div className='story-sentence-right'>
                                        <SoundButton audio={e.audio1} />
                                        <p>{e.subheader1}</p>
                                    </div>

                                </div>
                            );
                        })
                        }
                    </div>

                </div>
            </div>
        </motion.div>
    );
}

function Phrases() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }} className="greeting-dictionary">
            <div className="container">
                <h1 className='header'>Разговорник</h1>
                {/* <h3>Приветствие. Знакомство / Эҕэрдэлэһии. Билсиһии</h3> */}
                <div className='dictionaryTable'>
                    {phrases.map((e, i) => {
                        return (
                            <div className='aside'>
                                <div className='colored-sentence-left'>
                                    <p>{e.sentence}</p>
                                </div>
                                <div className='colored-sentence-right'>
                                    <SoundButton audio={e.audio} />
                                    <p>{e.translation}</p>
                                </div>

                            </div>
                        );
                    })
                    }
                </div>
                <div>
                    <p>Использованная литература: Поговорим по-якутски : самоучитель языка саха. – 4-е изд. С изм. – Якутск : СахаКнигаТорг, 2013. – 192.</p>
                </div>
            </div>
        </motion.div>
    )
}

function Test() {
    const { currentSubject, setCurrentSubject } = useContext(SubjectContext);
    const PageContext = createContext({
        currentPage: 0,
        setCurrentPage: () => { }
    });
    const [currentPage, setCurrentPage] = useState(0);


    const [dialogue, setDialogue] = useState(0);

    const handleClick = event => {
        // if (dialogue < dialogue1.length - 1) {
        //     setDialogue(dialogue + 1)
        // }
        // if (dialogue == dialogue1.length - 1){
        //     setCurrentPage(1)
        // }
    };

    const handleBack = event => {
        if (dialogue > 0) {
            setDialogue(dialogue - 1)
        }
        window.scrollTo(0, 0);
    };

    //pass to quiz
    const [stateNavigate, setStateNavigate] = useState('none');

    useEffect(() => {
        if (stateNavigate == 'next') setCurrentSubject(0);
    }, [stateNavigate])

    return (
        <PageContext.Provider value={{ currentPage, setCurrentPage }}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }} className="">
                {/* <h1 className='header'>Тест / тургутук</h1> */}
                {currentPage === 0 &&
                    <Quiz questions={quizFamily1.questions} quizTitle={quizFamily1.quizTitle} stateNavigate={setStateNavigate} />
                }
            </motion.div>
        </PageContext.Provider>
    )
}

function Page2() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }} className='aside'>
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