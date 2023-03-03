import React, { useContext, useState, useEffect, createContext } from 'react';

import { motion } from 'framer-motion';
import { ViewContext } from '../../ViewContext';
import Button from '../../components/Button';
import SoundButton from '../../components/SoundButton';

import { quizFamily1, quizTales } from '../../pages/yakut/quizData';
import Quiz from '../../Quiz';

import SubjectCard from '../../SubjectCard2';

import { tales } from './audio';

import Tale1 from './Tale1.jsx';
import Tale2 from './Tale2.jsx';
import Tale3 from './Tale3.jsx';
import Tale4 from './Tale4.jsx';
import Tale5 from './Tale5.jsx';
import Tale6 from './Tale6.jsx';
import Tale7 from './Tale7.jsx';
import Tale8 from './Tale8.jsx';
import Tale9 from './Tale9.jsx';
import Tale10 from './Tale10.jsx';

import imgMember1 from '../../languages/yukaghir/family/image1.png';
import imgMember2 from '../../languages/yukaghir/family/image2.png';
import imgMember3 from '../../languages/yukaghir/family/image3.png';
import imgMember4 from '../../languages/yukaghir/family/image4.png';
import imgMember5 from '../../languages/yukaghir/family/image5.png';
import imgMember6 from '../../languages/yukaghir/family/image6.png';
import imgMember7 from '../../languages/yukaghir/family/image7.png';
import imgMember8 from '../../languages/yukaghir/family/image8.png';

import imageIntroduction1 from '../../languages/yakut/tales/introduction/1.png';
import imageIntroduction2 from '../../languages/yakut/tales/introduction/2.png';
import imageIntroduction3 from '../../languages/yakut/tales/introduction/3.png';
import imageIntroduction4 from '../../languages/yakut/tales/introduction/4.png';

import imageQuiz1 from '../../languages/yakut/tales/quiz/1.png';
import imageQuiz2 from '../../languages/yakut/tales/quiz/2.png';
import imageQuiz3 from '../../languages/yakut/tales/quiz/3.png';


import imageTale1 from '../../languages/yakut/tales/СТАРУХА БЯЙБЯРИКЯН С ПЯТЬЮ КОРОВАМИ.png';
import imageTale2 from '../../languages/yakut/tales/ВОДЯНАЯ КРЫСА И ПТИЧКА.png';
import imageTale3 from '../../languages/yakut/tales/ГАГАРА И ВОРОН.png';
import imageTale4 from '../../languages/yakut/tales/КАК ТРИ БРАТА ОГОНЬ ДОБЫЛИ.png';
import imageTale5 from '../../languages/yakut/tales/КАК ЛЯГУШКА ВЕРХОМ ЕЗДИЛА.png';
import imageTale6 from '../../languages/yakut/tales/ЛИСА И МЕДВЕД1.png';
import imageTale7 from '../../languages/yakut/tales/МЫШЬ И ЛОСЬ..png';
import imageTale8 from '../../languages/yakut/tales/МЭНИК МЭНИГИЙЭЭН..png';
import imageTale9 from '../../languages/yakut/tales/ОБЛЕГЧИВШИЙ ПОКЛАЖУ..png';
import imageTale10 from '../../languages/yakut/tales/СТАРУХА ТЭБЭНЭКЭЭН..png';

import taleIcon1 from '../../languages/yakut/tales/subjectIcons/СТАРУХА БЯЙБЯРИКЯН С ПЯТЬЮ КОРОВАМИ.png';
import taleIcon2 from '../../languages/yakut/tales/subjectIcons/ВОДЯНАЯ КРЫСА И ПТИЧКА.png';
import taleIcon3 from '../../languages/yakut/tales/subjectIcons/ГАГАРА И ВОРОН.png';
import taleIcon4 from '../../languages/yakut/tales/subjectIcons/КАК ТРИ БРАТА ОГОНЬ ДОБЫЛИ.png';
import taleIcon5 from '../../languages/yakut/tales/subjectIcons/КАК ЛЯГУШКА ВЕРХОМ ЕЗДИЛА.png';
import taleIcon6 from '../../languages/yakut/tales/subjectIcons/ЛИСА И МЕДВЕД1.png';
import taleIcon7 from '../../languages/yakut/tales/subjectIcons/МЫШЬ И ЛОСЬ..png';
import taleIcon8 from '../../languages/yakut/tales/subjectIcons/МЭНИК МЭНИГИЙЭЭН..png';
import taleIcon9 from '../../languages/yakut/tales/subjectIcons/ОБЛЕГЧИВШИЙ ПОКЛАЖУ..png';
import taleIcon10 from '../../languages/yakut/tales/subjectIcons/СТАРУХА ТЭБЭНЭКЭЭН..png';

import audio1 from "../../languages/yukaghir/family/audio/1. мама.mp3";
import audio2 from "../../languages/yukaghir/family/audio/2. маму зовут анна.mp3";
import audio3 from "../../languages/yukaghir/family/audio/3. папа.mp3";
import audio4 from "../../languages/yukaghir/family/audio/4. папу зовут николай.mp3";
import audio5 from "../../languages/yukaghir/family/audio/5. бабушка.mp3";
import audio6 from "../../languages/yukaghir/family/audio/6. бабушка красиво поет.mp3";
import audio7 from "../../languages/yukaghir/family/audio/7. дедушка.mp3";
import audio8 from "../../languages/yukaghir/family/audio/8. мой дедушка рыбак.mp3";
import audio9 from "../../languages/yukaghir/family/audio/9. старший брат.mp3";
import audio10 from "../../languages/yukaghir/family/audio/10. мой старший брат учится в десятом классе.mp3";
import audio11 from "../../languages/yukaghir/family/audio/11. старшая сестра.mp3";
import audio12 from "../../languages/yukaghir/family/audio/12. старшая сестра учится в университете.mp3";
import audio13 from "../../languages/yukaghir/family/audio/13. младший брат сестра.mp3";
import audio14 from "../../languages/yukaghir/family/audio/14. моя сестренка учится в четвертом классе.mp3";
import audio15 from "../../languages/yukaghir/family/audio/15. дядя старший брат мамы.mp3";
import audio16 from "../../languages/yukaghir/family/audio/16. дядя работает на электростанции.mp3";
import audio17 from "../../languages/yukaghir/family/audio/17. дядя младший брат мамы.mp3";
import audio18 from "../../languages/yukaghir/family/audio/18. дядя работает в жкх.mp3";
import audio19 from "../../languages/yukaghir/family/audio/19. тетя старшая сестра мамы.mp3";
import audio20 from "../../languages/yukaghir/family/audio/20. моя тетя врач.mp3";
import audio21 from "../../languages/yukaghir/family/audio/21. тетя младшая сестра мамы.mp3";
import audio22 from "../../languages/yukaghir/family/audio/22. у тети трое детей.mp3";
import audio23 from "../../languages/yukaghir/family/audio/23. дядя старший брат папы.mp3";
import audio24 from "../../languages/yukaghir/family/audio/24. дядя учитель русского языка.mp3";
import audio25 from "../../languages/yukaghir/family/audio/25. дядя младший брат папы.mp3";
import audio26 from "../../languages/yukaghir/family/audio/26. мой дядя спортсмен.mp3";
import audio27 from "../../languages/yukaghir/family/audio/27. тетя старгая сестра папы.mp3";
import audio28 from "../../languages/yukaghir/family/audio/28. тетя работает в детском саду она бухгалтер.mp3";
import audio29 from "../../languages/yukaghir/family/audio/29. тетя младшая сестра папы.mp3";
import audio30 from "../../languages/yukaghir/family/audio/30. моя тетя швея.mp3";
import audio31 from "../../languages/yukaghir/family/audio/31. невестка жена брата.mp3";
import audio32 from "../../languages/yukaghir/family/audio/32. невестка живет в москве.mp3";
import audio33 from "../../languages/yukaghir/family/audio/33. зять муж сестры.mp3";
import audio34 from "../../languages/yukaghir/family/audio/34. зятя зовут дима.mp3";


import IntroductionIcon from '../../icons/introduction.png';
import AnimalsIcon from '../../icons/animals.png';
import ClothesIcon from '../../icons/clothes.png';
import CultureFoodIcon from '../../icons/culture-food.png';
import FamilyIcon from '../../icons/family.png';
import FamousPeopleIcon from '../../icons/famous-people.png';
import FolkloreIcon from '../../icons/folklore.png';
import GreetingIcon from '../../icons/greeting.png';
import MoonGirlIcon from '../../icons/moon-girl.png';
import NatureIcon from '../../icons/nature.png';

const data = [
    {
        "header1": "Мама",
        "subheader1": "Эньиэ",
        "audio1": audio1,
        "header2": "Маму зовут Анна.",
        "subheader2": "Эньиэ кирийэ Анна.",
        "audio2": audio2,
        "images": [imgMember5]
    },
    {
        "header1": "Папа",
        "subheader1": "Амаа",
        "audio1": audio3,
        "header2": "Папу зовут Николай",
        "subheader2": "Эньиэ кирийэ Николай.",
        "audio2": audio4,
        "images": [imgMember6]
    },
    {
        "header1": "Бабушка",
        "subheader1": "Абучиэ",
        "audio1": audio5,
        "header2": "Бабушка красиво поёт",
        "subheader2": "Абучиэ амутнэ йахтаануй",
        "audio2": audio6,
        "images": [imgMember2]
    },
    {
        "header1": "Дедушка",
        "subheader1": "Хайчиэ",
        "audio1": audio7,
        "header2": "Мой дедушка рыбак",
        "subheader2": "Мэт хайчиэ саабандьэбаниэчэ.",
        "audio2": audio8,
        "images": [imgMember3]
    },
    {
        "header1": "Старший брат",
        "subheader1": "Акаа",
        "audio1": audio9,
        "header2": "Мой старший брат учится в десятом классе",
        "subheader2": "Мэт акаа кунильисчэ классха ураануй.",
        "audio2": audio10,
        "images": [imgMember6]
    },
    {
        "header1": "Старшая сестра",
        "subheader1": "Экыа",
        "audio1": audio11,
        "header2": "Старшая сестра учится в университете",
        "subheader2": "Экыа университетха ураануй",
        "audio2": audio12,
        "images": [imgMember8]
    },
    {
        "header1": "Младший брат, сестра",
        "subheader1": "Эмдьэ",
        "audio1": audio13,
        "header2": "Моя сестрёнка учится в четвертом классе",
        "subheader2": "Мэт эмдьэ йэлэклисчэ классха ураануй",
        "audio2": audio14,
        "images": [imgMember4, imgMember7]
    }
]

//Моя семья / Мин дьиэ кэргэним
//(Рассказ школьника/ үөрэнээччи кэпсээнэ)
const text1 = [
    {
        "header1": "У меня большая семья из семи человек: я, мама, папа, старшая сестра, братик, бабушка и дедушка.",
        "subheader1": "Биһиги сэттэ киһилээх улахан дьиэ кэргэн буолабыт: мин, ийэм, аҕам, эдьиийим, быраатым, эбэм уонна эһэм.",
        "audio1": audio15,
    },
    {
        "header1": "Мы живем большом доме в деревне.",
        "subheader1": "Биһиги дэриэбинэҕэ киэҥ-куоҥ дьиэҕэ олоробут.",
        "audio1": audio17,
    },
    {
        "header1": "Мой папа Джулус Петрович встает раньше всех, потому что ему рано на работу.",
        "subheader1": "Аҕам Дьулус Петрович, барыларыттан эрдэ туран, үлэтигэр барар.",
        "audio1": audio19,
    },
    {
        "header1": "Он работает инженером.",
        "subheader1": "Кини – инженер.",
        "audio1": audio21,
    },
    {
        "header1": "По работе ему часто приходится ездить в длительные командировки.",
        "subheader1": "Үлэтинэн үгүстүк уһун кэмнээх командировкаларга сылдьар.",
        "audio1": audio23,
    },
    {
        "header1": "Он очень трудолюбивый и помогает матери.",
        "subheader1": "Кини наһаа үлэһит уонна ийэбитигэр көмөлөһөр.",
        "audio1": audio25,
    },
    {
        "header1": "Еще он занимается спортом.",
        "subheader1": "Кини өссө спордунан дьарыктанар.",
        "audio1": audio27,
    },
    {
        "header1": "Я очень люблю своего отца.",
        "subheader1": "Мин аҕабын олус күүскэ таптыыбын.",
        "audio1": audio29,
    },
    {
        "header1": "Мою маму зовут Аина Ивановна.",
        "subheader1": "Мин ийэм аата Айыына Ивановна.",
        "audio1": audio31,
    },
    {
        "header1": "Для меня мама – самый дорогой и близкий человек.",
        "subheader1": "Миэхэ ийэм саамай күндү уонна чугас киһим.",
        "audio1": audio33,
    },
    {
        "header1": "Мама работает бухгалтером.",
        "subheader1": "Ийэм буҕаалтыр идэлээх.",
        "audio1": audio31,
    },
    {
        "header1": "Она хороший специалист.",
        "subheader1": "Кини үчүгэй үлэһит.",
        "audio1": audio33,
    },
    {
        "header1": "Очень вкусно готовит.",
        "subheader1": "Наһаа минньигэстик астыыр.",
        "audio1": audio31,
    },
    {
        "header1": "Я обожаю ее пирожки, а моя сестра Айта – оладьи.",
        "subheader1": "Мин кини бэрэскитин сөбүлүүбүн, оттон балтым Айта – алаадьытын.",
        "audio1": audio33,
    },
    {
        "header1": "Сестра Айта старше меня на три года.",
        "subheader1": "Айта миигиттэн үс сыл аҕа.",
        "audio1": audio31,
    },
    {
        "header1": "Моя сестра учится в девятом классе, а я – в шестом.",
        "subheader1": "Эдьиийим тохсус кылааска үөрэнэр, оттон  мин –  алтыска.",
        "audio1": audio33,
    },
    {
        "header1": "Мы любим учиться и играть с друзьями.",
        "subheader1": "Биһиги үөрэнэрбитин уонна доҕотторбутун кытта оонньуурбутун астынабыт.",
        "audio1": audio31,
    },
    {
        "header1": "Когда мы приходим домой из школы, мы смотрим телевизор, а потом ужинаем и делаем уроки. ",
        "subheader1": "Оскуолаттан дьиэбитигэр кэллэхпитинэ, бастаан тэлэбиисэр көрөбүт, ол кэнниттэн киэһээҥҥибитин аһыыбыт, онтон уруок ааҕабыт. ",
        "audio1": audio33,
    },
    {
        "header1": "У меня есть ещё младший братик. ",
        "subheader1": "Мин өссө кыра бырааттаахпын.",
        "audio1": audio31,
    },
    {
        "header1": "Его зовут Аял. ",
        "subheader1": "Кини аата Айаал диэн.",
        "audio1": audio33,
    },
    {
        "header1": "Он очень любит играть в компьютерные игры.",
        "subheader1": "Кини көмпүүтэргэ оонньуурун сөбүлүүр. ",
        "audio1": audio31,
    },
    {
        "header1": "С ним мне всегда весело и интересно. ",
        "subheader1": "Кинилиин сылдьар өрүү көрдөөх уонна интэриэһинэй.",
        "audio1": audio33,
    },
    {
        "header1": "В нашем доме всегда чисто и тепло.",
        "subheader1": "Биһиги дьиэбит өрүү ыраас уонна сылаас.",
        "audio1": audio31,
    },
    {
        "header1": "Наша бабушка – уважаемый человек. ",
        "subheader1": "Биһиги эбээбит – ытыктанар киһи.",
        "audio1": audio33,
    },
    {
        "header1": "Дедушка – ветеран войны и труда. ",
        "subheader1": "Эһээбит – сэрии уонна үлэ бэтэрээнэ.",
        "audio1": audio31,
    },
    {
        "header1": "Интересно слушать дедушку, когда она рассказывает о военных годах. ",
        "subheader1": "Эһээбит сэрии сылларын туһунан кэпсиирин сэҥээрэн истэбит. ",
        "audio1": audio33,
    },
    {
        "header1": "Наша бабушка очень добрая и никогда не сердится.",
        "subheader1": "Биһиги эбээбит амарах санаалаах уонна хаһан да кыыһырбат.",
        "audio1": audio33,
    },
    {
        "header1": "Мы помогаем бабушке и маме в огороде.",
        "subheader1": "Эбээлээх эһээбитигэр баран, оҕуруоттарыгар көмөлөһөбүт.",
        "audio1": audio33,
    },
    {
        "header1": "У нас есть кот.",
        "subheader1": "Биһиги куоскалаахпыт.",
        "audio1": audio33,
    },
    {
        "header1": "Нашего котенка все считают полноценным членом семьи. ",
        "subheader1": "Куоскабытын эмиэ дьиэ кэргэн тутаах чилиэнэ.",
        "audio1": audio33,
    },
    {
        "header1": "Наша семья очень дружная. ",
        "subheader1": "Биһиги дьиэ кэргэммит  олус иллээх.",
        "audio1": audio33,
    },
    {
        "header1": "Я хочу, чтобы она оставалась такой всегда.",
        "subheader1": "Мин өрүү маннык иллээх буолуон баҕарабын.",
        "audio1": audio33,
    },
    {
        "header1": "",
        "subheader1": "",
        "audio1": audio33,
    }
]

//Диалог / Кэпсэтии
const text2 = [
    {
        "header1": "– Привет, Айтал! Мы же десять лет не виделись. Как дела? Я слышал, у тебя уже своя семья.",
        "subheader1": "– Айтал, дорообо! Уон сыл көрсүбэтэх эбиппит. Туох сонун? Ыал буолбут диэн истибитим.",
        "audio1": audio33,
    },
    {
        "header1": "– Да, у меня большая семья. Нас четверо: я, моя жена, сын и дочь.",
        "subheader1": "– Оннук, улахан дьиэ кэргэннээхпин. Төрдүөбүт: мин, кэргэним, уолум уонна кыыһым. ",
        "audio1": audio33,
    },
    {
        "header1": "– Расскажи мне о своей семье.",
        "subheader1": "– Дьиэ кэргэниҥ туһунан кэпсээ эрэ.  ",
        "audio1": audio33,
    },
    {
        "header1": "– Мою жену зовут Сардана. Моего сына зовут Эрчим, а дочь – Нюргуяна.",
        "subheader1": "– Кэргэним Сардаана диэн. Уолум аата Эрчим, оттон кыыһым –Ньургуйаана.",
        "audio1": audio33,
    },
    {
        "header1": "– Сколько лет твоим детям?",
        "subheader1": "– Оҕолоруҥ хас саастаахтарый?",
        "audio1": audio33,
    },
    {
        "header1": "– Сыну девять, он уже ходит в школу. А дочке шесть.",
        "subheader1": "– Уолум тоҕустаах, оскуолаҕа сылдьар. Кыыһым алталаах.",
        "audio1": audio33,
    },
    {
        "header1": "– Где вы живете?",
        "subheader1": "– Ханна олороҕут?",
        "audio1": audio33,
    },
    {
        "header1": "– Мы живем в селе Боробул Таттинского района.",
        "subheader1": "– Биһиги Таатта улууһун Боробул сэлиэнньэтигэр олоробут.",
        "audio1": audio33,
    },
    {
        "header1": "– Передавай семье от меня наилучшие пожелания.",
        "subheader1": "– Дьоҥҥор миигиттэн эҕэрдэбин тиэрдээр.",
        "audio1": audio33,
    },
    {
        "header1": "– Хорошо.",
        "subheader1": "– Сөп.",
        "audio1": audio33,
    }
]

//Диалог / Сэһэргэһии
const text3 = [
    {
        "header1": "– Твоя семья большая или маленькая?",
        "subheader1": "– Эн дьиэ кэргэниҥ улахан дуу, дьоҕус дуу?",
        "audio1": audio33,
    },
    {
        "header1": "– Ни большая и ни маленькая. У меня есть мама, папа и маленькая сестра.",
        "subheader1": "– Улахан да, кыра да буолбатах. Ийэлээхпин, аҕалаахпын уонна кыра балтылаахпын. ",
        "audio1": audio33,
    },
    {
        "header1": "– Кем работает твой папа?",
        "subheader1": "– Аҕаҥ тугу үлэлиир? ",
        "audio1": audio33,
    },
    {
        "header1": "– Он водитель, и он работает с утра до ночи. Он приходит домой очень поздно.",
        "subheader1": "– Кини суоппар, сарсыардаттан киэһээҥҥэ диэри үлэлиир. Дьиэтигэр хойут кэлэр. ",
        "audio1": audio33,
    },
    {
        "header1": "– Сколько ему лет?",
        "subheader1": "– Хас саастааҕый?",
        "audio1": audio33,
    },
    {
        "header1": "– Ему 38. А моя мама на 5 лет моложе, ей 33 года.",
        "subheader1": "– Отут аҕыстаах. Ийэм киниттэн  5 сыл кыра, 33 саастаах. ",
        "audio1": audio33,
    },
    {
        "header1": "– Чем она занимается?",
        "subheader1": "– Ийэҥ туох дьарыктааҕый?",
        "audio1": audio33,
    },
    {
        "header1": "– Работает учителем якутского в школе. Дети любят ее уроки.",
        "subheader1": "– Оскуолаҕа саха тылын учууталынан үлэлиир. Оҕолор кини уруогун сөбүлүүллэр. ",
        "audio1": audio33,
    },
    {
        "header1": "– Что делают твои родители сейчас?",
        "subheader1": "– Төрөппүттэриҥ билигин тугу гына сылдьаллар?",
        "audio1": audio33,
    },
    {
        "header1": "– Мой папа работает в данный момент. А мама бегает в парке, я думаю. Она всегда бегает в 7 вечера.",
        "subheader1": "– Аҕам үлэтигэр, оттон ийэм, бука, пааркаҕа сүүрэ сылдьара буолуо. Кини киэһэ аайы 7 чааска сүүрэр.  ",
        "audio1": audio33,
    },
    {
        "header1": "– А где твоя сестренка сейчас?",
        "subheader1": "– Оттон балтыҥ ханнаный?",
        "audio1": audio33,
    },
    {
        "header1": "– Я уверен, что она смотрит мультики с бабушкой. Она обычно смотрит ТВ по вечерам.",
        "subheader1": "– Эбээтин кытта мультик көрө олорор буолуохтаах. Кини киэһэтин тэлэбиисэр көрөр.",
        "audio1": audio33,
    }
]

//Словарь / Тылдьыт
const dictionary = [
    {
        "sentence": "Семья",
        "translation": "дьиэ кэргэн, ыал",
        "avatar": "boy",
        "audio": audio1
    },
    {
        "sentence": "Родители",
        "translation": "төрөппүттэр",
        "avatar": "girl",
        "audio": audio2
    },
    {
        "sentence": "Отец, папа",
        "translation": "аҕа",
        "avatar": "boy",
        "audio": audio1
    },
    {
        "sentence": "Мать, мама",
        "translation": "ийэ",
        "avatar": "girl",
        "audio": audio2
    },
    {
        "sentence": "Дочь",
        "translation": "кыыс оҕо, кыыс",
        "avatar": "boy",
        "audio": audio1
    },
    {
        "sentence": "Сын",
        "translation": "уол оҕо, уол",
        "avatar": "girl",
        "audio": audio2
    },
    {
        "sentence": "Старшая сестра",
        "translation": "эдьиий",
        "avatar": "boy",
        "audio": audio1
    },
    {
        "sentence": "Младшая сестра",
        "translation": "балты",
        "avatar": "girl",
        "audio": audio2
    },
    {
        "sentence": "Родные сестры",
        "translation": "аҕас-балыс",
        "avatar": "boy",
        "audio": audio1
    },
    {
        "sentence": "Старший брат",
        "translation": "убай",
        "avatar": "girl",
        "audio": audio2
    },
    {
        "sentence": "Младший брат",
        "translation": "быраат",
        "avatar": "boy",
        "audio": audio1
    },
    {
        "sentence": "Родные братья",
        "translation": "ини-бии",
        "avatar": "girl",
        "audio": audio2
    },
    {
        "sentence": "Бабушка",
        "translation": "эбээ",
        "avatar": "girl",
        "audio": audio2
    },
    {
        "sentence": "Дедушка",
        "translation": "эһээ",
        "avatar": "boy",
        "audio": audio1
    },
    {
        "sentence": "Внук",
        "translation": "сиэн",
        "avatar": "girl",
        "audio": audio2
    },
    {
        "sentence": "Невестка, сноха",
        "translation": "кийиит, саҥас",
        "avatar": "girl",
        "audio": audio2
    },
    {
        "sentence": "Невеста",
        "translation": "сүктэр кыыс",
        "avatar": "boy",
        "audio": audio1
    },
    {
        "sentence": "Зять",
        "translation": "күтүөт",
        "avatar": "girl",
        "audio": audio2
    },
    {
        "sentence": "Свекровь",
        "translation": "ийэ хотун",
        "avatar": "girl",
        "audio": audio2
    },
    {
        "sentence": "Свекор",
        "translation": "аҕа тойон",
        "avatar": "boy",
        "audio": audio1
    },
    {
        "sentence": "Теща",
        "translation": "ийэ кылын",
        "avatar": "girl",
        "audio": audio2
    },
    {
        "sentence": "Тесть",
        "translation": "аҕа кылын",
        "avatar": "boy",
        "audio": audio1
    },
    {
        "sentence": "Двоюродные братья",
        "translation": "тастыҥ бырааттыылар",
        "avatar": "girl",
        "audio": audio2
    },
    {
        "sentence": "Родственники",
        "translation": "аймах, уруу",
        "avatar": "boy",
        "audio": audio1
    },
    {
        "sentence": "Супруги",
        "translation": "кэргэнниилэр",
        "avatar": "girl",
        "audio": audio2
    },
    {
        "sentence": "Супруг",
        "translation": "эр",
        "avatar": "boy",
        "audio": audio1
    },
    {
        "sentence": "Супруга",
        "translation": "ойох",
        "avatar": "girl",
        "audio": audio2
    },
    {
        "sentence": "Мачеха",
        "translation": "сүтүөр ийэ",
        "avatar": "boy",
        "audio": audio1
    },
    {
        "sentence": "Отчим",
        "translation": "кииринньэҥ аҕа",
        "avatar": "girl",
        "audio": audio2
    },
    {
        "sentence": "Муж (жена)",
        "translation": "кэргэн",
        "avatar": "boy",
        "audio": audio1
    },
    {
        "sentence": "Разведенный",
        "translation": "арахсыбыт",
        "avatar": "girl",
        "audio": audio2
    },
    {
        "sentence": "Близнецы",
        "translation": "игирэ",
        "avatar": "boy",
        "audio": audio1
    },
    {
        "sentence": "Женатый",
        "translation": "ойохтоох, кэргэннээх",
        "avatar": "girl",
        "audio": audio2
    },
    {
        "sentence": "Замужняя",
        "translation": "эрдээх, кэргэннээх",
        "avatar": "girl",
        "audio": audio2
    },
    {
        "sentence": "Холостой",
        "translation": "сулумах",
        "avatar": "boy",
        "audio": audio1
    },
    {
        "sentence": "Вдовец (вдова)",
        "translation": "огдообо",
        "avatar": "girl",
        "audio": audio2
    },
    {
        "sentence": "Приемный/усыновленный ребенок",
        "translation": "иитиэх оҕо",
        "avatar": "boy",
        "audio": audio1
    },
    {
        "sentence": "Ребенок",
        "translation": "оҕо",
        "avatar": "girl",
        "audio": audio2
    },
    {
        "sentence": "Свадьба",
        "translation": "сыбаайба, уруу",
        "avatar": "boy",
        "audio": audio1
    },
    {
        "sentence": "Дом",
        "translation": "дьиэ",
        "avatar": "girl",
        "audio": audio2
    },
    {
        "sentence": "Усадьба",
        "translation": "уһаайба, тиэргэн",
        "avatar": "boy",
        "audio": audio1
    },
    {
        "sentence": "Двор",
        "translation": "тэлгэһэ",
        "avatar": "girl",
        "audio": audio2
    }
];

//Разговорник
const phrases = [
    {
        "sentence": "Моя семья дружная.",
        "translation": "Мин дьиэ кэргэним иллээх.",
        "avatar": "boy",
        "audio": audio1
    },
    {
        "sentence": "Это моя семья.",
        "translation": "Бу мин дьиэ кэргэним.",
        "avatar": "girl",
        "audio": audio2
    },
    {
        "sentence": "Моя семья — самая лучшая. ",
        "translation": "Мин саамай үчүгэй дьиэ кэргэннээхпин.",
        "avatar": "boy",
        "audio": audio1
    },
    {
        "sentence": "Это моя мама (папа, старшая сестра, младшая сестра, старший брат, младший брат, бабушка, дедушка).",
        "translation": "Бу мин ийэм (аҕам, эдьиийим, балтым, убайым, быраатым, эбээм, эһээм). ",
        "avatar": "girl",
        "audio": audio2
    },
    {
        "sentence": "Самые любимые и родные люди.",
        "translation": "Саамай таптыыр уонна чугас дьонум.",
        "avatar": "boy",
        "audio": audio1
    },
    {
        "sentence": "Наша семейная традиция.",
        "translation": "Биһиги дьиэ кэргэммит үтүө үгэһэ.",
        "avatar": "girl",
        "audio": audio2
    },
    {
        "sentence": "Я очень люблю своего отца.",
        "translation": "Мин аҕабын олус күүскэ таптыыбын.",
        "avatar": "boy",
        "audio": audio1
    },
    {
        "sentence": "Мой папа работает в строительстве.",
        "translation": "Мин аҕам тутууга үлэлиир.",
        "avatar": "girl",
        "audio": audio2
    },
    {
        "sentence": "Большая ли у вас семья?",
        "translation": "Улахан дьиэ кэргэннээххин дуо?",
        "avatar": "boy",
        "audio": audio1
    },
    {
        "sentence": "Сколько человек?",
        "translation": "Хаһыаҕытый?",
        "avatar": "girl",
        "audio": audio2
    },
    {
        "sentence": "Нас пять человек.",
        "translation": "Биһиги бэһиэбит. ",
        "avatar": "boy",
        "audio": audio1
    },
    {
        "sentence": "Вы женаты (замужем)?",
        "translation": "Эн кэргэннээххин дуо? ",
        "avatar": "girl",
        "audio": audio2
    },
    {
        "sentence": "Нет, я холост (не замужем).",
        "translation": "Кэргэним суох.",
        "avatar": "girl",
        "audio": audio2
    },
    {
        "sentence": "Мою жену зовут Туяра.",
        "translation": "Мин кэргэним (ойоҕум) аата Туйаара.",
        "avatar": "boy",
        "audio": audio1
    },
    {
        "sentence": "Есть ли у вас дети?",
        "translation": "Эн оҕолооххун дуо?",
        "avatar": "girl",
        "audio": audio2
    },
    {
        "sentence": "Сколько детей?",
        "translation": "Хас оҕолооххун?",
        "avatar": "girl",
        "audio": audio2
    },
    {
        "sentence": "У меня один ребенок (двое, трое).",
        "translation": "Биир (икки, үс) оҕолоохпун.",
        "avatar": "boy",
        "audio": audio1
    },
    {
        "sentence": "У меня нет детей.",
        "translation": "Мин оҕом суох.",
        "avatar": "girl",
        "audio": audio2
    },
    {
        "sentence": "Сколько лет сыну (дочери)? ",
        "translation": "Уолуҥ (кыыһыҥ) хас саастааҕый?",
        "avatar": "girl",
        "audio": audio2
    },
    {
        "sentence": "Дети большие?",
        "translation": "Оҕолоруҥ улахаттар дуо?",
        "avatar": "boy",
        "audio": audio1
    },
    {
        "sentence": "Нет, маленькие.",
        "translation": "Суох, кыралар.",
        "avatar": "girl",
        "audio": audio2
    },
    {
        "sentence": "Да, большие.",
        "translation": "Ээ, улахаттар.",
        "avatar": "boy",
        "audio": audio1
    },
    {
        "sentence": "Дети учатся или работают?",
        "translation": "Оҕолоруҥ үлэлииллэр дуу, үөрэнэллэр дуу?",
        "avatar": "girl",
        "audio": audio2
    },
    {
        "sentence": "Учатся.",
        "translation": "Үөрэнэллэр.",
        "avatar": "boy",
        "audio": audio1
    },
    {
        "sentence": "Работают.",
        "translation": "Үлэлииллэр.",
        "avatar": "girl",
        "audio": audio2
    },
    {
        "sentence": "Маленькие учатся, взрослые работают.",
        "translation": "Кыралар үөрэнэллэр, улахаттар үлэлииллэр.",
        "avatar": "boy",
        "audio": audio1
    },
    {
        "sentence": "Как зовут детей?",
        "translation": "Оҕолоруҥ ким диэн ааттаахтарый?",
        "avatar": "girl",
        "audio": audio2
    },
    {
        "sentence": "Есть у Вас родители?",
        "translation": "Төппүттэриҥ бааллар дуо?",
        "avatar": "boy",
        "audio": audio1
    },
    {
        "sentence": "Да. Живут в деревне.",
        "translation": "Бааллар. Дэриэбинэҕэ олороллор.",
        "avatar": "girl",
        "audio": audio2
    },
    {
        "sentence": "Мои родители старые. ",
        "translation": "Мин төрөппүттэрим кырдьаҕастар.",
        "avatar": "boy",
        "audio": audio1
    },
    {
        "sentence": "Я похож на отца.",
        "translation": "Мин аҕабар майгынныыбын.",
        "avatar": "girl",
        "audio": audio2
    },
    {
        "sentence": "Старший брат — блогер.",
        "translation": "Убайым – блогер.",
        "avatar": "boy",
        "audio": audio1
    },
    {
        "sentence": "Где работает отец (мать)?",
        "translation": "Аҕаҥ (ийэҥ) ханна үлэлиирий?",
        "avatar": "girl",
        "audio": audio2
    },
    {
        "sentence": "Отец работает в сфере торговли.",
        "translation": "Аҕам эргиэн эйгэтигэр үлэлиир.",
        "avatar": "girl",
        "audio": audio2
    },
    {
        "sentence": "Матъ работает в школе.",
        "translation": "Ийэм оскуолаҕа үлэлиир.",
        "avatar": "boy",
        "audio": audio1
    },
    {
        "sentence": "Сколько лет отцу (маме)?",
        "translation": "Аҕаҥ (ийэҥ) хас саастааҕый?",
        "avatar": "girl",
        "audio": audio2
    },
    {
        "sentence": "Где работаете сами?",
        "translation": "Бэйэҥ ханна үлэлиигиний?",
        "avatar": "boy",
        "audio": audio1
    },
    {
        "sentence": "Работаю в школе.",
        "translation": "Оскуолаҕа үлэлиибин.",
        "avatar": "girl",
        "audio": audio2
    },
    {
        "sentence": "Какую должность занимаете?",
        "translation": "Туох дуоһунастааххыный?",
        "avatar": "boy",
        "audio": audio1
    },
    {
        "sentence": "Я заведующий (заместитель директора, инженер).",
        "translation": "Мин сэбиэдиссэйбин (дириэктэр солбуйааччытабын, инженербин).",
        "avatar": "girl",
        "audio": audio2
    },
    {
        "sentence": "Где живете?",
        "translation": "Ханна олороҕут?",
        "avatar": "boy",
        "audio": audio1
    },
    {
        "sentence": "Я живу в деревне (поселке, участке, в городе).",
        "translation": "Мин дэриэбинэҕэ (бөһүөлэккэ, куоракка) олоробун.",
        "avatar": "girl",
        "audio": audio2
    },
    {
        "sentence": "Имеете ли свою квартиру (дом, комнату).",
        "translation": "Бэйэҥ кыбартыыралааххын (дьиэлээххин, хостооххун) дуо?",
        "avatar": "girl",
        "audio": audio2
    },
    {
        "sentence": "Да, имею квартиру.",
        "translation": "Ээ, дьиэ баар.",
        "avatar": "girl",
        "audio": audio2
    },
    {
        "sentence": "Живу вместе с родителями.",
        "translation": "Төрөппүттэрбин кытта олоробун.",
        "avatar": "girl",
        "audio": audio2
    },
    {
        "sentence": "Сколько комнат занимаете?",
        "translation": "Дьиэҕит хас хостооҕуй?",
        "avatar": "girl",
        "audio": audio2
    },
    {
        "sentence": "Занимаем четыре комнаты.",
        "translation": "Дьиэбит түөрт хостоох.",
        "avatar": "girl",
        "audio": audio2
    },
    {
        "sentence": "По какому адресу живете?",
        "translation": "Ханнык аадырыска олороҕун?",
        "avatar": "girl",
        "audio": audio2
    },
    {
        "sentence": "Живу по улице Ойунского.",
        "translation": "Ойуунускай уулуссатыгар олоробун.",
        "avatar": "girl",
        "audio": audio2
    },
    {
        "sentence": "Семья – это важнейшая опора для любого человека.",
        "translation": "Дьиэ кэргэн диэн ханнык баҕарар киһиэхэ тирэнэр тирэҕэ.",
        "avatar": "girl",
        "audio": audio2
    }
];
//Использованная литература: Поговорим по-якутски: Самоучитель языка саха. – Якутск : Бичик, 2002. – 176 с

//Тест / тургутук


const subjects = [
    {
        "Title": "Введение",
        "Image": IntroductionIcon,
        "View": 1
    },
    {
        "Title": "Бэйбэрикээн",
        "Image": taleIcon1,
        "View": 2
    },
    {
        "Title": "Водяная крыса и птичка",
        "Image": taleIcon2,
        "View": 3
    },
    {
        "Title": "Гагара и ворон",
        "Image": taleIcon3,
        "View": 4
    },
    {
        "Title": "Три брата",
        "Image": taleIcon4,
        "View": 5
    },
    {
        "Title": "Как лягушка верхом ездила",
        "Image": taleIcon5,
        "View": 6
    },
    {
        "Title": "Лиса и медведь",
        "Image": taleIcon6,
        "View": 7
    },
    {
        "Title": "Мышь и лось",
        "Image": taleIcon7,
        "View": 8
    },
    {
        "Title": "Мэник Мэнигийээн",
        "Image": taleIcon8,
        "View": 9
    },
    {
        "Title": "Облегчивший поклажу",
        "Image": taleIcon9,
        "View": 10
    },
    {
        "Title": "Старуха Тэбэнэкээн",
        "Image": taleIcon10,
        "View": 11
    },
    {
        "Title": "Тест",
        "Image": IntroductionIcon,
        "View": 12
    }
];

export const SubjectContext = createContext({
    currentSubject: 0,
    setCurrentSubject: () => { }
});

function Tale() {
    const { view, setView } = useContext(ViewContext);
    const [currentSubject, setCurrentSubject] = useState(0);

    const [page, setPage] = useState(0);

    const handleClick = event => {
        setCurrentSubject(currentSubject + 1)
        if (currentSubject === 12) setCurrentSubject(0)
    };

    const handleBack = event => {
        setCurrentSubject(currentSubject - 1)


        window.scrollTo(0, 0);
    };

    //pass to quiz
    const [state, setState] = useState(false);

    useEffect(() => {
        if (page == 2) {
            setPage(1)
            setState(false)
        }

    }, [state])

    return (
        <ViewContext.Provider value={{ view, setView }}>
            <SubjectContext.Provider value={{ currentSubject, setCurrentSubject }}>
                <motion.div className='talePage' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
                    {currentSubject === 0 && <div className='buttonsContainer'>
                        <SubjectCard subject={subjects[0]} index='coloredCard1' subjectContext={SubjectContext}/>
                        <SubjectCard subject={subjects[1]} index='coloredCard2' subjectContext={SubjectContext}/>
                        <SubjectCard subject={subjects[2]} index='coloredCard3' subjectContext={SubjectContext}/>
                        <SubjectCard subject={subjects[3]} index='coloredCard4' subjectContext={SubjectContext}/>
                        <SubjectCard subject={subjects[4]} index='coloredCard5' subjectContext={SubjectContext}/>
                        <SubjectCard subject={subjects[5]} index='coloredCard6' subjectContext={SubjectContext}/>
                        <SubjectCard subject={subjects[6]} index='coloredCard7' subjectContext={SubjectContext}/>
                        <SubjectCard subject={subjects[7]} index='coloredCard1' subjectContext={SubjectContext}/>
                        <SubjectCard subject={subjects[8]} index='coloredCard2' subjectContext={SubjectContext}/>
                        <SubjectCard subject={subjects[9]} index='coloredCard3' subjectContext={SubjectContext}/>
                        <SubjectCard subject={subjects[10]} index='coloredCard4' subjectContext={SubjectContext}/>
                        <SubjectCard subject={subjects[11]} index='coloredCard5' subjectContext={SubjectContext}/>
                    </div>}
                    {currentSubject === 1 && <Introduction />}
                    {currentSubject === 2 && <Tale1 />}
                    {currentSubject === 3 && <Tale2 />}
                    {currentSubject === 4 && <Tale3 />}
                    {currentSubject === 5 && <Tale4 />}
                    {currentSubject === 6 && <Tale5 />}
                    {currentSubject === 7 && <Tale6 />}
                    {currentSubject === 8 && <Tale7 />}
                    {currentSubject === 9 && <Tale8 />}
                    {currentSubject === 10 && <Tale9 />}
                    {currentSubject === 11 && <Tale10 />}
                    {currentSubject === 12 && <Test />}

                    {currentSubject != 0 && currentSubject != 12 && <div className="bottomNavbar">
                        {currentSubject > 1 ? <Button text='Назад' handleClick={handleBack} /> : <Button available={false} text='Назад' />}
                        {/* <button className='buttonLearn' onClick={handleClick}>Далее</button> */}
                        <Button text={currentSubject === 12 ? 'Вернуться к теме' : 'Далее'} handleClick={handleClick} />
                    </div>}
                </motion.div>
            </SubjectContext.Provider>
        </ViewContext.Provider>
    )
}

function Images({ props }) {
    if (props.length > 1) {
        return (
            <div className='asideKeep'>
                {props.map((image, i) => {
                    return (
                        <img className='memberImg' src={image} key={i}></img>
                    );
                })}
            </div>
        );
    }
    if (props.length == 1) {
        return (
            props.map((image, i) => {
                return (
                    <img className='memberImg' src={image} key={i}></img>
                );
            })
        )
    }
}


function Introduction() {
    return (
        <div className='tale-introduction'>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }} className='container'>
                <h1 className='header'>Урок № 8  /  Ахсыс үөрэх</h1>
                <h1 className='header'>Якутские народные сказки</h1>
                    <h3>В этом уроке почитаем и послушаем якутские народные сказки. Выучим слова, которые довольно часто употребляются в повседневной жизни якутов. А также выполним тест на понимание прочитанного по теме “Якутские сказки”.</h3>
                    <p>Сказки — один из основных видов устного творчества якутов. Для якутских сказок характерны светлый оптимизм, жизнеутверждающее начало, вера в силу простого человека, в победу добра над злом.</p>
                    <p>Сказки складывались в течении столетий и в своем развитии они изменялись в тесной связи с развитием всего уклада жизни; одни мотивы и образы отпадали, приобретались новые черты, по-новому трактовались древние элементы.</p>
                    <p>В сказочном репертуаре якутов имеются как произведения самобытного национального характера, так и произведения, сходные со сказками других народов. Заимствованные сюжеты и мотивы сказок приспосабливались к географическим, историческим, социально-экономическим и бытовым условиям. Они обрастали национально-бытовыми деталями, сочетались с местными сюжетами и мотивами, становились сказками национальными, а не чужеземными.</p>
                    <p>Несомненно, что громадное большинство бытующих в настоящее время сказок самобытного национального происхождения. Их создавал якутский народ. В их содержании, многообразной тематике отражается жизнь и духовный облик создавшего их народа, природные условия Якутии. Национальное своеобразие этих сказок проявляется в характерах и деятельности персонажей, в бытовых подробностях, в приемах изображения действительности и в языке.</p>
                    <p>По содержанию якутские сказки можно предварительно разделить на три большие группы: 1. Сказки о животных. 2. Волшебные или фантастические. 3. Бытовые сказки.</p>
                    <p>Сказку рассказывает мать своему ребенку, как только тот начинает понимать слова и разговаривать. Сила эстетического и воспитательного воздействия сказок огромна. Поэтому-то народ любит и бережно хранит их как ценное наследие прошлого.</p>
                    <img className='taleImage' src={imageIntroduction1}></img>
                    <img className='taleImage' src={imageIntroduction2}></img>
                <h1 className='header'>Саха остуоруйалара</h1>
                    <p>Остуоруйаҕа норуот бэйэтин баҕа санаатын, инникигэ эрэлин, күннээҕи олоҕун-дьаһаҕын ойуулаан-киэргэтэн кэпсиир.</p>
                    <p>Саха остуоруйаларын сүнньүнэн үс суолга араарыахха сөп: 1. Саха  төрүт остуоруйалара. 2. Нуучча кэпсээннэрин, остуоруйаларын сабыдыалларынан айыллыбыттар. 3. Нууччаттан ылыллыбыттар.</p>
                    <p>Ис хоһооннорунан маннык наардыыллар: 1. Хамсыыр-харамай туһунан. 2.  Дьиктилээхтэр-алыптаахтар. 3. Олох-дьаһах остуоруйалара.</p>
                    <p>Саха остуоруйалара үчүгэйи куһаҕантан арааран өйдүүр сиэрдээх дьону иитэллэр. Иккиһинэн,  кэнчээри ыччат айар, саҥарар, толкуйдуур, оҥорон көрөр дьоҕурдарын сайыннараллар, төрөөбүт тылга тапталы иҥэрэллэр, норуот муудараһыгар уһуйаллар.</p>
                    <img className='taleImage' src={imageIntroduction3}></img>
            
                    <div className='greetingImage'>
                        <img className='taleImage' src={imageIntroduction4}></img>
                        <p className='imageSubtitle'>Василий Корякин уруһуйдара. “Саха остуоруйалара” (Дьокуускай, 1996 с.) туһанныбыт.</p>
                    </div>
            </motion.div>
        </div>
    );
}

function Test() {
    const { currentSubject, setCurrentSubject } = useContext(SubjectContext);
    const PageContext = createContext({
        currentPage: 0,
        setCurrentPage: () => { }
    });
    const [currentPage, setCurrentPage] = useState(0);


    const [dialogue, setDialogue] = useState(0);

    const handleClick = event => {
        // if (dialogue < dialogue1.length - 1) {
        //     setDialogue(dialogue + 1)
        // }
        // if (dialogue == dialogue1.length - 1){
        //     setCurrentPage(1)
        // }
    };

    const handleBack = event => {
        if (dialogue > 0) {
            setDialogue(dialogue - 1)
        }
        window.scrollTo(0, 0);
    };

    //pass to quiz
    const[stateNavigate, setStateNavigate]=useState('none');

    useEffect(() => {
        if(stateNavigate == 'next'){
            setCurrentSubject(0);
        }
        
    },[stateNavigate])
    return (
        <PageContext.Provider value={{ currentPage, setCurrentPage }}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }} className="">
                {/* <h1 className='header'>Тест / тургутук</h1> */}
                {currentPage === 0 &&
                    <Quiz questions={quizTales.questions} quizTitle={quizTales.quizTitle} stateNavigate={setStateNavigate}/>
                }
            </motion.div>
        </PageContext.Provider>
    )
}

export default Tale