import React from 'react';
import './Bubble.css';
import sound_play from '../icons/ui/sound_play.png';
import {motion} from 'framer-motion'
import SoundButton from './SoundButton';

export default function Bubble (props) {
  const audio = new Audio(props.audio);
  audio.loop = true;
  return (
        <motion.div className='speechBubble' initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 1}}>
            <div className='bubble'>
                <div className='row'>
                  {/* <motion.button className='soundButton'>
                      <img src={sound_play}></img>
                  </motion.button> */}
                  <SoundButton audio={props.audio}/>
                  <div className="sentence">{props.sentence}</div>
                </div>
                
                <div className="translation">{props.translation}</div>
            </div>
            <div className="pointer"></div>
        </motion.div>
  )
}
