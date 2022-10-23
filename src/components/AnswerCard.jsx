import React from "react";

import {motion} from 'framer-motion';

function Answer(props) {
    return (
        <div
            className="bg-gray-100 dark:bg-gray-900 mx-6 h-16 w-auto mb-4 rounded-md flex items-center"
            onClick={() => props.onClick(props.answer)}
        >
            {/* <input
                type="radio"
                name="answer"
                value={props.answer}
                className="ml-5 dark:bg-gray-800"
            /> */}
            <h3>{props.translation}</h3>
            {/* <label className="text-gray-700 dark:text-gray-400 text-lg ml-4">
                {props.answer}
            </label> */}
        </div>
    );
}

function AnswerCard(props) {
    return (
        <div className="bg-gray-50 dark:bg-gray-800 shadow-lg dark:shadow-dark rounded-2xl min-w-80 w-148">
            <div className="pt-6 pb-2">
                {props.answers.map(answer => (
                    <motion.div className='container' initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 1}}>
                        <Answer
                            key={answer}
                            answer={answer}
                            onClick={props.onClick}
                            translation={props.translation}
                        />
                    </motion.div>
                    
                ))}
            </div>
        </div>
    );
}

export default AnswerCard;