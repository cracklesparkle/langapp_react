import React from "react";

import Header from "./components/Header";
import AnswerCard from "./components/AnswerCard";
import Status from "./components/Status";
import EndQuiz from "./components/EndQuiz";

import Bubble from "./components/Bubble";

import questions from "./questions.json";

import {motion} from 'framer-motion';

import QuizOption from "./components/QuizOption";

// class Quiz extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             questionNumber: 0,
//             numCorrect: 0,
//             statusShown: false,
//             currentQuestionCorrect: false,
//         };
//         this.questions = questions[this.props.subject];

//         this.handleClick = this.handleClick.bind(this);
//     }

//     handleClick(answer) {
//         this.setState({ statusShown: true });

//         const correctAnswer =
//             this.questions[this.state.questionNumber].correctAnswer;

//         answer === correctAnswer
//             ? this.setStatus("correct")
//             : this.setStatus("wrong");
//     }

//     setStatus(status) {
//         if (status === "correct") {
//             this.setState(state => ({
//                 numCorrect: state.numCorrect + 1,
//                 currentQuestionCorrect: true,
//             }));
//         } else {
//             this.setState({ currentQuestionCorrect: false });
//         }
//         setTimeout(() => this.switchQuestion(), 5);
//     }

//     switchQuestion() {
//         this.setState(state => ({
//             statusShown: false,
//             questionNumber:
//                 state.questionNumber < 11 ? state.questionNumber + 1 : false,
//         }));
//     }

//     render() {
//         const audio = new Audio(ringer);
//         audio.loop = true;

//         if (this.state.questionNumber !== false) {
//             const question = this.questions[this.state.questionNumber].question;
//             const answers = this.questions[this.state.questionNumber].answers;
//             const translation = this.questions[this.state.questionNumber].translation;

//             return (
//                 <motion.div className='quizPage' initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 1}}>
//                     <div className="dialogueContainer">
//                         <motion.div className="dialogue">
//                             <div className="speech">
//                                 <Bubble sentence={question} translation={translation} audio={ringer}/>
//                                 <img className="personImage " src={boy_2}></img>
//                             </div>
//                             <div className="speech">
//                                 <Bubble sentence={question} translation={translation}/>
//                                 <img className="personImage " src={girl_2}></img>
//                             </div>
//                         </motion.div>
//                         {/* {this.state.statusShown && (
//                             <Status correct={this.state.currentQuestionCorrect} />
//                         )} */}
//                     </div>
//                     <div className="bottomNavbar">
//                         <button onClick={this.handleClick} className='buttonLearn'>Далее</button>
//                     </div>
//                 </motion.div>
//             );
//         }

//         // return <EndQuiz numCorrect={this.state.numCorrect} />;
//     }
// }

function Quiz(props){
    return(
        <motion.div className='quizPage' initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 1}}>
            <div className="header">{props.quiz.questions[0].question}</div>
            <div className="quizOptions">
                {props.quiz.questions[0].answers.map((e, i) => {
                    return (
                                <QuizOption text={e}/>
                            );
                    })
                }
            </div>
            
        </motion.div>
    )
}

export default Quiz;