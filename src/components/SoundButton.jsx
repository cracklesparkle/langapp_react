import React from 'react';
import './Bubble.css';
import sound_play from '../icons/ui/sound_play.png';

import {motion} from 'framer-motion';

export default function SoundButton (props) {
  const audio = new Audio(props.audio);
  audio.loop = true;
  return (
    <motion.button className='soundButton'
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    transition={{duration: 0}}
    onClick={() => {
        audio.loop = false;
        audio.play();
    }}>
      <img src={sound_play}></img>
  </motion.button>
  )
}
