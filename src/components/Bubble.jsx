import React from 'react';
import './Bubble.css';
import sound_play from '../icons/ui/sound_play.png';

export default function Bubble (props) {
  const audio = new Audio(props.audio);
  audio.loop = true;
  return (
        <div>
            <div className='bubble'>
                <div className='row'>
                  <button className='soundButton'
                    onClick={() => {
                        audio.loop = false;
                        audio.play();
                    }}>
                      <img src={sound_play}></img>
                  </button>
                  <div className="sentence">{props.sentence}</div>
                </div>
                
                <div className="translation">{props.translation}</div>
            </div>
            <div className="pointer"></div>
        </div>
  )
}
