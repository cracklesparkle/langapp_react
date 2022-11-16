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

function Family() {
    const {setView} = useContext(ViewContext);
    var current = 0;

    const [page, setPage] = useState(0);

    const audio = new Audio(ringer);
    audio.loop = true;

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
            <div>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className='family'>
                        <tr className='member'>
                            <img className='memberImg' src={imgMember5}></img>
                            <div className='asideKeep'>
                                <SoundButton audio={ringer}/>
                                <div className='asideVert'>
                                    <td className='a'>Мама</td>
                                    <td>Эньиэ</td>
                                </div>
                            </div>
                        </tr>
                        <tr className='member'>
                            <img className='memberImg' src={imgMember6}></img>
                            <div className='asideKeep'>
                                <SoundButton audio={ringer}/>
                                <div className='asideVert'>
                                    <td className='a'>Папа</td>
                                    <td>Амаа</td>
                                </div>
                            </div>
                        </tr>
                        <tr className='member'>
                            <img className='memberImg' src={imgMember2}></img>
                            <div className='asideKeep'>
                                <SoundButton audio={ringer}/>
                                <div className='asideVert'>
                                    <td className='a'>Бабушка</td>
                                    <td>Абучиэ</td>
                                </div>
                            </div>
                        </tr>
                        <tr className='member'>
                            <img className='memberImg' src={imgMember3}></img>
                            <div className='asideKeep'>
                                <SoundButton audio={ringer}/>
                                <div className='asideVert'>
                                    <td className='a'>Дедушка</td>
                                    <td>Хайчиэ</td>
                                </div>
                            </div>
                        </tr>
                        <tr className='member'>
                            <img className='memberImg' src={imgMember6}></img>
                            <div className='asideKeep'>
                                <SoundButton audio={ringer}/>
                                <div className='asideVert'>
                                    <td className='a'>Старший брат</td>
                                    <td>Акаа</td>
                                </div>
                            </div>
                        </tr>
                        <tr className='member'>
                            <img className='memberImg' src={imgMember8}></img>
                            <div className='asideKeep'>
                                <SoundButton audio={ringer}/>
                                <div className='asideVert'>
                                    <td className='a'>Старшая сестра</td>
                                    <td>Экыа</td>
                                </div>
                            </div>
                        </tr>
                        <tr className='member'>
                            <div className='asideKeep'>
                            <img className='memberImg' src={imgMember4}></img>
                            <img className='memberImg' src={imgMember7}></img>
                            </div>
                            
                            <div className='asideKeep'>
                                <SoundButton audio={ringer}/>
                                <div className='asideVert'>
                                    <td className='a'>Младший брат, сестра</td>
                                    <td>Эмдьэ</td>
                                </div>
                            </div>
                        </tr>
                        
                    </tbody>

                </table>
                <table className='otherMembers'>
                    <tbody>
                        <tr className='member'>
                            <div className='asideKeep'>
                                <SoundButton audio={ringer}/>
                                <div className='asideVert'>
                                    <td className='a'>Дядя (старший брат мамы)</td>
                                    <td>Хаwдьаа</td>
                                </div>
                            </div>
                        </tr>
                        <tr className='member'>
                            {/* <img className='memberImg' src={imgMember1}></img> */}
                            <div className='asideKeep'>
                                <SoundButton audio={ringer}/>
                                <div className='asideVert'>
                                    <td className='a'>Дядя (младший брат мамы)</td>
                                    <td>Хаwдьидиэ</td>
                                </div>
                            </div>
                        </tr>
                        <tr className='member'>
                            {/* <img className='memberImg' src={imgMember1}></img> */}
                            <div className='asideKeep'>
                                <SoundButton audio={ringer}/>
                                <div className='asideVert'>
                                    <td className='a'>Тётя (старшая сестра мамы)</td>
                                    <td>Чамийа</td>
                                </div>
                            </div>
                        </tr>
                        <tr className='member'>
                            {/* <img className='memberImg' src={imgMember1}></img> */}
                            <div className='asideKeep'>
                                <SoundButton audio={ringer}/>
                                <div className='asideVert'>
                                    <td className='a'>Тётя (младшая сестра мамы)</td>
                                    <td>Йаадиэ</td>
                                </div>
                            </div>
                        </tr>
                        <tr className='member'>
                            {/* <img className='memberImg' src={imgMember1}></img> */}
                            <div className='asideKeep'>
                                <SoundButton audio={ringer}/>
                                <div className='asideVert'>
                                    <td className='a'>Дядя (старший брат папы)</td>
                                    <td>Чумуочиэ</td>
                                </div>
                            </div>
                        </tr>
                        <tr className='member'>
                            {/* <img className='memberImg' src={imgMember1}></img> */}
                            <div className='asideKeep'>
                                <SoundButton audio={ringer}/>
                                <div className='asideVert'>
                                    <td className='a'>Дядя (младший брат папы)</td>
                                    <td>Өчидиэ</td>
                                </div>
                            </div>
                        </tr>
                        <tr className='member'>
                            {/* <img className='memberImg' src={imgMember1}></img> */}
                            <div className='asideKeep'>
                                <SoundButton audio={ringer}/>
                                <div className='asideVert'>
                                    <td className='a'>Тётя (старшая сестра папы)</td>
                                    <td>Эпиэ</td>
                                </div>
                            </div>
                        </tr>
                        <tr className='member'>
                            {/* <img className='memberImg' src={imgMember1}></img> */}
                            <div className='asideKeep'>
                                <SoundButton audio={ringer}/>
                                <div className='asideVert'>
                                    <td className='a'>Тётя (младшая сестра папы)</td>
                                    <td>Эwдьуо</td>
                                </div>
                            </div>
                        </tr>
                        <tr className='member'>
                            {/* <img className='memberImg' src={imgMember1}></img> */}
                            <div className='asideKeep'>
                                <SoundButton audio={ringer}/>
                                <div className='asideVert'>
                                    <td className='a'>Невестка (жена брата)</td>
                                    <td>Иидиэ</td>
                                </div>
                            </div>
                        </tr>
                        <tr className='member'>
                            {/* <img className='memberImg' src={imgMember1}></img> */}
                            <div className='asideKeep'>
                                <SoundButton audio={ringer}/>
                                <div className='asideVert'>
                                    <td className='a'>Зять (муж сестры)</td>
                                    <td>Пулийэ</td>
                                </div>
                            </div>
                        </tr>
                    </tbody>
                </table>
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