import React from 'react'
import {motion} from 'framer-motion';

function Button(props) {
  if (props.available){
    return (
      <motion.button className='buttonLearn' onClick={props.handleClick} whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}>{props.text}</motion.button>
    )
  }else{
    return (
      <motion.button className='buttonDisabled'>{props.text}</motion.button>
    )
  }
  
}

Button.defaultProps = {
  available: true
}

export default Button