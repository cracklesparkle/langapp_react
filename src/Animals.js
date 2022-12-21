import React, {useContext, useState, useEffect} from 'react';

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


import audio41 from "./languages/yukaghir/nature/audio/41. животные.mp3";
import audio42 from "./languages/yukaghir/nature/audio/42. медведь.mp3";
import audio43 from "./languages/yukaghir/nature/audio/43. лошадь.mp3";
import audio44 from "./languages/yukaghir/nature/audio/44. торойа5а.mp3";
import audio45 from "./languages/yukaghir/nature/audio/45. олень.mp3";
import audio46 from "./languages/yukaghir/nature/audio/46. олененок.mp3";
import audio47 from "./languages/yukaghir/nature/audio/47. корова.mp3";
import audio48 from "./languages/yukaghir/nature/audio/48. волк.mp3";
import audio49 from "./languages/yukaghir/nature/audio/49. стая.mp3";
import audio50 from "./languages/yukaghir/nature/audio/50. лиса.mp3";
import audio51 from "./languages/yukaghir/nature/audio/51. собака.mp3";
import audio52 from "./languages/yukaghir/nature/audio/52. заяц.mp3";
import audio53 from "./languages/yukaghir/nature/audio/53. песец.mp3";
import audio54 from "./languages/yukaghir/nature/audio/54. белка.mp3";
import audio55 from "./languages/yukaghir/nature/audio/55. мышь.mp3";
import audio56 from "./languages/yukaghir/nature/audio/56. росомаха.mp3";
import audio57 from "./languages/yukaghir/nature/audio/57. рысь.mp3";
import audio58 from "./languages/yukaghir/nature/audio/58. птицы.mp3";
import audio59 from "./languages/yukaghir/nature/audio/59. это птица.mp3";
import audio60 from "./languages/yukaghir/nature/audio/60. крыло.mp3";
import audio61 from "./languages/yukaghir/nature/audio/61. клюв.mp3";
import audio62 from "./languages/yukaghir/nature/audio/62. лапки.mp3";
import audio63 from "./languages/yukaghir/nature/audio/63. шея.mp3";
import audio64 from "./languages/yukaghir/nature/audio/64. утка.mp3";
import audio65 from "./languages/yukaghir/nature/audio/65. гусь.mp3";
import audio66 from "./languages/yukaghir/nature/audio/66. птичка.mp3";
import audio67 from "./languages/yukaghir/nature/audio/67. чайка.mp3";
import audio68 from "./languages/yukaghir/nature/audio/68. розовая чайка.mp3";
import audio69 from "./languages/yukaghir/nature/audio/69. куропатка.mp3";
import audio70 from "./languages/yukaghir/nature/audio/70. гагара.mp3";
import audio71 from "./languages/yukaghir/nature/audio/71. турухтан.mp3";
import audio72 from "./languages/yukaghir/nature/audio/72. сова.mp3";
import audio73 from "./languages/yukaghir/nature/audio/73. орел.mp3";
import audio74 from "./languages/yukaghir/nature/audio/74. лебедь.mp3";
import audio75 from "./languages/yukaghir/nature/audio/75. стерх.mp3";
import audio76 from "./languages/yukaghir/nature/audio/76. яранга традиционное переносное жилище.mp3";
import audio77 from "./languages/yukaghir/nature/audio/77. оленеводство основная традиционная отрасль юкагиров.mp3";
import audio78 from "./languages/yukaghir/nature/audio/78. это рыба.mp3";
import audio79 from "./languages/yukaghir/nature/audio/79. чир.mp3";
import audio80 from "./languages/yukaghir/nature/audio/80. чир большой.mp3";
import audio81 from "./languages/yukaghir/nature/audio/81. юкола.mp3";
import audio82 from "./languages/yukaghir/nature/audio/82. юкола висит.mp3";
import audio83 from "./languages/yukaghir/nature/audio/83. строганина.mp3";
import audio84 from "./languages/yukaghir/nature/audio/84. строганина вкусная.mp3";
import audio85 from "./languages/yukaghir/nature/audio/85. щука.mp3";
import audio86 from "./languages/yukaghir/nature/audio/86. у щуки много зубов.mp3";
import audio87 from "./languages/yukaghir/nature/audio/87. налим.mp3";

import SoundButton from './components/SoundButton';

import { quizData5 } from './quizData';

import Quiz from './Quiz';

function Animals() {
    const {setView} = useContext(ViewContext);

    const [page, setPage] = useState(0);

    const handleClick = event =>{
        if(page == 0){
            setPage(1)
        }
        if(page == 1){
            // setView('subjectSelect');
            // var key = JSON.parse(localStorage.getItem('5'));
            // key.available = 1;
            // localStorage.setItem(5, JSON.stringify(key));
            window.scrollTo(0, 0);
            setPage(2)
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

    //pass to quiz
    const[state, setState]=useState(false);

    useEffect(() => {
        if(page == 2){
            setPage(1)
            setState(false)
        }
        
    },[state])

  return (
    <motion.div className='naturePage' initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 1}}>
        <ViewContext.Provider value={{setView}}>
            {page != 2 &&
                <div className="container">
                        
                        {page == 0 && <Animal/>}
                        {page == 1 && <Birds/>}
                </div>
            }
            {page == 2 && <Quiz questions={quizData5.questions} quizTitle='Животные' stateChanger={setState}/>}
        
            {page != 2 && <div className="bottomNavbar">
                {/* <button className='buttonLearn' onClick={handleClick}>Далее</button> */}
                <Button text='Назад' handleClick={handleBack}/>
                <Button text={page == 1 ? 'Перейти к тесту' : 'Далее'} handleClick={handleClick}/>
            </div>}
        </ViewContext.Provider>

    </motion.div>
  )
}

function Animal(){
    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 1}} className='earth'>
            <div className='block' id='block-header'>
                <div className='audio-text-header'>
                    <SoundButton audio={audio41}/>
                    <h1>Йэлукунугурчэндьэрукунпэ</h1>
                </div>
                <h3>Животные</h3>
            </div>
    
            <div className='aside'>
                <EarthCard audio={audio42} header={'Хайчиэтэгэ'} subheader={'Медведь'} image={imgAnimal2}/>
                <EarthCard audio={audio43} header={'Йоходилэ'} subheader={'Лошадь'} image={imgAnimal3}/>
                <EarthCard audio={audio44} header={'Торойаҕа'} subheader={'Лось'} image={imgAnimal4}/>
            </div>
            <div className='aside'>
                <PlantCard audio1={audio45} header={'Илэ'} subheader={'Олень'} sentence={'Энмур – рога'} image={imgAnimal5}/>
                <EarthCard audio={audio46} header={'Йэwлидьэ'} subheader={'Оленёнок'} image={imgAnimal6}/>
                <EarthCard audio={audio47} header={'Кэрэwэ'} subheader={'Корова'} image={imgAnimal7}/>
            </div>
            <div className='aside'>
                <EarthCard audio={audio48} header={'Надэ'} subheader={'Волк'} image={imgAnimal8}/>
                <EarthCard audio={audio49} header={'Нулидьэ'} subheader={'Стая'} image={imgAnimal9}/>
                <EarthCard audio={audio50} header={'Ньэтлэ'} subheader={'Лиса'} image={imgAnimal10}/>
            </div>
            <div className='aside'>
                <EarthCard audio={audio51} header={'Лаамэ'} subheader={'Собака'} image={imgAnimal11}/>
                <EarthCard audio={audio52} header={'Өйэгэ'} subheader={'Заяц'} image={imgAnimal12}/>
                <EarthCard audio={audio53} header={'Ньаwньиклиэ'} subheader={'Песец'} image={imgAnimal13}/>
            </div>
            <div className='aside'>
                <EarthCard audio={audio54} header={'Йорчибэ'} subheader={'Белка'} image={imgAnimal14}/>
                <EarthCard audio={audio55} header={'Сальил'} subheader={'Мышь'} image={imgAnimal15}/>
                <EarthCard audio={audio56} header={'Инмэ'} subheader={'Росомаха'} image={imgAnimal16}/>
            </div>

            <div className='aside'>
                <EarthCard audio={audio57} header={'Өркөбө'} subheader={'Рысь'} image={imgAnimal17}/>
            </div>
        </motion.div>
      )
}

function Birds(){
    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 1}} className='earth'>
            <div className='block' id='block-header'>
                <div className='audio-text-header'>
                    <SoundButton audio={audio58}/>
                    <h1>Уйэньэйрукунпэ</h1>
                </div>
                <h3>Птицы</h3>
            </div>
            <div className='block'>
                    <div className='audio-text-header'>
                        <SoundButton audio={audio59}/>
                        <h1>Тэн уйэньэйрукун</h1>
                    </div>
                    <h3>Это птица</h3>
                    <div className='audio-text-container'>
                        <div className='audio-text' id='sentence'>
                            <SoundButton audio={audio60}/>
                            <p className='natureSentence'>уйэ – крыло</p>
                        </div>
                        <div className='audio-text' id='sentence'>
                            <SoundButton audio={audio61}/>
                            <p className='natureSentence'>йоҕунраал – клюв</p>
                        </div>
                        <div className='audio-text' id='sentence'>
                            <SoundButton audio={audio62}/>
                            <p className='natureSentence'>угурчэ - лапки</p>
                        </div>
                        <div className='audio-text' id='sentence'>
                            <SoundButton audio={audio63}/>
                            <p className='natureSentence'>ньамиил – шея</p>
                        </div>
                    </div>
                </div>

            <div className='aside'>
                
                <EarthCard audio={audio64} header={'Ньолол'} subheader={'Утка'} image={imgBird3}/>
                <EarthCard audio={audio65} header={'Йаҥдэ'} subheader={'Гусь'} image={imgBird4}/>
                <EarthCard audio={audio66} header={'Чирэмэдиэ'} subheader={'Птичка'} image={imgBird5}/>
            </div>
            <div className='aside'>
                <EarthCard audio={audio67} header={'Хулархаа'} subheader={'Чайка'} image={imgBird6}/>
                <EarthCard audio={audio68} header={'Хальархаа'} subheader={'Розовая чайка'} image={imgBird7}/>
                <EarthCard audio={audio69} header={'Лабунмэ'} subheader={'Куропатка'} image={imgBird8}/>
            </div>
            <div className='aside'>
                <EarthCard audio={audio70} header={'Сальҕа'} subheader={'Гагара'} image={imgBird9}/>
                <EarthCard audio={audio71} header={'Паанҕа'} subheader={'Турухтан'} image={imgBird10}/>
                <EarthCard audio={audio72} header={'Сахлэ'} subheader={'Сова'} image={imgBird11}/>
            </div>
            <div className='aside'>
                <EarthCard audio={audio73} header={'Ханьил'} subheader={'Орёл'} image={imgBird12}/>
                <EarthCard audio={audio74} header={'Ньамиидьиткэ'} subheader={'Лебедь'} image={imgBird13}/>
                <EarthCard audio={audio75} header={'Удиль'} subheader={'Стерх'} image={imgBird14}/>
            </div>

            <div className='poetry'>
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
        </motion.div>
      )
}

function EarthCard(props){
    return(
        <div className='block'>
            <div className='audio-text-header'>
                <SoundButton audio={props.audio}/>
                <h1>{props.header}</h1>
            </div>
            <h3 className='subheader'>{props.subheader}</h3>
            {props.image && <div className='image'>
                <img src={props.image}></img>
            </div>}
        </div>
    )
}

function PlantCard(props){
    return(
        <div className='block'>
            <div className='audio-text-header' id='sentence'>
                <SoundButton audio={props.audio1}/>
                <h1>{props.header}</h1>
            </div>
            <h3 className='subheader'>{props.subheader}</h3>
            {props.sentence && <div className='audio-text'>
                <SoundButton audio={props.audio2}/>
                <p className='natureSentence'>{props.sentence}</p>
            </div>}
            <div className='image'>
                <img src={props.image}></img>
            </div>
        </div>
    )
}

export default Animals