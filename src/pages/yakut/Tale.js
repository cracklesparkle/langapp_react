import React, { useContext, useState, useEffect, createContext } from 'react';

import { motion } from 'framer-motion';
import { ViewContext } from '../../ViewContext';
import Button from '../../components/Button';
import SoundButton from '../../components/SoundButton';

import { quizFamily1, quizTales } from '../../pages/yakut/quizData';
import Quiz from '../../Quiz';

import SubjectCard from '../../SubjectCard2';

import { tales } from './audio';

import Tale1 from './Tale1.jsx';
import Tale2 from './Tale2.jsx';
import Tale3 from './Tale3.jsx';
import Tale4 from './Tale4.jsx';
import Tale5 from './Tale5.jsx';
import Tale6 from './Tale6.jsx';
import Tale7 from './Tale7.jsx';
import Tale8 from './Tale8.jsx';
import Tale9 from './Tale9.jsx';
import Tale10 from './Tale10.jsx';

import imgMember1 from '../../languages/yukaghir/family/image1.png';
import imgMember2 from '../../languages/yukaghir/family/image2.png';
import imgMember3 from '../../languages/yukaghir/family/image3.png';
import imgMember4 from '../../languages/yukaghir/family/image4.png';
import imgMember5 from '../../languages/yukaghir/family/image5.png';
import imgMember6 from '../../languages/yukaghir/family/image6.png';
import imgMember7 from '../../languages/yukaghir/family/image7.png';
import imgMember8 from '../../languages/yukaghir/family/image8.png';

import imageIntroduction1 from '../../languages/yakut/tales/introduction/1.png';
import imageIntroduction2 from '../../languages/yakut/tales/introduction/2.png';
import imageIntroduction3 from '../../languages/yakut/tales/introduction/3.png';
import imageIntroduction4 from '../../languages/yakut/tales/introduction/4.png';

import imageQuiz1 from '../../languages/yakut/tales/quiz/1.png';
import imageQuiz2 from '../../languages/yakut/tales/quiz/2.png';
import imageQuiz3 from '../../languages/yakut/tales/quiz/3.png';


import imageTale1 from '../../languages/yakut/tales/СТАРУХА БЯЙБЯРИКЯН С ПЯТЬЮ КОРОВАМИ.png';
import imageTale2 from '../../languages/yakut/tales/ВОДЯНАЯ КРЫСА И ПТИЧКА.png';
import imageTale3 from '../../languages/yakut/tales/ГАГАРА И ВОРОН.png';
import imageTale4 from '../../languages/yakut/tales/КАК ТРИ БРАТА ОГОНЬ ДОБЫЛИ.png';
import imageTale5 from '../../languages/yakut/tales/КАК ЛЯГУШКА ВЕРХОМ ЕЗДИЛА.png';
import imageTale6 from '../../languages/yakut/tales/ЛИСА И МЕДВЕД1.png';
import imageTale7 from '../../languages/yakut/tales/МЫШЬ И ЛОСЬ..png';
import imageTale8 from '../../languages/yakut/tales/МЭНИК МЭНИГИЙЭЭН..png';
import imageTale9 from '../../languages/yakut/tales/ОБЛЕГЧИВШИЙ ПОКЛАЖУ..png';
import imageTale10 from '../../languages/yakut/tales/СТАРУХА ТЭБЭНЭКЭЭН..png';

import taleIcon1 from '../../languages/yakut/tales/subjectIcons/СТАРУХА БЯЙБЯРИКЯН С ПЯТЬЮ КОРОВАМИ.png';
import taleIcon2 from '../../languages/yakut/tales/subjectIcons/ВОДЯНАЯ КРЫСА И ПТИЧКА.png';
import taleIcon3 from '../../languages/yakut/tales/subjectIcons/ГАГАРА И ВОРОН.png';
import taleIcon4 from '../../languages/yakut/tales/subjectIcons/КАК ТРИ БРАТА ОГОНЬ ДОБЫЛИ.png';
import taleIcon5 from '../../languages/yakut/tales/subjectIcons/КАК ЛЯГУШКА ВЕРХОМ ЕЗДИЛА.png';
import taleIcon6 from '../../languages/yakut/tales/subjectIcons/ЛИСА И МЕДВЕД1.png';
import taleIcon7 from '../../languages/yakut/tales/subjectIcons/МЫШЬ И ЛОСЬ..png';
import taleIcon8 from '../../languages/yakut/tales/subjectIcons/МЭНИК МЭНИГИЙЭЭН..png';
import taleIcon9 from '../../languages/yakut/tales/subjectIcons/ОБЛЕГЧИВШИЙ ПОКЛАЖУ..png';
import taleIcon10 from '../../languages/yakut/tales/subjectIcons/СТАРУХА ТЭБЭНЭКЭЭН..png';

import audio1 from "../../languages/yukaghir/family/audio/1. мама.mp3";
import audio2 from "../../languages/yukaghir/family/audio/2. маму зовут анна.mp3";
import audio3 from "../../languages/yukaghir/family/audio/3. папа.mp3";
import audio4 from "../../languages/yukaghir/family/audio/4. папу зовут николай.mp3";
import audio5 from "../../languages/yukaghir/family/audio/5. бабушка.mp3";
import audio6 from "../../languages/yukaghir/family/audio/6. бабушка красиво поет.mp3";
import audio7 from "../../languages/yukaghir/family/audio/7. дедушка.mp3";
import audio8 from "../../languages/yukaghir/family/audio/8. мой дедушка рыбак.mp3";
import audio9 from "../../languages/yukaghir/family/audio/9. старший брат.mp3";
import audio10 from "../../languages/yukaghir/family/audio/10. мой старший брат учится в десятом классе.mp3";
import audio11 from "../../languages/yukaghir/family/audio/11. старшая сестра.mp3";
import audio12 from "../../languages/yukaghir/family/audio/12. старшая сестра учится в университете.mp3";
import audio13 from "../../languages/yukaghir/family/audio/13. младший брат сестра.mp3";
import audio14 from "../../languages/yukaghir/family/audio/14. моя сестренка учится в четвертом классе.mp3";
import audio15 from "../../languages/yukaghir/family/audio/15. дядя старший брат мамы.mp3";
import audio16 from "../../languages/yukaghir/family/audio/16. дядя работает на электростанции.mp3";
import audio17 from "../../languages/yukaghir/family/audio/17. дядя младший брат мамы.mp3";
import audio18 from "../../languages/yukaghir/family/audio/18. дядя работает в жкх.mp3";
import audio19 from "../../languages/yukaghir/family/audio/19. тетя старшая сестра мамы.mp3";
import audio20 from "../../languages/yukaghir/family/audio/20. моя тетя врач.mp3";
import audio21 from "../../languages/yukaghir/family/audio/21. тетя младшая сестра мамы.mp3";
import audio22 from "../../languages/yukaghir/family/audio/22. у тети трое детей.mp3";
import audio23 from "../../languages/yukaghir/family/audio/23. дядя старший брат папы.mp3";
import audio24 from "../../languages/yukaghir/family/audio/24. дядя учитель русского языка.mp3";
import audio25 from "../../languages/yukaghir/family/audio/25. дядя младший брат папы.mp3";
import audio26 from "../../languages/yukaghir/family/audio/26. мой дядя спортсмен.mp3";
import audio27 from "../../languages/yukaghir/family/audio/27. тетя старгая сестра папы.mp3";
import audio28 from "../../languages/yukaghir/family/audio/28. тетя работает в детском саду она бухгалтер.mp3";
import audio29 from "../../languages/yukaghir/family/audio/29. тетя младшая сестра папы.mp3";
import audio30 from "../../languages/yukaghir/family/audio/30. моя тетя швея.mp3";
import audio31 from "../../languages/yukaghir/family/audio/31. невестка жена брата.mp3";
import audio32 from "../../languages/yukaghir/family/audio/32. невестка живет в москве.mp3";
import audio33 from "../../languages/yukaghir/family/audio/33. зять муж сестры.mp3";
import audio34 from "../../languages/yukaghir/family/audio/34. зятя зовут дима.mp3";


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
        "Title": "Бэйбэрикээн",
        "Image": taleIcon1,
        "View": 2
    },
    {
        "Title": "Водяная крыса и птичка",
        "Image": taleIcon2,
        "View": 3
    },
    {
        "Title": "Гагара и ворон",
        "Image": taleIcon3,
        "View": 4
    },
    {
        "Title": "Три брата",
        "Image": taleIcon4,
        "View": 5
    },
    {
        "Title": "Как лягушка верхом ездила",
        "Image": taleIcon5,
        "View": 6
    },
    {
        "Title": "Лиса и медведь",
        "Image": taleIcon6,
        "View": 7
    },
    {
        "Title": "Мышь и лось",
        "Image": taleIcon7,
        "View": 8
    },
    {
        "Title": "Мэник Мэнигийээн",
        "Image": taleIcon8,
        "View": 9
    },
    {
        "Title": "Облегчивший поклажу",
        "Image": taleIcon9,
        "View": 10
    },
    {
        "Title": "Старуха Тэбэнэкээн",
        "Image": taleIcon10,
        "View": 11
    },
    {
        "Title": "Тест",
        "Image": QuizIcon,
        "View": 12
    }
];

export const SubjectContext = createContext({
    currentSubject: 0,
    setCurrentSubject: () => { }
});

function Tale() {
    const { view, setView } = useContext(ViewContext);
    const [currentSubject, setCurrentSubject] = useState(0);

    const [page, setPage] = useState(0);

    const handleClick = event => {
        setCurrentSubject(currentSubject + 1)
        if (currentSubject === 12) setCurrentSubject(0)
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
                <motion.div className='talePage' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
                    {currentSubject === 0 && <div className='buttonsContainer'>
                        <SubjectCard subject={subjects[0]} index='coloredCard1' subjectContext={SubjectContext}/>
                        <SubjectCard subject={subjects[1]} index='coloredCard2' subjectContext={SubjectContext}/>
                        <SubjectCard subject={subjects[2]} index='coloredCard3' subjectContext={SubjectContext}/>
                        <SubjectCard subject={subjects[3]} index='coloredCard4' subjectContext={SubjectContext}/>
                        <SubjectCard subject={subjects[4]} index='coloredCard5' subjectContext={SubjectContext}/>
                        <SubjectCard subject={subjects[5]} index='coloredCard6' subjectContext={SubjectContext}/>
                        <SubjectCard subject={subjects[6]} index='coloredCard7' subjectContext={SubjectContext}/>
                        <SubjectCard subject={subjects[7]} index='coloredCard1' subjectContext={SubjectContext}/>
                        <SubjectCard subject={subjects[8]} index='coloredCard2' subjectContext={SubjectContext}/>
                        <SubjectCard subject={subjects[9]} index='coloredCard3' subjectContext={SubjectContext}/>
                        <SubjectCard subject={subjects[10]} index='coloredCard4' subjectContext={SubjectContext}/>
                        <SubjectCard subject={subjects[11]} index='coloredCard5' subjectContext={SubjectContext}/>
                    </div>}
                    {currentSubject === 1 && <Introduction />}
                    {currentSubject === 2 && <Tale1 />}
                    {currentSubject === 3 && <Tale2 />}
                    {currentSubject === 4 && <Tale3 />}
                    {currentSubject === 5 && <Tale4 />}
                    {currentSubject === 6 && <Tale5 />}
                    {currentSubject === 7 && <Tale6 />}
                    {currentSubject === 8 && <Tale7 />}
                    {currentSubject === 9 && <Tale8 />}
                    {currentSubject === 10 && <Tale9 />}
                    {currentSubject === 11 && <Tale10 />}
                    {currentSubject === 12 && <Test />}

                    {currentSubject != 0 && currentSubject != 12 && <div className="bottomNavbar">
                        {currentSubject > 1 ? <Button text='Назад' handleClick={handleBack} /> : <Button available={false} text='Назад' />}
                        {/* <button className='buttonLearn' onClick={handleClick}>Далее</button> */}
                        <Button text={currentSubject === 12 ? 'Вернуться к теме' : 'Далее'} handleClick={handleClick} />
                    </div>}
                </motion.div>
            </SubjectContext.Provider>
        </ViewContext.Provider>
    )
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
        <div className='tale-introduction'>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }} className='container'>
                <h1 className='header'>Урок № 8  /  Ахсыс үөрэх</h1>
                <h1 className='header'>Якутские народные сказки</h1>
                    <h3>В этом уроке почитаем и послушаем якутские народные сказки. Выучим слова, которые довольно часто употребляются в повседневной жизни якутов. А также выполним тест на понимание прочитанного по теме “Якутские сказки”.</h3>
                    <p>Сказки — один из основных видов устного творчества якутов. Для якутских сказок характерны светлый оптимизм, жизнеутверждающее начало, вера в силу простого человека, в победу добра над злом.</p>
                    <p>Сказки складывались в течении столетий и в своем развитии они изменялись в тесной связи с развитием всего уклада жизни; одни мотивы и образы отпадали, приобретались новые черты, по-новому трактовались древние элементы.</p>
                    <p>В сказочном репертуаре якутов имеются как произведения самобытного национального характера, так и произведения, сходные со сказками других народов. Заимствованные сюжеты и мотивы сказок приспосабливались к географическим, историческим, социально-экономическим и бытовым условиям. Они обрастали национально-бытовыми деталями, сочетались с местными сюжетами и мотивами, становились сказками национальными, а не чужеземными.</p>
                    <p>Несомненно, что громадное большинство бытующих в настоящее время сказок самобытного национального происхождения. Их создавал якутский народ. В их содержании, многообразной тематике отражается жизнь и духовный облик создавшего их народа, природные условия Якутии. Национальное своеобразие этих сказок проявляется в характерах и деятельности персонажей, в бытовых подробностях, в приемах изображения действительности и в языке.</p>
                    <p>По содержанию якутские сказки можно предварительно разделить на три большие группы: 1. Сказки о животных. 2. Волшебные или фантастические. 3. Бытовые сказки.</p>
                    <p>Сказку рассказывает мать своему ребенку, как только тот начинает понимать слова и разговаривать. Сила эстетического и воспитательного воздействия сказок огромна. Поэтому-то народ любит и бережно хранит их как ценное наследие прошлого.</p>
                    <img className='taleImage' src={imageIntroduction1}></img>
                    <img className='taleImage' src={imageIntroduction2}></img>
                <h1 className='header'>Саха остуоруйалара</h1>
                    <p>Остуоруйаҕа норуот бэйэтин баҕа санаатын, инникигэ эрэлин, күннээҕи олоҕун-дьаһаҕын ойуулаан-киэргэтэн кэпсиир.</p>
                    <p>Саха остуоруйаларын сүнньүнэн үс суолга араарыахха сөп: 1. Саха  төрүт остуоруйалара. 2. Нуучча кэпсээннэрин, остуоруйаларын сабыдыалларынан айыллыбыттар. 3. Нууччаттан ылыллыбыттар.</p>
                    <p>Ис хоһооннорунан маннык наардыыллар: 1. Хамсыыр-харамай туһунан. 2.  Дьиктилээхтэр-алыптаахтар. 3. Олох-дьаһах остуоруйалара.</p>
                    <p>Саха остуоруйалара үчүгэйи куһаҕантан арааран өйдүүр сиэрдээх дьону иитэллэр. Иккиһинэн,  кэнчээри ыччат айар, саҥарар, толкуйдуур, оҥорон көрөр дьоҕурдарын сайыннараллар, төрөөбүт тылга тапталы иҥэрэллэр, норуот муудараһыгар уһуйаллар.</p>
                    <img className='taleImage' src={imageIntroduction3}></img>
            
                    <div className='greetingImage'>
                        <img className='taleImage' src={imageIntroduction4}></img>
                        <p className='imageSubtitle'>Василий Корякин уруһуйдара. “Саха остуоруйалара” (Дьокуускай, 1996 с.) туһанныбыт.</p>
                    </div>
            </motion.div>
        </div>
    );
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
    const[stateNavigate, setStateNavigate]=useState('none');

    useEffect(() => {
        if(stateNavigate == 'next'){
            setCurrentSubject(0);
        }
        
    },[stateNavigate])
    return (
        <PageContext.Provider value={{ currentPage, setCurrentPage }}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }} className="">
                {/* <h1 className='header'>Тест / тургутук</h1> */}
                {currentPage === 0 &&
                    <Quiz questions={quizTales.questions} quizTitle={quizTales.quizTitle} stateNavigate={setStateNavigate}/>
                }
            </motion.div>
        </PageContext.Provider>
    )
}

export default Tale