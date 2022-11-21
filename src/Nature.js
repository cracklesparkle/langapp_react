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

import ringer from './sounds/misc/ring06.wav';
import SoundButton from './components/SoundButton';

const Sound = () => {
    const audio = new Audio(ringer);
    audio.loop = true;
  
    return (
      <div>
        <button
          onClick={() => {
            audio.loop = false;
            audio.play();
          }}
        >
          Play
        </button>
        <button onClick={() => (audio.loop = false)}>Pause</button>
      </div>
    );
  };

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
            var key = JSON.parse(localStorage.getItem('4'));
            key.available = 1;
            localStorage.setItem(4, JSON.stringify(key));
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
                    <div className='audio-text'>
                        <SoundButton audio={ringer}/>
                        <h1>Лукул</h1>
                    </div>
                    <h3>Земля</h3>
                    <div className='image'>
                        <img src={imgEarth}></img>
                    </div>
                </div>
        
                <div className='block'>
                <div className='audio-text'>
                        <SoundButton audio={ringer}/>
                    <h1>Лэwэйнбурэбэ</h1>
                    </div>
                    <h3>Родина. Природа</h3>
                    <div className='image'>
                        <img src={imgNature}></img>
                    </div>
                </div>
        
                <div className='block'>
                <div className='audio-text'>
                        <SoundButton audio={ringer}/>
                    <h1>Лаwйэ</h1>
                    </div>
                    <h3>Вода</h3>
                    <div className='image'>
                        <img src={imgWater}></img>
                    </div>
                </div>
            </div>
            
            <div className='aside'>
                <div className='block'>
                <div className='audio-text'>
                        <SoundButton audio={ringer}/>
                    <h1>Өнидьэ</h1>
                    </div>
                    <h3>Земля, песок.</h3>
                    <div className='image'>
                        <img src={imgDirt}></img>
                    </div>
                </div>
                
                <div className='block'>
                <div className='audio-text'>
                        <SoundButton audio={ringer}/>
                    <h1>Йоссо</h1>
                    </div>
                    <h3>Мерзлота</h3>
                    <div className='image'>
                        <img src={imgPermafrost}></img>
                    </div>
                </div>
                
                <div className='block'>
                <div className='audio-text'>
                        <SoundButton audio={ringer}/>
                    <h1>Саал</h1>
                    </div>
                    <h3>Дерево</h3>
                    <div className='image'>
                        <img src={imgTree}></img>
                    </div>
                </div>
            </div>
            
            <div className='aside'>
                <div className='block'>
                <div className='audio-text'>
                        <SoundButton audio={ringer}/>
                        </div>
                    <h1>Чаwул</h1>
                    <h3>Море, океан</h3>
                    <div className='image'>
                        <img src={imgSeaOcean}></img>
                    </div>
                </div>
        
                <div className='block'>
                <div className='audio-text'>
                        <SoundButton audio={ringer}/>
                    <h1>Эну</h1>
                    </div>
                    <h3>Река</h3>
                    <div className='image'>
                        <img src={imgRiver}></img>
                    </div>
                </div>
        
                <div className='block'>
                <div className='audio-text'>
                        <SoundButton audio={ringer}/>
                    <h1>Йалҕил</h1>
                </div>
                    <h3>Озеро</h3>
                    <div className='image'>
                        <img src={imgLake}></img>
                    </div>
                </div>
            </div>
            
            <div className='aside'>
                <div className='block'>
                <div className='audio-text'>
                        <SoundButton audio={ringer}/>
                    <h1>Йуорпурэ</h1>
                    </div>
                    <h3>Тундра</h3>
                    <div className='image'>
                        <img src={imgTundra}></img>
                    </div>
                </div>
        
                <div className='block'>
                <div className='audio-text'>
                        <SoundButton audio={ringer}/>
                    <h1>Анаа</h1>
                    </div>
                    <h3>Гора</h3>
                    <div className='image'>
                        <img src={imgMountain}></img>
                    </div>
                </div>
            </div>
            
    
            <div className='block'>
            <div className='audio-text'>
                        <SoundButton audio={ringer}/>
                <h1>Лукулҕа пойуодьэ нотинэй льуолуол льэй.</h1>
                </div>
                <h3>На Земле есть много красивых мест.</h3>
            </div>
    
            <div className='block'>
            <div className='audio-text'>
                        <SoundButton audio={ringer}/>
                <h1>Лукулҕа пойуодьэ пулгидьилэ льэй.  </h1>
                </div>
                <h3>На земле есть много растений.</h3>
            </div>
            
            <div className='block'>
            <div className='audio-text'>
                        <SoundButton audio={ringer}/>
            <h1>Мит лукулҕа көдьэпэ, уйэньэйрукунпэ, йэлукунугурчэндьэрукунпэ эннуҥи.</h1>
            </div>
                <h3>На нашей земле живут насекомые, птицы, животные.</h3>
            </div>

            <div className='block'>
                <div className='audio-text'>
                    <SoundButton audio={ringer}/>
                    <h1>Лукул – мит нимэ.</h1>
                </div>
                <h3>Земля - наш дом</h3>
            </div>

            <div className='block'>
            <div className='audio-text'>
                        <SoundButton audio={ringer}/>
                <h1>Мит Лукул нотинэй, чайлэндьэ wиэҕа!</h1>
                </div>
                <h3>Сохраним нашу Планету красивой и чистой!</h3>
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