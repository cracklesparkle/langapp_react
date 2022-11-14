import React from 'react';
import './Bubble.css';
import sound_play from '../icons/ui/sound_play.png';

export default function SoundButton (props) {
  const audio = new Audio(props.audio);
  audio.loop = true;
  return (
    <button className='soundButton'
    onClick={() => {
        audio.loop = false;
        audio.play();
    }}>
      <img src={sound_play}></img>
  </button>
  )
}
