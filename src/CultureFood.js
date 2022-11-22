import React, {useContext, useState} from 'react';

import {motion} from 'framer-motion';
import { ViewContext } from './ViewContext';

import Button from './components/Button';

import imgCulture1 from './languages/yukaghir/cultureFood/image1.jpg';
import imgCulture2 from './languages/yukaghir/cultureFood/image2.jpg';
import imgCulture3 from './languages/yukaghir/cultureFood/image3.jpg';
import imgCulture4 from './languages/yukaghir/cultureFood/image4.jpg';
import imgCulture5 from './languages/yukaghir/cultureFood/image5.jpg';
import imgCulture6 from './languages/yukaghir/cultureFood/image6.jpg';
import imgCulture7 from './languages/yukaghir/cultureFood/image7.jpg';
import imgCulture8 from './languages/yukaghir/cultureFood/image8.jpg';
import imgCulture9 from './languages/yukaghir/cultureFood/image9.jpeg';

function CultureFood() {
    const {setView} = useContext(ViewContext);

    const [page, setPage] = useState(0);

    const handleClick = event =>{
        if(page == 0){
            setView('subjectSelect');
            var key = JSON.parse(localStorage.getItem('6'));
            key.available = 1;
            localStorage.setItem(6, JSON.stringify(key));
        }
    };

  return (
    <motion.div className='cultureFoodPage' initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 1}}>
        <ViewContext.Provider value={{setView}}>
        
        <div className="container">
                        {page == 0 && <Animal/>}
                    </div>
                    <div className="bottomNavbar">
                        {/* <button className='buttonLearn' onClick={handleClick}>Вернуться к темам</button> */}
                        <Button text='Вернуться к темам' handleClick={handleClick}/>
                    </div>
        </ViewContext.Provider>

    </motion.div>
  )
}

function Animal(){
    return (
        <motion.div className='culture' initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 1}}>
            <h1 className='header'>Культура юкагиров (яранга, оленеводство, рыболовство).</h1>
            <div className='animal'>
                <h3>Яранга – традиционное переносное жилище из жердей и оленьих шкур.</h3>
                <br></br>
                <h3>Wадун нимэ- тидаатэҥ хануойирэҥ иwильҕат wиэнунҥа, илэн саwаҕат иирэйуолнуни. </h3>
                <br></br>
                <div className='image'>
                    <img src={imgCulture1}></img>
                </div>
            </div>
    
            <div className='animal'>
                <h3>Оленеводство – основная традиционная отрасль юкагиров.</h3>
                <br></br>
                <h3>Wадун чии тидаатэҥ илэлэк саҕанаҥи, эwрэҥи, эньҥи.</h3>
                <br></br>
                <div className='image'>
                    <img src={imgCulture2}></img>
                </div>
            </div>
    
            <div className='animal'>
                <div className='aside'>
                    <div>
                            <h3>Тэн альҕа.</h3>
                        
                        <h3>Это рыба.</h3>
                        <br></br>
                    </div>
                    <div className='image'>
                    <img src={imgCulture3}></img>
                </div>
                </div>
                
                
            </div>

            <div className='animal'>
                <div className='aside'>
                    <div>
                        <h3>Муоха.</h3>
                        
                        <h3>Чир.</h3>
                        
                        <br></br>

                        <h3>Муоха чамуонь.</h3>
                        
                        <h3>Чир большой.</h3>
                        <br></br>
                    </div>
                    <div className='image'>
                    <img src={imgCulture9}></img>
                </div>
                </div>
                
            </div>

            <div className='animal'>
                <div className='aside'>
                    <div>
                        <h3>Тэльиэдальҕа.</h3>
                        <br></br>
                        <h3>Юкола.</h3>
                        <br></br>

                        <h3>Тэльиэдальҕа wалуонь.</h3>
                <br></br>
                <h3>Юкола висит.</h3>
                    </div>
                    <div className='image'>
                        <img src={imgCulture8}></img>
                     </div>
                </div>
                

            </div>

            <div className='animal'>
                <h3>Чааха.</h3>
                <br></br>
                <h3>Чааха ньанбэлич.</h3>
                <br></br>
                {/* <div className='image'>
                    <img src={imgCulture3}></img>
                </div> */}
            </div>

            <div className='animal'>
                <div className='aside'>
                    <div>
                        <h3>Умуйэ.</h3>
                        <br></br>
                        <h3>Щука.</h3>
                        <br></br>

                        <h3>Умуйэ пойуодьэ сальҕарииньэй.</h3>
                        <br></br>
                        <h3>У щуки много зубов.</h3>
                        <br></br>
                    </div>
                    <div className='image'>
                    <img src={imgCulture6}></img>
                </div>
                </div>
            </div>

            <div className='animal'>
                <div className='aside'>
                    <div className='image'>
                        <img src={imgCulture5}></img>
                    </div>
                    <div>
                        <h3>Көсльэ.</h3>
                        <br></br>
                        <h3>Налим.</h3>
                        <br></br>
                    </div>
                </div>

                
            </div>
        </motion.div>
      )
}

export default CultureFood