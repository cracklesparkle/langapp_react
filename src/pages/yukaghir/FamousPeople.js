import React, {useContext, useState, useEffect} from 'react';

import {motion} from 'framer-motion';
import { ViewContext } from '../../ViewContext';
import Button from '../../components/Button';

import imgCulture1 from '../../languages/yukaghir/cultureFood/image1.jpg';
import imgCulture2 from '../../languages/yukaghir/cultureFood/image2.jpg';
import imgCulture3 from '../../languages/yukaghir/cultureFood/image3.jpg';
import imgCulture4 from '../../languages/yukaghir/cultureFood/image4.jpg';

import firstImg1 from '../../languages/yukaghir/famous/first/image1.png';
import firstImg2 from '../../languages/yukaghir/famous/first/image2.jpeg';
import firstImg3 from '../../languages/yukaghir/famous/first/image3.jpeg';
import firstImg4 from '../../languages/yukaghir/famous/first/image4.jpeg';
import firstImg5 from '../../languages/yukaghir/famous/first/image5.jpeg';
import firstImg6 from '../../languages/yukaghir/famous/first/image6.jpeg';
import firstImg7 from '../../languages/yukaghir/famous/first/image7.jpeg';
import firstImg8 from '../../languages/yukaghir/famous/first/image8.jpeg';
import firstImg9 from '../../languages/yukaghir/famous/first/image9.jpeg';
import firstImg10 from '../../languages/yukaghir/famous/first/image10.jpeg';
import firstImg11 from '../../languages/yukaghir/famous/first/image11.jpeg';
import firstImg12 from '../../languages/yukaghir/famous/first/image12.jpeg';
import firstImg13 from '../../languages/yukaghir/famous/first/image13.jpeg';
import firstImg14 from '../../languages/yukaghir/famous/first/image14.jpeg';

import secondImg1 from '../../languages/yukaghir/famous/second/image1.jpg';
import secondImg2 from '../../languages/yukaghir/famous/second/image2.jpg';

import thirdImg1 from '../../languages/yukaghir/famous/third/image1.jpeg';
import thirdImg2 from '../../languages/yukaghir/famous/third/image2.jpeg';
import thirdImg3 from '../../languages/yukaghir/famous/third/image3.jpeg';
import thirdImg4 from '../../languages/yukaghir/famous/third/image4.jpeg';
import thirdImg5 from '../../languages/yukaghir/famous/third/image5.jpeg';
import thirdImg6 from '../../languages/yukaghir/famous/third/image6.jpeg';
import thirdImg7 from '../../languages/yukaghir/famous/third/image7.jpeg';
import thirdImg8 from '../../languages/yukaghir/famous/third/image8.jpeg';
import thirdImg9 from '../../languages/yukaghir/famous/third/image9.jpeg';

import { quizData10 } from '../../quizData';
import Quiz from '../../Quiz';

function FamousPeople() {
    const {setView} = useContext(ViewContext);

    const [page, setPage] = useState(0);

    const handleClick = event =>{
        if(page == 0){
            setPage(1)
            
        }
        if(page == 1){
            setPage(2)
        }
        if(page == 2){
            //setView('subjectSelect');
            window.scrollTo(0, 0);
            setPage(3)
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
        if(page == 2){
            setPage(1)
        }

        window.scrollTo(0, 0);
    };

    //pass to quiz
    const[state, setState]=useState(false);

    useEffect(() => {
        if(page == 3){
            setPage(2)
            setState(false)
        }
        
    },[state])

  return (
    <motion.div className='famousPeoplePage' initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 1}}>
        <ViewContext.Provider value={{setView}}>
        
        {page != 3 && <div className="container">
                        {page == 0 && <First/>}
                        {page == 1 && <Second/>}
                        {page == 2 && <Third/>}
        </div>}
        {page == 3 && <Quiz questions={quizData10.questions} quizTitle='Юкагирские писатели' stateChanger={setState}/>}
        {page != 3 && <div className="bottomNavbar">
            {/* <button className='buttonLearn' onClick={handleClick}>Далее</button> */}
            <Button text='Назад' handleClick={handleBack}/>
            <Button text={page == 2 ? 'Перейти к тесту' : 'Далее'} handleClick={handleClick}/>
        </div>}
        </ViewContext.Provider>

    </motion.div>
  )
}

function First(){
    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 1}} className='person'>
            <div className='page'>
                <div className='aside'>
                    <div>
                        <h1>Семен Николаевич Курилов</h1>
                        <h2>юкагирский писатель</h2>
                        <h3>(09.09.1935-06.04.1980)</h3>
                    </div>
                    <div className='image'>
                        <img src={firstImg2}></img>
                    </div>
                </div>
            </div>

            <div className='page'>
                <div className='aside'>
                     <div className='image'>
                        <img src={firstImg3}></img>
                    </div>
                    <div>
                        <p>
                            Юкагирский писатель, публицист. 
                            <br></br>Родился 9 сентября в 1935 году в Нижнеколымском районе в семье оленевода.
                            <br></br>Лауреат Государственной премии PC (Я) имени П.А. Ойунского. 
                            <br></br>Член СП СССР с 1969 г. 
                            <br></br>Владел русским, якутским, эвенским и чукотским языками.
                        </p>
                    </div>
                    
                </div>
            </div>

            <div className='page'>
                <div className='aside'>
                    <div className='image'>
                        <img src={firstImg4}></img>
                    </div>
                    <div>
                        <p>
                            Работал пастухом, оленеводом, киномехаником, секретарем сельского совета, корреспондентом газет.
                            <br></br>Известность Семёну Курилову, как писателю, принес роман «Ханидо и Халерха».
                        </p>
                    </div>
                </div>
            </div>

            <div className='page'>
                <div className='asideVert'>
                    <div className='image'>
                        <img src={firstImg5}></img>
                    </div>
                    <div>
                        <p>
                        Родители Семена Курилова,
Анна Васильевна и Николай Николаевич Куриловы – знатоки культуры и языка родного народа. Они были источником народной мудрости: знали сказки, предания, истории , легенды. 
                        </p>
                    </div>
                </div>
            </div>

            <div className='page'>
            <div className='asideVert'>
                    <div className='image'>
                        <img src={firstImg6}></img>
                    </div>
                    <div>
                        <p>
                        Братья Гаврил Николаевич Курилов – Улуро Адо и Николай Николаевич Курилов, сестра Дария Николаевна Курилова
                        </p>
                    </div>
                </div>
            </div>

            <div className='page'>
            <div className='asideVert'>
                    <div className='image'>
                        <img src={firstImg7}></img>
                    </div>
                    <div>
                        <p>Семен Курилов с дочерьми Оксаной, Ярхаданой, Чэнди
                        </p>
                    </div>
                </div>
            </div>

            <div className='page'>
                <div className='asideVert'>
                    <div className='asideImg'>
                        <div className='image'>
                            <img src={firstImg8}></img>
                        </div>
                        <div className='image'>
                            <img src={firstImg9}></img>
                        </div>
                        <div className='image'>
                            <img src={firstImg10}></img>
                        </div>
                    </div>
                    <div>
                        <p>
                            «Произведения Семена Николаевича Курилова имеют огромное значение уже только тем, что он ставил вопрос о счастье народа, словно предвидел, что начинает большой разговор. Ему правомерно приписывается роль того предвестника, который первым привлек внимание общественности, ученых, читателей к его народу и его проблемам.»
                            <br></br><span>В.Окорокова</span>
                        </p>
                    </div>
                    
                </div>
            </div>

            <div className='page'>
            <div className='aside'>
                    <div className='image'>
                        <img src={firstImg11}></img>
                    </div>
                    <div>
                        <p>
                        В 1969 году вышел его роман «Ханидо и Халерха». Это крупное высокохудожественное произведение о жизни, быте и нравах северных народностей.
                        </p>
                    </div>
                </div>
            </div>

            <div className='page'>
                <div className='asideVert'>
                    <div>
                        <p>
                        Его первое художественное произведение – рассказ «Увидимся в тундре», вышел в сборнике произведений молодых писателей-северян «От Москвы до тайги одна кочевка» в 1961 г. 
                        </p>
                    </div>
                    <div>
                        <p>
                         В 1969 году появилась книга юкагирского романа – «Ханидо и Халерха», которая принесла известность Семену Курилову. 
                        </p>
                    </div>
                    <div>
                        <p>
                        Вторая книга «Новые люди» вышла в свет в 1975 году. 
                        </p>
                    </div>
                    <div>
                        <p>
                        В 1979 году вышел сборник новелл и рассказов «Чаундаур», в котором он выступил великолепным писателем лирического настроя. 
                        </p>
                    </div>
                </div>
            </div>

            <div className='page'>
                <div className='aside'>
                    <div className='image'>
                        <img src={firstImg12}></img>
                    </div>
                    <p>
                    «Как художник слова Семен Курилов создает незабываемые национальные образы. Особое отношение писателя к образу костра можно объяснить тем, что тот имел огромное значение в жизни северянина, был источником тепла, света, семейным очагом. "Костер" означал и продолжение жизни человека, и большую дружбу. И главное для писателя - дело, сотворенное им в жизни. Он уйдет из жизни, а костер будет гореть, и греть людей»
<br></br><br></br><span>В.Б. Окорокова, д.ф.н.</span>
<br></br><span>Рис. Николая Курилова</span>
                    </p>
                </div>
            </div>

            <div className='page'>
                <div className='aside'>
                    <div className='image'>
                        <img src={firstImg13}></img>
                    </div>
                    <div>
                        <p>
                        «Так мало прожил на этой земле Семен Курилов... 
                        Но он сумел сделать так много, что его имя навсегда вписалось в историю, интерес к его творчеству все время будет возрастать, и у костра Великого юкагира всегда будет много народу»
В.Б. Окорокова, д.ф.н.
                        </p>
                    </div>
                    
                </div>
            </div>

            <div className='page'>
                <div className='aside'>
                    <div>
                        <p>
                            Мит акаа Сэмиэн
                            <br></br>Өнидьэткэ йалҕилнаа,
                            <br></br>Альҕаньэй мит абучиэ.
                            <br></br>Тэт анҥийэ йахтэньэҥ
                            <br></br>Йэдээйльэнь саримэдиэ.
                            <br></br>Таҥ хомдэмэ тэн тэньи,
                            <br></br>Мэ йуодиирэй уокааниэ:
                            <br></br>Wиэн омопэҕэ тэтул
                            <br></br>Мэ мөрдьиим, абучиэ!
                            <br></br>Йаwнэй тидаальэ wадул
                            <br></br>Нуҥнии ҥолдэҥ лукулҕа,
                            <br></br>Мэ хуодиик тигин тудэл,
                            <br></br>Йэдээйльэнь туҥ эдьилҕа:
                            <br></br>Wадул ҥолдэҥ саҕанэй – 
                            <br></br>Хаалитнэҥ чаҕадьэй!
                            <br></br>Wадул ҥолдэҥ мэ кэwэч –
                            <br></br>Чии чуҥдэҕэ мэ поньаай!
                            <br></br>Акаа Сэмиэн киидьэги
                            <br></br>Нуҥнии ҥолдэҥ пэнгээйлҥинь
                            <br></br>Мит сугудьэҕэ эдьий –
                            <br></br>Wадун чии – курильииҥик!
                            <br></br><span>Н. Курилов</span>
                        </p>
                    </div>
                    <div className='image'>
                        <img src={firstImg14}></img>
                    </div>
                </div>
            </div>
        </motion.div>
      )
}

function Second(){
    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 1}} className='person'>
            <div className='page'>
                <div className='aside'>
                    <div>
                        <h1>Гаврил Николаевич Курилов</h1>
                        <h2>Улуро Адо</h2>
                    </div>
                    <div className='image'>
                        <img src={secondImg2}></img>
                    </div>
                </div>
            </div>

            <div className='page'>
                <div className='aside'>
                    <div>
                        <p>
                            Родной язык!
                            <br></br>Ты – как птичка-амулет, 
                            <br></br>что вешают у нас над колыбелью.
                            <br></br>Ты – наших предков песенный привет,
                            <br></br>Ты для души – и радость, и веселье…
                            <br></br><span>Улуро Адо</span>
                        </p>
                    </div>
                    
                </div>
            </div>

            <div className='page'>
                <div className='aside'>
                    <div>
                        <p>
                        Юкагирский поэт, писатель, прозаик, учёный-лингвист и этнограф. Псевдоним Улуро Адо переводится с юкагирского языка как «Сын Олёры».
                        <br></br>Гаврил Николаевич Курилов родился 30 апреля 1938 года в Олеринской тундре Нижнеколымского улуса Якутской АССР. Окончил Ленинградский педагогический институт им.Герцена (1962), аспирантуру Ленинградского института языкознания. Член Союза писателей СССР.
                        </p>
                    </div>
                </div>
            </div>

            <div className='page'>
                <div className='aside'>
                    <div>
                        <p>
                        Защитил диссертацию «Сложные имена существительные в юкагирском языке», получил степень доктора филологических наук, профессор.
                        <br></br>Первые стихи написал в 1961 году, начал издаваться с 1962 года. Выпустил около 30-ти книг на юкагирском, русском, якутском, эстонском, французском  языках, в которых воспевается родная тундра, отражается боль и тревога за судьбу древнего юкагирского народа.
                        </p>
                    </div>
                </div>
            </div>

            <div className='page'>
            <div className='aside'>
                    <div>
                        <p>
                        Он участвовал в трех всесоюзных семинарах писателей. Участвовал на пятом Всесоюзном совещании молодых писателей Советского Союза. Он член Союза писателей СССР с 1976 г. Заведовал на общественных началах отделом северной литературы при Союзе писателей Якутии. Его пьеса «Мой друг Чага» несколько раз ставилась в детском кукольном театре г. Хабаровска, а по либретто Курилова в Театре оперы и балета балетмейстером М. Сайдыкуловой в Якутске был поставлен балет «Амо и его друзья» на музыку В. Каца. 
                        </p>
                    </div>
                </div>
            </div>

            <div className='page'>
            <div className='aside'>
                    <div>
                        <p>Впервые благодаря Улуро Адо стала звучать юкагирская речь на республиканском радио.  В 60-х гг. XX в. начал вести передачи на юкагирском языке и давать уроки родного языка по якутскому радио. Вместе со своими коллегами, сотрудниками сектора Северной филологии, Анной Даниловой и Полиной Багаевой с 1968 года Гаврил Курилов вел программу «Долчили». Потом была возрождена всем известная сегодня радиостанция «Геван», где он продолжил свою работу по сохранению и популяризации родного языка. Перевел «Евангелие от Луки» на юкагирский язык, переводил стихи А. Пушкина, М. Лермонтова, Т. Шевченко и др.
                        </p>
                    </div>
                </div>
            </div>

            <div className='page'>
                <div className='aside'>
                    <div>
                        <p>
                        В свое время вместе с Семеном Гороховым создал Совет старейшин юкагиров, почти 10 лет был его председателем. Организовывал созывы первых съездов юкагирского народа. Принимал активное участие в создании юкагирских общин «Чайла» и «Тэки Одулок». Благодаря его деятельности в 1992 г. села Андрюшкино и Нелемное получили статус национальных сельских советов. После ликвидации советов Гаврил Николаевич выдвинул идею создания Суктула – формы национального самоуправления юкагиров. Только благодаря упорной деятельности Улуро Адо, эта идея, преодолев многочисленные препятствия, воплотилась в Закон Республики Саха (Якутия) «О Суктуле юкагирского народа», реализация которого началась с 2008 г. Сегодня Суктулы созданы и работают в п. Андрюшкино и с. Нелемное. В настоящее время Гаврил Николаевич – Почетный председатель Совета старейшин юкагирского народа.
                        </p>
                    </div>
                    
                </div>
            </div>

            <div className='page'>
            <div className='aside'>
                    <div>
                        <p>
                        Список произведений:
                        <br></br>1. Сборник стихов и рассказов «Юкагирские костры»
                        <br></br>2. Первое издание на юкагирском языке «Юкагирские костры. Стихи и рассказы»
                        <br></br>3. Рассказы Юко
                        <br></br>4. Растопленные снега
                        <br></br>5. Пока дремлют олени
                        <br></br>6. Наш друг Чага. Пьеса для театров кукол в 2-х д.
                        <br></br>7. Сборник стихов «Милая Лабунмэдэну». 
                        <br></br>8. Весть из тундры: стихи. 
                        <br></br>9. Поэма-монолог «Гул полярного сияния» (Гул полярного сияния: поэма. На юкагирском и русском языках. 
                        <br></br>10. Поэма «Идилвей».
                        <br></br>11. Поэма «Нунни».
                        <br></br>12. IV том серии «Памятники фольклора народов Севера и Дальнего Востока» под названием «Фольклор юкагиров»
                        <br></br>13. Автор либретто к юкагирскому балету «Амо и его друзья» Марии Сайдыкуловой и др.
                        </p>
                    </div>
                </div>
            </div>

            <div className='page'>
                <div className='aside'>
                    <div>
                        <p>
                            Список научных работ
                            <br></br>1. «Сложные имена существительные в юкагирском языке». — Л., Наука, 1977. — 120 стр. (то же: дисс. к. филол. н. — Л., 1969).
                            <br></br>2. «Правила орфографии в юкагирском языке» (Якутск, 1987).
                            <br></br>3. «Именное аффиксальное образование имен существительных» (Якутск, 1980).
                            <br></br>4. «Юкагирско-русский словарь» (Якутск, 1990).
                            <br></br>5. Академический «Юкагирско-русский словарь» (Новосибирск: Наука, 2003).
                            <br></br>6. Лексикология современного юкагирского языка: Развитие лексики и роль якутского языка в заимствованиях. Дисс. … д. филол. н. — Якутск, 2000.
                            <br></br>7. «Лексикология современного юкагирского языка» (Новосибирск: Наука, 2003. — 284 стр.).
                            <br></br>8. Учебник для старших классов и ВУЗов «Современный юкагирский язык» (2007) и др.
                        </p>
                    </div>
                </div>
            </div>

            <div className='page'>
                <div className='aside'>
                    <div>
                    <p>
                        Заслуженный работник культуры ЯАССР. 
                        <br></br>Заслуженный деятель науки Республики Саха.
                        <br></br>Академик Академии духовности Республики Саха. 
                        <br></br>Лауреат премии им. Тэкки Одулока.
                        <br></br>Награжден медалью академика Н.В. Черского «За выдающийся вклад в науку», медалью «За полезные обществу научные труды», золотым знаком г. Якутска.
                    </p>
                    </div>
                </div>
            </div>

            <div className='page'>
                <div className='aside'>
                    <div>
                        <p className='pcentered'>
                            Есть мнение, мол, если б не щенок-заступник
                            <br></br>Исчез бы юкагир как этнос от тоски,
                            <br></br>Язык родной забыв от лености преступной,
                            <br></br>Дух предков потеряв в момент критический.
                            <br></br>Не знаю, но скажу, народу помогаю
                            <br></br>Не от внезапного желания в душе,
                            <br></br>Желание сие давно уж стало главным
                            <br></br>В борьбе в защиту жизни близких мне людей.
                            <br></br>Вот так оплачиваю как бы тот
                            <br></br>Ничем невосполнимый свой долг святой.
                            <br></br><br></br><span>Улуро Адо</span>
                        </p>
                    </div>
                    
                </div>
            </div>
        </motion.div>
      )
}

function Third(){
    return (
        <motion.div  initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 1}} className='person' >
            <div className='page'>
                <div className='aside'>
                    <div>
                        <h1>Николай Николаевич Курилов</h1>
                        <h2>юкагирский писатель</h2>
                        <h3>(09.09.1935-06.04.1980)</h3>
                    </div>
                    <div className='image'>
                        <img src={thirdImg1}></img>
                    </div>
                </div>
            </div>

            <div className='page'>
                <div className='aside'>
                     <div className='image'>
                        <img src={thirdImg2}></img>
                    </div>
                    <div>
                        <p>
                            Цветы и травы тундры неприметны
                            <br></br>И красотой своею не слепят.
                            <br></br>Родная тундра, может быть, за это,
                            <br></br>За эту скромность я люблю тебя.
                            <br></br>Но я –то знаю, как могучие корни
                            <br></br>Цветов и трав уходят вглубь земли.
                            <br></br>Родная тундра, нет тебя просторней,
                            <br></br>Так тосковал, и думал не однажды,
                            <br></br>Что так бы мне в родной народ врасти,
                            <br></br>Как эти травы и цветы… И каждой,
                            <br></br>Пусть и скромной, песней в душах прорасти»
                            <br></br><span>Рис. Н. Курилова</span>
                        </p>
                    </div>
                    
                </div>
            </div>

            <div className='page'>
                <div className='aside'>
                    <div className='image'>
                        <img src={thirdImg3}></img>
                    </div>
                    <div>
                        <p>
                        Николай Николаевич Курилов – художник, писатель, поэт, драматург, журналист, общественный деятель. Представитель знаменитой семьи Куриловых. Николай – младший из трех братьев Куриловых, принесших юкагирской литературе мировую известность. Родился 11 июня 1949 года в селе Андрюшкино Нижнеколымского района.
                        </p>
                    </div>
                </div>
            </div>

            <div className='page'>
                <div className='asideVert'>
                    <div className='image'>
                        <img src={thirdImg5}></img>
                    </div>
                    <div>
                        <p>
                        Николай (посередине) с братом Семёном и сестрой Дарьей.
                        </p>
                    </div>
                </div>
            </div>

            <div className='page'>
                <div className='asideVert'>
                    <div>
                        <p>
                        Учился в Красноярском художественном училище им. В.И. Сурикова, где на его творческое становление большое влияние оказал О.Ю. Яхнин. После учебы вернулся в родной район и работал учителем черчения и эстетики, художником-оформителем в поселке Черский и фотокорреспондентом газеты «Колымская правда». С 1976 года принимает участие в региональных и всесоюзных выставках, работы выполнял в разных техниках – офорт, акварель, литография, графика, аппликация. Член Союза художников СССР с 1982 года.  Его работы экспонировались на республиканских, всероссийских и международных выставках. В 1989 году в г. Якутске состоялась первая персональная выставка. Начал печататься с 1975 г. В 1982 г. вышла его первая книга стихов «Туундарам сирин симэҕэ” (“Цветы тундры”). С 1988 г. – член Союза писателей СССР. Его литературное творчество разносторонне – он пишет на юкагирском, якутском, русском языках в разных жанрах – известны его рассказы, стихи, притчи, поэмы, пьесы, а также научная фантастика, которую пишет под псевдонимом Окат Бэй.
                        </p>
                    </div>
                </div>
            </div>

            <div className='page'>
            <div className='asideVert'>
                    <div className='image'>
                        <img src={firstImg7}></img>
                    </div>
                    <div>
                        <p>В начале 1990-х годов стал выпускать ежемесячную газету-листовку “Чайлэдуол” на юкагирском языке, который стал началом его пути в журналистике. В 1994 году провел путешествие по местностям США, заселенными индейцами, изучая их искусство, свои впечатления от которого опубликовал в виде путевых очерков. С 1997 года – редактор радиостанции “Геван” на языках народов Севера. Именно его голос звучит над бескрайними просторами тундры и тайги, донося новости на родном языке до оленеводов, охотников, рыбаков. Лауреат профессиональных конкурсов журналистов. Член Союза журналистов России.
                        </p>
                    </div>
                </div>
            </div>

            <div className='page'>
                <div className='asideVert'>
                    <div>
                        <p>
                        Николай Курилов – автор учебных пособий на юкагирском языке. Работал над иллюстрированием первого юкагирского букваря, который вышел в 1987 г. Автор Веселого букваря, учебников для чтения на юкагирском языке для начальных классов.
                        </p>
                    </div>
                    <div className='asideImg'>
                        <div className='image'>
                            <img src={thirdImg6}></img>
                        </div>
                        <div className='image'>
                            <img src={thirdImg7}></img>
                        </div>
                        <div className='image'>
                            <img src={thirdImg8}></img>
                        </div>
                    </div>

                    
                </div>
            </div>

            <div className='page'>
            <div className='aside'>
                    <div>
                        <p>
                            Библиография Николая Курилова:
                            <br></br>1. Туундарам сирин симэҕэ
                            <br></br>2. Туундараҕа олоробун
                            <br></br>3. Мэт вадул моҥо. Мин малахаайым – 1988 г.
                            <br></br>4. Помди
                            <br></br>5. Убайым “кулгааҕа”
                            <br></br>6. Туундараҕа ыҥырабын
                            <br></br>7. Каникулы в тундре: повесть
                            <br></br>8. Фантастические рассказы
                            <br></br>9. Морошка и солнце, стихи, 1994
                            <br></br>10. Почему олень рассмеялся: сказки для детей
                            <br></br>11. Хай: Путевые заметки
                            <br></br>12. Юкагиры: нераскрытая загадка человечества (Размышления юкагира)
                            <br></br>13. Чуҥнубэ кинигэ – книга для чтения для 2-го класса
                            <br></br>14. Чэнчэ букварь, 1991 г.
                            <br></br>15. Юкагирская топонимика Нижнеколымского улуса РС(Якутия), 1999
                            <br></br>16. Лексика спортивных игр юкагиров тундры, 1999
                            <br></br>17. Ньоронпуриэпэ-пуойэпиэ. Морошечки, 2007
                            <br></br>18. Йахтэридьаапэ, 2009 и др.
                        </p>
                    </div>
                </div>
            </div>

            <div className='page'>
                <div className='aside'>
                    <div>
                        <p>
                            «Юкагирский язык мой,
                            <br></br>Какой же ты сильный и древний!
                            <br></br>Не смогли погрести тебя
                            <br></br>Тысячелетий пласты:
                            <br></br>Прорастали слова твои,
                            <br></br>Словно большие деревья,
                            <br></br>Из-под стонов ушедших веков,
                            <br></br>Из глухой мерзлоты…
                            <br></br>Юкагирский язык мой,
                            <br></br>Какой же ты древний и гордый.
                            <br></br>Мы не знаем теперь,
                            <br></br>Что такое голодные дни…
                            <br></br>Но хотелось бы мне, 
                            <br></br>Чтоб и внуки гордились тобой,
                            <br></br>И свой мир красоты
                            <br></br>Сотворили твоей красотой…»
                        </p>
                    </div>
                    <div>
                        <p>
                            Мэт wадун аруу
                            <br></br>Лугуйэ wадун мэт аруу,
                            <br></br>Чуольэ курийэпэ аруу.
                            <br></br>Иитнэдьиэ моойҥаа, wадулпэ,
                            <br></br>Титтэ wанарҕэ, йэулугэп...
                            <br></br>Тэт аруун мольҕал титтэҕэ
                            <br></br>Аҕарэ wиэл дитэ бани.
                            <br></br>Тэт аруун чадьуу титтэҕэ – 
                            <br></br>Йахтэн чадьуу дитэ бани.
                            <br></br>Тидаальэ эдьилҕэ wадул,
                            <br></br>Йуодьэҕэ, тэнэбунулҕа,
                            <br></br>Эдьил моннумул чаайлэҕэ
                            <br></br>Тэтул эриирэҥ ууй...
                            <br></br>Лугуйэ wадун мэт аруу,
                            <br></br>Чуольэ курийэпэ аруу.
                            <br></br>Идьирэ льэй эдьилҕэ
                            <br></br>Хуодиир моннуму, тэт мольҕал?
                            <br></br>Хуодиир йахтэн чадьуу саҕаа,
                            <br></br>Уодуорпэ wанарҕэт элээй?..
                            <br></br>Хайчиэпэ йахтэ умдуолаа,
                            <br></br>Wиэн омо аруу лалwиинаа...
                            <br></br>Йэулугэ, wадун мэт аруу,
                            <br></br>Саҕаануйэк тэт, ладьидьаа...
                            <br></br>Тэтньэҥ, хуодиитуок, wадулпэ,
                            <br></br>Саҕаатэйли омо ҥолдэҥ.
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
      )
}

export default FamousPeople