import React, {useState} from "react";

import Header from "./components/Header";
import AnswerCard from "./components/AnswerCard";
import Status from "./components/Status";
import EndQuiz from "./components/EndQuiz";

import Bubble from "./components/Bubble";

//import questions from "./questions.json";

import {motion} from 'framer-motion';

//import OptionList from "./components/OptionList";

import Button from "./components/Button";

const getFormattedPrice = (price) => `$${price.toFixed(2)}`;

const toppings = [
    {
      name: "Capsicum",
      price: 1.2
    },
    {
      name: "Paneer",
      price: 2.0
    },
    {
      name: "Red Paprika",
      price: 2.5
    },
    {
      name: "Onions",
      price: 3.0
    },
    {
      name: "Extra Cheese",
      price: 3.5
    },
    {
      name: "Baby Corns",
      price: 3.0
    },
    {
      name: "Mushroom",
      price: 2.0
    }
  ];

function Quiz(props){
    //FCC
    const [checkedState, setCheckedState] = useState(new Array(toppings.length).fill(false));

    const [total, setTotal] = useState(0);

    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
        index === position ? !item : item
        );

        setCheckedState(updatedCheckedState);

        const totalPrice = updatedCheckedState.reduce(
            (sum, currentState, index) => {
                if (currentState === true) {
                return sum + toppings[index].price;
                }
                return sum;
            },
            0
        );
        setTotal(totalPrice);

        console.log('checked count: ' + updatedCheckedState.reduce(
            (sum, currentState, index) => {
                if (currentState === true) {
                return sum + 1;
                }
                return sum;
            },
            0
        ))

        console.log('checked answers: ' + updatedCheckedState.reduce(
            (sum, currentState, index) => {
                if (currentState === true) {
                return ` ${index} `;
                }
                return sum;
            },
            0
        ))
    }
    //FCC

    return(
        <motion.div className='quizPage' initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 1}}>
            <div className="header">{props.quiz.questions[0].question}</div>
            <div className="container">
                <div className="quizOptions">

                    {toppings.map(({ name, price }, index) => {
                        return (
                            <motion.button 
                                key={index}
                                className={checkedState[index] ? 'quizOptionChecked' : 'quizOption'}
                                whileHover={{}}
                                whileTap={{ translateY: 3}}
                                onClick={() => handleOnChange(index)}
                                checked={checkedState[index]} 
                                >
                                {name}
                            </motion.button>
                        );
                        })}
                </div>
            </div>
            <div className="bottomNavbar">
                        <Button text='Назад'/>
                        {/* <button className='buttonLearn' onClick={handleClick}>Далее</button> */}
                        <Button text='Далее'/>
                    </div>
            
        </motion.div>
    )
}

export default Quiz;