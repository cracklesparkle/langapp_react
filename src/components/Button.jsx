import React from 'react'
import {motion} from 'framer-motion';

function Button(props) {
  return (
    <motion.button className='buttonLearn' onClick={props.handleClick} whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.9 }}>{props.text}</motion.button>
  )
}

export default Button