import React, {useContext, useState, useEffect} from 'react';

import {motion} from 'framer-motion';
import { ViewContext } from './ViewContext';
import Button from './components/Button';

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
import imgPlant2 from './languages/yukaghir/nature/plants/image2.png';
import imgPlant3 from './languages/yukaghir/nature/plants/image3.jpg';
import imgPlant4 from './languages/yukaghir/nature/plants/image4.png';
import imgPlant5 from './languages/yukaghir/nature/plants/image5.png';
import imgPlant6 from './languages/yukaghir/nature/plants/image6.png';
import imgPlant7 from './languages/yukaghir/nature/plants/image7.png';
import imgPlant8 from './languages/yukaghir/nature/plants/image8.png';
import imgPlant9 from './languages/yukaghir/nature/plants/image9.png';
import imgPlant10 from './languages/yukaghir/nature/plants/image10.PNG';
import imgPlant11 from './languages/yukaghir/nature/plants/image11.jpg';
import imgPlant12 from './languages/yukaghir/nature/plants/image12.png';
import imgPlant13 from './languages/yukaghir/nature/plants/image13.png';
import imgPlant14 from './languages/yukaghir/nature/plants/image14.jpg';
import imgPlant15 from './languages/yukaghir/nature/plants/image15.png';


import audio1 from "./languages/yukaghir/nature/audio/1. земля.mp3";
import audio2 from "./languages/yukaghir/nature/audio/2. родина природа.mp3";
import audio3l from "./languages/yukaghir/nature/audio/3. природа loud.mp3";
import audio3  from "./languages/yukaghir/nature/audio/3. природа просторная.mp3";
import audio4  from "./languages/yukaghir/nature/audio/4. вода.mp3";
import audio5  from "./languages/yukaghir/nature/audio/5. земля песок.mp3";
import audio6  from "./languages/yukaghir/nature/audio/6. мерзлота.mp3";
import audio7  from "./languages/yukaghir/nature/audio/7. дерево.mp3";
import audio8  from "./languages/yukaghir/nature/audio/8. море океан.mp3";
import audio9  from "./languages/yukaghir/nature/audio/9. река.mp3";
import audio10 from "./languages/yukaghir/nature/audio/10. озеро.mp3";
import audio11 from "./languages/yukaghir/nature/audio/11 тундра.mp3";
import audio12 from "./languages/yukaghir/nature/audio/12. гора.mp3";
import audio13 from "./languages/yukaghir/nature/audio/13. на земле есть много красивых мест.mp3";
import audio14 from "./languages/yukaghir/nature/audio/14. на нашей земле живут насекомые птицы животные земля наш дом.mp3";
import audio15 from "./languages/yukaghir/nature/audio/15. сохраним нашу планету красивой и чистой.mp3";
import audio16 from "./languages/yukaghir/nature/audio/16. растения.mp3";
import audio17 from "./languages/yukaghir/nature/audio/17. трава.mp3";
import audio18 from "./languages/yukaghir/nature/audio/18. трава зеленая.mp3";
import audio19 from "./languages/yukaghir/nature/audio/19. багульник.mp3";
import audio20 from "./languages/yukaghir/nature/audio/20. у багульника белые цветы.mp3";
import audio21 from "./languages/yukaghir/nature/audio/21. цветок.mp3";
import audio22 from "./languages/yukaghir/nature/audio/22. цветок с приятным запахом.mp3";
import audio23 from "./languages/yukaghir/nature/audio/23. дерево.mp3";
import audio24 from "./languages/yukaghir/nature/audio/24. дерево зеленое.mp3";
import audio25 from "./languages/yukaghir/nature/audio/25. береза.mp3";
import audio26 from "./languages/yukaghir/nature/audio/26. морхэ.mp3";
import audio27 from "./languages/yukaghir/nature/audio/27. карликовая береза растет в тундре.mp3";
import audio28 from "./languages/yukaghir/nature/audio/28. тальник ива верба.mp3";
import audio29 from "./languages/yukaghir/nature/audio/29. заросли тальника.mp3";
import audio30 from "./languages/yukaghir/nature/audio/30. брусника.mp3";
import audio31 from "./languages/yukaghir/nature/audio/31. брусника красного цвета.mp3";
import audio32 from "./languages/yukaghir/nature/audio/32. голубика.mp3";
import audio33 from "./languages/yukaghir/nature/audio/33. голубика вкусная ягода.mp3";
import audio34 from "./languages/yukaghir/nature/audio/34. морошка.mp3";
import audio35 from "./languages/yukaghir/nature/audio/35. морошка растет в тундре.mp3";
import audio36 from "./languages/yukaghir/nature/audio/36. шикша черника.mp3";
import audio37 from "./languages/yukaghir/nature/audio/37. шикша черного цвета.mp3";
import audio38 from "./languages/yukaghir/nature/audio/38. смородина.mp3";
import audio39 from "./languages/yukaghir/nature/audio/39. смородина очень кислая.mp3";
import audio40 from "./languages/yukaghir/nature/audio/40. гриб.mp3";
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

import { quizData4 } from './quizData';

import ringer from './sounds/misc/ring06.wav';
import SoundButton from './components/SoundButton';
import Quiz from './Quiz';

function Nature() {
    const {setView} = useContext(ViewContext);
    var current = 0;

    const [page, setPage] = useState(0);

    const handleClick = event =>{
        

        if(page == 0){
            setPage(1)
        }
        if(page == 1){
            // setView('subjectSelect');
            // var key = JSON.parse(localStorage.getItem('4'));
            // key.available = 1;
            // localStorage.setItem(4, JSON.stringify(key));

            setPage(2);
        }

        window.scrollTo(0, 0)
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
        <ViewContext.Provider value={{setView}} >
            
        {page != 2 && <div className="container">
            <h1 className='header'>Природа</h1>
            {page == 0 && <Earth/>}
            {page == 1 && <Plants/>}
        </div>}
        {page == 2 && <Quiz questions={quizData4.questions} quizTitle='Природа' stateChanger={setState}/>}
        {page != 2 && <div className="bottomNavbar">
            {/* <button className='buttonLearn' onClick={handleClick}>Далее</button> */}
            <Button text='Назад' handleClick={handleBack}/>
            <Button text={page == 1 ? 'Перейти к тесту' : 'Далее'} handleClick={handleClick}/>
        </div>}
        </ViewContext.Provider>
                    
    </motion.div>
  )
}

function EarthCard(props){
    return(
        <div className='block'>
            <div className='audio-text'>
                <SoundButton audio={props.audio}/>
                <h1>{props.header}</h1>
            </div>
            <h3>{props.subheader}</h3>
            {props.image && <div className='image'>
                <img src={props.image}></img>
            </div>}
        </div>
    )
}

function PlantCard(props){
    return(
        <div className='block'>
            <div className='audio-text'>
                <SoundButton audio={props.audio1}/>
                <h1>{props.header}</h1>
            </div>
            <h3>{props.subheader}</h3>
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

function Earth(){
    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 1}} className='earth'>
            <div className='aside'>
                <EarthCard audio={audio1} header={'Лукул'} subheader={'Земля'} image={imgEarth}/>
                <EarthCard audio={audio3} header={'Лэwэйнбурэбэ'} subheader={'Родина. Природа'} image={imgNature}/>
                <EarthCard audio={audio4} header={'Лаwйэ'} subheader={'Вода'} image={imgWater}/>
            </div>
            
            <div className='aside'>
                <EarthCard audio={audio5} header={'Өнидьэ'} subheader={'Земля, песок.'} image={imgDirt}/>
                <EarthCard audio={audio6} header={'Йоссо'} subheader={'Мерзлота'} image={imgPermafrost}/>
                <EarthCard audio={audio7} header={'Саал'} subheader={'Дерево'} image={imgTree}/>
            </div>
            
            <div className='aside'>
                <EarthCard audio={audio8} header={'Чаwул'} subheader={'Море, океан'} image={imgSeaOcean}/>
                <EarthCard audio={audio9} header={'Эну'} subheader={'Река'} image={imgRiver}/>
                <EarthCard audio={audio10} header={'Йалҕил'} subheader={'Озеро'} image={imgLake}/>
            </div>
            
            <div className='aside'>
                <EarthCard audio={audio11} header={'Йуорпурэ'} subheader={'Тундра'} image={imgTundra}/>
                <EarthCard audio={audio12} header={'Анаа'} subheader={'Гора'} image={imgMountain}/>
            </div>
            
            <EarthCard audio={audio13} header={'Лукулҕа пойуодьэ нотинэй льуолуол льэй.'} subheader={'На Земле есть много красивых мест.'}/>
            <EarthCard audio={ringer} header={'Лукулҕа пойуодьэ пулгидьилэ льэй.'} subheader={'На земле есть много растений.'}/>
            <EarthCard audio={audio14} header={'Мит лукулҕа көдьэпэ, уйэньэйрукунпэ, йэлукунугурчэндьэрукунпэ эннуҥи.'} subheader={'На нашей земле живут насекомые, птицы, животные.'}/>
            <EarthCard audio={ringer} header={'Лукул – мит нимэ.'} subheader={'Земля - наш дом'}/>
            <EarthCard audio={audio15} header={'Мит Лукул нотинэй, чайлэндьэ wиэҕа!'} subheader={'Сохраним нашу Планету красивой и чистой!'}/>
        </motion.div>
      )
}

function Plants(){
    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 1}} className='plants'>
            <div className='block'>
            <div className='audio-text'>
                    <SoundButton audio={audio16}/>
                <h1>Пулгидьилэпэ</h1>
                </div>
                <h1>Растения</h1>
                
            </div>

            <div className='aside'>
                <PlantCard audio1={audio17} audio2={audio18} header={'Ульэгэ'} subheader={'Трава'} sentence={'Ульэгэ хомоньэй. Трава зелёная.'} image={imgPlant2}/>
                <PlantCard audio1={audio19} audio2={audio20} header={'Хаҕимэwуол'} subheader={'Багульник'} sentence={'У багульника белые цветы. Хаҕимэwуол пулгидьилэги ньааwэй.'} image={imgPlant3}/>
                <PlantCard audio1={audio21} audio2={audio22} header={'Пулгидьилэ'} subheader={'Цветок'} sentence={'Пөдьэлдэ амучэ пулгидьилэк. Цветок с приятным запахом.'} image={imgPlant4}/>
            </div>

            
            <div className='aside'>
                <PlantCard audio1={audio23} audio2={audio24} header={'Саал'} subheader={'Дерево'} sentence={'Саал хомоньэй. Дерево зеленое.'} image={imgPlant5}/>
                <PlantCard audio1={audio25} header={'Йаа(ҥ)'} subheader={'Берёза'} sentence={''} image={imgPlant6}/>
                <PlantCard audio1={audio26} audio2={audio27} header={'Морхэ'} subheader={'Карликовая берёза'} sentence={'Морхэ йуорпурэҕа пулгэйнуни. Карликовая береза растет в тундре.'} image={imgPlant7}/>
            </div>

        
            <div className='aside'>
                <PlantCard audio1={audio28} audio2={audio29} header={'Ньанмэ'} subheader={'Тальник, ива, верба'} sentence={'Ньанмэролхэ. Заросли тальника.'} image={imgPlant8}/>
                <PlantCard audio1={audio30} audio2={audio31} header={'Ньамучэндьэ пуриэ'} subheader={'Брусника'} sentence={'Ньамучэндьэ пуриэ ньамучэньи. Брусника красного цвета.'} image={imgPlant9}/>
                <PlantCard audio1={audio32} audio2={audio33} header={'Хомоньэй пуриэ'} subheader={'Голубика'} sentence={'Хомоньэй пуриэ ньанбэличэ пуриэ. Голубика - вкусная ягода'} image={imgPlant10}/>
            </div>


            <div className='aside'>
                <PlantCard audio1={audio34} audio2={audio35} header={'Ньоронпуриэ'} subheader={'Морошка'} sentence={'Ньоронпуриэ йуорпурэҕа пулгэйнуни. Морошка растет в тундре.'} image={imgPlant11}/>
                <PlantCard audio1={audio36} audio2={audio37} header={'Тороньэй пуриэ'} subheader={'Шикша, черника.'} sentence={'Тороньэй пуриэ мэ тороньэй. Шикша черного цвета.'} image={imgPlant12}/>
                <PlantCard audio1={audio38} audio2={audio39} header={'Хапньэпуриэ'} subheader={'Смородина'} sentence={'Хапньэбуриэ амутнэҥ wалдьич. Смородина очень кислая.'} image={imgPlant13}/>
            </div>
            
            <div className='aside'>
                <PlantCard audio1={audio40} header={'Самналдаҥньэ'} subheader={'Гриб'} image={imgPlant15}/>
            </div>
        </motion.div>
      )
}

export default Nature