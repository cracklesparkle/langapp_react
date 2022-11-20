// import React, {useContext, useState} from 'react';

// import {motion} from 'framer-motion';
// import { ViewContext } from './ViewContext';

// function Clothes() {
//   return (
//     <div>
//         <div>
//             <h3>О национальной одежде юкагиров.</h3>
//             <p>Фото зимнего и летнего юкагирского костюма.</p>
//             <p>Wадун чии хандьэльэ, лэwэйльэ сукунньэҥи. У юкагиров есть зимняя и летняя одежда. Илэн  саwаҕат иириэнунҥа. Шьют из шкуры оленя.  Летняя одежда из замши. Лэwэймэҥ эл пугучэндьэ маҕиньаанунҥи.</p>
//         </div>
//     </div>
//   )
// }

// export default Clothes

import React, {useContext, useState, useRef, useEffect} from 'react';

import {motion} from 'framer-motion';
import { ViewContext } from './ViewContext';

import image1  from './languages/yukaghir/clothes/image1.jpeg';
import image2  from './languages/yukaghir/clothes/image2.jpeg';
import image3  from './languages/yukaghir/clothes/image3.jpeg';
import image4  from './languages/yukaghir/clothes/image4.jpeg';
import image5  from './languages/yukaghir/clothes/image5.jpeg';
import image6  from './languages/yukaghir/clothes/image6.jpeg';
import image7  from './languages/yukaghir/clothes/image7.jpeg';
import image8  from './languages/yukaghir/clothes/image8.jpeg';
import image9  from './languages/yukaghir/clothes/image9.jpeg';
import image10 from './languages/yukaghir/clothes/image10.jpeg';
import image11 from './languages/yukaghir/clothes/image11.jpeg';
import image12 from './languages/yukaghir/clothes/image12.jpeg';
import image13 from './languages/yukaghir/clothes/image13.jpeg';
import image14 from './languages/yukaghir/clothes/image14.jpeg';
import image15 from './languages/yukaghir/clothes/image15.jpeg';
import image16 from './languages/yukaghir/clothes/image16.jpeg';
import image17 from './languages/yukaghir/clothes/image17.jpeg';

import audio1  from "./languages/yukaghir/clothes/audio/1. у юкагиров есть зимняя и летняя одежда.mp3";
import audio2  from "./languages/yukaghir/clothes/audio/2. шьют из шкуры оленя.mp3";
import audio3  from "./languages/yukaghir/clothes/audio/3. летняя одежда из замши.mp3";
import audio4  from "./languages/yukaghir/clothes/audio/4. одежда юкагиров.mp3";
import audio5  from "./languages/yukaghir/clothes/audio/5. это зимняя женская одежда.mp3";
import audio6  from "./languages/yukaghir/clothes/audio/6. это летняя женская одежда.mp3";
import audio7  from "./languages/yukaghir/clothes/audio/7. это мужская зимняя одежда.mp3";
import audio8  from "./languages/yukaghir/clothes/audio/8. шуба.mp3";
import audio9  from "./languages/yukaghir/clothes/audio/9. передник.mp3";
import audio10 from "./languages/yukaghir/clothes/audio/10. верхняя кукашка.mp3";
import audio11 from "./languages/yukaghir/clothes/audio/11. нижнаяя кукашка.mp3";
import audio12 from "./languages/yukaghir/clothes/audio/12. верхние меховые штаны.mp3";
import audio13 from "./languages/yukaghir/clothes/audio/13. нижние нательные меховые штаны.mp3";
import audio14 from "./languages/yukaghir/clothes/audio/14. это зимний головной убор.mp3";
import audio15 from "./languages/yukaghir/clothes/audio/15. рукавицы.mp3";
import audio16 from "./languages/yukaghir/clothes/audio/16. летняя обувь.mp3";
import audio17 from "./languages/yukaghir/clothes/audio/17. зимняя обувь.mp3";
import audio18 from "./languages/yukaghir/clothes/audio/18. ремень.mp3";
import audio19 from "./languages/yukaghir/clothes/audio/19. перчатки.mp3";
import audio20 from "./languages/yukaghir/clothes/audio/20. обувь.mp3";
import audio21 from "./languages/yukaghir/clothes/audio/21. шарфик.mp3";
import audio22 from "./languages/yukaghir/clothes/audio/22 штаны брюки.mp3";

var clothesProgress = false;

function Clothes() {
    const {setView} = useContext(ViewContext);

    const [page, setPage] = useState(0);

    const handleClick = event =>{
        setView('subjectSelect');
        var key = JSON.parse(localStorage.getItem('7'));
        key.available = 1;
        localStorage.setItem(7, JSON.stringify(key));
    };

  return (
    <motion.div className='clothesPage' initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 1}}>
        <ViewContext.Provider value={{setView}}>
        
        <div className="container">
                        {page == 0 && <Page1/>}
                    </div>
                    <div className="bottomNavbar">
                        <button className='buttonLearn' onClick={handleClick}>Вернуться к темам</button>
                    </div>
        </ViewContext.Provider>

    </motion.div>
  )
}

function Page1(){
    const containerRef = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    const callbackFunction = (entries) => {
        const [entry] = entries
        setIsVisible(entry.isIntersecting)
        
        console.log(clothesProgress)
    }
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.6
    }
    useEffect(() => {
        const observer = new IntersectionObserver(callbackFunction, options)
        if (containerRef.current) {
            observer.observe(containerRef.current)
        }
        return () => {
            if (containerRef.current){
                observer.unobserve(containerRef.current)
                clothesProgress = true
            }
        }
    }, [containerRef, options])

    return (
        <div className='culture'>
            <h1 className='header'>О национальной одежде юкагиров</h1>
            
            <div className='animal'>
                <h3>Wадун чии хандьэльэ, лэwэйльэ сукунньэҥи.</h3>
                <br></br>
                <h3>У юкагиров есть зимняя и летняя одежда.</h3>
                <br></br>
                <div className='image'>
                    <img src={image1}></img>
                </div>
            </div>
    
            <div className='animal'>
                <h3>Илэн  саwаҕат иириэнунҥа.</h3>
                <br></br>
                <h3>Шьют из шкуры оленя.</h3>
                <br></br>
                <div className='image'>
                    <img src={image2}></img>
                </div>
            </div>
    
            <div className='animal' >
                <h3>Летняя одежда из замши.</h3>
                <br></br>
                <h3>Лэwэймэҥ эл пугучэндьэ маҕиньаанунҥи.</h3>
                <br></br>
                <div className='image'>
                    <img src={image3} ref={containerRef}></img>
                </div>
            </div>

        </div>
      )
}

export default Clothes