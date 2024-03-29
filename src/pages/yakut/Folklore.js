import React, {useContext, useState, useEffect} from 'react';

import {motion} from 'framer-motion';
import { ViewContext } from '../../ViewContext';
import Button from '../../components/Button';
import imgCulture1 from '../../languages/yukaghir/cultureFood/image1.jpg';
import imgCulture2 from '../../languages/yukaghir/cultureFood/image2.jpg';
import imgCulture3 from '../../languages/yukaghir/cultureFood/image3.jpg';
import imgCulture4 from '../../languages/yukaghir/cultureFood/image4.jpg';

import Song1 from '../../languages/yukaghir/folklore/И. Курилов - Лабунмэдэну.mp3';
import Song2 from '../../languages/yukaghir/folklore/И.Курилов - Мэт йуорпурэ.mp3';
import Song3 from '../../languages/yukaghir/folklore/И.Курилов - Мит эньиэ.mp3';
import Song4 from '../../languages/yukaghir/folklore/И.Курилов - Йэрэгуутэгэ.mp3';

import { quizData9 } from '../../quizData';
import Quiz from '../../Quiz';

function Folklore() {
    const {setView} = useContext(ViewContext);

    const [page, setPage] = useState(0);

    const handleClick = event =>{
        if(page == 0){
            // setView('subjectSelect');
            // var key = JSON.parse(localStorage.getItem('9'));
            // key.available = 1;
            // localStorage.setItem(9, JSON.stringify(key));
            // window.scrollTo(0, 0);
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
    <motion.div className='folklorePage' initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 1}}>
        <ViewContext.Provider value={{setView}}>
        
        {page != 1 && <div className="container">
                        {page == 0 && <Page1/>}
        </div>}
        {page == 1 && <Quiz questions={quizData9.questions} quizTitle='Юкагирские песни' stateChanger={setState}/>}
        {page != 1 && <div className="bottomNavbar">
            {/* <button className='buttonLearn' onClick={handleClick}>Вернуться к темам</button> */}
            <Button text='Перейти к тесту' handleClick={handleClick}/>
        </div>}
        </ViewContext.Provider>

    </motion.div>
  )
}

function Page1(){
    return(
        <motion.div className='folklore' initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 1}}>
            <h1 className='header'>Юкагирские песни</h1>
            <div className='page'>
                <p>
                    Илья Иванович Курилов – юкагирский мелодист, композитор.
                    <br></br>Родился в 1959 году в кочевой семье в тундре недалеко от поселка Андрюшкино Нижнеколымского района. В 1985-87 гг. учился в Якутском культурно-просветительском училище по специальности «Народные инструменты». Является носителем тундренного юкагирского языка. Первые свои стихи и мелодии он начал сочинять во время работы пастухом -оленеводом. В песнях Ильи Курилова – любовь к матери, к земле, воспевание красоты тундры. 
                </p>
                <div className='image'>
                    <img></img>
                </div>
            </div>
    
            <div className='page'>
                <div className='aside'>
                <div>
                    <h3>Йахтэ «Лабунмэдэну»</h3>
                    <span>Муз. И.Курилов</span>
                    <span>Сл.Улуро Адо</span>
                    <br></br>
                    <br></br>Лабунмэдэнудиэ,
                    <br></br>Льэр маархуонь мэт чуҥдэ,
                    <br></br>Мэдьуолуол лукулньэй,
                    <br></br>Wэйлуодьэ хуруулньэй.
                    <br></br>Энгэнэҥ маархуонь льиэ
                    <br></br>Абучиэ, лугумуй.
                    <br></br>Энгэнэҥ маархуонь льиэ
                    <br></br>Абучиэ, лугумуй.
                    <br></br>Лабунмэдэнудиэ,
                    <br></br>Льэр маархуонь мэт сугудьэ,
                    <br></br>Мэдьуолуол лукулньэй.
                    <br></br>Йахтэги эл ньимиэ.
                    <br></br>Энгэнэҥ маархуонь льиэ
                    <br></br>Абучиэ, льукумуй.
                    <br></br>Энгэнэҥ маархуонь льиэ
                    <br></br>Абучиэ, льукумуй.
                </div>
                <div>
                    <h3>Песня “Лабунмэдэну”</h3>
                    <br></br>
                    <br></br>Милая Лабунмэдэну,
                    <br></br>Моя мысль только о тебе
                    <br></br>С родной землёю
                    <br></br>Широким небом.
                    <br></br>Только уж очень ты,
                    <br></br>Бабушка, постарела.
                    <br></br>Только уж очень ты,
                    <br></br>Бабушка, постарела.
                    <br></br>Милая Лабунмэдэну,
                    <br></br>Ты – моё сердце
                    <br></br>С родной землёю
                    <br></br>Песнею не угасшей.
                    <br></br>Только уж очень ты,
                    <br></br>Бабушка, постарела.
                    <br></br>Только уж очень ты,
                    <br></br>Бабушка, постарела.
                </div>
                </div>
                <div className='player'>
                    <audio src={Song1} controls controlsList='nodownload'>

                    </audio>
                </div>
            </div>

            <div className='page'> 
                <div className='aside'>
                <div>
                    <h3>Йахтэ “Мэт йуорпурэ”</h3>
                    <span>Муз. И. Курилов</span>
                    <span>Сл. Улуро Адо</span>
                    <br></br>
                    <br></br>Мэт йуорпурэ – тэт аҕарэ
                    <br></br>О, хуодэдэҥ, мэр амудьииҥ.
                    <br></br>Тэтхат wиэдэҥ, эйк хадаанэҥ
                    <br></br>Эдьил мэтха эл амуо.
                    <br></br>Мэ йуорпурэ – тэт йуорпурэ,
                    <br></br>Мэт аҕарэ – тэт аҕарэ.
                    <br></br>Мэ йуорпурэ – тэт йуорпурэ,
                    <br></br>Мэт аҕарэ – тэт аҕарэ.
                    <br></br>Мэр амудьииҥ, мэт йуорпурэ
                    <br></br>Чуоҕаймэги – амуҕа!
                    <br></br>Хулархаапиэ мэт йуо пурэн
                    <br></br>Ланмуҕаал, аҕальwэрэҥ.
                    <br></br>Мэ йуорпурэ – тэт йуорпурэ,
                    <br></br>Мэт аҕарэ – тэт аҕарэ.
                    <br></br>Мэ йуорпурэ – тэт йуорпурэ,
                    <br></br>Мэт аҕарэ – тэт аҕарэ.

                </div>

                <div>
                    <h3>Песня “Моя тундра”</h3>
                    <br></br>
                    <br></br>Моя тундра – твое дыхание
                    <br></br>О, как я её люблю.
                    <br></br>От тебя в другом месте, в другой стороне
                    <br></br>Жизнь мне не мила.
                    <br></br>Моя тундра – твоя тундра,
                    <br></br>Моё дыхание – твоё дыхание.
                    <br></br>Моя тундра – твоя тундра,
                    <br></br>Моё дыхание – твоё дыхание.
                    <br></br>Люблю моей тундры
                    <br></br>Весну – о, как красиво!
                    <br></br>Чайки над моей головой
                    <br></br>Плавно размахивают, веселясь.
                    <br></br>Моя тундра – твоя тундра,
                    <br></br>Моё дыхание – твоё дыхание.
                    <br></br>Моя тундра – твоя тундра,
                    <br></br>Моё дыхание – твоё дыхание.
                </div>                  
                </div>
                <div className='player'>
                    <audio src={Song2} controls controlsList='nodownload'>

                    </audio>
                </div>
            </div>

            <div className='page'> 
                <div className='aside'>
                <div>
                    <h3>Йахтэ “Мит эньиэ”</h3>
                    <span>Муз. И. Курилов</span>
                    <span>Сл. И. Курилов</span>
                    <br></br>
                    <br></br>Хадаанэҥ йөкэ эwрэрэҥ,
                    <br></br>Мит нимэ лэйтэйнунуй.
                    <br></br>Хуодэҥ мит чамумуйуол,
                    <br></br>Хуодэҥ мит лохоҕаайуол.
                    <br></br>Мит эньиэ,
                    <br></br>Мит эньиэ,
                    <br></br>Мит эньиэ,
                    <br></br>Тэтул чамариинунуй.
                    <br></br>Ханьинэҥ идьигойгир wарайдьаа,
                    <br></br>Тэтул лиwриэнунуй.
                    <br></br>Маархуонь, көйридьэнь пөдьэл
                    <br></br>Митинь йэwлиичэрукун.
                    <br></br>Мит эньиэ,
                    <br></br>Мит эньиэ,
                    <br></br>Мит эньиэ,
                    <br></br>Тэтул чамариинунуй.
                </div>
                <div>
                    <h3>Песня “Наша мама”</h3>
                    <br></br>
                    <br></br>Где бы далеко не находились,
                    <br></br>Наш дом вспоминаем.
                    <br></br>О том, как мы росли,
                    <br></br>О том, как мы начали ходить.
                    <br></br>Наша мама,
                    <br></br>Наша мама,
                    <br></br>Наша мама,
                    <br></br>Тебя всегда почитаем.
                    <br></br>Когда утром проснувшись, 
                    <br></br>Замечали, что ты уже встала.
                    <br></br>И только запах дыма
                    <br></br>Нас приятно щекотал.
                    <br></br>Наша мама,
                    <br></br>Наша мама,
                    <br></br>Наша мама,
                    <br></br>Тебя всегда почитаем.
                </div>                 
                </div>
                <div className='player'>
                    <audio src={Song3} controls controlsList='nodownload'>

                    </audio>
                </div>
            </div>

            <div className='page'> 
                <div className='aside'>
                    <div>
                        <h3>Йахтэ “Йэрэгуутэгэ”</h3>
                        <span>Муз. И. Курилов</span>
                        <span>Сл. Н. Курилов</span>
                        <br></br>
                        <br></br>Илэлэк пэттэстэҥ
                        <br></br>Нимэҕа көткэйсэрэҥ
                        <br></br>Йэрэгуутэгэ
                        <br></br>Чичиркэдэҥ моойнунуҥ.
                        <br></br>Хок-хок-хок, аньмилпиэ,
                        <br></br>Маанум мэтханэ мэт көнмиэ!
                        <br></br>Хок-хок-хок, аньмилпиэ,
                        <br></br>Маанум мэтханэ мэт көнмиэ!
                        <br></br>Иэрэллэк пэнгэйр
                        <br></br>Йалҕилпэдиэ чаwнунуҥ
                        <br></br>Йэрэгуутэгэ
                        <br></br>Чичиркэдэҥ моойнунуҥ.
                        <br></br>Хок-хок-хок, аньмилпиэ,
                        <br></br>Маанум мэтханэ мэт көнмиэ!
                        <br></br>Хок-хок-хок, аньмилпиэ,
                        <br></br>Маанум мэтханэ мэт көнмиэ!
                    </div>
                    <div>
                        <h3>Песня “По широкой равнине”</h3>
                        <br></br>
                        <br></br>На оленях скача,
                        <br></br>Приближаясь к дому.
                        <br></br>По широкой равнине
                        <br></br>Вдоль держу.
                        <br></br>Хок-хок-хок, мои ездовые,
                        <br></br>Ждёт меня моя подруга!
                        <br></br>Хок-хок-хок, мои ездовые,
                        <br></br>Ждёт меня моя подруга!
                        <br></br>Возвращаясь после дежурства,
                        <br></br>Озёра пересекая,
                        <br></br>По широкой равнине
                        <br></br>Вдоль держу.
                        <br></br>Хок-хок-хок, мои ездовые,
                        <br></br>Ждёт меня моя подруга!
                        <br></br>Хок-хок-хок, мои ездовые,
                        <br></br>Ждёт меня моя подруга!
                    </div>
                </div>
                <div className='player'>
                    <audio src={Song4} controls controlsList='nodownload'>

                    </audio>
                </div>
            </div>
        </motion.div>
    );
}

export default Folklore