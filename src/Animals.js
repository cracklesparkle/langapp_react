import React, {useContext, useState} from 'react';

import {motion} from 'framer-motion';
import { ViewContext } from './ViewContext';
import Button from './components/Button';

import imgAnimal1 from './languages/yukaghir/animals/image1.jpg';
import imgAnimal2 from './languages/yukaghir/animals/image2.jpg';
import imgAnimal3 from './languages/yukaghir/animals/image3.jpg';
import imgAnimal4 from './languages/yukaghir/animals/image4.jpg';
import imgAnimal5 from './languages/yukaghir/animals/image5.jpg';
import imgAnimal6 from './languages/yukaghir/animals/image6.jpg';
import imgAnimal7 from './languages/yukaghir/animals/image7.jpg';
import imgAnimal8 from './languages/yukaghir/animals/image8.jpg';
import imgAnimal9 from './languages/yukaghir/animals/image9.jpg';
import imgAnimal10 from './languages/yukaghir/animals/image10.jpg';
import imgAnimal11 from './languages/yukaghir/animals/image11.jpg';
import imgAnimal12 from './languages/yukaghir/animals/image12.jpg';
import imgAnimal13 from './languages/yukaghir/animals/image13.jpg';
import imgAnimal14 from './languages/yukaghir/animals/image14.jpg';
import imgAnimal15 from './languages/yukaghir/animals/image15.jpg';
import imgAnimal16 from './languages/yukaghir/animals/image16.jpg';
import imgAnimal17 from './languages/yukaghir/animals/image17.jpg';

import imgBird1 from './languages/yukaghir/birds/image1.jpg';
import imgBird2 from './languages/yukaghir/birds/image2.jpg';
import imgBird3 from './languages/yukaghir/birds/image3.jpg';
import imgBird4 from './languages/yukaghir/birds/image4.jpg';
import imgBird5 from './languages/yukaghir/birds/image5.jpg';
import imgBird6 from './languages/yukaghir/birds/image6.jpg';
import imgBird7 from './languages/yukaghir/birds/image7.jpg';
import imgBird8 from './languages/yukaghir/birds/image8.jpg';
import imgBird9 from './languages/yukaghir/birds/image9.jpg';
import imgBird10 from './languages/yukaghir/birds/image10.jpg';
import imgBird11 from './languages/yukaghir/birds/image11.jpg';
import imgBird12 from './languages/yukaghir/birds/image12.jpg';
import imgBird13 from './languages/yukaghir/birds/image13.jpg';
import imgBird14 from './languages/yukaghir/birds/image14.jpg';

function Animals() {
    const {setView} = useContext(ViewContext);

    const [page, setPage] = useState(0);

    const handleClick = event =>{
        if(page == 0){
            setPage(1)
            
        }
        if(page == 1){
            setView('subjectSelect');
            var key = JSON.parse(localStorage.getItem('5'));
            key.available = 1;
            localStorage.setItem(5, JSON.stringify(key));
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
    <motion.div className='animalsPage' initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 1}}>
        <ViewContext.Provider value={{setView}}>
        <div className="container">
                        {page == 0 && <Animal/>}
                        {page == 1 && <Birds/>}
                    </div>
                    <div className="bottomNavbar">
                        {/* <button className='buttonLearn' onClick={handleClick}>Далее</button> */}
                        <Button text='Назад' handleClick={handleBack}/>
                        <Button text='Далее' handleClick={handleClick}/>
                    </div>
        </ViewContext.Provider>

    </motion.div>
  )
}

function Animal(){
    return (
        <div className='animals'>
            <div className='animal'>
                <h1>Йэлукунугурчэндьэрукунпэ</h1>
                <h1>Животные</h1>
                <div className='image'>
                    <img src={imgAnimal1}></img>
                </div>
            </div>
    
            <div className='animal'>
                <h1>Хайчиэтэгэ</h1>
                <h1>Медведь</h1>
                <div className='image'>
                    <img src={imgAnimal2}></img>
                </div>
            </div>
    
            <div className='animal'>
                <h1>Йоходилэ</h1>
                <h1>Лошадь</h1>
                <div className='image'>
                    <img src={imgAnimal3}></img>
                </div>
            </div>
    
            <div className='animal'>
                <h1>Торойаҕа</h1>
                <h1>Лось.</h1>
                <div className='image'>
                    <img src={imgAnimal4}></img>
                </div>
            </div>
            
            <div className='animal'>
                <h1>Илэ</h1>
                <h1>Олень</h1>
                <p>Энмур – рога</p>
                <div className='image'>
                    <img src={imgAnimal5}></img>
                </div>
            </div>
            
            <div className='animal'>
                <h1>Йэwлидьэ</h1>
                <h1>Оленёнок</h1>
                <div className='image'>
                    <img src={imgAnimal6}></img>
                </div>
            </div>
    
            <div className='animal'>
                <h1>Кэрэwэ</h1>
                <h1>Корова</h1>
                <div className='image'>
                    <img src={imgAnimal7}></img>
                </div>
            </div>
    
            <div className='animal'>
                <h1>Надэ</h1>
                <h1>Волк</h1>
                <div className='image'>
                    <img src={imgAnimal8}></img>
                </div>
            </div>
    
            <div className='animal'>
                <h1>Нулидьэ</h1>
                <h1>стая</h1>
                <div className='image'>
                    <img src={imgAnimal9}></img>
                </div>
            </div>
    
            <div className='animal'>
                <h1>Ньэтлэ</h1>
                <h1>Лиса</h1>
                <div className='image'>
                    <img src={imgAnimal10}></img>
                </div>
            </div>
    
            <div className='animal'>
                <h1>Лаамэ</h1>
                <h1>Собака</h1>
                <div className='image'>
                    <img src={imgAnimal11}></img>
                </div>
            </div>
    
            <div className='animal'>
                <h1>Өйэгэ</h1>
                <h1>Заяц</h1>
                <div className='image'>
                    <img src={imgAnimal12}></img>
                </div>
            </div>
    
            <div className='animal'>
                <h1>Ньаwньиклиэ</h1>
                <h1>Песец</h1>
                <div className='image'>
                    <img src={imgAnimal13}></img>
                </div>
            </div>
    
            <div className='animal'>
                <h1>Йорчибэ</h1>
                <h1>Белка</h1>
                <div className='image'>
                    <img src={imgAnimal14}></img>
                </div>
            </div>

            <div className='animal'>
                <h1>Сальил</h1>
                <h1>Мышь</h1>
                <div className='image'>
                    <img src={imgAnimal15}></img>
                </div>
            </div>

            <div className='animal'>
                <h1>Инмэ</h1>
                <h1>Росомаха</h1>
                <div className='image'>
                    <img src={imgAnimal16}></img>
                </div>
            </div>

            <div className='animal'>
                <h1>Өркөбө</h1>
                <h1>Рысь</h1>
                <div className='image'>
                    <img src={imgAnimal17}></img>
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
                    <img src={imgBird1}></img>
                </div>
            </div>
    
            <div className='animal'>
                <h1>Тэн уйэньэйрукун.</h1>
                <h1>Это птица.</h1>
                <div className='image'>
                    <img src={imgBird2}></img>
                </div>
                <p>уйэ – крыло</p>
                <p>йоҕунраал – клюв</p>
                <p>угурчэ - лапки</p>
                <p>ньамиил – шея</p>
            </div>
    
            <div className='animal'>
                <h1>Ньолол</h1>
                <h1>Утка</h1>
                <div className='image'>
                    <img src={imgBird3}></img>
                </div>
            </div>
    
            <div className='animal'>
                <h1>Йаҥдэ</h1>
                <h1>Гусь</h1>
                <div className='image'>
                    <img src={imgBird4}></img>
                </div>
            </div>
            
            <div className='animal'>
                <h1>Чирэмэдиэ</h1>
                <h1>Птичка</h1>
                <div className='image'>
                    <img src={imgBird5}></img>
                </div>
            </div>
            
            <div className='animal'>
                <h1>Хулархаа</h1>
                <h1>Чайка</h1>
                <div className='image'>
                    <img src={imgBird6}></img>
                </div>
            </div>
    
            <div className='animal'>
                <h1>Хальархаа</h1>
                <h1>Розовая чайка</h1>
                <div className='image'>
                    <img src={imgBird7}></img>
                </div>
            </div>
    
            <div className='animal'>
                <h1>Лабунмэ</h1>
                <h1>Куропатка</h1>
                <div className='image'>
                    <img src={imgBird8}></img>
                </div>
            </div>
    
            <div className='animal'>
                <h1>Сальҕа</h1>
                <h1>Гагара</h1>
                <div className='image'>
                    <img src={imgBird9}></img>
                </div>
            </div>
    
            <div className='animal'>
                <h1>Паанҕа</h1>
                <h1>Турухтан</h1>
                <div className='image'>
                    <img src={imgBird10}></img>
                </div>
            </div>
    
            <div className='animal'>
                <h1>Сахлэ</h1>
                <h1>Сова</h1>
                <div className='image'>
                    <img src={imgBird11}></img>
                </div>
            </div>
    
            <div className='animal'>
                <h1>Ханьил</h1>
                <h1>Орёл</h1>
                <div className='image'>
                    <img src={imgBird12}></img>
                </div>
            </div>
    
            <div className='animal'>
                <h1>Ньамиидьиткэ</h1>
                <h1>Лебедь</h1>
                <div className='image'>
                    <img src={imgBird13}></img>
                </div>
            </div>
    
            <div className='animal'>
                <h1>Удиль</h1>
                <h1>Стерх</h1>
                <div className='image'>
                    <img src={imgBird14}></img>
                </div>
            </div>

            <div className='text'>
                <p>
                    <br></br>Муоха, суокур, ньуодьийэ,
                    <br></br>Лимха, көсльэ, умуйэ,
                    <br></br>Энуҕанэ – угурчиэ
                    <br></br>Пойуолнуни йуорпурэ.
                    <br></br>Муоха чуулҕат, суокурҕат
                    <br></br>Тэльиэдальҕак wиэнунул
                    <br></br>Пуогэрэпха сэwрэллэк
                    <br></br>Чаахаснунуй көнмэльэ.
                    <br></br><br></br><span>Улуро Адо</span><br></br>
                </p>
            </div>
        </div>
      )
}

export default Animals