import React, {useState, useContext} from "react";

import Header from "./components/Header";
import AnswerCard from "./components/AnswerCard";
import Status from "./components/Status";
import EndQuiz from "./components/EndQuiz";
import { QuizContext } from "./QuizContext";
import Bubble from "./components/Bubble";

import { ViewContext } from "./ViewContext";

//import questions from "./questions.json";

import {motion} from 'framer-motion';

//import OptionList from "./components/OptionList";

import Button from "./components/Button";

import svgCheck from "./icons/ui/check.svg"
import svgCross from "./icons/ui/cross.svg"

let currentQuestion = 0;

function Quiz({questions, stateChanger, quizTitle}){
    const [correctAnswers, setCorrectAnswers] = useState(0);

    const [currentQuestion, setCurrentQuestion] = useState(0);

    const {currentView, setView} = useContext(ViewContext);

    //Check answer count first
    let currentAnswerCount = 0;
    let answerLimit = 1;
    if(questions[currentQuestion].answerSelectionType == "multiple"){
        answerLimit = questions[currentQuestion].correctAnswer.length
    } else{
        answerLimit = 1
    }

    const [result, setResult] = useState("none");
    const [showResults, setShowResults] = useState(false)

    const [canCheck, setCanCheck] = useState(false)

    const [checkedState, setCheckedState] = useState(new Array(questions[currentQuestion].answers.length).fill(false));

    const [totalAnswers, setTotalAnswers] = useState();

    const nextQuestion = event =>{
        if (currentQuestion < questions.length - 1){
            setCurrentQuestion(currentQuestion+1);

            currentAnswerCount = 0;
            answerLimit = 1;
            if(questions[currentQuestion].answerSelectionType == "multiple"){
                answerLimit = questions[currentQuestion].correctAnswer.length
            } else{
                answerLimit = 1
            }

            setResult("none");
            setCanCheck(false);
            setCheckedState(new Array(questions[currentQuestion+1].answers.length).fill(false))
            setTotalAnswers();
        }
        if (currentQuestion == questions.length - 1){
            console.log(correctAnswers)
            setShowResults(true)
        }
        
    }

    const handleOnChange = (position) => {
        if (result == "none"){

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
        
    }

    const handleCheck = event =>{
        if(totalAnswers != null){
            if(questions[currentQuestion].answerSelectionType == "multiple"){
                let checkedAnswers = []
                totalAnswers.map((a, i) => {
                    //TODO: 
                    if (a){
                        checkedAnswers.push(i + 1);
                    }
                    
                })
                let intersection = checkedAnswers.filter(x => questions[currentQuestion].correctAnswer.includes(x));

                let difference = checkedAnswers.filter(x => !questions[currentQuestion].correctAnswer.includes(x));

                if (intersection.length == questions[currentQuestion].correctAnswer.length && difference.length == 0){
                    setResult('correct')
                    //correctAnswers += 1;
                    setCorrectAnswers(correctAnswers+1)
                } else{
                    setResult('wrong')
                }
            }
            if(questions[currentQuestion].answerSelectionType == "single"){
                totalAnswers.map((a, j) => {
                    if (a){
                        if (questions[currentQuestion].correctAnswer == j + 1){
                            setResult('correct')
                            //correctAnswers += 1;
                            setCorrectAnswers(correctAnswers+1)
                        } else{
                            setResult('wrong')
                        }
                    }
                    
                })
            }
        }
    };
    if (!showResults){
        return(
            <>
                <div className="quizPage container">
                    <h1 className='header'>{quizTitle}</h1>
                    <div className="header">{questions[currentQuestion].question}</div>
                    {questions[currentQuestion].answerSelectionType == "multiple" && <p>Выберите несколько ({questions[currentQuestion].correctAnswer.length}) вариантов ответа:</p>}
                    {questions[currentQuestion].answerSelectionType == "single" && <p>Выберите правильный ответ:</p>}
                    <motion.div className="quizPage quizOptions" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 1}}>
                        {questions[currentQuestion].answers.map((e, index) => {
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
                    </motion.div>
                </div>
                
                {result == 'none' && <motion.div className="quizPage bottomNavbar" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 0.3}}>
                            <Button text='Назад' handleClick={() => stateChanger(true)}/>
                            <Button text='ПРОВЕРИТЬ' available={canCheck ? true : false } handleClick={handleCheck}/>
                </motion.div>}
                {result != 'none' && <motion.div className={result == "correct" ? "quizBottom correct" : "quizBottom wrong"} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 0.3}}>
                            <div className="result">
                                <div className="image">
                                    <img src={result == "correct" ? svgCheck : svgCross}></img>
                                </div>
                                <div className={result == "correct" ? "resultText correct" : "resultText wrong"}>
                                    <p className="bold">
                                        Правильный ответ:
                                    </p>
                                    { questions[currentQuestion].answerSelectionType == "multiple" &&
                                        questions[currentQuestion].correctAnswer.map((e, index) => {
                                            return (
                                                <p key={index}>
                                                    {questions[currentQuestion].answers[e-1]}
                                                </p>
                                            )
                                        })
                                    }
                                    { questions[currentQuestion].answerSelectionType == "single" &&
                                                <p>
                                                    {questions[currentQuestion].answers[questions[currentQuestion].correctAnswer-1]}
                                                </p>
                                    }
                                </div>
                            </div>
                            <Button text={currentQuestion == questions.length - 1 ? 'ЗАВЕРШИТЬ' : 'ДАЛЕЕ'} handleClick={nextQuestion}/>
                </motion.div>}
                
            </>
        )
    }
    if(showResults){
        return(
            <>
                <div className="quizPage container">
                    <div className="quizPage header">Правильных ответов: {correctAnswers} из {questions.length}</div>
                </div>
                <motion.div className="quizPage bottomNavbar" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 0.3}}>
                            <Button text='Назад' handleClick={() => stateChanger(true)}/>
                            <Button text='ЗАКРЫТЬ' handleClick={()=>{setView('subjectSelect')}}/>
                </motion.div>
                
            </>
        )
    }
    
}

export default Quiz;