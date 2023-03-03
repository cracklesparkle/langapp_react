import React, { useContext, useState, useEffect, createContext } from 'react';

import { motion } from 'framer-motion';
import { ViewContext } from '../../ViewContext';
import Button from '../../components/Button';
import SoundButton from '../../components/SoundButton';

import { quizFamily1 } from '../../pages/yakut/quizData';
import Quiz from '../../Quiz';

import SubjectCard from '../../SubjectCard2';

import imgMember1 from '../../languages/yukaghir/family/image1.png';
import imgMember2 from '../../languages/yukaghir/family/image2.png';
import imgMember3 from '../../languages/yukaghir/family/image3.png';
import imgMember4 from '../../languages/yukaghir/family/image4.png';
import imgMember5 from '../../languages/yukaghir/family/image5.png';
import imgMember6 from '../../languages/yukaghir/family/image6.png';
import imgMember7 from '../../languages/yukaghir/family/image7.png';
import imgMember8 from '../../languages/yukaghir/family/image8.png';

import image1 from '../../languages/yakut/family/Сельская семья.jpg';
import image2 from '../../languages/yakut/family/якусткая семья.jpg';
import image3 from '../../languages/yakut/family/семья.png';

import { family_dialogue1, family_dialogue2, family_dictionary, family_phrases, family_story } from './audio';

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

//Моя семья / Мин дьиэ кэргэним
//(Рассказ школьника/ үөрэнээччи кэпсээнэ)
const text1 = [
    {
        "header1": "У меня большая семья из семи человек: я, мама, папа, старшая сестра, братик, бабушка и дедушка.",
        "subheader1": "Биһиги сэттэ киһилээх улахан дьиэ кэргэн буолабыт: мин, ийэм, аҕам, эдьиийим, быраатым, эбэм уонна эһэм.",
        "audio1": family_story[0],
    },
    {
        "header1": "Мы живем большом доме в деревне.",
        "subheader1": "Биһиги дэриэбинэҕэ киэҥ-куоҥ дьиэҕэ олоробут.",
        "audio1": family_story[1],
    },
    {
        "header1": "Мой папа Джулус Петрович встает раньше всех, потому что ему рано на работу.",
        "subheader1": "Аҕам Дьулус Петрович, барыларыттан эрдэ туран, үлэтигэр барар.",
        "audio1": family_story[2],
    },
    {
        "header1": "Он работает инженером.",
        "subheader1": "Кини – инженер.",
        "audio1": family_story[3],
    },
    {
        "header1": "По работе ему часто приходится ездить в длительные командировки.",
        "subheader1": "Үлэтинэн үгүстүк уһун кэмнээх командировкаларга сылдьар.",
        "audio1": family_story[4],
    },
    {
        "header1": "Он очень трудолюбивый и помогает матери.",
        "subheader1": "Кини наһаа үлэһит уонна ийэбитигэр көмөлөһөр.",
        "audio1": family_story[5],
    },
    {
        "header1": "Еще он занимается спортом.",
        "subheader1": "Кини өссө спордунан дьарыктанар.",
        "audio1": family_story[6],
    },
    {
        "header1": "Я очень люблю своего отца.",
        "subheader1": "Мин аҕабын олус күүскэ таптыыбын.",
        "audio1": family_story[7],
    },
    {
        "header1": "Мою маму зовут Аина Ивановна.",
        "subheader1": "Мин ийэм аата Айыына Ивановна.",
        "audio1": family_story[8],
    },
    {
        "header1": "Для меня мама – самый дорогой и близкий человек.",
        "subheader1": "Миэхэ ийэм саамай күндү уонна чугас киһим.",
        "audio1": family_story[9],
    },
    {
        "header1": "Мама работает бухгалтером.",
        "subheader1": "Ийэм буҕаалтыр идэлээх.",
        "audio1": family_story[10],
    },
    {
        "header1": "Она хороший специалист.",
        "subheader1": "Кини үчүгэй үлэһит.",
        "audio1": family_story[11],
    },
    {
        "header1": "Очень вкусно готовит.",
        "subheader1": "Наһаа минньигэстик астыыр.",
        "audio1": family_story[12],
    },
    {
        "header1": "Я обожаю ее пирожки, а моя сестра Айта – оладьи.",
        "subheader1": "Мин кини бэрэскитин сөбүлүүбүн, оттон балтым Айта – алаадьытын.",
        "audio1": family_story[13],
    },
    {
        "header1": "Сестра Айта старше меня на три года.",
        "subheader1": "Айта миигиттэн үс сыл аҕа.",
        "audio1": family_story[14],
    },
    {
        "header1": "Моя сестра учится в девятом классе, а я – в шестом.",
        "subheader1": "Эдьиийим тохсус кылааска үөрэнэр, оттон  мин –  алтыска.",
        "audio1": family_story[15],
    },
    {
        "header1": "Мы любим учиться и играть с друзьями.",
        "subheader1": "Биһиги үөрэнэрбитин уонна доҕотторбутун кытта оонньуурбутун астынабыт.",
        "audio1": family_story[16],
    },
    {
        "header1": "Когда мы приходим домой из школы, мы смотрим телевизор, а потом ужинаем и делаем уроки. ",
        "subheader1": "Оскуолаттан дьиэбитигэр кэллэхпитинэ, бастаан тэлэбиисэр көрөбүт, ол кэнниттэн киэһээҥҥибитин аһыыбыт, онтон уруок ааҕабыт. ",
        "audio1": family_story[17],
    },
    {
        "header1": "У меня есть ещё младший братик. ",
        "subheader1": "Мин өссө кыра бырааттаахпын.",
        "audio1": family_story[18],
    },
    {
        "header1": "Его зовут Аял. ",
        "subheader1": "Кини аата Айаал диэн.",
        "audio1": family_story[19],
    },
    {
        "header1": "Он очень любит играть в компьютерные игры.",
        "subheader1": "Кини көмпүүтэргэ оонньуурун сөбүлүүр. ",
        "audio1": family_story[20],
    },
    {
        "header1": "С ним мне всегда весело и интересно. ",
        "subheader1": "Кинилиин сылдьар өрүү көрдөөх уонна интэриэһинэй.",
        "audio1": family_story[21],
    },
    {
        "header1": "В нашем доме всегда чисто и тепло.",
        "subheader1": "Биһиги дьиэбит өрүү ыраас уонна сылаас.",
        "audio1": family_story[22],
    },
    {
        "header1": "Наша бабушка – уважаемый человек. ",
        "subheader1": "Биһиги эбээбит – ытыктанар киһи.",
        "audio1": family_story[23],
    },
    {
        "header1": "Дедушка – ветеран войны и труда. ",
        "subheader1": "Эһээбит – сэрии уонна үлэ бэтэрээнэ.",
        "audio1": family_story[24],
    },
    {
        "header1": "Интересно слушать дедушку, когда она рассказывает о военных годах. ",
        "subheader1": "Эһээбит сэрии сылларын туһунан кэпсиирин сэҥээрэн истэбит. ",
        "audio1": family_story[25],
    },
    {
        "header1": "Наша бабушка очень добрая и никогда не сердится.",
        "subheader1": "Биһиги эбээбит амарах санаалаах уонна хаһан да кыыһырбат.",
        "audio1": family_story[26],
    },
    {
        "header1": "Мы помогаем бабушке и маме в огороде.",
        "subheader1": "Эбээлээх эһээбитигэр баран, оҕуруоттарыгар көмөлөһөбүт.",
        "audio1": family_story[27],
    },
    {
        "header1": "У нас есть кот.",
        "subheader1": "Биһиги куоскалаахпыт.",
        "audio1": family_story[28],
    },
    {
        "header1": "Нашего котенка все считают полноценным членом семьи. ",
        "subheader1": "Куоскабытын эмиэ дьиэ кэргэн тутаах чилиэнэ.",
        "audio1": family_story[29],
    },
    {
        "header1": "Наша семья очень дружная. ",
        "subheader1": "Биһиги дьиэ кэргэммит  олус иллээх.",
        "audio1": family_story[30],
    },
    {
        "header1": "Я хочу, чтобы она оставалась такой всегда.",
        "subheader1": "Мин өрүү маннык иллээх буолуон баҕарабын.",
        "audio1": family_story[31],
    }
]

//Диалог / Кэпсэтии
const text2 = [
    {
        "header1": "– Привет, Айтал! Мы же десять лет не виделись. Как дела? Я слышал, у тебя уже своя семья.",
        "subheader1": "– Айтал, дорообо! Уон сыл көрсүбэтэх эбиппит. Туох сонун? Ыал буолбут диэн истибитим.",
        "audio1": family_dialogue1[0],
    },
    {
        "header1": "– Да, у меня большая семья. Нас четверо: я, моя жена, сын и дочь.",
        "subheader1": "– Оннук, улахан дьиэ кэргэннээхпин. Төрдүөбүт: мин, кэргэним, уолум уонна кыыһым. ",
        "audio1": family_dialogue1[1],
    },
    {
        "header1": "– Расскажи мне о своей семье.",
        "subheader1": "– Дьиэ кэргэниҥ туһунан кэпсээ эрэ.  ",
        "audio1": family_dialogue1[2],
    },
    {
        "header1": "– Мою жену зовут Сардана. Моего сына зовут Эрчим, а дочь – Нюргуяна.",
        "subheader1": "– Кэргэним Сардаана диэн. Уолум аата Эрчим, оттон кыыһым –Ньургуйаана.",
        "audio1": family_dialogue1[3],
    },
    {
        "header1": "– Сколько лет твоим детям?",
        "subheader1": "– Оҕолоруҥ хас саастаахтарый?",
        "audio1": family_dialogue1[4],
    },
    {
        "header1": "– Сыну девять, он уже ходит в школу. А дочке шесть.",
        "subheader1": "– Уолум тоҕустаах, оскуолаҕа сылдьар. Кыыһым алталаах.",
        "audio1": family_dialogue1[5],
    },
    {
        "header1": "– Где вы живете?",
        "subheader1": "– Ханна олороҕут?",
        "audio1": family_dialogue1[6],
    },
    {
        "header1": "– Мы живем в селе Боробул Таттинского района.",
        "subheader1": "– Биһиги Таатта улууһун Боробул сэлиэнньэтигэр олоробут.",
        "audio1": family_dialogue1[7],
    },
    {
        "header1": "– Передавай семье от меня наилучшие пожелания.",
        "subheader1": "– Дьоҥҥор миигиттэн эҕэрдэбин тиэрдээр.",
        "audio1": family_dialogue1[8],
    },
    {
        "header1": "– Хорошо.",
        "subheader1": "– Сөп.",
        "audio1": family_dialogue1[9],
    }
]

//Диалог / Сэһэргэһии
const text3 = [
    {
        "header1": "– Твоя семья большая или маленькая?",
        "subheader1": "– Эн дьиэ кэргэниҥ улахан дуу, дьоҕус дуу?",
        "audio1": family_dialogue2[0],
    },
    {
        "header1": "– Ни большая и ни маленькая. У меня есть мама, папа и маленькая сестра.",
        "subheader1": "– Улахан да, кыра да буолбатах. Ийэлээхпин, аҕалаахпын уонна кыра балтылаахпын. ",
        "audio1": family_dialogue2[1],
    },
    {
        "header1": "– Кем работает твой папа?",
        "subheader1": "– Аҕаҥ тугу үлэлиир? ",
        "audio1": family_dialogue2[2],
    },
    {
        "header1": "– Он водитель, и он работает с утра до ночи. Он приходит домой очень поздно.",
        "subheader1": "– Кини суоппар, сарсыардаттан киэһээҥҥэ диэри үлэлиир. Дьиэтигэр хойут кэлэр. ",
        "audio1": family_dialogue2[3],
    },
    {
        "header1": "– Сколько ему лет?",
        "subheader1": "– Хас саастааҕый?",
        "audio1": family_dialogue2[4],
    },
    {
        "header1": "– Ему 38. А моя мама на 5 лет моложе, ей 33 года.",
        "subheader1": "– Отут аҕыстаах. Ийэм киниттэн  5 сыл кыра, 33 саастаах. ",
        "audio1": family_dialogue2[5],
    },
    {
        "header1": "– Чем она занимается?",
        "subheader1": "– Ийэҥ туох дьарыктааҕый?",
        "audio1": family_dialogue2[6],
    },
    {
        "header1": "– Работает учителем якутского в школе. Дети любят ее уроки.",
        "subheader1": "– Оскуолаҕа саха тылын учууталынан үлэлиир. Оҕолор кини уруогун сөбүлүүллэр. ",
        "audio1": family_dialogue2[7],
    },
    {
        "header1": "– Что делают твои родители сейчас?",
        "subheader1": "– Төрөппүттэриҥ билигин тугу гына сылдьаллар?",
        "audio1": family_dialogue2[8],
    },
    {
        "header1": "– Мой папа работает в данный момент. А мама бегает в парке, я думаю. Она всегда бегает в 7 вечера.",
        "subheader1": "– Аҕам үлэтигэр, оттон ийэм, бука, пааркаҕа сүүрэ сылдьара буолуо. Кини киэһэ аайы 7 чааска сүүрэр.  ",
        "audio1": family_dialogue2[9],
    },
    {
        "header1": "– А где твоя сестренка сейчас?",
        "subheader1": "– Оттон балтыҥ ханнаный?",
        "audio1": family_dialogue2[10],
    },
    {
        "header1": "– Я уверен, что она смотрит мультики с бабушкой. Она обычно смотрит ТВ по вечерам.",
        "subheader1": "– Эбээтин кытта мультик көрө олорор буолуохтаах. Кини киэһэтин тэлэбиисэр көрөр.",
        "audio1": family_dialogue2[11],
    }
]

//Словарь / Тылдьыт
const dictionary = [
    // {
    //     "sentence": "Семья",
    //     "translation": "Дьиэ кэргэн, ыал",
    //     "avatar": "boy",
    //     "audio": audio1
    // },
    {
        "sentence": "Родители",
        "translation": "төрөппүттэр",
        "avatar": "girl",
        "audio": family_dictionary[1]
    },
    {
        "sentence": "Отец, папа",
        "translation": "аҕа",
        "avatar": "boy",
        "audio": family_dictionary[2]
    },
    {
        "sentence": "Мать, мама",
        "translation": "ийэ",
        "avatar": "girl",
        "audio": family_dictionary[3]
    },
    {
        "sentence": "Дочь",
        "translation": "кыыс оҕо, кыыс",
        "avatar": "boy",
        "audio": family_dictionary[4]
    },
    {
        "sentence": "Сын",
        "translation": "уол оҕо, уол",
        "avatar": "girl",
        "audio": family_dictionary[5]
    },
    {
        "sentence": "Старшая сестра",
        "translation": "эдьиий",
        "avatar": "boy",
        "audio": family_dictionary[6]
    },
    {
        "sentence": "Младшая сестра",
        "translation": "балты",
        "avatar": "girl",
        "audio": family_dictionary[7]
    },
    {
        "sentence": "Родные сестры",
        "translation": "аҕас-балыс",
        "avatar": "boy",
        "audio": family_dictionary[8]
    },
    {
        "sentence": "Старший брат",
        "translation": "убай",
        "avatar": "girl",
        "audio": family_dictionary[9]
    },
    {
        "sentence": "Младший брат",
        "translation": "быраат",
        "avatar": "boy",
        "audio": family_dictionary[10]
    },
    {
        "sentence": "Родные братья",
        "translation": "ини-бии",
        "avatar": "girl",
        "audio": family_dictionary[11]
    },
    {
        "sentence": "Бабушка",
        "translation": "эбээ",
        "avatar": "girl",
        "audio": family_dictionary[12]
    },
    {
        "sentence": "Дедушка",
        "translation": "эһээ",
        "avatar": "boy",
        "audio": family_dictionary[13]
    },
    {
        "sentence": "Внук",
        "translation": "сиэн",
        "avatar": "girl",
        "audio": family_dictionary[14]
    },
    {
        "sentence": "Невестка",
        "translation": "кийиит",
        "avatar": "girl",
        "audio": family_dictionary[15]
    },
    {
        "sentence": "Сноха",
        "translation": "саҥас",
        "avatar": "girl",
        "audio": family_dictionary[16]
    },
    {
        "sentence": "Невеста",
        "translation": "сүктэр кыыс",
        "avatar": "boy",
        "audio": family_dictionary[17]
    },
    {
        "sentence": "Зять",
        "translation": "күтүөт",
        "avatar": "girl",
        "audio": family_dictionary[18]
    },
    {
        "sentence": "Свекровь",
        "translation": "ийэ хотун",
        "avatar": "girl",
        "audio": family_dictionary[19]
    },
    {
        "sentence": "Свекор",
        "translation": "аҕа тойон",
        "avatar": "boy",
        "audio": family_dictionary[20]
    },
    {
        "sentence": "Теща",
        "translation": "ийэ кылын",
        "avatar": "girl",
        "audio": family_dictionary[21]
    },
    {
        "sentence": "Тесть",
        "translation": "аҕа кылын",
        "avatar": "boy",
        "audio": family_dictionary[22]
    },
    {
        "sentence": "Двоюродные братья",
        "translation": "тастыҥ бырааттыылар",
        "avatar": "girl",
        "audio": family_dictionary[23]
    },
    {
        "sentence": "Родственники",
        "translation": "аймах, уруу",
        "avatar": "boy",
        "audio": family_dictionary[24]
    },
    {
        "sentence": "Супруги",
        "translation": "кэргэнниилэр",
        "avatar": "girl",
        "audio": family_dictionary[25]
    },
    {
        "sentence": "Супруг",
        "translation": "эр",
        "avatar": "boy",
        "audio": family_dictionary[26]
    },
    {
        "sentence": "Супруга",
        "translation": "ойох",
        "avatar": "girl",
        "audio": family_dictionary[27]
    },
    {
        "sentence": "Мачеха",
        "translation": "сүтүөр ийэ",
        "avatar": "boy",
        "audio": family_dictionary[28]
    },
    {
        "sentence": "Отчим",
        "translation": "кииринньэҥ аҕа",
        "avatar": "girl",
        "audio": family_dictionary[29]
    },
    {
        "sentence": "Муж (жена)",
        "translation": "кэргэн",
        "avatar": "boy",
        "audio": family_dictionary[30]
    },
    {
        "sentence": "Разведенный",
        "translation": "арахсыбыт",
        "avatar": "girl",
        "audio": family_dictionary[31]
    },
    {
        "sentence": "Близнецы",
        "translation": "игирэ",
        "avatar": "boy",
        "audio": family_dictionary[32]
    },
    {
        "sentence": "Женатый",
        "translation": "ойохтоох, кэргэннээх",
        "avatar": "girl",
        "audio": family_dictionary[33]
    },
    {
        "sentence": "Замужняя",
        "translation": "эрдээх, кэргэннээх",
        "avatar": "girl",
        "audio": family_dictionary[34]
    },
    {
        "sentence": "Холостой",
        "translation": "сулумах",
        "avatar": "boy",
        "audio": family_dictionary[35]
    },
    {
        "sentence": "Вдовец (вдова)",
        "translation": "огдообо",
        "avatar": "girl",
        "audio": family_dictionary[36]
    },
    {
        "sentence": "Приемный/усыновленный ребенок",
        "translation": "иитиэх оҕо",
        "avatar": "boy",
        "audio": family_dictionary[37]
    },
    {
        "sentence": "Ребенок",
        "translation": "оҕо",
        "avatar": "girl",
        "audio": family_dictionary[38]
    },
    {
        "sentence": "Свадьба",
        "translation": "сыбаайба, уруу",
        "avatar": "boy",
        "audio": family_dictionary[39]
    },
    {
        "sentence": "Дом",
        "translation": "дьиэ",
        "avatar": "girl",
        "audio": family_dictionary[40]
    },
    {
        "sentence": "Усадьба",
        "translation": "уһаайба, тиэргэн",
        "avatar": "boy",
        "audio": family_dictionary[41]
    },
    {
        "sentence": "Двор",
        "translation": "тэлгэһэ",
        "avatar": "girl",
        "audio": family_dictionary[42]
    }
];

//Разговорник
const phrases = [
    {
        "sentence": "Моя семья дружная.",
        "translation": "Мин дьиэ кэргэним иллээх.",
        "avatar": "boy",
        "audio": family_phrases[0]
    },
    {
        "sentence": "Это моя семья.",
        "translation": "Бу мин дьиэ кэргэним.",
        "avatar": "girl",
        "audio": family_phrases[1]
    },
    {
        "sentence": "Моя семья — самая лучшая. ",
        "translation": "Мин саамай үчүгэй дьиэ кэргэннээхпин.",
        "avatar": "boy",
        "audio": family_phrases[2]
    },
    {
        "sentence": "Это моя мама (папа, старшая сестра, младшая сестра, старший брат, младший брат, бабушка, дедушка).",
        "translation": "Бу мин ийэм (аҕам, эдьиийим, балтым, убайым, быраатым, эбээм, эһээм). ",
        "avatar": "girl",
        "audio": family_phrases[3]
    },
    {
        "sentence": "Самые любимые и родные люди.",
        "translation": "Саамай таптыыр уонна чугас дьонум.",
        "avatar": "boy",
        "audio": family_phrases[4]
    },
    {
        "sentence": "Наша семейная традиция.",
        "translation": "Биһиги дьиэ кэргэммит үтүө үгэһэ.",
        "avatar": "girl",
        "audio": family_phrases[5]
    },
    {
        "sentence": "Я очень люблю своего отца.",
        "translation": "Мин аҕабын олус күүскэ таптыыбын.",
        "avatar": "boy",
        "audio": family_phrases[6]
    },
    {
        "sentence": "Мой папа работает в строительстве.",
        "translation": "Мин аҕам тутууга үлэлиир.",
        "avatar": "girl",
        "audio": family_phrases[7]
    },
    {
        "sentence": "Большая ли у вас семья?",
        "translation": "Улахан дьиэ кэргэннээххин дуо?",
        "avatar": "boy",
        "audio": family_phrases[8]
    },
    {
        "sentence": "Сколько человек?",
        "translation": "Хаһыаҕытый?",
        "avatar": "girl",
        "audio": family_phrases[9]
    },
    {
        "sentence": "Нас пять человек.",
        "translation": "Биһиги бэһиэбит. ",
        "avatar": "boy",
        "audio": family_phrases[10]
    },
    {
        "sentence": "Вы женаты (замужем)?",
        "translation": "Эн кэргэннээххин дуо? ",
        "avatar": "girl",
        "audio": family_phrases[11]
    },
    {
        "sentence": "Нет, я холост (не замужем).",
        "translation": "Кэргэним суох.",
        "avatar": "girl",
        "audio": family_phrases[12]
    },
    {
        "sentence": "Мою жену зовут Туяра.",
        "translation": "Мин кэргэним (ойоҕум) аата Туйаара.",
        "avatar": "boy",
        "audio": family_phrases[13]
    },
    {
        "sentence": "Есть ли у вас дети?",
        "translation": "Эн оҕолооххун дуо?",
        "avatar": "girl",
        "audio": family_phrases[14]
    },
    {
        "sentence": "Сколько детей?",
        "translation": "Хас оҕолооххун?",
        "avatar": "girl",
        "audio": family_phrases[15]
    },
    {
        "sentence": "У меня один ребенок (двое, трое).",
        "translation": "Биир (икки, үс) оҕолоохпун.",
        "avatar": "boy",
        "audio": family_phrases[16]
    },
    {
        "sentence": "У меня нет детей.",
        "translation": "Мин оҕом суох.",
        "avatar": "girl",
        "audio": family_phrases[17]
    },
    {
        "sentence": "Сколько лет сыну (дочери)? ",
        "translation": "Уолуҥ (кыыһыҥ) хас саастааҕый?",
        "avatar": "girl",
        "audio": family_phrases[18]
    },
    {
        "sentence": "Дети большие?",
        "translation": "Оҕолоруҥ улахаттар дуо?",
        "avatar": "boy",
        "audio": family_phrases[19]
    },
    {
        "sentence": "Нет, маленькие.",
        "translation": "Суох, кыралар.",
        "avatar": "girl",
        "audio": family_phrases[20]
    },
    {
        "sentence": "Да, большие.",
        "translation": "Ээ, улахаттар.",
        "avatar": "boy",
        "audio": family_phrases[21]
    },
    {
        "sentence": "Дети учатся или работают?",
        "translation": "Оҕолоруҥ үлэлииллэр дуу, үөрэнэллэр дуу?",
        "avatar": "girl",
        "audio": family_phrases[22]
    },
    {
        "sentence": "Учатся.",
        "translation": "Үөрэнэллэр.",
        "avatar": "boy",
        "audio": family_phrases[23]
    },
    {
        "sentence": "Работают.",
        "translation": "Үлэлииллэр.",
        "avatar": "girl",
        "audio": family_phrases[24]
    },
    {
        "sentence": "Маленькие учатся, взрослые работают.",
        "translation": "Кыралар үөрэнэллэр, улахаттар үлэлииллэр.",
        "avatar": "boy",
        "audio": family_phrases[25]
    },
    {
        "sentence": "Как зовут детей?",
        "translation": "Оҕолоруҥ ким диэн ааттаахтарый?",
        "avatar": "girl",
        "audio": family_phrases[26]
    },
    {
        "sentence": "Есть у Вас родители?",
        "translation": "Төппүттэриҥ бааллар дуо?",
        "avatar": "boy",
        "audio": family_phrases[27]
    },
    {
        "sentence": "Да. Живут в деревне.",
        "translation": "Бааллар. Дэриэбинэҕэ олороллор.",
        "avatar": "girl",
        "audio": family_phrases[28]
    },
    {
        "sentence": "Мои родители старые. ",
        "translation": "Мин төрөппүттэрим кырдьаҕастар.",
        "avatar": "boy",
        "audio": family_phrases[29]
    },
    {
        "sentence": "Я похож на отца.",
        "translation": "Мин аҕабар майгынныыбын.",
        "avatar": "girl",
        "audio": family_phrases[30]
    },
    {
        "sentence": "Старший брат — блогер.",
        "translation": "Убайым – блогер.",
        "avatar": "boy",
        "audio": family_phrases[31]
    },
    {
        "sentence": "Где работает отец (мать)?",
        "translation": "Аҕаҥ (ийэҥ) ханна үлэлиирий?",
        "avatar": "girl",
        "audio": family_phrases[32]
    },
    {
        "sentence": "Отец работает в сфере торговли.",
        "translation": "Аҕам эргиэн эйгэтигэр үлэлиир.",
        "avatar": "girl",
        "audio": family_phrases[33]
    },
    {
        "sentence": "Матъ работает в школе.",
        "translation": "Ийэм оскуолаҕа үлэлиир.",
        "avatar": "boy",
        "audio": family_phrases[34]
    },
    {
        "sentence": "Сколько лет отцу (маме)?",
        "translation": "Аҕаҥ (ийэҥ) хас саастааҕый?",
        "avatar": "girl",
        "audio": family_phrases[35]
    },
    {
        "sentence": "Где работаете сами?",
        "translation": "Бэйэҥ ханна үлэлиигиний?",
        "avatar": "boy",
        "audio": family_phrases[36]
    },
    {
        "sentence": "Работаю в школе.",
        "translation": "Оскуолаҕа үлэлиибин.",
        "avatar": "girl",
        "audio": family_phrases[37]
    },
    {
        "sentence": "Какую должность занимаете?",
        "translation": "Туох дуоһунастааххыный?",
        "avatar": "boy",
        "audio": family_phrases[38]
    },
    {
        "sentence": "Я заведующий (заместитель директора, инженер).",
        "translation": "Мин сэбиэдиссэйбин (дириэктэр солбуйааччытабын, инженербин).",
        "avatar": "girl",
        "audio": family_phrases[39]
    },
    {
        "sentence": "Где живете?",
        "translation": "Ханна олороҕут?",
        "avatar": "boy",
        "audio": family_phrases[40]
    },
    {
        "sentence": "Я живу в деревне (поселке, участке, в городе).",
        "translation": "Мин дэриэбинэҕэ (бөһүөлэккэ, куоракка) олоробун.",
        "avatar": "girl",
        "audio": family_phrases[41]
    },
    {
        "sentence": "Имеете ли свою квартиру (дом, комнату).",
        "translation": "Бэйэҥ кыбартыыралааххын (дьиэлээххин, хостооххун) дуо?",
        "avatar": "girl",
        "audio": family_phrases[42]
    },
    {
        "sentence": "Да, имею квартиру.",
        "translation": "Ээ, дьиэ баар.",
        "avatar": "girl",
        "audio": family_phrases[43]
    },
    {
        "sentence": "Живу вместе с родителями.",
        "translation": "Төрөппүттэрбин кытта олоробун.",
        "avatar": "girl",
        "audio": family_phrases[44]
    },
    {
        "sentence": "Сколько комнат занимаете?",
        "translation": "Дьиэҕит хас хостооҕуй?",
        "avatar": "girl",
        "audio": family_phrases[45]
    },
    {
        "sentence": "Занимаем четыре комнаты.",
        "translation": "Дьиэбит түөрт хостоох.",
        "avatar": "girl",
        "audio": family_phrases[46]
    },
    {
        "sentence": "По какому адресу живете?",
        "translation": "Ханнык аадырыска олороҕун?",
        "avatar": "girl",
        "audio": family_phrases[47]
    },
    {
        "sentence": "Живу по улице Ойунского.",
        "translation": "Ойуунускай уулуссатыгар олоробун.",
        "avatar": "girl",
        "audio": family_phrases[48]
    },
    {
        "sentence": "Семья – это важнейшая опора для любого человека.",
        "translation": "Дьиэ кэргэн диэн ханнык баҕарар киһиэхэ тирэнэр тирэҕэ.",
        "avatar": "girl",
        "audio": family_phrases[49]
    }
];
//Использованная литература: Поговорим по-якутски: Самоучитель языка саха. – Якутск : Бичик, 2002. – 176 с

//Тест / тургутук


const subjects = [
    {
        "Title": "Вводная часть",
        "Image": IntroductionIcon,
        "View": 1
    },
    {
        "Title": "Словарь",
        "Image": IntroductionIcon,
        "View": 2
    },
    {
        "Title": "Разговорник",
        "Image": IntroductionIcon,
        "View": 3
    },
    {
        "Title": "Моя семья / Мин дьиэ кэргэним",
        "Image": IntroductionIcon,
        "View": 4
    },
    {
        "Title": "Диалог / Кэпсэтии",
        "Image": IntroductionIcon,
        "View": 5
    },
    {
        "Title": "Диалог / Сэһэргэһии",
        "Image": IntroductionIcon,
        "View": 6
    },
    {
        "Title": "Тест / тургутук",
        "Image": IntroductionIcon,
        "View": 7
    }
];

export const SubjectContext = createContext({
    currentSubject: 0,
    setCurrentSubject: () => { }
});

function Family() {
    const { view, setView } = useContext(ViewContext);
    const [currentSubject, setCurrentSubject] = useState(0);

    const [page, setPage] = useState(0);

    const handleClick = event => {
        setCurrentSubject(currentSubject + 1)
        if(currentSubject === 7) setCurrentSubject(0)
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
                <motion.div className='subjectsPage' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
                    {currentSubject === 0 && <div className='buttonsContainer'>
                        <SubjectCard subject={subjects[0]} index='coloredCard1' subjectContext={SubjectContext}/>
                        <SubjectCard subject={subjects[1]} index='coloredCard2' subjectContext={SubjectContext}/>
                        <SubjectCard subject={subjects[2]} index='coloredCard3' subjectContext={SubjectContext}/>
                        <SubjectCard subject={subjects[3]} index='coloredCard4' subjectContext={SubjectContext}/>
                        <SubjectCard subject={subjects[4]} index='coloredCard5' subjectContext={SubjectContext}/>
                        <SubjectCard subject={subjects[5]} index='coloredCard6' subjectContext={SubjectContext}/>
                        <SubjectCard subject={subjects[6]} index='coloredCard7' subjectContext={SubjectContext}/>
                    </div>}
                    {currentSubject === 1 && <Introduction />}
                    {currentSubject === 2 && <Dictionary />}
                    {currentSubject === 3 && <Phrases />}
                    {currentSubject === 4 && <Text1 />}
                    {currentSubject === 5 && <Text2 />}
                    {currentSubject === 6 && <Text3 />}
                    {currentSubject === 7 && <Test />}

                    {currentSubject != 0 && currentSubject != 7 && <div className="bottomNavbar">
                        {currentSubject > 1 ? <Button text='Назад' handleClick={handleBack} /> : <Button available={false} text='Назад' />}
                        {/* <button className='buttonLearn' onClick={handleClick}>Далее</button> */}
                        <Button text={currentSubject === 7 ? 'Вернуться к теме' : 'Далее'} handleClick={handleClick} />
                    </div>}




                </motion.div>
            </SubjectContext.Provider>
        </ViewContext.Provider>
    )
}

function FamilyMember({ props }) {
    return (
        <div className='member'>
            {/* <img className='memberImg' src={imgMember5}></img> */}
            <Images props={props.images} />
            <div className='asideKeepLeft'>
                <div className='asideKeep'>
                    <SoundButton audio={props.audio1} />
                    <div className='asideVert'>
                        <h3 className='a'>{props.header1}</h3>
                        <p>{props.subheader1}</p>
                    </div>
                </div>
                <div className='asideKeep'>
                    <SoundButton audio={props.audio2} />
                    <div className='asideVert'>
                        <h3 className='a'>{props.header2}</h3>
                        <p>{props.subheader2}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function OtherFamilyMember({ props }) {
    return (
        <div className='member'>
            <div className='asideKeepLeft'>
                <div className='asideKeep'>
                    <SoundButton audio={props.audio1} />
                    <div className='asideVert'>
                        <h3 className='a'>{props.header1}</h3>
                        <p>{props.subheader1}</p>
                    </div>
                </div>
                {props.header2 && <div className='asideKeep'>
                    <SoundButton audio={props.audio2} />
                    <div className='asideVert'>
                        <h3 className='a'>{props.header2}</h3>
                        <p>{props.subheader2}</p>
                    </div>
                </div>}
            </div>
        </div>
    );
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
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }} className='greeting-introduction'>
            <div className='container'>
                    <h1 className='header'>Урок № 3 / Үһүс дьарык</h1>
                    <h3 className='greeting-subheader'>Тема урока: “Семья”. Цель занятия — научить использовать в своей речи лексику на заданную тему, создавать связный текст по теме и принимать участие в простых диалогах.</h3>
                    <p>
                        Cамое дорогое, что может быть у человека – семья. Величайшее в жизни счастье — это уверенность в том, твоя семья тебя любит, любит за то, что мы такие, какие мы есть, или несмотря на то, что мы такие, какие мы есть.
                    </p>
                    <p>
                        Семья – главная ценность любого общества. Это крепкий дом, это дети и внуки, это наша поддержка и опора, это самое дорогое, что у нас есть. Залог семейного счастья – это создание и поддержка гармоничных, теплых взаимоотношений, основанных на доверии, уважении и любви.
                    </p>
                    <p>
                        В семьях саха всегда почитали мать – жену, хозяйку, воспитателя детей. По мнению многих исследователей, женщины в якутском обществе никогда не находились в подчиненном положении. Одним из доказательств этого суждения является первостепенное значение образа женщины в народном эпосе – олонхо.
                    </p>
                    <p>
                        Мужчина как добытчик, как основной содержатель благополучия семьи, постоянно находился вне дома. Домой он приходил, когда дети уже спали и уходил из дому, когда дети еще спали.
                    </p>
                    <p>
                        Женщина сама воспитывала детей до подросткового возраста. В большинстве случаев отец не вмешивался в воспитание. Когда достигали подросткового периода, то их приучали к трудовой деятельности. Мальчики начинали ходить с отцом на охоту, занимались скотоводством, а девочек мать учила шить, готовить, помогать по хозяйству.
                    </p>
                    <p>
                        В девочке прежде всего воспитывали такие качества, как скромность, целомудренность. Это считалось основой морали. Мальчика учили быть ответственным, выносливым, сильным духом и телом.
                    </p>
                    <p>
                        Современная якутская семья мало отличается от среднестатистической российской. Средняя численность семей составляет 3-5 человек. В большинстве случаев связь между родителями и их детьми в якутском обществе поддерживается на протяжении всей жизни.
                    </p>

                    <img className='greetingImage' src={image1}></img>
                    <img className='greetingImage' src={image2}></img>
                    <div>
                        <p className='greeting-info'>Использованы фотографии ГБУ РС(Я) «Якутский государственный объединенный музей истории и культуры народов Севера им. Ем. Ярославского» и  победителей конкурса “Семья года”</p>
                    </div>
            </div>
        </motion.div>
    );
}

function Dictionary() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }} className="greeting-dictionary">
            <div className="container">
                <h1 className='header'>Словарь. Тылдьыт.</h1>

                <div className='dictionaryTable'>
                    <div className='aside'>
                        <h3>Семья</h3>
                        <h3>Дьиэ кэргэн, ыал</h3>
                    </div>
                    {dictionary.map((e, i) => {
                        return (
                            <div>
                                <div className='aside'>
                                    <p>{e.sentence}</p>
                                    <p>{e.translation}</p>
                                </div>
                                
                            </div>
                        );
                    })
                    }
                </div>
                <div>
                    <p className='greeting-info'>Использованная литература: Поговорим по-якутски : самоучитель языка саха. – 4-е изд. С изм. – Якутск : СахаКнигаТорг, 2013. – 192.</p>
                </div>
            </div>
        </motion.div>
    )
}

function Text1() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }} className="greeting-introduction">
            <div className='container'>
                <h1 className='header'>Моя семья / Мин дьиэ кэргэним</h1>
                <h3 className='greeting-subheader'>(Рассказ школьника / үөрэнээччи кэпсээнэ)</h3>
                <img className='greetingImage' src={image3}></img>
                <div className='tables'>
                    <div className='story'>
                        {text1.map((e, i) => {
                            return (
                                <div className='aside'>
                                    <p>{e.header1}</p>
                                    <p>{e.subheader1}</p>
                                </div>
                            );
                        })
                        }
                    </div>
                    
                </div>
            </div>
        </motion.div>
    );
}

function Text2() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }} className='greeting-introduction'>
            <div className='container'>
                <h1 className='header'>Моя семья / Мин дьиэ кэргэним</h1>
                <h3 className='greeting-subheader'>(Рассказ школьника/ үөрэнээччи кэпсээнэ)</h3>
                <div className='tables'>
                    <div className='story'>
                        {text2.map((e, i) => {
                            return (
                                    <div className='aside'>
                                    <p>{e.header1}</p>
                                    <p>{e.subheader1}</p>
                                    </div>
                            );
                        })
                        }
                    </div>
                    
                </div>
            </div>
        </motion.div>
    );
}

function Text3() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }} className="greeting-introduction">
            <div className='container'>
                <h1 className='header'>Моя семья / Мин дьиэ кэргэним</h1>
                <h3 className='greeting-subheader'>(Рассказ школьника/ үөрэнээччи кэпсээнэ)</h3>
                <div className='tables'>
                    <div className='story'>
                        {text3.map((e, i) => {
                            return (
                                    <div className='aside'>
                                        <p>{e.header1}</p>
                                        <p>{e.subheader1}</p>
                                    </div>
                            );
                        })
                        }
                    </div>
                    
                </div>
            </div>
        </motion.div>
    );
}

function Phrases() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }} className="greeting-dictionary">
            <div className="container">
                <h1 className='header'>Разговорник</h1>
                {/* <h3>Приветствие. Знакомство / Эҕэрдэлэһии. Билсиһии</h3> */}
                <div className='dictionaryTable'>
                    {phrases.map((e, i) => {
                        return (
                            <div>
                                <div className='aside'>
                                <p>{e.sentence}</p>
                                <p>{e.translation}</p>
                                </div>
                                
                            </div>
                        );
                    })
                    }
                </div>
                <div>
                    <p>Использованная литература: Поговорим по-якутски : самоучитель языка саха. – 4-е изд. С изм. – Якутск : СахаКнигаТорг, 2013. – 192.</p>
                </div>
            </div>
        </motion.div>
    )
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
        if(stateNavigate == 'next') setCurrentSubject(0);
    },[stateNavigate])

    return (
        <PageContext.Provider value={{ currentPage, setCurrentPage }}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }} className="">
                {/* <h1 className='header'>Тест / тургутук</h1> */}
                {currentPage === 0 && 
                    <Quiz questions={quizFamily1.questions} quizTitle={quizFamily1.quizTitle} stateNavigate={setStateNavigate}/>
                }
            </motion.div>
        </PageContext.Provider>
    )
}

function Page2() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }} className='aside'>
            <div className='text'>
                <h3>«Мит нимэндуул»</h3>
                <p>
                    <br></br>Эньиэ, амаа тадаат мэтэк –
                    <br></br>Тэн мит нимэндуул ҥотэй!
                    <br></br>Эмдьэ, акаа тадаат экыа –
                    <br></br>Wаай мит нимэндуул чии!
                    <br></br>Эпиэ, хаwдьаа, йаадиэ, хайчиэ –
                    <br></br>Мит нимэндуул чии, титтэл!
                    <br></br>Wайи: иидиэ, пулийэ, абучиэ –
                    <br></br>Туҥ чии, нимэндуул чии!
                    <br></br>Йаwнэр маархан нимэн чии –
                    <br></br>Нимэндуул чии ҥотэйли!
                    <br></br><br></br><span>Николай Курилов</span><br></br>
                </p>
            </div>

            <div className='text'>
                <h3>«Наша семья»</h3>
                <p>
                    <br></br>Мама, папа и я –
                    <br></br>это наша семья!
                    <br></br>Сестренка, старшие брат и сестра –
                    <br></br>тоже наша семья!
                    <br></br>Тётя, дядя, дедушка –
                    <br></br>они - наша семья!
                    <br></br>Еще: невестка, зять, бабушка –
                    <br></br>эти люди - семья!
                    <br></br>Все мы одна семья -
                    <br></br>будем мы семьёй!
                </p>
            </div>
        </motion.div>
    );
}

export default Family