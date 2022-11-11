import React, {useContext, useState} from 'react';

import {motion} from 'framer-motion';
import { ViewContext } from './ViewContext';

function Animals() {
    const {setView} = useContext(ViewContext);

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
    <motion.div className='animalsPage' initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 1}}>
        <ViewContext.Provider value={{setView}}>
        <div className="container">
                        {page == 0 && <Animal/>}
                        {page == 1 && <Birds/>}
                    </div>
                    <div className="bottomNavbar">
                        <button className='buttonLearn' onClick={handleClick}>Далее</button>
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
            </div>
    
            <div className='animal'>
                <h1>Хайчиэтэгэ</h1>
                <h1>Медведь</h1>
            </div>
    
            <div className='animal'>
                <h1>Йоходилэ</h1>
                <h1>Лошадь</h1>
            </div>
    
            <div className='animal'>
                <h1>Торойаҕа</h1>
                <h1>Лось.</h1>
            </div>
            
            <div className='animal'>
                <h1>Илэ</h1>
                <h1>Олень</h1>
                <p>Энмур – рога</p>
            </div>
            
            <div className='animal'>
                <h1>Йэwлидьэ</h1>
                <h1>Оленёнок</h1>
            </div>
    
            <div className='animal'>
                <h1>Кэрэwэ</h1>
                <h1>Корова</h1>
            </div>
    
            <div className='animal'>
                <h1>Надэ</h1>
                <h1>Волк</h1>
            </div>
    
            <div className='animal'>
                <h1>Нулидьэ</h1>
                <h1>стая</h1>
            </div>
    
            <div className='animal'>
                <h1>Ньэтлэ</h1>
                <h1>Лиса</h1>
            </div>
    
            <div className='animal'>
                <h1>Лаамэ</h1>
                <h1>Собака</h1>
            </div>
    
            <div className='animal'>
                <h1>Өйэгэ</h1>
                <h1>Заяц</h1>
            </div>
    
            <div className='animal'>
                <h1>Ньаwньиклиэ</h1>
                <h1>Песец</h1>
            </div>
    
            <div className='animal'>
                <h1>Йорчибэ</h1>
                <h1>Белка</h1>
            </div>

            <div className='animal'>
                <h1>Сальил</h1>
                <h1>Мышь</h1>
            </div>

            <div className='animal'>
                <h1>Инмэ</h1>
                <h1>Росомаха</h1>
            </div>

            <div className='animal'>
                <h1>Өркөбө</h1>
                <h1>Рысь</h1>
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
            </div>
    
            <div className='animal'>
                <h1>Тэн уйэньэйрукун.</h1>
                <h1>Это птица.</h1>
                <p>уйэ – крыло</p>
                <p>йоҕунраал – клюв</p>
                <p>угурчэ - лапки</p>
                <p>ньамиил – шея</p>
            </div>
    
            <div className='animal'>
                <h1>Ньолол</h1>
                <h1>Утка</h1>
            </div>
    
            <div className='animal'>
                <h1>Йаҥдэ</h1>
                <h1>Гусь</h1>
            </div>
            
            <div className='animal'>
                <h1>Чирэмэдиэ</h1>
                <h1>Птичка</h1>
            </div>
            
            <div className='animal'>
                <h1>Хулархаа</h1>
                <h1>Чайка</h1>
            </div>
    
            <div className='animal'>
                <h1>Хальархаа</h1>
                <h1>Розовая чайка</h1>
            </div>
    
            <div className='animal'>
                <h1>Лабунмэ</h1>
                <h1>Куропатка</h1>
            </div>
    
            <div className='animal'>
                <h1>Сальҕа</h1>
                <h1>Гагара</h1>
            </div>
    
            <div className='animal'>
                <h1>Паанҕа</h1>
                <h1>Турухтан</h1>
            </div>
    
            <div className='animal'>
                <h1>Сахлэ</h1>
                <h1>Сова</h1>
            </div>
    
            <div className='animal'>
                <h1>Ханьил</h1>
                <h1>Орёл</h1>
            </div>
    
            <div className='animal'>
                <h1>Ньамиидьиткэ</h1>
                <h1>Лебедь</h1>
            </div>
    
            <div className='animal'>
                <h1>Удиль</h1>
                <h1>Стерх</h1>
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
                    <br></br>Улуро Адо
                </p>
            </div>
        </div>
      )
}

export default Animals