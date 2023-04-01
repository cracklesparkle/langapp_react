import React, {useContext, useState, useEffect} from 'react';

import { ViewContext } from '../../ViewContext';

import { languages } from '../../Data';

import SubjectCard from '../../SubjectCard1';
import FamilyIcon from '../../icons/yakut/family.png';
import AnimalsIcon from '../../icons/animals.png';
import ClothesIcon from '../../icons/clothes.png';
import CultureFoodIcon from '../../icons/culture-food.png';
import FamousPeopleIcon from '../../icons/famous-people.png';
import FolkloreIcon from '../../icons/folklore.png';
import GreetingIcon from '../../icons/greeting.png';
import MoonGirlIcon from '../../icons/moon-girl.png';
import NatureIcon from '../../icons/nature.png';


import IntroductionIcon from '../../icons/yakut/introduction.png';
import DictionaryIcon from '../../icons/yakut/dictionary.png';
import PhrasebookIcon from '../../icons/yakut/phrasebook.png';
import BookIcon from '../../icons/yakut/book.png';
import DialogueIcon from '../../icons/yakut/dialogue.png';
import QuizIcon from '../../icons/yakut/quiz.png';

import {motion} from 'framer-motion';

function Subjects(){

    const {currentView, setView} = useContext(ViewContext);
    
    if (localStorage.getItem(0) == null){
        var ldata = [
            {
                "subject": 0,
                "progress": 0,
                "available": 1
            },
            {
                "subject": 1,
                "progress": 0,
                "available": 0
            },
            {
                "subject": 2,
                "progress": 0,
                "available": 0
            },
            {
                "subject": 3,
                "progress": 0,
                "available": 0
            },
            {
                "subject": 4,
                "progress": 0,
                "available": 0
            },
            {
                "subject": 5,
                "progress": 0,
                "available": 0
            },
            {
                "subject": 6,
                "progress": 0,
                "available": 0
            },
            {
                "subject": 7,
                "progress": 0,
                "available": 0
            },
            {
                "subject": 8,
                "progress": 0,
                "available": 0
            },
            {
                "subject": 9,
                "progress": 0,
                "available": 0
            },
        ]
    
        ldata.forEach((element, i) => {
            //console.log(i)
            localStorage.setItem(i, JSON.stringify(element));
        });
    }

    const subjects = [
        [
        {
        "Title": "Введение",
        "Image": IntroductionIcon,
        "Link": 'introduction',
        "View": 'YA_introductionView'
        },
        {
        "Title": "Знакомство",
        "Image": BookIcon,
        "Link": 'greeting',
        "View": 'YA_greetingView'
        },
        {
        "Title": "Семья",
        "Image": FamilyIcon,
        "Link": 'family',
        "View": 'YA_familyView'
        },
        {
        "Title": "Природа",
        "Image": NatureIcon,
        "Link": 'nature',
        "View": 'YA_natureView'
        },
        {
        "Title": "Животные",
        "Image": BookIcon,
        "Link": 'animals',
        "View": 'YA_animalsView'
        },
        {
        "Title": "Культура и еда",
        "Image": CultureFoodIcon,
        "Link": 'culture-food',
        "View": 'YA_cultureFoodView'
        },
        {
        "Title": "Одежда",
        "Image": ClothesIcon,
        "Link": 'clothes',
        "View": 'YA_clothesView'
        },
        {
        "Title": "Сказки",
        "Image": BookIcon,
        "Link": 'moon-girl',
        "View": 'YA_taleView'
        },
        {
        "Title": "Музыка",
        "Image": FolkloreIcon,
        "Link": 'folklore',
        "View": 'YA_folkloreView'
        },
        {
        "Title": "Известные люди",
        "Image": FamousPeopleIcon,
        "Link": 'famous-people',
        "View": 'YA_famousPeopleView'
        }
    ]
    ];
    return(
        <motion.div className='subjectsPage' initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
            <ViewContext.Provider value={{currentView, setView}}>
                <div className='buttonsContainer'>
                    <SubjectCard subject={subjects[0][1]} index={0}/>
                    <SubjectCard subject={subjects[0][2]} index={1}/>
                    <SubjectCard subject={subjects[0][4]} index={2}/>
                    <SubjectCard subject={subjects[0][7]} index={3}/>
                </div>
            </ViewContext.Provider>
        </motion.div>
    )
}

export default Subjects;