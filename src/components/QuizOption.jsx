import React from 'react'
import {motion} from 'framer-motion';

function QuizOption(props) {

    const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };
  
  return (
    // <SingleOption props={props}/>
    <Checkbox
    label="My Value"
        value={checked}
        onChange={handleChange}
        props={props}
        />
  )
}

function SingleOption ({props}){
    return(
        <motion.button 
        className='quizOption' 
        onClick={props.handleClick} 
        whileHover={{}}
        whileTap={{ translateY: 3}}
        >
            {props.text}
        </motion.button>
    );
}

const Checkbox = ({ label, value, onChange, props }) => {
    return (
      <motion.button
      className={value ? 'quizOptionChecked' : 'quizOption'}
      whileHover={{}}
        whileTap={{ translateY: 3}}
        onClick={onChange}
        checked={value} onChange={onChange} 
        >
        {/* <input type="checkbox" checked={value} onChange={onChange} /> */}
        {props.text}
      </motion.button>
    );
  };
  

export default QuizOption