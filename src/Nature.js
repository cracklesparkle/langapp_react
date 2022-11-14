import React, {useContext, useState, useRef} from 'react';

import {motion} from 'framer-motion';
import { ViewContext } from './ViewContext';

import imgEarth from './languages/yukaghir/nature/image1.png';
import imgNature from './languages/yukaghir/nature/image2.png';
import imgWater from './languages/yukaghir/nature/image3.png';
import imgDirt from './languages/yukaghir/nature/image4.png';
import imgSand from './languages/yukaghir/nature/image2.png';
import imgPermafrost from './languages/yukaghir/nature/image5.png';
import imgTree from './languages/yukaghir/nature/image6.png';
import imgSeaOcean from './languages/yukaghir/nature/image7.png';
import imgRiver from './languages/yukaghir/nature/image8.png';
import imgLake from './languages/yukaghir/nature/image9.png';
import imgTundra from './languages/yukaghir/nature/image10.png';
import imgMountain from './languages/yukaghir/nature/image11.png';
import imgPlace1 from './languages/yukaghir/nature/places1.jpg';
import imgPlace2 from './languages/yukaghir/nature/places2.jpg';
import imgPlace3 from './languages/yukaghir/nature/places3.jpg';
import imgPlace4 from './languages/yukaghir/nature/places4.jpg';
import imgAnimals from './languages/yukaghir/nature/animals.jpg';
import imgSaveNature from './languages/yukaghir/nature/savenature.jpg';

import imgPlant1 from './languages/yukaghir/nature/plants/image1.jpg';
import imgPlant2 from './languages/yukaghir/nature/plants/image2.jpg';
import imgPlant3 from './languages/yukaghir/nature/plants/image3.jpg';
import imgPlant4 from './languages/yukaghir/nature/plants/image4.jpg';
import imgPlant5 from './languages/yukaghir/nature/plants/image5.jpg';
import imgPlant6 from './languages/yukaghir/nature/plants/image6.jpg';
import imgPlant7 from './languages/yukaghir/nature/plants/image7.jpg';
import imgPlant8 from './languages/yukaghir/nature/plants/image8.jpg';
import imgPlant9 from './languages/yukaghir/nature/plants/image9.jpg';
import imgPlant10 from './languages/yukaghir/nature/plants/image10.jpg';
import imgPlant11 from './languages/yukaghir/nature/plants/image11.jpg';
import imgPlant12 from './languages/yukaghir/nature/plants/image12.jpg';
import imgPlant13 from './languages/yukaghir/nature/plants/image13.jpg';
import imgPlant14 from './languages/yukaghir/nature/plants/image14.jpg';
import imgPlant15 from './languages/yukaghir/nature/plants/image15.jpg';



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

        window.scrollTo(0, 0)
        
    };

  return (
    <motion.div className='naturePage' initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 1}}>
        <ViewContext.Provider value={{setView}} >
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
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 1}} className='earth'>
            <div className='aside'>
                <div className='block'>
                    <h1>Лукул</h1>
                    <h3>Земля</h3>
                    <div className='image'>
                        <img src={imgEarth}></img>
                    </div>
                </div>
        
                <div className='block'>
                    <h1>Лэwэйнбурэбэ</h1>
                    <h3>Родина. Природа</h3>
                    <div className='image'>
                        <img src={imgNature}></img>
                    </div>
                </div>
        
                <div className='block'>
                    <h1>Лаwйэ</h1>
                    <h3>Вода</h3>
                    <div className='image'>
                        <img src={imgWater}></img>
                    </div>
                </div>
            </div>
            
            <div className='aside'>
                <div className='block'>
                    <h1>Өнидьэ</h1>
                    <h3>Земля, песок.</h3>
                    <div className='image'>
                        <img src={imgDirt}></img>
                    </div>
                </div>
                
                <div className='block'>
                    <h1>Йоссо</h1>
                    <h3>Мерзлота</h3>
                    <div className='image'>
                        <img src={imgPermafrost}></img>
                    </div>
                </div>
                
                <div className='block'>
                    <h1>Саал</h1>
                    <h3>Дерево</h3>
                    <div className='image'>
                        <img src={imgTree}></img>
                    </div>
                </div>
            </div>
            
            <div className='aside'>
                <div className='block'>
                    <h1>Чаwул</h1>
                    <h3>Море, океан</h3>
                    <div className='image'>
                        <img src={imgSeaOcean}></img>
                    </div>
                </div>
        
                <div className='block'>
                    <h1>Эну</h1>
                    <h3>Река</h3>
                    <div className='image'>
                        <img src={imgRiver}></img>
                    </div>
                </div>
        
                <div className='block'>
                    <h1>Йалҕил</h1>
                    <h3>Озеро</h3>
                    <div className='image'>
                        <img src={imgLake}></img>
                    </div>
                </div>
            </div>
            
            <div className='aside'>
                <div className='block'>
                    <h1>Йуорпурэ</h1>
                    <h3>Тундра</h3>
                    <div className='image'>
                        <img src={imgTundra}></img>
                    </div>
                </div>
        
                <div className='block'>
                    <h1>Анаа</h1>
                    <h3>Гора</h3>
                    <div className='image'>
                        <img src={imgMountain}></img>
                    </div>
                </div>
            </div>
            
    
            <div className='block'>
                <h1>Лукулҕа пойуодьэ нотинэй льуолуол льэй.</h1>
                <h3>На Земле есть много красивых мест.</h3>
                {/* <div className='image'>
                    <img src={imgPlace1}></img>
                    <img src={imgPlace2}></img>
                    <img src={imgPlace3}></img>
                    <img src={imgPlace4}></img>
                </div> */}
            </div>
    
            <div className='block'>
                <h1>Лукулҕа пойуодьэ пулгидьилэ льэй.  </h1>
                <h3>На земле есть много растений.</h3>
                
                
                {/* <div className='image'>
                    <img src={imgAnimals}></img>
                </div> */}
            </div>
            
            <div className='block'>
            <h1>Мит лукулҕа көдьэпэ, уйэньэйрукунпэ, йэлукунугурчэндьэрукунпэ эннуҥи.</h1>
                <h3>На нашей земле живут насекомые, птицы, животные.</h3>
                {/* <div className='image'>
                    <img src={imgSaveNature}></img>
                </div> */}
            </div>

            <div className='block'>
            <h1>Лукул – мит нимэ.</h1>
                <h3>Земля - наш дом</h3>
                {/* <div className='image'>
                    <img src={imgSaveNature}></img>
                </div> */}
            </div>

            <div className='block'>
                <h1>Мит Лукул нотинэй, чайлэндьэ wиэҕа!</h1>
                <h3>Сохраним нашу Планету красивой и чистой!</h3>
                {/* <div className='image'>
                    <img src={imgSaveNature}></img>
                </div> */}
            </div>
        </motion.div>
      )
}

function Plants(){
    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 1}} className='plants'>
            <div className='aside'>

            </div>
            <div className='block'>
                <h1>Пулгидьилэпэ</h1>
                <h1>Растения</h1>
                <div className='image'>
                    <img src={imgPlant1}></img>
                </div>
            </div>

            <div className='aside'>
            <div className='block'>
                <h1>Ульэгэ</h1>
                <h3>Трава</h3>
                <p>Ульэгэ хомоньэй. Трава зелёная.</p>
                <div className='image'>
                    <img src={imgPlant2}></img>
                </div>
            </div>
    
            <div className='block'>
                <h1>Хаҕимэwуол</h1>
                <h3>Багульник</h3>
                <p>У багульника белые цветы. Хаҕимэwуол пулгидьилэги ньааwэй.</p>
                <div className='image'>
                    <img src={imgPlant3}></img>
                </div>
            </div>
    
            <div className='block'>
                <h1>Пулгидьилэ</h1>
                <h3>Цветок</h3>
                <p>Пөдьэлдэ амучэ пулгидьилэк. Цветок с приятным запахом.</p>
                <div className='image'>
                    <img src={imgPlant4}></img>
                </div>
            </div>
            </div>

            
            <div className='aside'>
            <div className='block'>
                <h1>Саал</h1>
                <h3>Дерево</h3>
                <p>Саал хомоньэй. Дерево зеленое.</p>
                <div className='image'>
                    <img src={imgPlant5}></img>
                </div>
            </div>
    
            <div className='block'>
                <h1>Йаа(ҥ)</h1>
                <h3>Берёза</h3>
                <div className='image'>
                    <img src={imgPlant6}></img>
                </div>
            </div>
    
            <div className='block'>
                <h1>Морхэ</h1>
                <h3>Карликовая берёза</h3>
                <p>Морхэ йуорпурэҕа пулгэйнуни. Карликовая береза растет в тундре.</p>
                <div className='image'>
                    <img src={imgPlant7}></img>
                </div>
            </div>
            </div>

        
            <div className='aside'>
            <div className='block'>
                <h1>Ньанмэ</h1>
                <h3>Тальник, ива, верба</h3>
                <p>Ньанмэролхэ. Заросли тальника.</p>
                <div className='image'>
                    <img src={imgPlant8}></img>
                </div>
            </div>
    
            <div className='block'>
                <h1>Ньамучэндьэ пуриэ</h1>
                <h3>Брусника</h3>
                <p>Ньамучэндьэ пуриэ ньамучэньи. Брусника красного цвета.</p>
                <div className='image'>
                    <img src={imgPlant9}></img>
                </div>
            </div>
    
            <div className='block'>
                <h1>Хомоньэй пуриэ</h1>
                <h3>Голубика</h3>
                <p>Хомоньэй пуриэ ньанбэличэ пуриэ. Голубика - вкусная ягода</p>
                <div className='image'>
                    <img src={imgPlant10}></img>
                </div>
            </div>
            </div>


            <div className='aside'>
            <div className='block'>
                <h1>Ньоронпуриэ</h1>
                <h3>Морошка</h3>
                <p>Ньоронпуриэ йуорпурэҕа пулгэйнуни. Морошка растет в тундре.</p>
                <div className='image'>
                    <img src={imgPlant11}></img>
                </div>
            </div>
    
            <div className='block'>
                <h1>Тороньэй пуриэ</h1>
                <h3>Шикша, черника.</h3>
                <p>Тороньэй пуриэ мэ тороньэй. Шикша черного цвета.</p>
                <div className='image'>
                    <img src={imgPlant12}></img>
                </div>
            </div>
    
            <div className='block'>
                <h1>Хапньэпуриэ</h1>
                <h3>Смородина</h3>
                <p>Хапньэбуриэ амутнэҥ wалдьич. Смородина очень кислая.</p>
                <div className='image'>
                    <img src={imgPlant13}></img>
                    
                </div>
            </div>
            </div>
            

            <div className='block'>
                <h1>Самналдаҥньэ</h1>
                <h3>Гриб</h3>
                <div className='image'>
                    <img src={imgPlant15}></img>
                </div>
            </div>
        </motion.div>
      )
}

export default Nature