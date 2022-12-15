import React, {useContext, useState, useEffect} from 'react';

import { ViewContext } from './ViewContext';

import Language from './Language';


import { languages } from './Data';

import SubjectCard from './SubjectCard1';
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
        "View": 'introductionView'
        },
        {
        "Title": "Знакомство",
        "Image": GreetingIcon,
        "Link": 'greeting',
        "View": 'greetingView'
        },
        {
        "Title": "Семья",
        "Image": FamilyIcon,
        "Link": 'family',
        "View": 'familyView'
        },
        {
        "Title": "Природа",
        "Image": NatureIcon,
        "Link": 'nature',
        "View": 'natureView'
        },
        {
        "Title": "Животные",
        "Image": AnimalsIcon,
        "Link": 'animals',
        "View": 'animalsView'
        },
        {
        "Title": "Культура и еда",
        "Image": CultureFoodIcon,
        "Link": 'culture-food',
        "View": 'cultureFoodView'
        },
        {
        "Title": "Одежда",
        "Image": ClothesIcon,
        "Link": 'clothes',
        "View": 'clothesView'
        },
        {
        "Title": "Сказки",
        "Image": MoonGirlIcon,
        "Link": 'moon-girl',
        "View": 'taleView'
        },
        {
        "Title": "Музыка",
        "Image": FolkloreIcon,
        "Link": 'folklore',
        "View": 'folkloreView'
        },
        {
        "Title": "Известные люди",
        "Image": FamousPeopleIcon,
        "Link": 'famous-people',
        "View": 'famousPeopleView'
        }]

    ];
    return(
        <motion.div className='subjectsPage' initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
            <ViewContext.Provider value={{currentView, setView}}>
                <div className='buttonsContainer'>
                    <SubjectCard subject={subjects[0][0]} index={0}/>
                    <SubjectCard subject={subjects[0][1]} index={1}/>
                    <SubjectCard subject={subjects[0][2]} index={2}/>
                    <SubjectCard subject={subjects[0][3]} index={3}/>
                    <SubjectCard subject={subjects[0][4]} index={4}/>
                    <SubjectCard subject={subjects[0][5]} index={5}/>
                    <SubjectCard subject={subjects[0][6]} index={6}/>
                    <SubjectCard subject={subjects[0][7]} index={7}/>
                    <SubjectCard subject={subjects[0][8]} index={8}/>
                    <SubjectCard subject={subjects[0][9]} index={9}/>
                </div>
            </ViewContext.Provider>
        </motion.div>
    )
}

export default Subjects;