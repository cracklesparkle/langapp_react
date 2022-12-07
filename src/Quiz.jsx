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

import svgCheck from "./icons/ui/check.svg"
import svgCross from "./icons/ui/cross.svg"

function Quiz(props){
    //Check answer count first
    let currentAnswerCount = 0;
    let answerLimit = 1;
    if(props.quiz.questions[0].answerSelectionType == "multiple"){
        answerLimit = props.quiz.questions[0].correctAnswer.length
    } else{
        answerLimit = 1
    }

    const [canCheck, setCanCheck] = useState(false)

    //const [checkedState, setCheckedState] = useState(new Array(toppings.length).fill(false));
    const [checkedState, setCheckedState] = useState(new Array(props.quiz.questions[0].answers.length).fill(false));

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

        if(currentAnswerCount <= answerLimit){
            setCheckedState(updatedCheckedState)
            setCanCheck(false)
        }
        if(currentAnswerCount >= answerLimit) setCanCheck(true)
    }

    const handleCheck = event =>{
        //console.log(totalAnswers)
        if(totalAnswers != null){
            if(props.quiz.questions[0].answerSelectionType == "multiple"){
                // props.quiz.questions[0].correctAnswer.map((correctAnswer, i) => {
                //     //console.log(e)
                //     totalAnswers.map((a, j) => {
                //         if(a){
                //             if (correctAnswer == j + 1 && a){
                //                 console.log('correct ' + j)
                //             } else{
                //                 console.log('invalid ' + j)
                //             }
                //         }
                        
                //     })
                // })

                let checkedAnswers = []
                totalAnswers.map((a, i) => {
                    //TODO: 
                    if (a){
                        // props.quiz.questions[0].correctAnswer.map((correctAnswer, j) => {
                        //     if (i + 1 == correctAnswer){
                        //         console.log('correct ' + i)
                        //     }
                        // })
                        // console.log('invalid ' + i)

                        checkedAnswers.push(i + 1);
                    }
                    
                })
                //console.log(checkedAnswers)
                //console.log(totalAnswers)
                let intersection = checkedAnswers.filter(x => props.quiz.questions[0].correctAnswer.includes(x));
                console.log('valid answers: ' + intersection)

                let difference = checkedAnswers.filter(x => !props.quiz.questions[0].correctAnswer.includes(x));
                console.log('invalid answers: ' + difference)
            }
            if(props.quiz.questions[0].answerSelectionType == "single"){
                totalAnswers.map((a, j) => {
                    if (a){
                        if (props.quiz.questions[0].correctAnswer == j + 1){
                            console.log('correct')
                        } else{
                            console.log('invalid')
                        }
                    }
                    
                })
            }
        }
        //console.log(currentAnswerCount)
    };

    return(
        <motion.div className='quizPage' initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 1}}>
            <div className="header">{props.quiz.questions[0].question}</div>
            {props.quiz.questions[0].answerSelectionType == "multiple" && <p>Выберите несколько ({props.quiz.questions[0].correctAnswer.length}) вариантов ответа:</p>}
            {props.quiz.questions[0].answerSelectionType == "single" && <p>Выберите правильный ответ:</p>}
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
            {/* <div className="bottomNavbar">
                        <Button text='Назад'/>
                        <Button text='ПРОВЕРИТЬ' available={canCheck ? true : false } handleClick={handleCheck}/>
            </div> */}
            <div className="quizBottom">
                        <div className="result">
                            <div className="image">
                                <img src={svgCheck}></img>
                            </div>
                            <div className="resultText">
                                <p>
                                    Правильный ответ:
                                </p>
                                {
                                    props.quiz.questions[0].correctAnswer.map((e, index) => {
                                        return (
                                            <p key={index}>
                                                {props.quiz.questions[0].answers[e-1]}
                                            </p>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <Button text='ДАЛЕЕ' available={canCheck ? true : false } handleClick={handleCheck}/>
            </div>
            
        </motion.div>
    )
}

export default Quiz;