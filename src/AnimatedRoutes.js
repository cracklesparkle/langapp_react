import React from "react";

import Home from './Home';
import Subject from "./Subject";
import Subjects from './Subjects';
import Languages from './Languages';
import Language from './Language';

import {Routes, Route, useLocation} from 'react-router-dom';


import {AnimatePresence} from 'framer-motion';

function AnimatedRoutes(){
    const location = useLocation();

    const languages = [
        {
        "Title": "Юкагирский",
        "Image": "",
        "Link": "yukaghir",
        "Heading": "Юкагиры",
        "Description": "Юкагиры – один из древнейших народов северо-восточной Сибири. Самоназвание – wадулы и одулы. Юкагиры некогда составляли целое семейство близкородственных племен. В начале XVII в. русские первопроходцы застали остатки 13 юкагирских племен (алайи, когимэ, анаул, чуванджи, коромои, яндинджи и т.д.). Согласно документам, в начале XVII в. юкагиров было около 5000, обитавших на обширных территориях от Лены до Анадыря. Но уже к концу XVII в. их численность сократилась почти в 10 раз: большая часть исчезла во время эпидемий оспы, другие растворились в соседних народах, а остальные образовали две локальные группы. Сейчас они известны как нижнеколымские юкагиры и верхнеколымские юкагиры. Их языки в науке известны как «тундренный» и «лесной» юкагирский языки. По данным последней переписи (2010 г.) юкагиров составляет – 1603 человека. Тундренные юкагиры в основном проживают в посёлке Андрюшкино Нижнеколымского района, лесные юкагиры – в посёлке Нелемное Верхнеколымского района. Традиционные занятия юкагиров – оленеводство, рыболовство, охота на диких оленей." 
        },
        {
        "Title": "Эвенкийский",
        "Image": "",
        "Link": "evenki"
        },
        {
        "Title": "Эвенский",
        "Image": "",
        "Link": "even"
        },
        {
        "Title": "Якутский",
        "Image": "",
        "Link": "yakut"
        }
    ];

    return(
        <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home/>}/>
                
                <Route path="/subjects" element={<Subjects/>}/>
                <Route path="/languages" element={<Languages/>}/>
                
                <Route path="/subjects/introduction" element={<Subject/>}/>
                <Route path="/subjects/greeting" element={<Subject/>}/>

                <Route path="/languages/yukaghir" element={<Language language={languages[0]}/>}/>

            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes;