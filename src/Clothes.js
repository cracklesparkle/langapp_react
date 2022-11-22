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

import Button from './components/Button';

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
import image18 from './languages/yukaghir/clothes/image18.jpeg';

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

import SoundButton from './components/SoundButton';

const data = [
        {
            "header": "Wадун чии хандьэльэ, лэwэйльэ сукунньэҥи.",
            "subheader": "У юкагиров есть зимняя и летняя одежда.",
            "audio": audio1,
            "images": "",
            "imgpos": "center"
        },
        {
            "header": "Илэн саwаҕат иириэнунҥа.",
            "subheader": "Шьют из шкуры оленя.",
            "audio": audio2,
            "images": "",
            "imgpos": "center"
        },
        {
            "header": "Летняя одежда из замши.",
            "subheader": "Лэwэймэҥ эл пугучэндьэ маҕиньаанунҥи.",
            "audio": audio3,
            "images": "",
            "imgpos": "center"
        },
        {
            "header": "Wадун сукун",
            "subheader": "Одежда юкагиров",
            "audio": audio4,
            "images": [image1, image2],
            "imgpos": "center"
        },
        {
            "header": "Тэн пайпэн хандьэмэльэ сукун.",
            "subheader": "Это зимняя женская одежда.",
            "audio": audio5,
            "images": [image1],
            "imgpos": "left"
        },
        {
            "header": "Тэн пайпэн лэwэймэльэ сукун.",
            "subheader": "Это летняя женская одежда.",
            "audio": audio6,
            "images": [image2],
            "imgpos": "left"
        },
        {
            "header": "Тэн кэйпэн хандьэмэльэ сукун.",
            "subheader": "Это мужская зимняя одежда.",
            "audio": audio7,
            "images": [image3],
            "imgpos": "center-top"
        },
        {
            "header": "Маҕил",
            "subheader": "Шуба",
            "audio": audio8,
            "images": [image4],
            "imgpos": "center"
        },
        {
            "header": "Ньуҥурукун.",
            "subheader": "Передник",
            "audio": audio9,
            "images": [image5],
            "imgpos": "center"
        },
        {
            "header": "Маҕинбурэбэ",
            "subheader": "Верхняя кукашка",
            "audio": audio10,
            "images": [image6],
            "imgpos": "center"
        },
        {
            "header": "Саwдаҕиль",
            "subheader": "Нижняя кукашка",
            "audio": audio11,
            "images": [image7],
            "imgpos": "center"
        },
        {
            "header": "Оонбурэбэ",
            "subheader": "Верхние меховые штаны",
            "audio": audio12,
            "images": [image8],
            "imgpos": "center"
        },
        {
            "header": "Оон ходирэ",
            "subheader": "Нижние нательные меховые штаны",
            "audio": audio13,
            "images": [image9],
            "imgpos": "right"
        },
        {
            "header": "Тэн хандьэмэльэ моҥо.",
            "subheader": "Это зимний головной убор",
            "audio": audio14,
            "images": [image10],
            "imgpos": "left"
        },
        {
            "header": "Чалдьэдаwур",
            "subheader": "Рукавицы",
            "audio": audio15,
            "images": [image11],
            "imgpos": "center"
        },
        {
            "header": "Силхадугурчэ",
            "subheader": "Летняя обувь",
            "audio": audio16,
            "images": [image12],
            "imgpos": "center"
        },
        {
            "header": "Саскариидугурчэ",
            "subheader": "Зимняя обувь",
            "audio": audio17,
            "images": [image13],
            "imgpos": "center"
        },
        {
            "header": "Ньиҥиэдигийэ",
            "subheader": "Ремень",
            "audio": audio18,
            "images": [image14],
            "imgpos": "center"
        },
        {
            "header": "Сисхадоҥой.",
            "subheader": "Перчатки",
            "audio": audio19,
            "images": [image15],
            "imgpos": "center"
        },
        {
            "header": "Угурчэ.",
            "subheader": "Обувь.",
            "audio": audio20,
            "images": [image16],
            "imgpos": "center"
        },
        {
            "header": "Ньамиирукун.",
            "subheader": "Шарфик.",
            "audio": audio21,
            "images": [image17],
            "imgpos": "center"
        },
        {
            "header": "Туурии.",
            "subheader": "Штаны, брюки.",
            "audio": audio22,
            "images": [image18],
            "imgpos": "center"
        }
];

function Images({props}){
    if (props.length > 1){
        return(
            <div className='multipleImages'>
                {props.map((image, i) => {
                    return (
                        <img src={image} key={i}></img>
                    );
                })}
            </div>
            
        );
    }
    if (props.length == 1){
        return(
            <div className='singleImage'>
                {props.map((image, i) => {
                    return (
                        <img src={image} key={i}></img>
                    );
                })}
            </div>
            
        );
    }
}

function Text({props}){
    //image position
    if (props.imgpos == 'left'){
        return(
            <div className='cloth'>
                <div className='row'>
                    <Images props={props.images}/>
                    <div className='info'>
                        <div className='audio-text'>
                            <SoundButton audio={props.audio}/>
                            <h1>{props.header}</h1>
                        </div>
                        <h1>{props.subheader}</h1>
                    </div>
                </div>
            </div>
        );
    }
    if (props.imgpos == 'right'){
        return(
            <div className='cloth'>
                <div className='row'>
                    <div className='info'>
                        <div className='audio-text'>
                            <SoundButton audio={props.audio}/>
                            <h1>{props.header}</h1>
                        </div>
                        <h1>{props.subheader}</h1>
                    </div>
                    <Images props={props.images}/>
                </div>
            </div>
        );
    }
    //by default text is at the top of the image
    if (props.imgpos == 'center'){
        return(
            <div className='cloth'>
                <div className='column'>
                    <div className='info'>
                        <div className='audio-text'>
                            <SoundButton audio={props.audio}/>
                            <h1>{props.header}</h1>
                        </div>
                        <h1>{props.subheader}</h1>
                    </div>
                    <Images props={props.images}/>
                </div>
            </div>
        );
    }
    if (props.imgpos == 'center-top'){
        return(
            <div className='cloth'>
                <div className='column'>
                    <Images props={props.images}/>
                    <div className='info'>
                        <div className='audio-text'>
                            <SoundButton audio={props.audio}/>
                            <h1>{props.header}</h1>
                        </div>
                        <h1>{props.subheader}</h1>
                    </div>
                </div>
            </div>
        );
    }
    
}

function Clothes() {
    const {setView} = useContext(ViewContext);

    const [page, setPage] = useState(0);

    const handleClick = event =>{
        setView('subjectSelect');
        var key = JSON.parse(localStorage.getItem('7'));
        key.available = 1;
        localStorage.setItem(7, JSON.stringify(key));
        window.scrollTo(0, 0);
    };



  return (
    <motion.div className='clothesPage' initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 1}}>
        <ViewContext.Provider value={{setView}}>
        
        <div className="container">
                        {/* {page == 0 && <Page1/>} */}
                        <div className='culture'>
                           <h1 className='header'>О национальной одежде юкагиров</h1>
                           {data.map((e, i) => {
                                return (
                                            <Text props={e} key={i}/>
                                        );
                                })
                            }
                        </div>
                        
                    </div>
                    <div className="bottomNavbar">
                        {/* <button className='buttonLearn' onClick={handleClick}>Вернуться к темам</button> */}
                        <Button text='Вернуться к темам' handleClick={handleClick}/>
                    </div>
        </ViewContext.Provider>

    </motion.div>
  )
}

function Page1(){
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
                    <img src={image3}></img>
                </div>
            </div>

        </div>
      )
}

export default Clothes