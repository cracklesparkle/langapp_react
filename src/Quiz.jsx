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

function Quiz(props){
    //Check answer count first
    let currentAnswerCount = 0;
    let answerLimit = 1;
    if(props.quiz.questions[0].answerSelectionType == "multiple"){
        answerLimit = props.quiz.questions[0].correctAnswer.length
    } else{
        answerLimit = 1
    }



    //const [checkedState, setCheckedState] = useState(new Array(toppings.length).fill(false));
    const [checkedState, setCheckedState] = useState(new Array(props.quiz.questions[0].answers.length).fill(false));

    const [total, setTotal] = useState(0);
    const [totalAnswers, setTotalAnswers] = useState();

    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
        index === position ? !item : item
        );
        

        currentAnswerCount = updatedCheckedState.reduce(
            (sum, currentState, index) => {
                if (currentState === true) {
                return sum + 1;
                }
                return sum;
            },
            0
        )


        const totalAnswers = checkedState.map((item, index) =>
        index === position ? !item : item
        );
        setTotalAnswers(totalAnswers);

        if(currentAnswerCount <= answerLimit) setCheckedState(updatedCheckedState)


    }

    const handleCheck = event =>{
        //console.log(totalAnswers)
        if(totalAnswers != null){
            props.quiz.questions[0].correctAnswer.map((e, i) => {
                //console.log(e)
                totalAnswers.map((a, j) => {
                    if (e == j + 1 && a) console.log('correct')
                })
            })
        }
        //console.log(currentAnswerCount)
    };

    return(
        <motion.div className='quizPage' initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 1}}>
            <div className="header">{props.quiz.questions[0].question}</div>
            {props.quiz.questions[0].answerSelectionType == "multiple" && <p>Выберите несколько ({props.quiz.questions[0].correctAnswer.length}) вариантов ответа:</p>}
            <div className="container">
                <div className="quizOptions">
                    {props.quiz.questions[0].answers.map((e, index) => {
                        return (
                            <motion.button 
                                key={index}
                                className={checkedState[index] ? 'quizOptionChecked' : 'quizOption'}
                                whileHover={{}}
                                whileTap={{ translateY: 3}}
                                onClick={() => handleOnChange(index)}
                                checked={checkedState[index]} 
                                >
                                {e}
                            </motion.button>
                        );
                        })}
                </div>
            </div>
            <div className="bottomNavbar">
                        <Button text='Назад'/>
                        {/* <button className='buttonLearn' onClick={handleClick}>Далее</button> */}
                        <Button text='ПРОВЕРИТЬ' available={currentAnswerCount > 0 ? true : false } handleClick={handleCheck}/>
                    </div>
            
        </motion.div>
    )
}

export default Quiz;