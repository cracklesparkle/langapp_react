import React, { useContext, useState, useEffect, createContext, useRef } from 'react';

import { motion } from 'framer-motion';
import { ViewContext } from '../../ViewContext';
import Button from '../../components/Button';
import SoundButton from '../../components/SoundButton';

import { quizAnimals1 } from '../../pages/yakut/quizData';
import Quiz from '../../Quiz';

import SubjectCard from '../../SubjectCard2';

import { animals } from './audio';

import image1 from '../../languages/yakut/animals/Screenshot_7.jpg';
import image2 from '../../languages/yakut/animals/белый медведь.jpg';
import image3 from '../../languages/yakut/animals/ЗАЯЦ.png';
import image4 from '../../languages/yakut/animals/КУРОПАТОЧКА.png';
import image5 from '../../languages/yakut/animals/лось.jpg';
import image6 from '../../languages/yakut/animals/морж.jpg';
import image7 from '../../languages/yakut/animals/овцебык.jpg';
import image8 from '../../languages/yakut/animals/олень.jpg';
import image9 from '../../languages/yakut/animals/пернатые.jpg';
import image10 from '../../languages/yakut/animals/песец.jpg';
import image11 from '../../languages/yakut/animals/Снежный баран.jpg';
import image12 from '../../languages/yakut/animals/якутская лошадь.jpg';

import imageQuiz1 from '../../languages/yakut/animals/quiz/1.png';
import imageQuiz2 from '../../languages/yakut/animals/quiz/2.png';
import imageQuiz3 from '../../languages/yakut/animals/quiz/3.png';
import imageQuiz4 from '../../languages/yakut/animals/quiz/4.png';
import imageQuiz5 from '../../languages/yakut/animals/quiz/5.png';
import imageQuiz6 from '../../languages/yakut/animals/quiz/6.png';
import imageQuiz7 from '../../languages/yakut/animals/quiz/7.png';
import imageQuiz8 from '../../languages/yakut/animals/quiz/8.png';
import imageQuiz9 from '../../languages/yakut/animals/quiz/9.png';
import imageQuiz10 from '../../languages/yakut/animals/quiz/10.png';

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
        "Title": "Звери",
        "Image": BookIcon,
        "View": 2
    },
    {
        "Title": "Птицы",
        "Image": BookIcon,
        "View": 6
    },
    {
        "Title": "Рыба",
        "Image": BookIcon,
        "View": 7
    },
    {
        "Title": "Насекомые",
        "Image": BookIcon,
        "View": 8
    },
    {
        "Title": "Возрастные названия крупного рогатого скота",
        "Image": BookIcon,
        "View": 3
    },
    {
        "Title": "Возрастные названия конного скота",
        "Image": BookIcon,
        "View": 4
    },
    {
        "Title": "Возрастные названия оленей",
        "Image": BookIcon,
        "View": 5
    },
    {
        "Title": "Чтение. Заяц.",
        "Image": BookIcon,
        "View": 9
    },
    {
        "Title": "Чтение. Куропатка.",
        "Image": BookIcon,
        "View": 10
    },
    {
        "Title": "Тест",
        "Image": QuizIcon,
        "View": 11
    }
];

export const SubjectContext = createContext({
    currentSubject: 0,
    setCurrentSubject: () => { }
});

function Animals() {
    const { view, setView } = useContext(ViewContext);
    const [currentSubject, setCurrentSubject] = useState(0);

    const [page, setPage] = useState(0);

    const handleClick = event => {
        setCurrentSubject(currentSubject + 1)
        if (currentSubject === 11) setCurrentSubject(0)
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
                    </div>}
                    {currentSubject === 1 && <Introduction />}
                    {currentSubject === 2 && <Dictionary />}
                    {currentSubject === 3 && <Dictionary1 />}
                    {currentSubject === 4 && <Dictionary2 />}
                    {currentSubject === 5 && <Dictionary3 />}
                    {currentSubject === 6 && <Dictionary4 />}
                    {currentSubject === 7 && <Dictionary5 />}
                    {currentSubject === 8 && <Dictionary6 />}
                    {currentSubject === 9 && <Text1 />}
                    {currentSubject === 10 && <Text2 />}
                    {currentSubject === 11 && <Test />}

                    {currentSubject != 0 && currentSubject != 11 && <div className="bottomNavbar">
                        {currentSubject > 1 ? <Button text='Назад' handleClick={handleBack} /> : <Button available={false} text='Назад' />}
                        {/* <button className='buttonLearn' onClick={handleClick}>Далее</button> */}
                        <Button text={currentSubject === 11 ? 'Вернуться к теме' : 'Далее'} handleClick={handleClick} />
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
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }} className='greeting-introduction'>
            <div className='container'>
                <h1 className='header'>Урок № 5 / Бэһис үөрэх</h1>
                <h3 className='greeting-subheader'>Тема пятого урока «Животные». Сперва познакомимся с многообразием животного мира нашей удивительной Якутии. Затем почитаем и послушаем короткие рассказы о животных Севера. Выучим слова. И в конце занятия для закрепления изученного материала выполним онлайн-тест.</h3>
                <div className='text'>
                    <h1 className='header'>Животный мир Якутии</h1>
                    <p>Республика Саха (Якутия) является самым большим по территории регионом Российской Федерации и занимает 1/5 часть её площади. На ее территории встречаются самые разнообразные ландшафты: Арктические пустыни островов Северного Ледовитого океана, бескрайняя тундра, бедная северная тайга, величайшие горные системы, участки степей.
                    </p>
                    <p>В палеогоне (60 млн лет назад) материки начинают приобретать современные очертания. Похолодание, начавшееся 200 млн лет назад, начиная с позднего миоцена еще более усилилось. С тех времен остались типичные степные представители фауны, а также сформировались современные виды животных, приспособленных к местному суровому климату. Их отличает склонность к  сезонной  миграции,  значительное  накопление подкожного жира, пушистый и густой мех или пух, умение рыть норы в снегу и готовить запасы на зиму. Большинство животных впадает в зимнюю спячку. Большая часть республики  лежит в  зоне  многолетней  мерзлоты. Летом почва оттаивает на глубину 3-4  метра.  Но даже на такой глубине нередко обнаруживаются  кости вымерших  мамонтов.
                    </p>
                    <p>Фауна наземных позвоночных представлена 4 видами земноводных, 2 – пресмыкающихся, 280 – птиц и 79 видами млекопитающих, относящимися к 56 родам, 21 семейству, 8 отрядам. Из них 66 видов обитают постоянно. Из постоянных обитателей 4 вида являются акклиматизированными (ондатра, американская норка, степной хорёк, овцебык), 2 синантропных вида (домовая мышь, серая крыса), заселившими территорию республики самостоятельно и один вид (соболь), восстановившим ареал и численность в результате успешных реакклиматизационных мероприятий. Отмечены заходы или залеты (летучие мыши) особей 12 видов и 1 вид отмечен как исчезнувший в недавнем прошлом (бобр).
                    </p>
                    <p>Якутия омывается морем Лаптевых  и  Восточно-Сибирским морем. А потому морская фауна республики представлена довольно богато: здесь обитают около 240 видов донных позвоночных и около 150 видов зоопланктона. Из рыб наиболее массовые цайки, ледовито-морская рогатка, полярная камбала, восточно-сибирская треска, тихоокеанская сельдь и изредка встречается полярная акула. В прибрежной солоноватоводной зоне обитают полупроходные рыбы - нельма, муксун, омуль, ряпушка, которые достигнув половой зрелости поднимаются на нерест вверх по рекам. Эти рыбы служат кормом обитающим здесь млекопитающим как нерпа, нарвал и белуха. Донными беспозвоночными моллюсками питается морж. Численность морских млекопитающих регулируется белым медведем. Изредка заплывают грендланские киты.
                    </p>
                    <p>Летом на скалистых побережьях кайры, чайки и крачки образуют "птичьи базары". На Новосибирских, Медвежьих и других островах гнездится огромное количество водоплавающих птиц: утки, гуси, черные казарки,  гаги,  чирки.  А местная розовая чайка и белый журавль-стерх занесены в Красную книгу.
                    </p>
                    <p>В зоне  тундры  обитают  песцы, полярные  волки,  лемминги,  полярные  совы  и  куропатки,  северные  олени. На сегодня в Якутии известно 5 популяций северного оленя общей численностью 190 тыс. голов.
                    </p>
                    <p>Ландшафт большей части Республики Саха представлен горами и плоскогорьями. Это место обитания снежных баранов, кабарги. В горах водятся черношапочные сурки, пищухи. Над вершинами парят орлы, беркуты, соколы-сапсаны.
                    </p>
                    <p>Но больше всего животных обитает в тайге. Роскошные хвойные леса стали домом для бурого медведя и лесного волка, рыси и лис. Из копытных встречаются изюбри, косули, лоси, кабарги. Но особенно ценятся представители куньих: песцы, горностаи, соболи, росомахи, колонок и ласки.
                    </p>
                    <p>Богата тайга и пернатой дичью: куропатки и тетерева, глухари и рябчики.
                    </p>
                    <p>В Якутии более 700 тысяч, а озер – 800 тысяч.  В водоемах обитает более 50 видов рыб, наиболее ценными из которых считаются представители семейства лососевых и сиговых. В 30-е годы прошлого столетия в озерах стали разводить ондатр. В 60-х годах завезли американскую норку, которая успешно акклиматизировалась в местных условиях.  А в конце прошлого века в один из улусов Якутии завезли для разведения овцебыков. Эти животные некогда обитали здесь, и теперь предпринимаются шаги по восстановлению популяции овцебыка.
                    </p>
                    <p>Жители республики обладают уникальнейшим опытом разведения крупного рогатого скота в условиях Крайнего Севера. Здесь разводят коров, коз, баранов, быков, а якутские лошади считаются одной из древнейших пород.
                    </p>
                    <p>Из редких и находящихся под угрозой исчезновения наземных позвоночных животных в Красную книгу РФ занесено 15 видов птиц и 23 вида млекопитающих, обитающих на территории Республики Саха (Якутия).
                    </p>
                    <p>Поэтому всегда нужно помнить, что жизнь животных напрямую зависит от нашего бережного отношения к ним и окружающей среде.
                    </p>
                    <div className='greetingImage'>
                        <div className='aside'>
                            <img src={image1}></img>
                        </div>
                    </div>

                </div>
                <div className='text'>
                    <h1 className='header'>Саха Сирин көтөрө-сүүрэрэ</h1>
                    <p>
                        Саха Өрөспүүбүлүкэтэ Арассыыйа Федерациятын 5 гыммыт биир өлүүтүн ылар улахан территориялаах эрэгийиэн буолар. Киэҥэ бэрт буолан, сирэ-уота да араас: Хотугу Муустаах акыйаан арыыларын Аартыкатааҕы кумах куйаара, уһуга көстүбэт киэҥ нэлэмэн туундара, суугунуур күөх дуол тайҕа, халлааҥҥа харбаспыт хайалар, ото-маһа суох хотугу истиэп.
                    </p>
                    <p>
                        Дьэ, маннык ураты айылҕалаах дойдуга билигин баар кыыл-сүөл палеоген кэмиттэн маннык бодотун-таһаатын ылынан барбыт. Килиимэт тымныйбытыгар сүрүннээн истиэп фаунатын бэрэстэбиитэллэрэ ордон хаалбыттар, ону таһынан саҥа көрүҥнэр үөдүйбүттэр. Баларыҥ сыыйа тыйыс усулуобуйаҕа үөрэнэн, дьыл кэминэн сирдэрин уларытар, тириилэрин анныгар сыа мунньунар, хойуу уонна көпсөркөй түүлээх, кыһыҥҥыга сайын устата ас хаһаанар, хороон хастар, сорохтор утуйар буолбуттар.
                    </p>
                    <p>
                        Өрөспүүбүлүкэ территорията барыта кэриэтэ ирбэт тоҥ иэнигэр хапсар. Сайынын сир 3-4  миэтэрэ дириҥҥэ диэри ирдэҕинэ, былыр үйэҕэ олорон ааспыт сэлиилэр уҥуохтара, мааманнар кырамталара аллараттан тахсан кэлээччи.
                    </p>
                    <p>
                        Биһиги хотугу сирбитигэр олорор тоноҕостоохтору көрүҥнэринэн араардахха, алчахтар 4 көрүҥнэрэ баар, сыыллааччылар – 2, көтөрдөр – 280. Үүт аһылыктаахтар -- 79. Олоруҥ аны  56 биис ууһугар, 28 кэргэҥҥэ, 8 этэрээккэ киирсэллэр. Итинтэн 66 көрүҥэ Саха Сириттэн ханна да барбакка кыстыыр. Олор истэригэр 4 көрүҥү (андаатар, нуорка, истиэп хороонньута, овцебык) атын сиртэн аҕалан олохсуппуттар, киһи баар сиригэр уһаан тэнийэр 2 көрүҥ (дьиэ кутуйаҕа, күтэр) бэйэлэрэ батыһан тиийэн кэлбиттэр уонна биир сүтэн эрэр көрүҥү (киис) ахсаанын элбэтэр үлэ түмүгэр олохтоох оҥорбуттар. Кэмиттэн кэмигэр кэлэн барааччылартан көтөр кутуйахтары, сарыы кынаттары ааттыахха сөп. Аны туран, буобура диэн кыыл тэнийэ сылдьан баран, кэлин имири эстибит.
                    </p>
                    <p>
                        Саха Сирин хотугу өттүн Лаптевтар уонна Илиҥҥилии Сибиир муоралар тулалыыллар. Онон өрөспүүбүлүкэбит муоратааҕы фауната араас харамайдарынан баай: уу аннынааҕы тоноҕостоохтор 240 уонна тоноҕоһо суохтар 150 кэриҥэ көрүҥэ уста сылдьар. Көмүс хатырыктаахтартан чуолаан муустаах муора арагаайката, хотугу былахы, сөлүөккэ үгүс. Оннооҕор полярнай акула кытта охсуллан ааһар. Аны ыыр кэмнэрэ кэллэ да, өрүстэргэ устан барар балыктар бааллар: тууччах, муксуун, уомул, көндүөбэй. Ньиэрпэ, үҥүү тумус, бөлүүгэ эҥин итилэри сииллэр. Оттон мордьо иһин моллюскаларынан тоторор.
                    </p>
                    <p>
                        Муора үүт аһылыктаахтарын ахсаана үрүҥ эһэттэн тутулуктаах. Сүрүн сиэмэхтэрэ буоллаҕа эбээт. Өссө грендланскай кит кытта таарыйан ааһыан сөп. Сайынын очуос таастаах кытылларга хоптолор, тэкэктэр “көтөрдөр мөккүөрдэрин” тардаллар. Новосибирскай, Эһэлээх уонна да атын арыыларга кустар, хаастар, хаарыҥкалар, турукааннар, чөркөйдөр, чаччыгыныардар уйа тутталлар. Саһарҕа тэтэркэй хоптото уонна кыталык Кыһыл кинигэҕэ киирбиттэрэ.
                    </p>
                    <p>
                        Туундараҕа кырсалар, бөрөлөр, чыҥырыкааннар, мэкчиргэлэр, кутуйахтар, табалар элбэхтэр. Аҥаардас таба 5 арааһа баар. Олор төбөнөн  уопсай ахсааннара 190 тыһыынчаттан тахса.
                    </p>
                    <p>
                        Саха Өрөспүүбүлүкэтин сирин иэнин улахан аҥаара – хайа. Онно чубукулар, таарбаҕаннар, чыс кутуйахтра сөбүлээн олохсуйаллар. Оттон туруук таас хайалар үөһэлэригэр хотойдор, кыыртар, мохсоҕоллор уйаланаллар, үөһэттэн барытын одуулуу көрөллөр.
                    </p>
                    <p>
                        Ол эрээри кыыл-сүөл үксэ хара тыа хаһаайыттара буолаллар: хагдаҥ эһэлэр, бөрөлөр, бэдэрдэр, саһыллар, туртастар, тайахтар, бүүчээннэр. Ол эрээри түүлэрэ күндүтүнэн кырсалары, кырынаастары, кииһи, сиэгэни, солоҥдону, лааскайы ордороллор.
                    </p>
                    <p>
                        Айылҕабыт барахсан куорсуннаахтарынан эмиэ дэлэгэй. Байанай булчуттарга куруппааскыны, куртуйаҕы, улары, бочугураһы бэрсиэн сөп.
                    </p>
                    <p>
                        Саха Сирэ 700 тыһыынчаттан тахса өрүстээх уонна 800 тыһыынчаттан тахса күөллээх. Олор көмүс хатырыктаахтарын киһи ааҕан сиппэт. Арай  көрүҥүнэн аахтахха, 50 баара биллэр. Итинтэн сыаналаналлара кыһыл эттээхтэр уонна майаҕастар.
                    </p>
                    <p>
                        Ааспыт үйэ 30-с сылларыгар андаатараны, 60-с сылларга нуорканы, 90-с сыллартан овцебыктары аҕалан олохсуппуттара.
                    </p>
                    <p>
                        Сахалар тыйыс усулуобуйаҕа ынах сүөһүнү иитэр улахан уопуттаахтар. Оттон саха сылгыта диэн букатын да түҥ былыргы олохтоох боруода буоллаҕа эбээт.
                    </p>
                    <p>
                        Арассыыйа Кыһыл кинигэтигэр Саха Сирин көтөрүн 15 уонна үүт аһылктаахтарын 23 көрүҥэ киирэн турар.
                    </p>
                    <p>
                        Онон, доҕоттоор, аһатан-сиэтэн олорор аар айылҕабытын араҥаччылыаххайыҥ, тулалыыр эйгэҕэ, хамсыыр харамайга кытаатан харыстабыллаахтык сыһыаннаһыаххайыҥ.
                    </p>
                    <div className='greetingImage'>
                        <div className='aside'>
                            <img src={image2}></img>
                        </div>
                    </div>
                </div>
                <div className='greeting-info'>
                    <p>Использованная литература:</p>
                    <p>Сидоров Б. И. Знаете ли Вы млекопитающих Якутии? — Якутск: Бичик, 2002 — 88 с.</p>
                    <p>Соломонов Н. Г. Животный мир Якутии: птицы и млекопитающие.  –  Якутск : Якутское книжное издательство, 1975 – 190 с.</p>
                    <p>Русско-якутский словарь биологических терминов. – Екатеринбург : Уральский рабочий, 1992 – 172 с.</p>
                    <p>Энциклопедия “Животные Якутии”. – Якутск : Бичик, 2016 – 184 с.</p>
                    <p>Якутия. Детская энциклопедия. –  Якутск : Бичик, 2015 – 108.</p>
                    <p>Якутия удивительная и загадочная. – Якутск : Бичик, 2009 – 2009.</p>
                    <p>Фотографии взяты из открытых источников Интернета.</p>
                </div>

            </div>
        </motion.div>
    );
}

function Dictionary() {
    const scrollToRef1 = useRef();
    const scrollToRef2 = useRef();
    const scrollToRef3 = useRef();
    const scrollToRef4 = useRef();
    const scrollToRef5 = useRef();
    const scrollToRef6 = useRef();
    const scrollToRef7 = useRef();
    const scrollToRef8 = useRef();
    const scrollToRef9 = useRef();
    const scrollToRef10 = useRef();
    const scrollToRef11 = useRef();
    const scrollToRef12 = useRef();
    const scrollToRef13 = useRef();
    const scrollToRef14 = useRef();
    const scrollToRef15 = useRef();
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }} className="greeting-introduction">
            <div className="container">
                <h1 className='header'>Словарь. Тылдьыт</h1>
                <h1 className='header'>Животные Якутии. Саха Сирин харамайдара</h1>
                <h1 className='header'>Звери. Кыыллар</h1>
                <div className='letters'>
                    <button className="letter" onClick={() => scrollToRef1.current.scrollIntoView()}>
                        Б
                    </button>
                    <button className="letter" onClick={() => scrollToRef2.current.scrollIntoView()}>
                        В
                    </button>
                    <button className="letter" onClick={() => scrollToRef3.current.scrollIntoView()}>
                        Г
                    </button>
                    <button className="letter" onClick={() => scrollToRef4.current.scrollIntoView()}>
                        З
                    </button>
                    <button className="letter" onClick={() => scrollToRef5.current.scrollIntoView()}>
                        К
                    </button>
                    <button className="letter" onClick={() => scrollToRef6.current.scrollIntoView()}>
                        Л
                    </button>
                    <button className="letter" onClick={() => scrollToRef7.current.scrollIntoView()}>
                        М
                    </button>
                    <button className="letter" onClick={() => scrollToRef8.current.scrollIntoView()}>
                        Н
                    </button>
                    <button className="letter" onClick={() => scrollToRef9.current.scrollIntoView()}>
                        О
                    </button>
                    <button className="letter" onClick={() => scrollToRef10.current.scrollIntoView()}>
                        П
                    </button>
                    <button className="letter" onClick={() => scrollToRef11.current.scrollIntoView()}>
                        Р
                    </button>
                    <button className="letter" onClick={() => scrollToRef12.current.scrollIntoView()}>
                        С
                    </button>
                    <button className="letter" onClick={() => scrollToRef13.current.scrollIntoView()}>
                        Т
                    </button>
                    <button className="letter" onClick={() => scrollToRef14.current.scrollIntoView()}>
                        У
                    </button>
                    <button className="letter" onClick={() => scrollToRef15.current.scrollIntoView()}>
                        Х
                    </button>
                </div>

                {/* <h3>Приветствие. Знакомство / Эҕэрдэлэһии. Билсиһии</h3> */}
                <div className='dictionaryTable'>
                    <h3 ref={scrollToRef1}>Б</h3>
                    <p><br></br>Баран – хой, бараан;
                        <br></br>Баран снежный – чубуку;
                        <br></br>Белка – тииҥ;
                        <br></br>Белуха – бөлүүгэ (ат балык, бэлиикэ);
                        <br></br>Бобр речной – буобура;
                        <br></br>Бурозубка арктическая – уһун тумус (Аартыка күүдээҕэ, солко мурун, тимир тумус, үүтээн);
                        <br></br>Бурозубка крошечная – күүдээх, кыракый күүдээх;
                        <br></br>Бурозубка крупнозубая – бөдөҥ тиистээх күүдээх;
                        <br></br>Бурозубка малая аччыгый күүдээх
                        <br></br>Бурозубка плоскочерепная – хаптаҕай чөмчөкөлөөх күүдээх;
                        <br></br>Бурозубка равнозубая – тэҥ тиистээх күүдээх;
                        <br></br>Бурозубка средняя – орто күүдээх;
                        <br></br>Бурундук азиатский – моҕотой (дьирики, күрдьүгэс, муруку).
                    </p>

                    <h3 ref={scrollToRef2}>В</h3>
                    <p>
                        <br></br>Верблюд –тэбиэн;
                        <br></br>Волк – бөрө (киэҕэ, кутуруктаах, мөө-мүчэ, сиэҥ, субурук);
                        <br></br>Выдра – быыдара (дьүүкун, итиэ, ытыы).
                    </p>

                    <h3 ref={scrollToRef3}>Г</h3>
                    <p>
                        <br></br>Горностай – кырынаас (бэлиэлээх, дьыламан, дьэлэни, үйэн).
                    </p>

                    <h3 ref={scrollToRef4}>З</h3>
                    <p>
                        <br></br>Заяц-беляк – куобах (бодьойоон, бохой, дьүөлэкээн, моотохоон, мундукаан, ньоорой, ньороох, ньукуруут, оһооло, табысхаан, ускаан, хотонох, ыарҕа тойоно уо. д. а.);
                        <br></br>Заяц морской, лахтак – түлүөн.
                    </p>

                    <h3 ref={scrollToRef5}>К</h3>
                    <p>
                        <br></br>Кабарга – бүүчээн (даадаҕас, мөкчөкө, мэнэх, мэччикэ);
                        <br></br>Кожанок северный – тирии кынат;
                        <br></br>Колонок – солоҥдо (амсыыр, амчыкаа, кугас кыыл, кытарбаайы, ньолобуй, саһарбаайы, соломо);
                        <br></br>Косуля – туртас (тууруктай, элик);
                        <br></br>Крот сибирский или алтайский – сир эһэтэ;
                        <br></br>Крыса серая, пасюк – кырыыса (күргэл, күтүр);
                        <br></br>Кутора обыкновенная – уу күүдээҕэ.
                    </p>

                    <h3 ref={scrollToRef6}>Л</h3>
                    <p>
                        <br></br>Ласка – мукучай (лааскай, муҥур, муҥур кутурук, муҥурчах);
                        <br></br>Лев – хахай;
                        <br></br>Лемминг амурский – чыҥырыкаан;
                        <br></br>Лемминг копытный или ошейниковый – кырса кутуйаҕа;
                        <br></br>Лемминг лесной – тыа чыҥырыкаана;
                        <br></br>Лемминг сибирский – Сибиир кырса кутуйаҕа;
                        <br></br>Летяга обыкновенная – нэтээги (бүтэй кынат, кынаттаах тииҥ, лэтээги, маскаалай, тирии кынат);
                        <br></br>Лисица обыкновенная – саһыл (кырымахтаах хара саһыл, кыһыл саһыл, кэрэмэс саһыл, хара саһыл);Лось, сохатый – тайах (күлүктээх, талах булда, улахан суоллаах, уһун сото, лөкөй, о.д.а.)
                    </p>

                    <h3 ref={scrollToRef7}>М</h3>
                    <p>
                        <br></br>Мамонт – сэлии;
                        <br></br>Медведь белый – үрүҥ эһэ (киэҕэ, мөлбүөт, мөөмүчэ);
                        <br></br>Медведь бурый – хагдаҥ эһэ (аабый, абаҕа, баҕыһах, киэҕэ, куохтула, маамыкаан, мөлбөр, мэппээлэ, талкы, тыатааҕы, хоох, хохтуула о. д.а.);
                        <br></br>Морж – мордьо;
                        <br></br>Мышь домовая – дьиэ кутуйаҕа (даркы, мотуорка, мыыска, мыычаар, уһун кутурук);
                        <br></br>Мышь лесная азиатская – тыа кутуйаҕа;
                        <br></br>Мышь малютка – кырачаан кутуйах.
                    </p>

                    <h3 ref={scrollToRef8}>Н</h3>
                    <p>
                        <br></br>Нарвал, единорог – үҥүү тумус;
                        <br></br>Нерпа кольчатая – ньиэрпэ (лаарга балык);
                        <br></br>Норка американская – нуорка;
                        <br></br>Ночница водяная – уу сарыы кыната.
                    </p>

                    <h3 ref={scrollToRef9}>О</h3>
                    <p>
                        <br></br>Олень благородный – кулааһай (таҥара табата, хамаха);
                        <br></br>Олень северный – кыыл таба (кыыл, мас кыыла, муора кыыла, мэнээк);
                        <br></br>Ондатра или мускусная крыса – андаатар.
                    </p>

                    <h3 ref={scrollToRef10}>П</h3>
                    <p>
                        <br></br>Песец – кырса (күөх кырса, нуоранньык, үрүҥкээс);
                        <br></br>Пищуха алтайская или северная – чыс (бысхаал, таас кутуйаҕа, чыһырҕас);
                        <br></br>Полевка водяная – күтэр (бурҕаа, маттаҕа, моро, орсооху);
                        <br></br>Полевка красная – кыһыл бытаһыт;
                        <br></br>Полевка красносерая – кытархай бытаһыт;
                        <br></br>Полевка Миддендорфа – Миддендорф бытаһыта;
                        <br></br>Полевка северосибирская – хотугу сибиир бытаһыта;
                        <br></br>Полевка сибирская высокогорная – Дьааҥы бытаһыта;
                        <br></br>Полевка темная – хара бытаһыт;
                        <br></br>Полевка узкочерепная или стадная – улахан бытаһыт;
                        <br></br>Полевка экономка – хаһаастаах бытаһыт.
                    </p>

                    <h3 ref={scrollToRef11}>Р</h3>
                    <p>
                        <br></br>Росомаха – сиэгэн (бөҕө, мэкчикээн, салтарай, хоборооҥку, ээйтэ)
                        <br></br>Рысь – бэдэр (үүс).
                    </p>

                    <h3 ref={scrollToRef12}>С</h3>
                    <p>
                        <br></br>Собака –ыт;
                        <br></br>Соболь – киис (ньаалдьы, саарба);
                        <br></br>Сурок камчатский – таарбаҕан (тоноччу, чаамык);
                        <br></br>Суслик – дьабарааскы (дьабара, сабыйах, хорой).
                    </p>

                    <h3 ref={scrollToRef13}>Т</h3>
                    <p>
                        <br></br>Тигр – баабыр.
                    </p>

                    <h3 ref={scrollToRef14}>У</h3>
                    <p>
                        <br></br>Ушан – уһун кулгаах.
                    </p>

                    <h3 ref={scrollToRef15}>Х</h3>
                    <p>
                        <br></br>Хорь светлый – хороонньут.
                    </p>
                </div>
            </div>
        </motion.div>
    )
}

function Dictionary1() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }} className="greeting-introduction">
            <div className="container">
                <h1 className='header'>Возрастные название крупного рогатого скота</h1>
                <h1 className='header'>Ынах сүөһү сааһынан аата</h1>
                {/* <h3>Приветствие. Знакомство / Эҕэрдэлэһии. Билсиһии</h3> */}
                <div className='dictionaryTable'>
                    {/* {dictionary.map((e, i) => {
                        return (
                            <div>
                                <p>{e.sentence}</p>
                                <p>{e.translation}</p>
                            </div>
                        );
                    })
                    } */}
                    <p>
                        <p><span>Ньирэй</span> – только родившийся теленок, питающийся только молоком;</p>
                        <p><span>Торбос (томуйах, тарбыйах)</span> –  теленок после 4-5 месяцев, когда он может питаться исключительно сеном без молока;</p>
                        <p><span>Борооску (бороон)</span> – теленок в первую зиму до следующего снега;</p>
                        <p><span>Тыһаҕас</span> – теленок во вторую зиму до следующего снега;</p>
                        <p><span>Тиҥэһэ</span> –  корова, бычок в третью зиму до еледующего снега;</p>
                        <p><span>Өҥүрүмэр (өҕүрүмэр)</span> – корова, бык в четвертую зиму до следующего снега;</p>
                        <p><span>Ынах</span> – корова;</p>
                        <p><span>Бургунас</span> – нетель (еще не телившаяся молодая корова);</p>
                        <p><span>Туҥуй</span> – молодая корова, в первый раз ставшая стельною;</p>
                        <p><span>Уулаах (буос) ынах</span> – стельная корова;</p>
                        <p><span>Кытарах ынах</span> – яловая, не стельная корова;</p>
                        <p><span>Ыанар (ыанньык) ынах</span> – дойная корова;</p>
                        <p><span>Байтаһын ынах</span> – яловая, не дойная, упитанная корова;</p>
                        <p><span>Оҕус</span> – бык;</p>
                        <p><span>Кунан оҕус</span> – бычок, молодой бык;</p>
                        <p><span>Ат оҕус</span> – вол, холощеный бык;</p>
                        <p><span>Атыыр оҕус</span> – бык-производитель;</p>
                        <p><span>Кур оҕу</span>с – бык, находившийся в нагуле в течение года;</p>
                        <p><span>Субан (субай) сүөһү</span> – скот, находящийся в нагуле.</p>
                    </p>
                </div>
            </div>
        </motion.div>
    )
}

function Dictionary2() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }} className="greeting-introduction">
            <div className="container">
                <h1 className='header'>Возрастные название конного скота</h1>
                <h1 className='header'>Сылгы сааһынан аата</h1>
                {/* <h3>Приветствие. Знакомство / Эҕэрдэлэһии. Билсиһии</h3> */}
                <div className='dictionaryTable'>
                    {/* {dictionary.map((e, i) => {
                        return (
                            <div>
                                <p>{e.sentence}</p>
                                <p>{e.translation}</p>
                            </div>
                        );
                    })
                    } */}
                    <p>
                        <p><span>Кулун (кулунчук)</span>  – жеребенок по первому году, в первую весну до 6-7 месяцев;</p>
                        <p><span>Убаһа</span> – жеребенок в первую зиму до одного года;</p>
                        <p><span>Тый</span> –жеребенок с одного года до двух лет;</p>
                        <p><span>Эмньик тый</span> – жеребенок-сосун;</p>
                        <p><span>Ханчааһын тый</span> – жеребенок, отделенный от матери;</p>
                        <p><span>Тиҥэһэ соноҕос (атыыр соноҕос)</span> – молодой жеребец от двух до трех лет; Тиҥэһэ кытыт – молодая кобылица от двух до трех лет;</p>
                        <p><span>Кытыылыыр соноҕос</span> – молодой жеребец от трех до четырех лет;</p>
                        <p><span>Кытыылыыр кытыт</span> – молодая кобылица от трех до четырех лет;</p>
                        <p><span>Түөртээх соноҕос</span> –жеребец от четырех до пяти лет;</p>
                        <p><span>Түөртээх кытыт</span> – кобылица от четырех до пяти лет;</p>
                        <p><span>Биэстээх соноҕос</span> – жеребец от пяти до шести лет;</p>
                        <p><span>Биэстээх кытыт</span> – кобылица от пяти до шести лет;</p>
                        <p><span>Атыыр</span> – жеребец-производитель;</p>
                        <p><span>Ат</span> – жеребец холощеный, мерин;</p>
                        <p><span>Биэ</span> – кобыла</p>
                        <p><span>Туҥуй биэ</span> – кобыла первожеребая;</p>
                        <p><span>Буос биэ</span> – жеребая кобыла;</p>
                        <p><span>Кытарах биэ</span> – яловая кобылица;</p>
                        <p><span>Байтаһын</span> – яловая, упитанная кобыла</p>
                        <p><span>Миҥэ</span> – объезженный, ездовой (о конном скоте);</p>
                        <p><span>Сүүрүк ат</span> – беговая лошадь, скакун</p>
                        <p><span>Сылгы</span> – конный скот, находящийся на пастбище.</p>
                    </p>
                </div>
            </div>
        </motion.div>
    )
}

function Dictionary3() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }} className="greeting-introduction">
            <div className="container">
                <h1 className='header'>Возрастные название оленей</h1>
                <h1 className='header'>Таба сааһынан аата</h1>
                {/* <h3>Приветствие. Знакомство / Эҕэрдэлэһии. Билсиһии</h3> */}
                <div className='dictionaryTable'>
                    {/* {dictionary.map((e, i) => {
                        return (
                            <div>
                                <p>{e.sentence}</p>
                                <p>{e.translation}</p>
                            </div>
                        );
                    })
                    } */}
                    <p>
                        <p><span>Таба</span> – олень (общее название);</p>
                        <p><span>Суоҥаа</span> – только что родившийся олененок;</p>
                        <p><span>Тараҕай</span> – олененок в первую зиму;</p>
                        <p><span>Муойкаа</span> – когда перестает сосать мать, олененок после половины первой зимы;</p>
                        <p><span>Тугут</span> – общее название олененка до одного года;</p>
                        <p><span>Хорой (абылахаан)</span> – олень самец на втором году;</p>
                        <p><span>Кычытар (кыычча, сачарыы)</span> – самка на втором году;</p>
                        <p><span>Үктээнэ (иктээнэ, иитээн, үөнэс)</span> –  олень на третьем году</p>
                        <p><span>Ньоҕурҕана (ньамарҕана)</span> – самец на четвертом году;</p>
                        <p><span>Амархана</span> – самец на пятом году;</p>
                        <p><span>Буур</span> – самёц после пяти лет;</p>
                        <p><span>Тыһы таба</span> – самка с трёх лет;</p>
                        <p><span>Ахтамы</span> – холощенный, кастрированный оленьө</p>
                        <p><span>Уучах</span> – верховой олень;</p>
                        <p><span>Ньуоҕуһут</span> – передовой ведущий олень;</p>
                        <p><span>Хааргын</span> – олень чукотской породы.</p>
                    </p>
                </div>
            </div>
        </motion.div>
    )
}

function Dictionary4() {
    const scrollToRef1 = useRef();
    const scrollToRef2 = useRef();
    const scrollToRef3 = useRef();
    const scrollToRef4 = useRef();
    const scrollToRef5 = useRef();
    const scrollToRef6 = useRef();
    const scrollToRef7 = useRef();
    const scrollToRef8 = useRef();
    const scrollToRef9 = useRef();
    const scrollToRef10 = useRef();
    const scrollToRef11 = useRef();
    const scrollToRef12 = useRef();
    const scrollToRef13 = useRef();
    const scrollToRef14 = useRef();
    const scrollToRef15 = useRef();
    const scrollToRef16 = useRef();
    const scrollToRef17 = useRef();
    const scrollToRef18 = useRef();
    const scrollToRef19 = useRef();
    const scrollToRef20 = useRef();
    const scrollToRef21 = useRef();
    const scrollToRef22 = useRef();
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }} className="greeting-introduction">
            <div className="container">
                <h1 className='header'>Птицы</h1>
                <h3 className='greeting-subheader'>Көтөрдөр</h3>
                <div className='letters'>
                    <button className="letter" onClick={() => scrollToRef1.current.scrollIntoView()}>
                        А
                    </button>
                    <button className="letter" onClick={() => scrollToRef2.current.scrollIntoView()}>
                        Б
                    </button>
                    <button className="letter" onClick={() => scrollToRef3.current.scrollIntoView()}>
                        В
                    </button>
                    <button className="letter" onClick={() => scrollToRef4.current.scrollIntoView()}>
                        Г
                    </button>
                    <button className="letter" onClick={() => scrollToRef5.current.scrollIntoView()}>
                        Д
                    </button>
                    <button className="letter" onClick={() => scrollToRef6.current.scrollIntoView()}>
                        Ж
                    </button>
                    <button className="letter" onClick={() => scrollToRef7.current.scrollIntoView()}>
                        З
                    </button>
                    <button className="letter" onClick={() => scrollToRef8.current.scrollIntoView()}>
                        К
                    </button>
                    <button className="letter" onClick={() => scrollToRef9.current.scrollIntoView()}>
                        Л
                    </button>
                    <button className="letter" onClick={() => scrollToRef10.current.scrollIntoView()}>
                        М
                    </button>
                    <button className="letter" onClick={() => scrollToRef11.current.scrollIntoView()}>
                        Н
                    </button>
                    <button className="letter" onClick={() => scrollToRef12.current.scrollIntoView()}>
                        О
                    </button>
                    <button className="letter" onClick={() => scrollToRef13.current.scrollIntoView()}>
                        П
                    </button>
                    <button className="letter" onClick={() => scrollToRef14.current.scrollIntoView()}>
                        Р
                    </button>
                    <button className="letter" onClick={() => scrollToRef15.current.scrollIntoView()}>
                        С
                    </button>
                    <button className="letter" onClick={() => scrollToRef16.current.scrollIntoView()}>
                        Т
                    </button>
                    <button className="letter" onClick={() => scrollToRef17.current.scrollIntoView()}>
                        У
                    </button>
                    <button className="letter" onClick={() => scrollToRef18.current.scrollIntoView()}>
                        Ф
                    </button>
                    <button className="letter" onClick={() => scrollToRef19.current.scrollIntoView()}>
                        Ц
                    </button>
                    <button className="letter" onClick={() => scrollToRef20.current.scrollIntoView()}>
                        Ч
                    </button>
                    <button className="letter" onClick={() => scrollToRef21.current.scrollIntoView()}>
                        Щ
                    </button>
                    <button className="letter" onClick={() => scrollToRef22.current.scrollIntoView()}>
                        Я
                    </button>
                </div>

                {/* <h3>Приветствие. Знакомство / Эҕэрдэлэһии. Билсиһии</h3> */}
                <div className='dictionaryTable'>
                    <h3 ref={scrollToRef1}>А</h3>
                    <p>
                        <br></br>Аист черный – хара кутан
                    </p>

                    <h3 ref={scrollToRef2}>Б</h3>
                    <p>
                        <br></br>Бекас – үгүрүө, сурулаа;
                        <br></br>Бекас азиатский – бырдах түһэрээччи (үгүрүө, сурулаа);
                        <br></br>Беркут – хотой (тойон, тойон көтөр, тойон кыыл).
                    </p>

                    <h3 ref={scrollToRef3}>В</h3>
                    <p>
                        <br></br>Вальдшнеп – обот үгүрүө (оҕус үгүрүө, ойбон үгүрүө);
                        <br></br>Веретенник бекасовидный – кырдырҕас бараах;
                        <br></br>Веретенник пестрохвостый – куралай;
                        <br></br>Веретенник чернохвостый – кураҕаччы, куйаҕаччы;
                        <br></br>Вертишейка – абааһы чыычааҕа;
                        <br></br>Воробей домовой – дьиэ барабыайа, куҥ мэйии;
                        <br></br>Воробей полевой – хонуу барабыайа (бабаарына харабыла, моойторуктаах);
                        <br></br>Ворон – суор;
                        <br></br>Ворона черная – тураах (дааҕынай, даах, дарахый, дарбый, самнаҕай);
                        <br></br>Вьюрок – харыйа чыычааҕа, ыллыыр чыычаах;
                        <br></br>Вьюрок горный – таас чыычааҕа;
                        <br></br>Выпь северная – аҥыр, уу оҕуһа.
                    </p>

                    <h3 ref={scrollToRef4}>Г</h3>
                    <p>
                        <br></br>Гага гребнушка – сыа мурун (сыалаах, туракаан);
                        <br></br>Гага обыкновенная – улахан турукаан, борохуот кус;
                        <br></br>Гага очковая – орто турукаан, дулукуйаан;
                        <br></br>Гага сибирская – кыра турукаан (өбүй үөс, сытыган кус);
                        <br></br>Гагара белоклювая – муора куоҕаһа (ала куоҕас, андылы куоҕас, муус тумус);
                        <br></br>Гагара краснозобая – быытта куоҕас (быыттака, быыттааны, күөл куоҕаһа, кыра куоҕас);
                        <br></br>Гагара чернозобая – даллан куоҕас (даллан куоҕас, кудан куоҕас, өрүс куоҕаһа, хаарылла куоҕас);
                        <br></br>Гаичка буроголовая – чычып-чаап (мас чыыччыыр, чыбыч-чыыхаан);
                        <br></br>Гаичка сероголовая – тииҥ саныйах (сыамсах);
                        <br></br>Гаршнеп – кыра үгүрүө;
                        <br></br>Глухарь – бэс улара, чакыр улара;
                        <br></br>Глухарь каменный – хара улар (көбдө, тиит улара, харадьык);
                        <br></br>Гоголь – орулуос (арылыас, тиэрбэс харах);
                        <br></br>Голубь скалистый – таас өтөнө;
                        <br></br>Горлица большая – өтөн (бөтүөччүн, өтөн кэҕэ, холуук, холуук чыычаах);
                        <br></br>Грач – өрт турааҕа;
                        <br></br>Грязовик – кыра чоруут;
                        <br></br>Гусь белолобый – лыглыйа (лыглык, дылгын, дыллык, кыттаайык лыглы, лыклык, ханалас хаас, ханынай хаас)
                        <br></br>Гусь белый – үрүҥ хаас (маҥан хаас, муора хааһа);
                        <br></br>Гусь-гуменник – хоҥор хаас (бэс хоҥоро, мойун, хомурах хааһа, хомурах хоҥоро, хоҥор);
                        <br></br>Гусь-пискулька – алтан харах (кыра лыглыйа, пыскый, кыыттака, үрүҥ түөс, эриэн түөс).
                    </p>

                    <h3 ref={scrollToRef5}>Д</h3>
                    <p>
                        <br></br>Дикуша – караакы;
                        <br></br>Дрозд-балобровик – ырыа чаччыкы;
                        <br></br>Дрозд Науманна – кугас чаччыкы (бэс чаччыкыта);
                        <br></br>Дрозд рябинник – чаччыгыныар, чаччыкы;
                        <br></br>Дрозд сибирский – хара чаччыкы;
                        <br></br>Дятел малый – үөт тоҥсоҕойо;
                        <br></br>Дятел большой пестрый – бэс тоҥсоҕойо;
                        <br></br>Дятел трехпалый – тиит тоҥсоҕойо (саадьаҕай тоҥсоҕой, үс тарбахтаах, тоҥсоҕой)
                        <br></br>Дятел черный, желна – киргил (киргил кинээс, ойуун көтөрө).
                    </p>

                    <h3 ref={scrollToRef6}>Ж</h3>
                    <p>
                        <br></br>Жаворонок полевой – күөрэгэй (далбарай, күйүгэс, туйаарар, туйаҕас, халлаан чаһыыта);
                        <br></br>Жаворонок рогатый – хаас чыычааҕа, муостаах күөрэгэй;
                        <br></br>Журавль канадский – таба туруйа (омук туруйата, муора туруйата, чукча туруйата);
                        <br></br>Журавль-красавка – таҥара туруйата;
                        <br></br>Журавль серый – туруйа (олоҥ туруйата, өлөҥ туруйата, таба туруйа);
                        <br></br>Журавль черный –  хара туруйа, маҥаас туруйа.
                    </p>

                    <h3 ref={scrollToRef7}>З</h3>
                    <p>
                        <br></br>Зимородок – балыксыт чыычаах (күөх сымаһыт);
                        <br></br>Зуек-галстутник – лопхойуут, омук чөкчөҥөтө;
                        <br></br>Зуек малый – кыра лопхойуут, өрүс барааҕа;
                    </p>

                    <h3 ref={scrollToRef8}>К</h3>
                    <p>
                        <br></br>Казарка черная – хардырҕас хаас, хаарыҥка, хардырҕас, хабаарка, хаһаарка;
                        <br></br>Каменка – таба чыычааҕа;
                        <br></br>Каменушка – таас мородута, Дьааҥы куһа, уораныкы;
                        <br></br>Камнешарка – эриэн лопхойуут;
                        <br></br>Канюк – сарт (сар, сар элиэ);
                        <br></br>Канюк мохноногий, зимняк – үрүҥ сарт;
                        <br></br>Кедровка – оҥоло, оҥоло тураах;
                        <br></br>Клест белокрылый – тиит ымыыта;
                        <br></br>Клест-еловик – харыйа ымыыта;
                        <br></br>Конек горный – таас күөрэгэйэ
                        <br></br>Конек краснозобый – нуудара күөрэгэйэ;
                        <br></br>Конек лесной – мас күөрэгэйэ;
                        <br></br>Конек пятнистый – тиит күөрэгэйэ;
                        <br></br>Конек степной – куһаҕан күөрэгэй;
                        <br></br>Коростель – кииллэни, лахаатта;
                        <br></br>Коршун – элиэ;
                        <br></br>Крачка белокрылая – хара тылбын;
                        <br></br>Крачка полярная – токок, тэкэк;
                        <br></br>Крачка речная – тылбын (балыксыт, атырдьах кутурук, тылбык, тыраҕас кутурук);
                        <br></br>Кроншнеп дальневосточный – дьиэрэҥ;
                        <br></br>Кроншнеп-малютка – куруҥ барааҕа, лыглыкы бараах;
                        <br></br>Кроншнеп средний – хонуу дьиэрэҥэ;
                        <br></br>Крохаль большой – үрүҥ улун, күөл улуна;
                        <br></br>Крохаль длинноносый – хара улун (өрүс улуна, тиистээх, кус, улчаах хасар, чоммойук);
                        <br></br>Крохаль-луток – булчут (билгинэх, мас куйа, биргинэх, сүдьү, чылбый, ычаайы);
                        <br></br>Кряква обыкновенная – көҕөн (даарда, күөх баттах);
                        <br></br>Кряква черная – лахаатта көҕөн (лахааттау лахаада);
                        <br></br>Кукушка – кэҕэ;
                        <br></br>Кукушка глухая – дуду кэҕэ;
                        <br></br>Кукша – кукаакы (искэх сиэччи, кикээки чочоокуй);
                        <br></br>Кулик-воробей – кырбас бараах;
                        <br></br>Кулик-дутыш – дудукаан бараах;
                        <br></br>Курганник мохноногий – улахан сарт;
                        <br></br>Куропатка белая – хабдьы (бэбигирэс, куруппааскы, хабыйакаан, ыалыкы);
                        <br></br>Куропатка тундряная – таас хабдьыта (иирэлии, таас куруппааскыта, хараахы, хаккырыал, хабдьы, хара дьабадьы, харбаккы).
                    </p>

                    <h3 ref={scrollToRef9}>Л</h3>
                    <p>
                        <br></br>Ласточка береговая – уу хараҥаччыта;
                        <br></br>Ласточка городская – дьиэ хараҥаччыта;
                        <br></br>Ласточка деревенская, касатка – өтөх хараҥаччыта;
                        <br></br>Лебедь-кликун – мас кубата (куба, дойдулаах куба, төйүҥү);
                        <br></br>Лебедь малый – быытта куба, муора кубата.
                        <br></br>Лунь болотный – кусчут;
                        <br></br>Лунь полевой – кутуйахсыт;
                        <br></br>Лысуха – ураанай.
                    </p>

                    <h3 ref={scrollToRef10}>М</h3>
                    <p>
                        <br></br>Мородунка – куллуруут (былдьырыыт, кулларыыт, куллургаччы);
                        <br></br>Морянка – ээбиллэ (ээмиллэ, анаарыйар, уораныкы, ээйиллэ, ээмиллэ);
                        <br></br>Мухоловка малая – сахсырҕаһыт чыычаах.
                    </p>

                    <h3 ref={scrollToRef11}>Н</h3>
                    <p>
                        <br></br>Неясыть бородатая – хара хаххан, хаххан;
                        <br></br>Неясыть длиннохвостая –үрүҥ хаххан;
                        <br></br>Нырок красноголовый – күлтэн (күттэн, ала умсаах, күртэм, туой тобо);
                    </p>

                    <h3 ref={scrollToRef12}>О</h3>
                    <p>
                        <br></br>Овсянка белошапочная – ынах чыычааҕа;
                        <br></br>Овсянка дубровник – татыйык, араҕас туос татыйык;
                        <br></br>Овсянка желтобровая – харыйа татыйыга;
                        <br></br>Овсянка-крощка – ыарҕа татыйыга:
                        <br></br>Овсянка полярная – алыы татыйык;
                        <br></br>Овсянка-ремез – өрүөстээх татыйык;
                        <br></br>Овсянка рыжая – кыһыл татыйык;
                        <br></br>Овсянка седоголовая – талах татыйыга;
                        <br></br>Оляпка – умсар чыычаах, харылҕан чыычааҕа;
                        <br></br>Орлан-белохвост – боруллуо (ала тойон, бар кыыл, барылас, барыллыа);
                        <br></br>Осоед хохлатый – көҕүллээх кыырт.
                    </p>

                    <h3 ref={scrollToRef13}>П</h3>
                    <p>
                        <br></br>Пастушок– буҕарҕана, боҕорҕоно;
                        <br></br>Пеликан розовый – куйуур айах, бэликээн;
                        <br></br>Пеночка бурая – көстүбэт ырыаһыт;
                        <br></br>Пеночка-весничка – ырыа чыычаах;
                        <br></br>Пеночка зарничка – сүүтүк чыычаах;
                        <br></br>Пеночка-теньковка – түҥнэри уйалаах;
                        <br></br>Перепел – хонуу бочугураһа;
                        <br></br>Песочник белохвостый – чылыгыныар;
                        <br></br>Песочник большой – улахан иһиирэм;
                        <br></br>Песочник исландский – иһиирэм бараах;
                        <br></br>Песочник-краснозобик – чоруут;
                        <br></br>Песочник-красношейка – куллурҕас бараах, холлурҕас;
                        <br></br>Песочник острохвостый – чырылыаха;
                        <br></br>Песочник-чернозобик – ала түөс бараах;
                        <br></br>Песчанка – кэһиэх чоруут;
                        <br></br>Плавунчик большой – хоҥор чырыт;
                        <br></br>Плавунчик круглоносый – чоҕулган чырыт
                        <br></br>Плавунчик плосконосый – уу чырыба, бочуһуок, чимийиит;
                        <br></br>Поганка рогатая, красношейная – чындайы куоҕас (ачача, ачычаайы, чуораайы);
                        <br></br>Поганка серощекая – ньырдаайы (ньаат, туотаайы, хаһа саал атах);
                        <br></br>Подорожник лапландский – хара туллук, быртакыыс;
                        <br></br>Поморник длиннохвостый – суксуур, тарбай, тэрбэй;
                        <br></br>Поморник короткохвостый – курахал, курахыл;
                        <br></br>Поморник средний – куһаҕан хопто;
                        <br></br>Поползень – кэкэ-бука;
                        <br></br>Пуночка – туллук, үрүҥ туллук;
                        <br></br>Пустельга – битииһит (кугас кырбый, тыалы кытта иирсээччи).
                    </p>

                    <h3 ref={scrollToRef14}>Р</h3>
                    <p>
                        <br></br>Ржанка бурокрылая – хонуу барааҕа;
                        <br></br>Ржанка хрустан – ынах барааҕа (алтан түөс, кэриэх түөс);
                        <br></br>Рябчик – бочугурас (буучугурас, бөчүгүнүөр, бөчүгүрэс, бытыгыныар, бычыгыныар, ирээпчик, өркөйөр).
                    </p>

                    <h3 ref={scrollToRef15}>С</h3>
                    <p>
                        <br></br>Сверчок певчий – өлөҥ чыычааҕа;
                        <br></br>Сверчок пятнистый – чырылас, сиик түһэрэр чыычаах;
                        <br></br>Свиристель – Дьааҥы бөчүгүрэһэ, баттахтаах чыычаах;
                        <br></br>Синехвостка – эһэ чыычааҕа;
                        <br></br>Синьга – лаамы андыта;
                        <br></br>Синьга американская – буор атах анды;
                        <br></br>Скворец – хара чыычаах, кэлии чыычаах;
                        <br></br>Скопа – собоһут (умсан, балыксыт, улахан уйалаах);
                        <br></br>Снегирь – ымыы ( байҕал ымыыта, балаҕан ымыыта);
                        <br></br>Сова белая – хаар эбэ (лэмкээбий, лэҥкэй, лэҥкээлии);
                        <br></br>Сова болотная – түлүрбэх (кыым сиэччи, кыымы ылааччы, уот ылааччы);
                        <br></br>Сова ушастая – кулгаахтаах мэкчиргэ, кулгаахтаах;
                        <br></br>Сова ястребиная – тойон мэкчиргэ, тиит мэкчиргэтэ;
                        <br></br>Сойка – ньокоокуй, ньохооху;
                        <br></br>Сокол-дербник – хардааччы, көтөр кыырда;
                        <br></br>Сокол-кобчик – кырбый (хара кырбый, хардьан);
                        <br></br>Сокол-кречет – харылыыр;
                        <br></br>Сокол-сапсан – кыырт, мохсоҕол;
                        <br></br>Сокол-чеглок – тыытыкы;
                        <br></br>Соловей-красношейка – түүҥҥү чыычаах;
                        <br></br>Соловей-свистун – түүҥҥү эриэн түөстээх;
                        <br></br>Соловей синий – түүҥҥү чыычаах;
                        <br></br>Сорокопут серый – даллан кэрэ;
                        <br></br>Сорокопут сибирский, жулан – хардан чыычаах;
                        <br></br>Стерх – кыталык;
                        <br></br>Стриж белопоясный – таас хараҥаччыта;
                        <br></br>Стриж иглохвостый – мас хараҥаччыта;
                        <br></br>Сыч воробьиный – мэкчиргэ, лэкээрик;
                        <br></br>Сыч мохноногий – үөт мэкчиргэтэ.
                    </p>

                    <h3 ref={scrollToRef16}>Т</h3>
                    <p>
                        <br></br>Тетерев – куртуйах (күртүйэх, токутар, тэтиэрэ);
                        <br></br>Трясогузка белая – сылгы чыычааҕа;
                        <br></br>Трясогузка горная – таас уйалаах сылгы чыычааҕа;
                        <br></br>Трясогузка желтая – араҕас сылгы чыычааҕа;
                        <br></br>Трясогузка желтоголовая – маҥаас сылгы чыычааҕа;
                        <br></br>Тулес – чуускун (чугуйуут, чугумуут, чускуут, чуускут);
                        <br></br>Турпан горбоносый – анды (кокуора анды, күөл андыта, мас анды, ньылтаала, өрүс андыта, хара кус, хохуора мурун);
                        <br></br>Турпан черный, синьга – байҕал андыта (лаамы андыта, мунур андыта, муора андыта, чуубургас, эһиирэм анды);
                        <br></br>Турухтан – эһэ бараах (аҕабыыт бараах, бараах, лөчүөк бараах, мараах, сахсарыыт, сиэллээх бараах, соксоок, соксоо бараах, таба барайх, уу барааҕа);
                    </p>

                    <h3 ref={scrollToRef17}>У</h3>
                    <p>
                        <br></br>Улит большой – тойон чөкчөҥө (лаабыт, лоҥхот, лоокуут, лооҥут, тимир чөкчөҥө);
                        <br></br>Улит пепельный – таас лоокута, чоруут, таас чөкчөҥөтө;
                        <br></br>Улит перевозчик – ойуун чөкчөҥө, уу ойууна;
                        <br></br>Улит-поручейник  - хонуу лоокуута;
                        <br></br>Улит-фифи – чөкчөҥө, чокчоҥо;
                        <br></br>Улит-черныш – күүс чыычаах, чөкчөҥө;
                        <br></br>Улит-щеголь – хара чөкчөҥө;
                        <br></br>Утка-клоктун – мороду (куруоскай, могоос, моҥос мордо, морду, мордургас, саабый чээс);
                        <br></br>Утка-свиязь – тыйаах, кугас бас;
                        <br></br>Утка серая – дьаҕыл уйус;
                        <br></br>Утка-шилохвост – моонньоҕон (кулады, кунньалгы, күөкэгэр, уһуутай, чандама, чөлөкө, чыандалыма);
                        <br></br>Утка-широконоска – халба (лаптаҥа, лыптана, сохсох).
                    </p>

                    <h3 ref={scrollToRef18}>Ф</h3>
                    <p>
                        <br></br>Филин – модьугу (бөҕө атах, бөҕө ис, куобах кыырда, куобахсыт, модьу атах, табыргас).
                    </p>

                    <h3 ref={scrollToRef19}>Ц</h3>
                    <p>
                        <br></br>Цапля серая – кутан (бороҥ кутан, күтэн, мас туруйата, хата кутан, эһир).
                    </p>

                    <h3 ref={scrollToRef20}>Ч</h3>
                    <p>
                        <br></br>Чайка вилохвостая – ачаах кутурук, таах хопто;
                        <br></br>Чайка малая – куччугуй хара баттах (оччугуй хара баттах);
                        <br></br>Чайка обыкновенная – улахан хара баттах, хара бас, хара баттах;
                        <br></br>Чайка полярная, бургомистр – байҕал хоптото (маҕаарылла, маҕатаайы, муора суора, муора хоптото);
                        <br></br>Чайка розовая – чэкэ (кытархай хопто, тээкэй, тээкэк, тээкэп, тээкэт)
                        <br></br>Чайка серебристая – хайаах, хайахсыт;
                        <br></br>Чайка сизая – алыы хоптото (дарбый, мас хоптото, хопто);
                        <br></br>Чайка трехпалая, моевка – үс тарбахтаах хопто, айан хоптото;
                        <br></br>Чекан черноголовый – сахсарыыт;
                        <br></br>Черветь морская – байҕал умсааҕа (муора умсааҕа, хара умсаах);
                        <br></br>Чернеть хохлатая – ханай (көҕүллээх умсаах, көҕүл умсаах, хаар умсааҕа, чаҕылла);
                        <br></br>Чечевица сибирская – тыллаах чыычаах;
                        <br></br>Чечетка – чооруос (хаан мэйии, хаар чаарыаһа, хаар чыычааҕа);
                        <br></br>Чибис – чыыбыс, итирик бараах, көҕүллээх бараах;
                        <br></br>Чирок-свистунок – чөркөөкү (коруоска, үндүкээн, чардырҕас, чаркый, чөркөй, чуркуй, чуркумай, чыакый, чыккымай, чыркаакы, чыркый, чыркымай, тырчымай, чээрдигий);
                        <br></br>Чирик-трескунок – чардырҕас (дулҕа хаачыгырыара, мас чаҥкыныар, мас чаҥкый, ньыккырыар, таас чөркөйө, хаачыгырас, хахырыал, хакырыар, чээрдик, чээрдики).
                    </p>

                    <h3 ref={scrollToRef21}>Щ</h3>
                    <p>
                        <br></br>Щур – тойон ымыы.
                    </p>
                    <h3 ref={scrollToRef22}>Я</h3>
                    <p>
                        <br></br>Ястреб-перепелятник – чыычаах кыырда, чыйчаахсыт;
                        <br></br>Ястреб-тетеревятник – улар кыырда (тииҥ кыырда, тиинньит, үрүҥ кыырт).
                    </p>
                </div>
            </div>
        </motion.div>
    )
}

function Dictionary5() {
    const scrollToRef1 = useRef();
    const scrollToRef2 = useRef();
    const scrollToRef3 = useRef();
    const scrollToRef4 = useRef();
    const scrollToRef5 = useRef();
    const scrollToRef6 = useRef();
    const scrollToRef7 = useRef();
    const scrollToRef8 = useRef();
    const scrollToRef9 = useRef();
    const scrollToRef10 = useRef();
    const scrollToRef11 = useRef();
    const scrollToRef12 = useRef();
    const scrollToRef13 = useRef();
    const scrollToRef14 = useRef();
    const scrollToRef15 = useRef();
    const scrollToRef16 = useRef();
    const scrollToRef17 = useRef();
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }} className="greeting-introduction">
            <div className="container">
                <h1 className='header'>Рыба. Балыктар</h1>
                <div className='letters'>
                    <button className="letter" onClick={() => scrollToRef1.current.scrollIntoView()}>
                        В
                    </button>
                    <button className="letter" onClick={() => scrollToRef2.current.scrollIntoView()}>
                        Г
                    </button>
                    <button className="letter" onClick={() => scrollToRef3.current.scrollIntoView()}>
                        Е
                    </button>
                    <button className="letter" onClick={() => scrollToRef4.current.scrollIntoView()}>
                        К
                    </button>
                    <button className="letter" onClick={() => scrollToRef5.current.scrollIntoView()}>
                        Л
                    </button>
                    <button className="letter" onClick={() => scrollToRef6.current.scrollIntoView()}>
                        М
                    </button>
                    <button className="letter" onClick={() => scrollToRef7.current.scrollIntoView()}>
                        Н
                    </button>
                    <button className="letter" onClick={() => scrollToRef8.current.scrollIntoView()}>
                        О
                    </button>
                    <button className="letter" onClick={() => scrollToRef9.current.scrollIntoView()}>
                        П
                    </button>
                    <button className="letter" onClick={() => scrollToRef10.current.scrollIntoView()}>
                        Р
                    </button>
                    <button className="letter" onClick={() => scrollToRef11.current.scrollIntoView()}>
                        С
                    </button>
                    <button className="letter" onClick={() => scrollToRef12.current.scrollIntoView()}>
                        Т
                    </button>
                    <button className="letter" onClick={() => scrollToRef13.current.scrollIntoView()}>
                        Х
                    </button>
                    <button className="letter" onClick={() => scrollToRef14.current.scrollIntoView()}>
                        Ч
                    </button>
                    <button className="letter" onClick={() => scrollToRef15.current.scrollIntoView()}>
                        Ш
                    </button>
                    <button className="letter" onClick={() => scrollToRef16.current.scrollIntoView()}>
                        Щ
                    </button>
                    <button className="letter" onClick={() => scrollToRef17.current.scrollIntoView()}>
                        Я
                    </button>
                </div>

                {/* <h3>Приветствие. Знакомство / Эҕэрдэлэһии. Билсиһии</h3> */}
                <div className='dictionaryTable'>
                    {/* {dictionary.map((e, i) => {
                        return (
                            <div>
                                <p>{e.sentence}</p>
                                <p>{e.translation}</p>
                            </div>
                        );
                    })
                    } */}

                    <h3 ref={scrollToRef1}>В</h3>
                    <p>
                        <br></br>Валек – сүрү (соруу балык, быыкынай, көньөөк, мөкүркэй, хойоок).
                    </p>
                    <h3 ref={scrollToRef2}>Г</h3>
                    <p>
                        <br></br>Голец – сыбаакка (көлүөс, куупса);
                        <br></br>Голец Черского – кырааска балык, диэрбэн;
                        <br></br>Голец якутский – сыбаакка (сыбаарка, сабаакы, куунса);
                        <br></br>Гольян озерный – мунду (нотоох сулуруо, уу куөгэйэ, сырбайар, сулуруо, хатарба);
                        <br></br>Гольян-пеструха – күөнэх (үрэх мундута, эриэҥкэй);
                        <br></br>Горбуша – кыһыл балык (харбыыска).
                    </p>
                    <h3 ref={scrollToRef3}>Е</h3>
                    <p>
                        <br></br>Елец сибирский – күстэх (быыттыкы күстэх);
                        <br></br>Ерш – таас бас (дьуос, күүччэ, кыыкынай, лааха, лэкэс, мордьоҕотто, таас мэйии).
                    </p>
                    <h3 ref={scrollToRef4}>К</h3>
                    <p>
                        <br></br>Камбала полярная – ньуоска хаата (былахы балык, саппыйа балык, таҥара сиэбит балыга, хаптаҕай болобуок, хамбала);
                        <br></br>Карась якутский – собо (бочоох, бөкөй, бөчөөк, быллараан, быллыгынай, быллырыыска, былдьыгынааска, бырыкынай, бычаах, быччыык, быччыкы, быччыыла, быыччый, бэчээнэй, дьыгынай, дыыдыгый, дьааҥы, дьаҕаһын, дьалтаа, дьаргымыан, дьыраах, дьырыы, дьыылыр, илим собото, илим тэрээгэ, күндэ уола, күн харах);
                        <br></br>Кета – кэтэ (кэтэ балык, кыатаа);
                        <br></br>Колюшка девятииглая – тимир атах;
                        <br></br>Корюшка малоротая – үрүҥ балык.
                    </p>
                    <h3 ref={scrollToRef5}>Л</h3>
                    <p>
                        <br></br>Ленок – быйыт (майгы, соһолоох).
                    </p>
                    <h3 ref={scrollToRef6}>М</h3>
                    <p>
                        <br></br>Минога сибирская – быа балык (быакынай, өссүрү);
                        <br></br>Муксун – бөкчөгөр (муксуун, ньэлискэн, хара атах, чолбоҥо, чөрбөҕөр).
                    </p>
                    <h3 ref={scrollToRef7}>Н</h3>
                    <p>
                        <br></br>Налим – сыалыһар (быллыгынай, балыкы, сыаҕаан, сыалыһар ыамата, ынай, ыный);
                        <br></br>Нельма – туутчах (туут, туут балык, туутунай, кудурааскы, кутурааскы, мулдуукай, чуллуукай, чууччах, чүүччэх, туутчах абаҕата, бэтэрээски).
                    </p>
                    <h3 ref={scrollToRef8}>О</h3>
                    <p>
                        <br></br>Окунь – алыһар (хаахынай, көөксө, кыыкынай, хааҕынай);
                        <br></br>Омуль – уомул;
                        <br></br>Осетр стерлядевидный якутский – хатыыс (кээчэрэ, кэчэ, тана, хачыарка).
                    </p>
                    <h3 ref={scrollToRef9}>П</h3>
                    <p>
                        <br></br>Пелядь – быраҥаатта (бырынаатта, ньээрбэ, өрүкүнэ, ууку, үөкү, чээрбэ);
                        <br></br>Плотва сибирская – кыһыл харах (быаттаҕаччы, кыһыыдай, кыыкынай, ньыча);
                        <br></br>Подкаменщик пестроногий – лахаа (муора баҕата, лахачы);
                        <br></br>Подкаменщик сибирский – баҕа балык (быдьар балык).
                    </p>
                    <h3 ref={scrollToRef10}>Р</h3>
                    <p>
                        <br></br>Ряпушка сибирская – көндүөбэй (көндүбэй, күндүөркэ, сэлдиэй, сэлдэй, сэллээки).
                    </p>
                    <h3 ref={scrollToRef11}>С</h3>
                    <p>
                        <br></br>Сельдь тихоокеанская – сөлүөккэ;
                        <br></br>Сиг-пыжьян – майаҕас (чуллуку, чомоҕор, чомоҕой, чомугур, ньимискиэн, суокур).
                    </p>
                    <h3 ref={scrollToRef12}>Т</h3>
                    <p>
                        <br></br>Таймень –  сыалыһар (сыаҕаан, быллыгынай).
                        <br></br>Тугун – сыа балык ( дьэҥкэ, кылбай, ньоҕор, ньэҥкэ, сырдырҕай).
                    </p>
                    <h3 ref={scrollToRef13}>Х</h3>
                    <p>
                        <br></br>Хариус восточносибирский – дьарҕаа (нырыы, үрүнкэй, үрүҥ өрөҕө).
                    </p>
                    <h3 ref={scrollToRef14}>Ч</h3>
                    <p>
                        <br></br>Чир – муҥур (чыыр, күөл чыыра, өрүс чыыра, болчуо, бөксөтүүн, чолой, дьуухала балыга, куйах балыга, кырыс, оруу, сомондой, устугас, хах балыга, чаймаакы, хаймаакы, бытырыыс).
                        <br></br>Чукучан – чукучаан (болгуо, болуо, тугачаан, тукачаан, чукучаан, чэчигээн).
                    </p>
                    <h3 ref={scrollToRef15}>Ш</h3>
                    <p>
                        <br></br>Шиповка сибирская – тимэх балык.
                    </p>
                    <h3 ref={scrollToRef16}>Щ</h3>
                    <p>
                        <br></br>Щука – сордоҥ (борохой, дьорохой, куйах сордоҥо, кумдьу, күөх айах, кырыс, модьу, оҕус сордоҥ, от чорохойо, сорданчын, сүллүүк, тиистээх, холдьун чорохой, суллуус, сордоҥчоон).
                    </p>
                    <h3 ref={scrollToRef17}>Я</h3>
                    <p>
                        <br></br>Язь – тэҥэли.
                    </p>
                </div>
            </div>
        </motion.div>
    )
}

function Dictionary6() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }} className="greeting-introduction">
            <div className="container">
                <h1 className='header'>Насекомые. Үөн-көйүүр</h1>
                {/* <h3>Приветствие. Знакомство / Эҕэрдэлэһии. Билсиһии</h3> */}
                <div className='dictionaryTable'>
                    {/* {dictionary.map((e, i) => {
                        return (
                            <div>
                                <p>{e.sentence}</p>
                                <p>{e.translation}</p>
                            </div>
                        );
                    })
                    } */}

                    <p>
                        <p>Бабочка – лыах, үрүмэччи;</p>
                        <p>Блоха – былахы;</p>
                        <p>Водолюб – чоху;</p>
                        <p>Вошь – быт;</p>
                        <p>Гусеница бабочки – түүлээх үөн;</p>
                        <p>Жук – хомурдуос;</p>
                        <p>Клещ – дооҕуй;</p>
                        <p>Клоп – кулакы, кылапы;</p>
                        <p>Комар – бырдах;</p>
                        <p>Кузнечик – аһыҥа;</p>
                        <p>Кузнечик зеленый – тооппоор;</p>
                        <p>Личинка бычьевого овода – куйукта;</p>
                        <p>Лошадиный овод – бүгүлэх;</p>
                        <p>Моль – симэхсит;</p>
                        <p>Мошка – оҥоойу;</p>
                        <p>Муравей – кымырдаҕас;</p>
                        <p>Муха – сахсырҕа;</p>
                        <p>Оса – тигээйи;</p>
                        <p>Пауки – ооҕуй;</p>
                        <p>Пиявка – ынах тыла;</p>
                        <p>Пчела – тойон ыҥырыа;</p>
                        <p>Саранча – саранса;</p>
                        <p>Слепень – күлүмэн;</p>
                        <p>Стрекоза – тэмэлдьигэн;</p>
                        <p>Таракан – таракаан;</p>
                        <p>Тля капустная – хаппыыста быта;</p>
                        <p>Шёлкопряд – солко өрөөччүлэр;</p>
                        <p>Шмель – ыҥырыа.</p>
                    </p>
                    <div className='greeting-info'>
                        <p>Использованная литертура:</p>
                        <p>Кулаковский А.Е. Научные труды, Якутск : Якутское книжное издательство, 1979 – 484 с.</p>
                        <p>Соломонов Н. Г. Животный мир Якутии : птицы и млекопитающие.  –  Якутск : Якутское книжное издательство, 1975 – 190 с.</p>
                        <p>Угаров Г.С. Русско-якутский словарь биологических терминов, Екатеринбург  : Уральский рабочий, 1992 – 172.</p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

function Text1() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }} className="greeting-introduction">
            <div className='container'>
                <div>
                    <h1 className='header'>КУОБАХ</h1>
                    <p>
                        — Туох хара накааһай доҕоор!.. Абырҕаллыын, чычып-чааптыын, оннооҕор кутуйахтыын миигин куттууллар. Мин куттамматым бу аан дойдуга туох баарый? Туох да суох! Бары куттууллар! Суох, суох бу кэриэтин өлбүт ордук-ордук! Бараммын, сүргэ балай уубар түһэн өлүөм! Тыыннаах да буолан диэн, — дии-дии, куобах күөл диэки ойуолаан испитэ.
                    </p>
                    <p>
                        Арай күөлгэ чугаһаан иһэн иһиттэҕинэ, эриэн түөстээх баҕа, күөлүн диэки ойуолуу-ойуолуу хаһыытаан эрэрин истибит:
                    </p>
                    <p>
                        —	Оо, айабыын, куобах баҕайы сиэри иһэр. Уубар түһэ охсуум! Куттаннахпын да куттаннахпыан! — Баҕа ууга “чолк” гынан хаалбыт.
                    </p>
                    <p>
                        Куобах хорос гына олоро түспүт.
                    </p>
                    <p>
                        —	Көр эрэ, аан дойдуга мин да биир куттуурдаах эбиппин ээ! Кэбис, өлүөм суох! Төннүөххэ, — диэт, куобах тыа диэки ойуолуу турбут.
                    </p>

                    <div className='greeting-info'>
                        <p>Горнай оройуонун Бэрдьигэстээх орто оскуолатыгар Михаил Данилович Александров диэн учуутал суруйбута, ыам ыйын 24 күнэ, 1941 с.</p>
                        <p>НА СО ССФ архива, ф.5, оп.24/4, дь.бб, л.34.</p>
                        <p>Саха остуоруйулара/ сост. Эргис  Г.У.  Якутск : Бичик, 1996. – 390.</p>
                    </div>
                </div>

                <div>
                    <h1 className='header'>ЗАЯЦ</h1>
                    <p>
                        «Что за наказание, друг мой! Сухие сучки, маленькие птички и даже мыши пугают меня. Ну что есть на свете, чего бы я не боялся? Ничего нет! Все пугают! Нет, нет! Чем так жить, лучше смерть, лучше смерть! Пойду и утоплюсь в пучине быстротекущей воды. Жить не стоит!» — так сказав, заяц поскакал к озеру.                    </p>
                    <p>
                        Приближаясь к озеру, вдруг он услышал крик пестрогрудой лягушки, скачущей к озеру: “Ой, горе мне, страшный заяц скачет, чтобы съесть меня! Поскорее прыгну в воду! Боюсь, о как бою-ю-сь!" — и лягушка бульк в воду.
                    </p>
                    <p>
                        Заяц от неожиданности присел. «Смотрите-ка, на этом свете и я хоть одного могу испугать, ээ! Нет, уж, не буду умирать! Надо вернуться!» —сказав так, заяц поскакал в лес.
                    </p>
                    <p>

                    </p>
                    <p>

                    </p>

                    <div className='greeing-info'>
                        <p>Якутские сказки: 2-ое издание/ сост. Г.У.Эргис. Якутск : Бичик, Якутск.- 1996 -390.</p>
                    </div>
                </div>

                <div>
                    <h1 className='header'>Учим и запоминаем слова из текста / Тыллары үөрэтэбит</h1>
                    <div className='tables'>
                        <p>Чычып-чаап – маленькие птички;</p>
                        <p>Кутуйах – мышь;</p>
                        <p>Куобах – заяц;</p>
                        <p>Баҕа – лягушка.</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

function Text2() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }} className="greeting-introduction">
            <div className='container'>
                <div>
                    <h1 className='header'>Хаһыылаах Хабдьы</h1>
                    <h3>(Эбээн остуоруйата)</h3>

                    <p>Хаһыылаах Хабдьы ойуурга мас мутугар олорбут. Арай үөһэттэн туох эрэ түһэн, төбөтүгэр саайыллыбыт.</p>
                    <p>— Оо, доҕоттоор, халлааммыт сууллан эрэр буолбаат?!– диэн соһуйан аймана түспүт. – Бээ, Хотой Хаһаайыммытыгар баран этэ охсуохха.</p>
                    <p>Баран иһэн, уһун моойдоох Унньуйбут Улары көрсүбүт. Анараата:</p>
                    <p>— Хаһыылаах Хабдьы ханналаатыҥ? – диэн ыйыппыт.</p>
                    <p>—  Хотой Хаһаайыммытыгар халлаан сууллан эрэрин тыллыы баран иһэбин.</p>
                    <p>— Эйигин кытта барсабын дуо?</p>
                    <p>— Барыс даҕаны,  – диэн хап-сабар хардарбыт Хаһыылаах Хабдьы.</p>
                    <p>Дьэ, иккиэн хаһаайыннарыгар халлаан сууллан эрэрин кэпсии баран испиттэр. Утары уойбут-топпут Култайбыт Куһу көрсө түспүттэр.</p>
                    <p>— Хаһыылаах Хабдьы, Унньуйбут Улар, бу ханна баран эрэҕит? – диэн суолларын сураспыт.</p>
                    <p>—Оо, хаһаайыммытыгар халлаан сууллан эрэрин тыллыы баран иһэбит.</p>
                    <p>— Эһигини кытта барсыахха сөп дуо?</p>
                    <p>— Сөп-сөп, - дэспиттэр Хаһыылаах Хабдьы, Унньуйбут Улар.</p>
                    <p>Үһүөн баран иһэн, аара Бороҥ Бочугураһы көрсүбүттэр.</p>
                    <p>–Хаһыылаах Хабдьы, Унньуйбут Улар, Култайбыт Кус, хайа диэки хаамыстыгыт?</p>
                    <p>—Хотой Хаһаайыммытыгар халлаан сууллан эрэрин үҥсэ баран иһэбит.</p>
                    <p>—Мин барсабын дуо? – диэн көрдөспүт Бороҥ Бочугурас.</p>
                    <p>—Барыс-барыс! – диэн ыҥырбыттар.</p>
                    <p>Төрдүөн баран иһэн, албынынан аатырбыт Сымыйаччы Саһылы көрсө түспүттэр.</p>
                    <p>— Хайа, бу хампаанньа ханналаатыгыт? – диэн токкоолоһооччу буолбут.</p>
                    <p>–	Ээ, биһиги Хотой Хаһаайыҥҥа халлаан сууллан эрэрин этэ-сэрэтэ баран иһэбит.</p>
                    <p>— Атастарым букатын да атын суолунан баран иһээхтиир эбиккит! Мин Хотой Хаһаайыҥҥа тиийэр суолу билэбин. Көрдөрүөхпүн сөп.</p>
                    <p>— Сөп, биһигини сирдээн кулу, — дэспиттэр Хаһыылаах Хабдьы, Унньуйбут Улар,  Култайбыт Кус, Бороҥ Бочугурас.</p>
                    <p>Кинилэр Сымыйаччы Саһылы батыһан баран испиттэр. Хааман-хааман, хараҥа хайаҕаска тиийэн кэлбиттэр. Бу Сымыйаччы Саһыл хорооно этэ.</p>
                    <p>Албынчык ааттааҕа эппит:</p>
                    <p>— Дьэ, бу Хотой Хаһаайыҥҥыт уйата. Мин бастакынан киириэм, онтон эһиги утуу-субуу киирээриҥ.</p>
                    <p>Саһыл, сыбдыйан, хороонугар дьылыс гынан хаалбыт. Киирэн саспыт уонна аргыстарын күүппүт. Унньуйбут Улар киирээтин кытта, тутан ылан, хабарҕатын хайа тардан кирбит уонна төбөтүн нөҥүө элээрдэн кэбиспит.</p>
                    <p>Култайбыт Кус киирбитин, тыынын хаайан өлөрбүт. Онтон Бороҥ Бочугураһы тутаары гыммытын, анараата улаханнык да улаханнык сарыылаабыт.</p>
                    <p>Ону Хаһыылаах Хабдьы истэн, туох эрэ куһаҕан буолбутун өйдөөн, атахха биллэрбит. Соннук Хотой Хаһаайыныгар халлаан сууллан эрэрин эппэккэ хаалбыт.</p>

                    <div className='greeting-info'>
                        <p>А.Иевлева көҥүл тылбааһа.</p>
                    </div>
                </div>

                <div>
                    <h1 className='header'>КУРОПАТОЧКА-КРИКУНЬЯ</h1>
                    <h3>(Эвенская сказка)</h3>
                    <p>Куропаточка-крикунья сидела на ветке дерева в лесу. Вдруг ей на голову что-то упало.</p>
                    <p>— О люди! Небо наше валится! — закричала Куропаточка-крикунья. Пойду доложу хозяину-орлу, что небо падает.</p>
                    <p>Шла-шла она и встретила Глухаря длинношеего. Глухарь-длинная шея говорит:</p>
                    <p>— Куропаточка-крикунья, куда ты идешь?</p>
                    <p>— О, я иду доложить хозяину, что небо валится? — говорит Куропаточка-крикунья.</p>
                    <p>— Можно мне идти с тобой? —спрашивает Глухарь-длинная шея.</p>
                    <p>—Ладно, иди! — отвечает Куропаточка-крикунья. И вот Куропаточка-крикунья и Глухарь-длинная шея отправились вдвоем доложить хозяину-орлу, что небо валится.</p>
                    <p>Шли-шли они, и повстречалась им Утка-толстуха.</p>
                    <p>— Куропаточка-крикунья, Глухарь-длинная шея, куда вы идете? — спрашивает Утка-толстуха.</p>
                    <p>— О, мы идем доложить хозяину, что небо валится! — сказали Куропаточка-крикунья, и Глухарь-длинная шея.</p>
                    <p>— Можно мне идти с вами? - спрашивает Утка-толстуха.</p>
                    <p>— Конечно, можно!— отвечают Куропаточка-крикунья и Глухарь-длинная шея.</p>
                    <p>И вот Куропаточка-крикунья, Глухарь-длинная шея и Утка-толстуха отправились все вместе доложить хозяину, что небо валится. Шли-шли они, и повстречался им Рябчик-серяк.</p>
                    <p>— Куропаточка-крикунья, Глухарь-длинная шея, Утка-толстуха, куда вы идете? — спросил Рябчик-серяк. — О, мы идем доложить хозяину, что небо валится! — сказали Куропаточка-крикунья, Глухарь-длинная шея и Утка-толстуха.</p>
                    <p>— Можно мне идти с вами? — спросил Рябчик-серяк.</p>
                    <p>— Конечно, можно! - ответили Куропаточка-крикунья, Глухарь-длинная шея и Утка-толстуха.</p>
                    <p>И пошли они вчетвером доложить хозяину, что небо валится. Шли-шли они, и повстречалась им Лисичка-обманщица.</p>
                    <p>— Куда вы идете? – спросила Лисичка-обманщица.</p>
                    <p>— Мы идем доложить хозяину, что небо валится.</p>
                    <p>— Да ведь вы не той дорогой идете! Я знаю настоящую дорогу; если хотите, я вам ее покажу!</p>
                    <p>— Хорошо, покажи, какая же дорога ведет к хозяину, —сказали Куропаточка-крикунья, Глухарь-длинная шея. Утка-толстуха и Рябчик-серяк.</p>
                    <p>И все они отправились следом за Лисичкой-обманщицей. Шли-шли они и пришли к темной дыре. Это была нора лисички. Лисичка-обманщица сказала:</p>
                    <p>— Вот мы и пришли к дому хозяина. Я войду в дом первая, а вы не отставайте и входите следом за мной.</p>
                    <p>Лисичка вошла в свою нору, притаилась и стала ждать. Следом за ней пошел Глухарь-длинная шея. Лисичка-обманщица схватила его, перегрызла ему горло и перекинула через свою голову.</p>
                    <p>Затем после глухаря вошла Утка-толстуха. Лиса схватила ее и задушила. Вслед за уткой вошел в нору Рябчик-серяк. Когда лиса набросилась на него, он громко-громко закричал.</p>
                    <p>Куропаточка-крикунья услышала крик Рябчика-серяка и что есть силы побежала к себе домой.</p>
                    <p>Так и не доложила она орлу о том, что небо валится.</p>

                    <div className='greeting-info'>
                        <p>Источник: http://mirckazok.ru</p>
                    </div>
                </div>

                <div>
                    <h1 className='header'>Учим и запоминаем слова из текста / Тыллары үөрэтэбит</h1>
                    <div className='tables'>
                        <p>Куропатка – хабдьы;</p>
                        <p>Орел – хотой;</p>
                        <p>Глухарь – улар;</p>
                        <p>Утка – кус;</p>
                        <p>Рябчик – бочугурас;</p>
                        <p>Лиса – саһыл.</p>
                    </div>
                </div>
            </div>
        </motion.div>
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

    const quizPics = [
        imageQuiz1,
        imageQuiz2,
        imageQuiz3,
        imageQuiz4,
        imageQuiz5,
        imageQuiz6,
        imageQuiz7,
        imageQuiz8,
        imageQuiz9,
        imageQuiz10
    ]

    //pass to quiz
    const [stateNavigate, setStateNavigate] = useState('none');

    useEffect(() => {
        if (stateNavigate == 'next') setCurrentSubject(0);
    }, [stateNavigate])

    return (
        <PageContext.Provider value={{ currentPage, setCurrentPage }}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }} className="">
                {/* <h1 className='header'>ТЕСТ НА СЛОВАРНЫЙ ЗАПАС ПО ТЕМЕ “Животные”</h1> */}
                {/* <h1 className='header'>Хамсыыр-харамай ааттарын төһө өйдөөбүккүн бэрэбиэркэлиир тургутук</h1> */}
                {currentPage === 0 &&
                    <Quiz questions={quizAnimals1.questions} quizTitle={'ТЕСТ НА СЛОВАРНЫЙ ЗАПАС ПО ТЕМЕ “Животные”'} quizPics={quizPics} quizCustomDescription={'Выполните тест. Из трех ответов выберите один правильный.'} stateNavigate={setStateNavigate} />
                }

            </motion.div>
        </PageContext.Provider>
    )
}

export default Animals