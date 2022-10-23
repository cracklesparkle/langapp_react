import React from "react";

import Header from "./components/Header";
import AnswerCard from "./components/AnswerCard";
import Status from "./components/Status";
import EndQuiz from "./components/EndQuiz";

import questions from "./questions.json";

import {motion} from 'framer-motion';

class Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questionNumber: 0,
            numCorrect: 0,
            statusShown: false,
            currentQuestionCorrect: false,
        };
        this.questions = questions[this.props.subject];

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(answer) {
        this.setState({ statusShown: true });

        const correctAnswer =
            this.questions[this.state.questionNumber].correctAnswer;

        answer === correctAnswer
            ? this.setStatus("correct")
            : this.setStatus("wrong");
    }

    setStatus(status) {
        if (status === "correct") {
            this.setState(state => ({
                numCorrect: state.numCorrect + 1,
                currentQuestionCorrect: true,
            }));
        } else {
            this.setState({ currentQuestionCorrect: false });
        }

        setTimeout(() => this.switchQuestion(), 750);
    }

    switchQuestion() {
        this.setState(state => ({
            statusShown: false,
            questionNumber:
                state.questionNumber < 4 ? state.questionNumber + 1 : false,
        }));
    }

    render() {
        if (this.state.questionNumber !== false) {
            const question = this.questions[this.state.questionNumber].question;
            const answers = this.questions[this.state.questionNumber].answers;
            const translation = this.questions[this.state.questionNumber].translation;

            return (
                <motion.div className='container' initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 1}}>
                    <Header>{question}</Header>
                    <div className="flex justify-center mt-16">
                        <AnswerCard
                            answers={answers}
                            onClick={this.handleClick}
                            translation={translation}
                        />
                    </div>
                    {/* {this.state.statusShown && (
                        <Status correct={this.state.currentQuestionCorrect} />
                    )} */}
                </motion.div>
            );
        }

        return <EndQuiz numCorrect={this.state.numCorrect} />;
    }
}

export default Quiz;