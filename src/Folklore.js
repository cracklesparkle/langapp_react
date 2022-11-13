import React, {useContext, useState} from 'react';

import {motion} from 'framer-motion';
import { ViewContext } from './ViewContext';

import imgCulture1 from './languages/yukaghir/cultureFood/image1.jpg';
import imgCulture2 from './languages/yukaghir/cultureFood/image2.jpg';
import imgCulture3 from './languages/yukaghir/cultureFood/image3.jpg';
import imgCulture4 from './languages/yukaghir/cultureFood/image4.jpg';

function Folklore() {
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
    <motion.div className='cultureFoodPage' initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 1}}>
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
        <div className='culture'>
            <h1 className='header'>Культура юкагиров (яранга, оленеводство, рыболовство).</h1>
            <div className='animal'>
                <h1>Яранга – традиционное переносное жилище из жердей и оленьих шкур.</h1>
                <h1>Wадун нимэ- тидаатэҥ хануойирэҥ иwильҕат wиэнунҥа, илэн саwаҕат иирэйуолнуни. </h1>
                <div className='image'>
                    <img src={imgCulture1}></img>
                </div>
            </div>
    
            <div className='animal'>
                <h1>Оленеводство – основная традиционная отрасль юкагиров.</h1>
                <h1>Wадун чии тидаатэҥ илэлэк саҕанаҥи, эwрэҥи, эньҥи.</h1>
                <div className='image'>
                    <img src={imgCulture2}></img>
                </div>
            </div>
    
            <div className='animal'>
                <h1>Тэн альҕа.</h1>
                <h1>Это рыба.</h1>
                <div className='image'>
                    <img src={imgCulture3}></img>
                </div>
            </div>

            <div className='animal'>
                <h1>Муоха.</h1>
                <h1>Чир.</h1>
                <div className='image'>
                    <img src={imgCulture3}></img>
                </div>
            </div>

            <div className='animal'>
                <h1>Муоха чамуонь.</h1>
                <h1>Чир большой.</h1>
                <div className='image'>
                    <img src={imgCulture3}></img>
                </div>
            </div>

            <div className='animal'>
                <h1>Тэльиэдальҕа.</h1>
                <h1>Юкола.</h1>
                <div className='image'>
                    <img src={imgCulture3}></img>
                </div>
            </div>

            <div className='animal'>
                <h1>Тэльиэдальҕа wалуонь.</h1>
                <h1>Юкола висит.</h1>
                <div className='image'>
                    <img src={imgCulture3}></img>
                </div>
            </div>

            <div className='animal'>
                <h1>Чааха.</h1>
                <h1>Чааха ньанбэлич.</h1>
                <div className='image'>
                    <img src={imgCulture3}></img>
                </div>
            </div>

            <div className='animal'>
                <h1>Умуйэ.</h1>
                <h1>Щука.</h1>
                <div className='image'>
                    <img src={imgCulture3}></img>
                </div>
            </div>

            <div className='animal'>
                <h1>Умуйэ пойуодьэ сальҕарииньэй.</h1>
                <h1>У щуки много зубов.</h1>
                <div className='image'>
                    <img src={imgCulture3}></img>
                </div>
            </div>

            <div className='animal'>
                <h1>Көсльэ.</h1>
                <h1>Налим.</h1>
                <div className='image'>
                    <img src={imgCulture3}></img>
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
                    <img src={imgCulture1}></img>
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

export default Folklore