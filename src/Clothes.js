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

import image1 from './languages/yukaghir/clothes/image1.jpg';
import image2 from './languages/yukaghir/clothes/image2.jpg';
import image3 from './languages/yukaghir/clothes/image3.jpg';

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
                <div>
                    {isVisible ? 'Sd' : 'asd'}
                </div>
            </div>

        </div>
      )
}

export default Clothes