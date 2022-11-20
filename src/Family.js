import React, {useContext, useState} from 'react';

import {motion} from 'framer-motion';
import { ViewContext } from './ViewContext';


import imgMember1 from './languages/yukaghir/family/image1.png';
import imgMember2 from './languages/yukaghir/family/image2.png';
import imgMember3 from './languages/yukaghir/family/image3.png';
import imgMember4 from './languages/yukaghir/family/image4.png';
import imgMember5 from './languages/yukaghir/family/image5.png';
import imgMember6 from './languages/yukaghir/family/image6.png';
import imgMember7 from './languages/yukaghir/family/image7.png';
import imgMember8 from './languages/yukaghir/family/image8.png';

import audio1 from "./languages/yukaghir/family/audio/1. мама.mp3";
import audio2 from "./languages/yukaghir/family/audio/2. маму зовут анна.mp3";
import audio3 from "./languages/yukaghir/family/audio/3. папа.mp3";
import audio4 from "./languages/yukaghir/family/audio/4. папу зовут николай.mp3";
import audio5 from "./languages/yukaghir/family/audio/5. бабушка.mp3";
import audio6 from "./languages/yukaghir/family/audio/6. бабушка красиво поет.mp3";
import audio7 from "./languages/yukaghir/family/audio/7. дедушка.mp3";
import audio8 from "./languages/yukaghir/family/audio/8. мой дедушка рыбак.mp3";
import audio9 from "./languages/yukaghir/family/audio/9. старший брат.mp3";
import audio10 from "./languages/yukaghir/family/audio/10. мой старший брат учится в десятом классе.mp3";
import audio11 from "./languages/yukaghir/family/audio/11. старшая сестра.mp3";
import audio12 from "./languages/yukaghir/family/audio/12. старшая сестра учится в университете.mp3";
import audio13 from "./languages/yukaghir/family/audio/13. младший брат сестра.mp3";
import audio14 from "./languages/yukaghir/family/audio/14. моя сестренка учится в четвертом классе.mp3";
import audio15 from "./languages/yukaghir/family/audio/15. дядя старший брат мамы.mp3";
import audio16 from "./languages/yukaghir/family/audio/16. дядя работает на электростанции.mp3";
import audio17 from "./languages/yukaghir/family/audio/17. дядя младший брат мамы.mp3";
import audio18 from "./languages/yukaghir/family/audio/18. дядя работает в жкх.mp3";
import audio19 from "./languages/yukaghir/family/audio/19. тетя старшая сестра мамы.mp3";
import audio20 from "./languages/yukaghir/family/audio/20. моя тетя врач.mp3";
import audio21 from "./languages/yukaghir/family/audio/21. тетя младшая сестра мамы.mp3";
import audio22 from "./languages/yukaghir/family/audio/22. у тети трое детей.mp3";
import audio23 from "./languages/yukaghir/family/audio/23. дядя старший брат папы.mp3";
import audio24 from "./languages/yukaghir/family/audio/24. дядя учитель русского языка.mp3";
import audio25 from "./languages/yukaghir/family/audio/25. дядя младший брат папы.mp3";
import audio26 from "./languages/yukaghir/family/audio/26. мой дядя спортсмен.mp3";
import audio27 from "./languages/yukaghir/family/audio/27. тетя старгая сестра папы.mp3";
import audio28 from "./languages/yukaghir/family/audio/28. тетя работает в детском саду она бухгалтер.mp3";
import audio29 from "./languages/yukaghir/family/audio/29. тетя младшая сестра папы.mp3";
import audio30 from "./languages/yukaghir/family/audio/30. моя тетя швея.mp3";
import audio31 from "./languages/yukaghir/family/audio/31. невестка жена брата.mp3";
import audio32 from "./languages/yukaghir/family/audio/32. невестка живет в москве.mp3";
import audio33 from "./languages/yukaghir/family/audio/33. зять муж сестры.mp3";
import audio34 from "./languages/yukaghir/family/audio/34. зятя зовут дима.mp3";

import SoundButton from './components/SoundButton';

function Family() {
    const {setView} = useContext(ViewContext);
    var current = 0;

    const [page, setPage] = useState(0);


    const handleClick = event =>{
        if(page == 0){
            setPage(1)
        }
        if(page == 1){
            setView('subjectSelect');
            var key = JSON.parse(localStorage.getItem('3'));
            key.available = 1;
            localStorage.setItem(3, JSON.stringify(key));
        }

        window.scrollTo(0, 0);
    };

  return (
    <motion.div className='familyPage' initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 1}}>
        <ViewContext.Provider value={{setView}}>
        <div className="container">
                        {page == 0 && <Page1/>}
                        {page == 1 && <Page2/>}
                    </div>
                    <div className="bottomNavbar">
                        <button className='buttonLearn' onClick={handleClick}>Далее</button>
                    </div>
        </ViewContext.Provider>

    </motion.div>
  )
}

function Page1(){
    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 1}}>
            <div className='tables'>
                <div className='family'>
                        <div className='member'>
                            <img className='memberImg' src={imgMember5}></img>
                            <div className='asideKeepLeft'>
                                <div className='asideKeep'>
                                    <SoundButton audio={audio1}/>
                                    <div className='asideVert'>
                                        <h3 className='a'>Мама</h3>
                                        <p>Эньиэ</p>
                                    </div>
                                </div>
                                <div className='asideKeep'>
                                    <SoundButton audio={audio2}/>
                                    <div className='asideVert'>
                                        <h3 className='a'>Маму зовут Анна.</h3>
                                        <p>Эньиэ кирийэ Анна.</p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className='member'>
                            <img className='memberImg' src={imgMember6}></img>
                            <div className='asideKeep'>
                                <SoundButton audio={audio3}/>
                                <div className='asideVert'>
                                    <h3 className='a'>Папа</h3>
                                    <p>Амаа</p>
                                </div>
                            </div>
                            <div className='asideKeep'>
                                <SoundButton audio={audio4}/>
                                <div className='asideVert'>
                                    <h3 className='a'>Папу зовут Николай</h3>
                                    <p>Эньиэ кирийэ Николай.</p>
                                </div>
                            </div>
                        </div>
                        <div className='member'>
                            <img className='memberImg' src={imgMember2}></img>
                            <div className='asideKeep'>
                                <SoundButton audio={audio5}/>
                                <div className='asideVert'>
                                    <h3 className='a'>Бабушка</h3>
                                    <p>Абучиэ</p>
                                </div>
                            </div>
                            <div className='asideKeep'>
                                <SoundButton audio={audio6}/>
                                <div className='asideVert'>
                                    <h3 className='a'>Бабушка красиво поёт</h3>
                                    <p>Абучиэ амутнэ йахтаануй</p>
                                </div>
                            </div>
                            </div>
                        <div className='member'>
                            <img className='memberImg' src={imgMember3}></img>
                            <div className='asideKeep'>
                                <SoundButton audio={audio7}/>
                                <div className='asideVert'>
                                    <h3 className='a'>Дедушка</h3>
                                    <p>Хайчиэ</p>
                                </div>
                            </div>
                            <div className='asideKeep'>
                                <SoundButton audio={audio8}/>
                                <div className='asideVert'>
                                    <h3 className='a'>Мой дедушка рыбак</h3>
                                    <p>Мэт хайчиэ саабандьэбаниэчэ</p>
                                </div>
                            </div>
                            </div>
                        <div className='member'>
                            <img className='memberImg' src={imgMember6}></img>
                            <div className='asideKeep'>
                                <SoundButton audio={audio9}/>
                                <div className='asideVert'>
                                    <h3 className='a'>Старший брат</h3>
                                    <p>Акаа</p>
                                </div>
                            </div>
                            <div className='asideKeep'>
                                <SoundButton audio={audio10}/>
                                <div className='asideVert'>
                                    <h3 className='a'>Мой старший брат учится в десятом классе</h3>
                                    <p>Мэт акаа кунильисчэ классха ураануй</p>
                                </div>
                            </div>
                            </div>
                        <div className='member'>
                            <img className='memberImg' src={imgMember8}></img>
                            <div className='asideKeep'>
                                <SoundButton audio={audio11}/>
                                <div className='asideVert'>
                                    <h3 className='a'>Старшая сестра</h3>
                                    <p>Экыа</p>
                                </div>
                            </div>
                            <div className='asideKeep'>
                                <SoundButton audio={audio12}/>
                                <div className='asideVert'>
                                    <h3 className='a'>Старшая сестра учится в университете</h3>
                                    <p>Экыа университетха ураануй</p>
                                </div>
                            </div>
                            </div>
                        <div className='member'>
                            <div className='asideKeep'>
                            <img className='memberImg' src={imgMember4}></img>
                            <img className='memberImg' src={imgMember7}></img>
                            </div>
                            
                            <div className='asideKeep'>
                                <SoundButton audio={audio13}/>
                                <div className='asideVert'>
                                    <h3 className='a'>Младший брат, сестра</h3>
                                    <p>Эмдьэ</p>
                                </div>
                            </div>
                            <div className='asideKeep'>
                                <SoundButton audio={audio14}/>
                                <div className='asideVert'>
                                    <h3 className='a'>Моя сестрёнка учится в четвертом классе</h3>
                                    <p>Мэт эмдьэ йэлэклисчэ классха ураануй</p>
                                </div>
                            </div>
                            </div>
                        
                    </div>
                <div className='otherMembers'>
                        <div className='member'>
                            <div className='asideKeepLeft'>
                            <div className='asideKeep'>
                                <SoundButton audio={audio15}/>
                                <div className='asideVert'>
                                    <h3 className='a'>Дядя (старший брат мамы)</h3>
                                    <p>Хаwдьаа</p>
                                </div>
                            </div>
                            <div className='asideKeep'>
                                <SoundButton audio={audio16}/>
                                <div className='asideVert'>
                                    <h3 className='a'>Дядя работает на электростанции</h3>
                                    <p>Xawдьаа электростанцияҕа чаҕадьаануй</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className='member'>
                            {/* <img className='memberImg' src={imgMember1}></img> */}
                            <div className='asideKeepLeft'>
                            <div className='asideKeep'>
                                <SoundButton audio={audio17}/>
                                <div className='asideVert'>
                                    <h3 className='a'>Дядя (младший брат мамы)</h3>
                                    <p>Хаwдьидиэ</p>
                                </div>
                            </div>
                            <div className='asideKeep'>
                                <SoundButton audio={audio18}/>
                                <div className='asideVert'>
                                    <h3 className='a'>Дядя работает в ЖКХ</h3>
                                    <p>Xawдьидиэ ЖКХҕа чаҕадьаануй</p>
                                </div>
                            </div>
                            </div>
                            </div>
                        <div className='member'>
                            {/* <img className='memberImg' src={imgMember1}></img> */}
                            <div className='asideKeepLeft'>
                            <div className='asideKeep'>
                                <SoundButton audio={audio19}/>
                                <div className='asideVert'>
                                    <h3 className='a'>Тётя (старшая сестра мамы)</h3>
                                    <p>Чамийа</p>
                                </div>
                            </div>
                            <div className='asideKeep'>
                                <SoundButton audio={audio20}/>
                                <div className='asideVert'>
                                    <h3 className='a'>Моя тётя врач</h3>
                                    <p>Мэт чамийа амаладьаачэ</p>
                                </div>
                            </div>
                            </div>
                            </div>
                        <div className='member'>
                            {/* <img className='memberImg' src={imgMember1}></img> */}
                            <div className='asideKeepLeft'>
                            <div className='asideKeep'>
                                <SoundButton audio={audio21}/>
                                <div className='asideVert'>
                                    <h3 className='a'>Тётя (младшая сестра мамы)</h3>
                                    <p>Йаадиэ</p>
                                </div>
                            </div>
                            <div className='asideKeep'>
                                <SoundButton audio={audio22}/>
                                <div className='asideVert'>
                                    <h3 className='a'>У тёти трое детей</h3>
                                    <p>Йаадиэ йаан уоньэй</p>
                                </div>
                            </div>
                            </div>
                        </div>    
                        <div className='member'>
                            {/* <img className='memberImg' src={imgMember1}></img> */}
                            <div className='asideKeepLeft'>
                            <div className='asideKeep'>
                                <SoundButton audio={audio23}/>
                                <div className='asideVert'>
                                    <h3 className='a'>Дядя (старший брат папы)</h3>
                                    <p>Чумуочиэ</p>
                                </div>
                            </div>
                            <div className='asideKeep'>
                                <SoundButton audio={audio24}/>
                                <div className='asideVert'>
                                    <h3 className='a'>Дядя учитель русского языка</h3>
                                    <p>Чумуочиэ waawэч аруу ураричиичэлэҥ</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className='member'>
                            {/* <img className='memberImg' src={imgMember1}></img> */}
                            <div className='asideKeepLeft'>
                            <div className='asideKeep'>
                                <SoundButton audio={audio25}/>
                                <div className='asideVert'>
                                    <h3 className='a'>Дядя (младший брат папы)</h3>
                                    <p>Өчидиэ</p>
                                </div>
                            </div>
                            <div className='asideKeep'>
                                <SoundButton audio={audio26}/>
                                <div className='asideVert'>
                                    <h3 className='a'>Мой дядя спортсмен</h3>
                                    <p>Мэт өчидиэ спортсменлэҥ</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className='member'>
                            {/* <img className='memberImg' src={imgMember1}></img> */}
                            <div className='asideKeepLeft'>
                            <div className='asideKeep'>
                                <SoundButton audio={audio27}/>
                                <div className='asideVert'>
                                    <h3 className='a'>Тётя (старшая сестра папы)</h3>
                                    <p>Эпиэ</p>
                                </div>
                            </div>
                            <div className='asideKeep'>
                                <SoundButton audio={audio28}/>
                                <div className='asideVert'>
                                    <h3 className='a'>Тётя работает в детском саду, она бухгалтер</h3>
                                    <p>Эпиэ детсадха чаҕадьаануй, тудэл бухгалтер</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className='member'>
                            {/* <img className='memberImg' src={imgMember1}></img> */}
                            <div className='asideKeepLeft'>
                            <div className='asideKeep'>
                                <SoundButton audio={audio29}/>
                                <div className='asideVert'>
                                    <h3 className='a'>Тётя (младшая сестра папы)</h3>
                                    <p>Эwдьуо</p>
                                </div>
                            </div>
                            <div className='asideKeep'>
                                <SoundButton audio={audio30}/>
                                <div className='asideVert'>
                                    <h3 className='a'>Моя тётя швея</h3>
                                    <p>Мэт эwдьуо иҥдьийиэ</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className='member'>
                            {/* <img className='memberImg' src={imgMember1}></img> */}
                            <div className='asideKeepLeft'>
                            <div className='asideKeep'>
                                <SoundButton audio={audio31}/>
                                <div className='asideVert'>
                                    <h3 className='a'>Невестка (жена брата)</h3>
                                    <p>Иидиэ</p>
                                </div>
                            </div>
                            <div className='asideKeep'>
                                <SoundButton audio={audio32}/>
                                <div className='asideVert'>
                                    <h3 className='a'>Невестка живет в Москве</h3>
                                    <p>Иидиэ Москваҕа эннуй</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className='member'>
                            {/* <img className='memberImg' src={imgMember1}></img> */}
                            <div className='asideKeepLeft'>
                            <div className='asideKeep'>
                                <SoundButton audio={audio33}/>
                                <div className='asideVert'>
                                    <h3 className='a'>Зять (муж сестры)</h3>
                                    <p>Пулийэ</p>
                                </div>
                            </div>
                            <div className='asideKeep'>
                                <SoundButton audio={audio34}/>
                                <div className='asideVert'>
                                    <h3 className='a'>Зятя зовут Дима</h3>
                                    <p>Мэт пулийэ кирийэ Дима</p>
                                </div>
                            </div>
                            </div>
                            </div>
                </div>
            </div>
        </motion.div>
    );
}

function Page2(){
    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 1}} className='aside'>
            <div className='text'>
                <h3>«Мит нимэндуул»</h3>
                <p>
                    <br></br>Эньиэ, амаа тадаат мэтэк – 
                    <br></br>Тэн мит нимэндуул ҥотэй!
                    <br></br>Эмдьэ, акаа тадаат экыа – 
                    <br></br>Wаай мит нимэндуул чии!
                    <br></br>Эпиэ, хаwдьаа, йаадиэ, хайчиэ – 
                    <br></br>Мит нимэндуул чии, титтэл!
                    <br></br>Wайи: иидиэ, пулийэ, абучиэ – 
                    <br></br>Туҥ чии, нимэндуул чии!
                    <br></br>Йаwнэр маархан нимэн чии – 
                    <br></br>Нимэндуул чии ҥотэйли!
                    <br></br><br></br><span>Николай Курилов</span><br></br>
                </p>               
            </div>

            <div className='text'>
                <h3>«Наша семья»</h3>
                <p>
                    <br></br>Мама, папа и я – 
                    <br></br>это наша семья!
                    <br></br>Сестренка, старшие брат и сестра – 
                    <br></br>тоже наша семья!
                    <br></br>Тётя, дядя, дедушка – 
                    <br></br>они - наша семья!
                    <br></br>Еще: невестка, зять, бабушка – 
                    <br></br>эти люди - семья!
                    <br></br>Все мы одна семья -
                    <br></br>будем мы семьёй!
                </p>               
            </div>
        </motion.div>
    );
}

export default Family