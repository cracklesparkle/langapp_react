import React, {useContext, useState} from 'react';

import { ViewContext } from './ViewContext';

import Language from './Language';


import { languages } from './Data';

import SubjectCard from './SubjectCard';
import IntroductionIcon from './icons/introduction.png';
import AnimalsIcon from './icons/animals.png';
import ClothesIcon from './icons/clothes.png';
import CultureFoodIcon from './icons/culture-food.png';
import FamilyIcon from './icons/family.png';
import FamousPeopleIcon from './icons/famous-people.png';
import FolkloreIcon from './icons/folklore.png';
import GreetingIcon from './icons/greeting.png';
import MoonGirlIcon from './icons/moon-girl.png';
import NatureIcon from './icons/nature.png';

import {motion} from 'framer-motion';

function Subjects(){

    const {currentView, setView} = useContext(ViewContext);

    const subjects = [
        {
        "Title": "Введение",
        "Image": IntroductionIcon,
        "Link": 'introduction',
        "View": 'languageView'
        },
        {
        "Title": "Приветствие, знакомство",
        "Image": GreetingIcon,
        "Link": 'greeting',
        "View": 'subjectView'
        },
        {
        "Title": "Семья",
        "Image": FamilyIcon,
        "Link": 'family',
        "View": 'subjectView'
        },
        {
        "Title": "Природа",
        "Image": NatureIcon,
        "Link": 'nature',
        "View": 'subjectView'
        },
        {
        "Title": "Животные",
        "Image": AnimalsIcon,
        "Link": 'animals',
        "View": 'subjectView'
        },
        {
        "Title": "Культура и еда",
        "Image": CultureFoodIcon,
        "Link": 'culture-food',
        "View": 'subjectView'
        },
        {
        "Title": "Одежда",
        "Image": ClothesIcon,
        "Link": 'clothes',
        "View": 'subjectView'
        },
        {
        "Title": "Девочка и луна",
        "Image": MoonGirlIcon,
        "Link": 'moon-girl',
        "View": 'subjectView'
        },
        {
        "Title": "Фольклор",
        "Image": FolkloreIcon,
        "Link": 'folklore',
        "View": 'subjectView'
        },
        {
        "Title": "Известные люди",
        "Image": FamousPeopleIcon,
        "Link": 'famous-people',
        "View": 'subjectView'
        }
    ];
    return(
        <motion.div className='subjectsPage' initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
            <ViewContext.Provider value={{currentView, setView}}>
                <div className='buttonsContainer'>
                    <SubjectCard subject={subjects[0]}/>
                    <SubjectCard subject={subjects[1]}/>
                    <SubjectCard subject={subjects[2]}/>
                    <SubjectCard subject={subjects[3]}/>
                    <SubjectCard subject={subjects[4]}/>
                    <SubjectCard subject={subjects[5]}/>
                    <SubjectCard subject={subjects[6]}/>
                    <SubjectCard subject={subjects[7]}/>
                    <SubjectCard subject={subjects[8]}/>
                    <SubjectCard subject={subjects[9]}/>
                </div>
            </ViewContext.Provider>
        </motion.div>
    )
}

export default Subjects;