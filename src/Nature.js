import React, {useContext, useState} from 'react';

import {motion} from 'framer-motion';
import { ViewContext } from './ViewContext';

import imgEarth from './images/languages/yukaghir/nature/earth.png';
import imgNature from './images/languages/yukaghir/nature/nature.jpg';
import imgWater from './images/languages/yukaghir/nature/water.jpg';
import imgDirt from './images/languages/yukaghir/nature/dirt.jpg';
import imgSand from './images/languages/yukaghir/nature/sand.jpg';
import imgPermafrost from './images/languages/yukaghir/nature/permafrost.jpg';
import imgTree from './images/languages/yukaghir/nature/tree.jpg';
import imgSeaOcean from './images/languages/yukaghir/nature/sea-ocean.jpg';
import imgRiver from './images/languages/yukaghir/nature/river.jpg';
import imgLake from './images/languages/yukaghir/nature/lake.jpg';
import imgTundra from './images/languages/yukaghir/nature/tundra.jpg';
import imgMountain from './images/languages/yukaghir/nature/mountain.jpg';

function Nature() {
    const {setView} = useContext(ViewContext);
    var current = 0;

    const [page, setPage] = useState(0);

    const handleClick = event =>{
        if(page == 0){
            setPage(1)
        }
        if(page == 1){
            setView('subjectSelect');
        }
    };

  return (
    <motion.div className='naturePage' initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 1}}>
        <ViewContext.Provider value={{setView}}>
        <div className="container">
                        {page == 0 && <Earth/>}
                        {page == 1 && <Plants/>}
                    </div>
                    <div className="bottomNavbar">
                        <button className='buttonLearn' onClick={handleClick}>Далее</button>
                    </div>
        </ViewContext.Provider>
                    
    </motion.div>
  )
}

function Earth(){
    return (
        <div className='earth'>
            <div className='block'>
                <h1>Лукул</h1>
                <h1>Земля</h1>
                <div className='image'>
                    <img src={imgEarth}></img>
                </div>
            </div>
    
            <div className='block'>
                <h1>Лэwэйнбурэбэ</h1>
                <h1>Родина. Природа</h1>
            </div>
    
            <div className='block'>
                <h1>Лаwйэ</h1>
                <h1>Вода</h1>
            </div>
    
            <div className='block'>
                <h1>Өнидьэ</h1>
                <h1>Земля, песок.</h1>
            </div>
            
            <div className='block'>
                <h1>Йоссо</h1>
                <h1>Мерзлота</h1>
            </div>
            
            <div className='block'>
                <h1>Саал</h1>
                <h1>Дерево</h1>
            </div>
    
            <div className='block'>
                <h1>Чаwул</h1>
                <h1>Море, океан</h1>
            </div>
    
            <div className='block'>
                <h1>Эну</h1>
                <h1>Река</h1>
            </div>
    
            <div className='block'>
                <h1>Йалҕил</h1>
                <h1>Озеро</h1>
            </div>
    
            <div className='block'>
                <h1>Йуорпурэ</h1>
                <h1>Тундра</h1>
            </div>
    
            <div className='block'>
                <h1>Анаа</h1>
                <h1>Гора</h1>
            </div>
    
            <div className='block'>
                <h1>Лукулҕа пойуодьэ нотинэй льуолуол льэй.</h1>
                <h1>На Земле есть много красивых мест.</h1>
            </div>
    
            <div className='block'>
                <h1>Лукулҕа пойуодьэ пулгидьилэ льэй.  Мит лукулҕа көдьэпэ, уйэньэйрукунпэ, йэлукунугурчэндьэрукунпэ эннуҥи.</h1>
                <h1>Лукул – мит нимэ.</h1>
            </div>
    
            <div className='block'>
                <h1>Мит Лукул нотинэй, чайлэндьэ wиэҕа!</h1>
                <h1>Сохраним нашу Планету красивой и чистой!</h1>
            </div>
        </div>
      )
}

function Plants(){
    return (
        <div className='plants'>
            <div className='block'>
                <h1>Пулгидьилэпэ</h1>
                <h1>Растения</h1>
            </div>
    
            <div className='block'>
                <h1>Ульэгэ</h1>
                <h1>Трава</h1>
                <p>Ульэгэ хомоньэй. Трава зелёная.</p>
            </div>
    
            <div className='block'>
                <h1>Хаҕимэwуол</h1>
                <h1>Багульник</h1>
                <p>У багульника белые цветы. Хаҕимэwуол пулгидьилэги ньааwэй.</p>
            </div>
    
            <div className='block'>
                <h1>Пулгидьилэ</h1>
                <h1>Цветок</h1>
                <p>Пөдьэлдэ амучэ пулгидьилэк. Цветок с приятным запахом.</p>
            </div>
            
            <div className='block'>
                <h1>Саал</h1>
                <h1>Дерево</h1>
                <p>Саал хомоньэй. Дерево зеленое.</p>
            </div>
            
            <div className='block'>
                <h1>Саал</h1>
                <h1>Дерево</h1>
            </div>
    
            <div className='block'>
                <h1>Йаа(ҥ)</h1>
                <h1>Берёза</h1>
            </div>
    
            <div className='block'>
                <h1>Морхэ</h1>
                <h1>Карликовая берёза</h1>
                <p>Морхэ йуорпурэҕа пулгэйнуни. Карликовая береза растет в тундре.</p>
            </div>
    
            <div className='block'>
                <h1>Ньанмэ</h1>
                <h1>Тальник, ива, верба</h1>
                <p>Ньанмэролхэ. Заросли тальника.</p>
            </div>
    
            <div className='block'>
                <h1>Ньамучэндьэ пуриэ</h1>
                <h1>Брусника</h1>
                <p>Ньамучэндьэ пуриэ ньамучэньи. Брусника красного цвета.</p>
            </div>
    
            <div className='block'>
                <h1>Хомоньэй пуриэ</h1>
                <h1>Голубика</h1>
                <p>Хомоньэй пуриэ ньанбэличэ пуриэ. Голубика - вкусная ягода</p>
            </div>
    
            <div className='block'>
                <h1>Ньоронпуриэ</h1>
                <h1>Морошка</h1>
                <p>Ньоронпуриэ йуорпурэҕа пулгэйнуни. Морошка растет в тундре.</p>
            </div>
    
            <div className='block'>
                <h1>Тороньэй пуриэ</h1>
                <h1>Шикша, черника.</h1>
                <p>Тороньэй пуриэ мэ тороньэй. Шикша черного цвета.</p>
            </div>
    
            <div className='block'>
                <h1>Хапньэпуриэ</h1>
                <h1>Смородина</h1>
                <p>Хапньэбуриэ амутнэҥ wалдьич. Смородина очень кислая.</p>
            </div>

            <div className='block'>
                <h1>Самналдаҥньэ</h1>
                <h1>Гриб</h1>
            </div>
        </div>
      )
}

export default Nature