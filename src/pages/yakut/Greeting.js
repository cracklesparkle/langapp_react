import React, { useContext, useState, useEffect, createContext } from 'react';

import { motion } from 'framer-motion';
import { ViewContext } from '../../ViewContext';

import b_left from '../../languages/yukaghir/greeting/b_left.png';
import b_right from '../../languages/yukaghir/greeting/b_right.png';
import g_left from '../../languages/yukaghir/greeting/g_left.png';
import g_right from '../../languages/yukaghir/greeting/g_right.png';

import SubjectCard from '../../SubjectCard2';

import Quiz from '../../Quiz';
import { quizGreeting1, quizGreeting2, quizGreeting3 } from '../../pages/yakut/quizData';

import Bubble from '../../components/Bubble';

import Button from '../../components/Button';
import SoundButton from '../../components/SoundButton';
//import SubjectCard from '../../SubjectCard1';

import image1 from "../../languages/yakut/greeting/greeting.png";

import { greeting_dialogue1, greeting_dialogue2, greeting_dialogue3, greeting_dictionary } from './audio';

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

const dictionary = [
    {
        "sentence": "Доброе утро!",
        "translation": "Үтүө сарсыарданан!",
        "avatar": "boy",
        "audio": greeting_dictionary[0]
    },
    {
        "sentence": "Добрый день!",
        "translation": "Үтүө күнүнэн!",
        "avatar": "girl",
        "audio": greeting_dictionary[1]
    },
    {
        "sentence": "Добрый вечер!",
        "translation": "Үтүө киэһэнэн!",
        "avatar": "boy",
        "audio": greeting_dictionary[2]
    },
    {
        "sentence": "Здравствуйте!",
        "translation": "Дорообо!",
        "avatar": "girl",
        "audio": greeting_dictionary[3]
    },
    {
        "sentence": "До свидания!",
        "translation": "Көрсүөххэ диэри!",
        "avatar": "boy",
        "audio": greeting_dictionary[4]
    },
    {
        "sentence": "До скорой встречи!",
        "translation": "Сотору көрсүөххэ диэри!",
        "avatar": "girl",
        "audio": greeting_dictionary[5]
    },
    {
        "sentence": "Удачи!",
        "translation": "Ситиһиини баҕарабын!",
        "avatar": "girl",
        "audio": greeting_dictionary[6]
    },
    {
        "sentence": "Пожалуйста.",
        "translation": "Баһаалыста.",
        "avatar": "boy",
        "audio": greeting_dictionary[7]
    },
    {
        "sentence": "Спасибо.",
        "translation": "Махтал, махтанабын.",
        "avatar": "girl",
        "audio": greeting_dictionary[8]
    },
    {
        "sentence": "Большое спасибо.",
        "translation": "Улахан баһыыба.",
        "avatar": "boy",
        "audio": greeting_dictionary[9]
    },
    {
        "sentence": "Спокойной ночи!",
        "translation": "Үчүгэйдик утуй!",
        "avatar": "boy",
        "audio": greeting_dictionary[10]
    },
    {
        "sentence": "Благодарю Вас!",
        "translation": "Эйиэхэ махтанабын!",
        "avatar": "girl",
        "audio": greeting_dictionary[11]
    },
    {
        "sentence": "Благодарю Вас за помощь!",
        "translation": "Эйиэхэ көмөҥ иһин махтанабын!",
        "avatar": "boy",
        "audio": greeting_dictionary[12]
    },
    {
        "sentence": "Заранее благодарен Вам!",
        "translation": "Эйиэхэ эрдэттэн махтанабын!",
        "avatar": "girl",
        "audio": greeting_dictionary[13]
    },
    {
        "sentence": "За это Вам спасибо!",
        "translation": "Ити иһин эйиэхэ махтанабын!",
        "avatar": "boy",
        "audio": greeting_dictionary[14]
    },
    {
        "sentence": "Спасибо за совет (помощь).",
        "translation": "Сүбэҥ (көмөҥ) иһин махтанабын.",
        "avatar": "girl",
        "audio": greeting_dictionary[15]
    },
    {
        "sentence": "Как я рад!",
        "translation": "Олус да үөрдүм!",
        "avatar": "boy",
        "audio": greeting_dictionary[16]
    },
    {
        "sentence": "Как приятно!",
        "translation": "Тугун бэрдэй! Тугун үчүгэйэй!",
        "avatar": "girl",
        "audio": greeting_dictionary[17]
    },
    {
        "sentence": "Извините.",
        "translation": "Бырастыы гын.",
        "avatar": "boy",
        "audio": greeting_dictionary[18]
    },
    {
        "sentence": "Всего наилучшего.",
        "translation": "Бары үтүөнү кытта.",
        "avatar": "girl",
        "audio": greeting_dictionary[19]
    },
    {
        "sentence": "Все хорошо!",
        "translation": "Барыта этэҥҥэ!",
        "avatar": "boy",
        "audio": greeting_dictionary[20]
    },
    {
        "sentence": "Приятно познакомиться.",
        "translation": "Билсэрбиттэн үөрэбин.",
        "avatar": "girl",
        "audio": greeting_dictionary[21]
    },
    {
        "sentence": "Счастливо!",
        "translation": "Дьоллоох буол! Дьолу-соргуну!",
        "avatar": "boy",
        "audio": greeting_dictionary[22]
    },
    {
        "sentence": "Можно спросить...",
        "translation": "Ыйытыахха сөп дуо?",
        "avatar": "girl",
        "audio": greeting_dictionary[23]
    },
    {
        "sentence": "Давайте встретимся.",
        "translation": "Көрсүөх эрэ.",
        "avatar": "boy",
        "audio": greeting_dictionary[24]
    },
    {
        "sentence": "Рад Вас видеть.",
        "translation": "Эйигин көрөрбүттэн үөрэбин.",
        "avatar": "girl",
        "audio": greeting_dictionary[25]
    },
    {
        "sentence": "Рад Вас снова видеть.",
        "translation": "Эйигин иккистээн көрөрбүттэн үөрэбин.",
        "avatar": "boy",
        "audio": greeting_dictionary[26]
    },
    {
        "sentence": "Я думаю.",
        "translation": "Мин толкуйдуурбунан.",
        "avatar": "girl",
        "audio": greeting_dictionary[27]
    },
    {
        "sentence": "По-моему мнению.",
        "translation": "Мин санаабар.",
        "avatar": "girl",
        "audio": greeting_dictionary[28]
    },
    {
        "sentence": "Как у Вас дела?",
        "translation": "Хайа, хайдах олороҕун? Хайдах сылдьаҕын?",
        "avatar": "boy",
        "audio": greeting_dictionary[29]
    },
    {
        "sentence": "Вы завтра свободны?",
        "translation": "Сарсын иллэҥҥин дуо?",
        "avatar": "girl",
        "audio": greeting_dictionary[30]
    },
    {
        "sentence": "Я не забуду Вашей доброты.",
        "translation": "Эн үтүөҕин умнуом суоҕа.",
        "avatar": "boy",
        "audio": greeting_dictionary[31]
    },
    {
        "sentence": "У меня плохое настроение.",
        "translation": "Мин санаам түстэ. Настарыанньам суох.",
        "avatar": "girl",
        "audio": greeting_dictionary[32]
    },
    {
        "sentence": "Я Вас прошу...",
        "translation": "Мин эйигиттэн көрдөһөбүн...",
        "avatar": "boy",
        "audio": greeting_dictionary[33]
    },
    {
        "sentence": "Можно Вас побеспокоить на секунду?",
        "translation": "Эйигин кыратык аралдьытыахха сөп дуо?",
        "avatar": "girl",
        "audio": greeting_dictionary[34]
    },
    {
        "sentence": "Добро пожаловать!",
        "translation": "Баһаалыста, ааһыҥ, күндү ыалдьыттар!",
        "avatar": "boy",
        "audio": greeting_dictionary[35]
    },
    {
        "sentence": "К нам пожаловали гости.",
        "translation": "Биһиэхэ ыалдьыттар кэллилэр.",
        "avatar": "girl",
        "audio": greeting_dictionary[36]
    },
    {
        "sentence": "Рад Вашему приезду!",
        "translation": "Эн кэлбиккэр олус үөрдүм!",
        "avatar": "boy",
        "audio": greeting_dictionary[37]
    },
    {
        "sentence": "Пожалуйста, войдите.",
        "translation": "Баһаалыста, киириҥ!",
        "avatar": "girl",
        "audio": greeting_dictionary[38]
    },
    {
        "sentence": "Пожалуйста, садитесь.",
        "translation": "Баһаалыста, олоруҥ.",
        "avatar": "boy",
        "audio": greeting_dictionary[39]
    },
    {
        "sentence": "Разденьтесь. Снимите пальто.",
        "translation": "Соҥҥутун устун.",
        "avatar": "girl",
        "audio": greeting_dictionary[40]
    },
    {
        "sentence": "Как поживаете?",
        "translation": "Төһө бэркэ олороҕун? Хайдах олороҕун?",
        "avatar": "boy",
        "audio": greeting_dictionary[41]
    },
    {
        "sentence": "Хорошо.",
        "translation": "Үчүгэйдик.",
        "avatar": "girl",
        "audio": greeting_dictionary[42]
    },
    {
        "sentence": "Как Ваше здоровье?",
        "translation": "Доруобуйаҥ хайдаҕый?",
        "avatar": "boy",
        "audio": greeting_dictionary[43]
    },
    {
        "sentence": "Спасибо, хорошо.",
        "translation": "Баһыыба, үчүгэй.",
        "avatar": "girl",
        "audio": greeting_dictionary[44]
    },
    {
        "sentence": "Что нового?",
        "translation": "Туох сонун баарый?",
        "avatar": "boy",
        "audio": greeting_dictionary[45]
    },
    {
        "sentence": "Ничего особенного.",
        "translation": "Сонун соччо суох.",
        "avatar": "girl",
        "audio": greeting_dictionary[46]
    },
    {
        "sentence": "Как успехи?",
        "translation": "Кэлин туох ситиһии, кыайыы-хотуу?",
        "avatar": "boy",
        "audio": greeting_dictionary[47]
    },
    {
        "sentence": "Спасибо, с удовольствием. ",
        "translation": "Баһыыба, үөрүүнү кытары.",
        "avatar": "girl",
        "audio": greeting_dictionary[48]
    },
    {
        "sentence": "Где находится ...?",
        "translation": "... ханна баарый?",
        "avatar": "boy",
        "audio": greeting_dictionary[49]
    },
    {
        "sentence": "Извините за опоздание.",
        "translation": "Хойутаабыппын бырастыы гын.",
        "avatar": "girl",
        "audio": greeting_dictionary[50]
    },
    {
        "sentence": "Извините, я на секунду.",
        "translation": "Бырастыы гын, мин билигин.",
        "avatar": "boy",
        "audio": greeting_dictionary[51]
    },
    {
        "sentence": "Подождите минуту, пожалуйста.",
        "translation": "Баһаалыста, биир мүнүүтэ кэтэһэ түс эрэ. ",
        "avatar": "girl",
        "audio": greeting_dictionary[52]
    },
    {
        "sentence": "Извините, что заставил Вас ждать.",
        "translation": "Кэтэһиннэрбиппин иһин бырастыы гын. ",
        "avatar": "boy",
        "audio": greeting_dictionary[53]
    },
    {
        "sentence": "Вы говорите по-русски?",
        "translation": "Эн нууччалыы саҥараҕын дуо?",
        "avatar": "girl",
        "audio": greeting_dictionary[54]
    },
    {
        "sentence": "Вы говорите по-якутски?",
        "translation": "Эн сахалыы саҥараҕын дуо?",
        "avatar": "boy",
        "audio": greeting_dictionary[55]
    },
    {
        "sentence": "К сожалению, я не говорю по-якутски.",
        "translation": "Хомойуох иһин, мин сахалыы сатаан саҥарбаппын.",
        "avatar": "girl",
        "audio": greeting_dictionary[56]
    },
    {
        "sentence": "Я не понимаю...",
        "translation": "Мин өйдөөбөппүн.",
        "avatar": "boy",
        "audio": greeting_dictionary[57]
    },
    {
        "sentence": "Простите (извините), пожалуйста!",
        "translation": "Баһаалыста, бырастыы гын!",
        "avatar": "girl",
        "audio": greeting_dictionary[58]
    },
    {
        "sentence": "Прошу прощения.",
        "translation": "Бырастыы гынаргар көрдөһөбүн.",
        "avatar": "boy",
        "audio": greeting_dictionary[59]
    },
    {
        "sentence": "Извините, я сделал нечаянно.",
        "translation": "Бырастыы гын, алҕас гынным.",
        "avatar": "girl",
        "audio": greeting_dictionary[60]
    },
    {
        "sentence": "Да.",
        "translation": "Оннук. Сөп. Ээ. ",
        "avatar": "boy",
        "audio": greeting_dictionary[61]
    },
    {
        "sentence": "Нет.",
        "translation": "Суох.",
        "avatar": "girl",
        "audio": greeting_dictionary[62]
    },
    {
        "sentence": "Разрешите познакомиться.",
        "translation": "Билсиһиэххэ эрэ. Билсиһэрбин көҥүллээ.",
        "avatar": "boy",
        "audio": greeting_dictionary[63]
    },
    {
        "sentence": "Как Вас зовут?",
        "translation": "Эн аатыҥ ким диэний?",
        "avatar": "girl",
        "audio": greeting_dictionary[64]
    },
    {
        "sentence": "Меня зовут...",
        "translation": "Мин аатым ...",
        "avatar": "boy",
        "audio": greeting_dictionary[65]
    },
    {
        "sentence": "Я – Васильев Иван, инженер по должности.",
        "translation": "Мин Васильев Иван диэммин, инженер идэлээхпин. ",
        "avatar": "girl",
        "audio": greeting_dictionary[66]
    },
    {
        "sentence": "Вы откуда сами?",
        "translation": "Эн хантан сылдьаҕын?",
        "avatar": "boy",
        "audio": greeting_dictionary[67]
    },
    {
        "sentence": "Я приехал(а) из России...",
        "translation": "Мин Арассыыйаттан кэлбитим.",
        "avatar": "girl",
        "audio": greeting_dictionary[68]
    },
    {
        "sentence": "Познакомьтесь – это моя семья. Жена –Аина. Сын – Аял. Дочь – Александра.",
        "translation": "Билсэн кэбис – бу мин дьиэ кэргэним. Ойоҕум – Айыына. Уолум – Айаал. Кыыһым – Александра. ",
        "avatar": "boy",
        "audio": greeting_dictionary[69]
    },
    {
        "sentence": "Сколько Вам лет?",
        "translation": "Эн хас саастааххыный?",
        "avatar": "girl",
        "audio": greeting_dictionary[70]
    },
    {
        "sentence": "Мне уже тридцать.",
        "translation": "Мин отутум.",
        "avatar": "boy",
        "audio": greeting_dictionary[71]
    },
    {
        "sentence": "Большая ли у Вас семья?",
        "translation": "Дьиэ кэргэниҥ улахан дуо? Кэргэттэриҥ элбэхтэр дуо?",
        "avatar": "girl",
        "audio": greeting_dictionary[72]
    },
    {
        "sentence": "Сколько человек?",
        "translation": "Хаһыаҕытый?",
        "avatar": "boy",
        "audio": greeting_dictionary[73]
    },
    {
        "sentence": "Вы женаты (замужем)?",
        "translation": "Эн кэргэннээххин дуо?",
        "avatar": "girl",
        "audio": greeting_dictionary[74]
    },
    {
        "sentence": "Я женат (замужем).",
        "translation": "Мин кэргэннээхпин.",
        "avatar": "boy",
        "audio": greeting_dictionary[75]
    },
    {
        "sentence": "Я холост (не замужем).",
        "translation": "Аҥаардаспын. Холостуойбун. Кэргэним суох. Ойоҕум суох.",
        "avatar": "girl",
        "audio": greeting_dictionary[76]
    },
    {
        "sentence": "Есть ли у Вас дети?",
        "translation": "Эн хас оҕолооххунуй?",
        "avatar": "boy",
        "audio": greeting_dictionary[77]
    },
    {
        "sentence": "У меня один ребенок (двое, трое).",
        "translation": "Биир (икки, үс) оҕолоохпун.",
        "avatar": "girl",
        "audio": greeting_dictionary[78]
    },
    {
        "sentence": "У меня нет детей.",
        "translation": "Мин оҕом суох.",
        "avatar": "boy",
        "audio": greeting_dictionary[79]
    },
    {
        "sentence": "Сколько лет сыну (дочери)?",
        "translation": "Уолуҥ (кыыһыҥ) хас саастааҕый?",
        "avatar": "girl",
        "audio": greeting_dictionary[80]
    },
    {
        "sentence": "Дети большие?",
        "translation": "Оҕолоруҥ улахаттар дуо?",
        "avatar": "boy",
        "audio": greeting_dictionary[81]
    },
    {
        "sentence": "Нет, маленькие.",
        "translation": "Суох, кыралар.",
        "avatar": "girl",
        "audio": greeting_dictionary[82]
    },
    {
        "sentence": "Да, большие.",
        "translation": "Ээ, улахаттар.",
        "avatar": "boy",
        "audio": greeting_dictionary[83]
    },
    {
        "sentence": "Дети учатся или работают?",
        "translation": "Оҕолоруҥ үөрэнэллэр дуу, үлэлииллэр дуу?",
        "avatar": "girl",
        "audio": greeting_dictionary[84]
    },
    {
        "sentence": "Учатся.",
        "translation": "Үөрэнэллэр.",
        "avatar": "boy",
        "audio": greeting_dictionary[85]
    },
    {
        "sentence": "Работают.",
        "translation": "Үлэлииллэр.",
        "avatar": "girl",
        "audio": greeting_dictionary[86]
    },
    {
        "sentence": "Маленькие учатся, взрослые работают.",
        "translation": "Кыралар үөрэнэллэр, улахаттар үлэлииллэр.",
        "avatar": "boy",
        "audio": greeting_dictionary[87]
    },
    {
        "sentence": "Как зовут детей?",
        "translation": "Оҕолоруҥ ааттара кимий?",
        "avatar": "girl",
        "audio": greeting_dictionary[88]
    },
    {
        "sentence": "Есть ли у Вас родители?",
        "translation": "Төрөппүттэриҥ бааллар дуо?",
        "avatar": "boy",
        "audio": greeting_dictionary[89]
    },
    {
        "sentence": "Да, живут в деревне.",
        "translation": "Бааллар, дэриэбинэҕэ олороллор. ",
        "avatar": "girl",
        "audio": greeting_dictionary[90]
    },
    {
        "sentence": "Мои родители старые.",
        "translation": "Мин төрөппүттэрим кырдьаҕастар. ",
        "avatar": "boy",
        "audio": greeting_dictionary[91]
    },
    {
        "sentence": "Старший брат – тракторист.",
        "translation": "Улахан убайым – тырахтарыыс.",
        "avatar": "girl",
        "audio": greeting_dictionary[92]
    },
    {
        "sentence": "Средний брат – учитель",
        "translation": "Орто убайым – учуутал.",
        "avatar": "boy",
        "audio": greeting_dictionary[93]
    },
    {
        "sentence": "Младший брат – летчик.",
        "translation": "Кыра убайым – лүөччүк.",
        "avatar": "girl",
        "audio": greeting_dictionary[94]
    },
    {
        "sentence": "Где работает отец (мать)?",
        "translation": "Аҕаҥ (ийэҥ) ханна үлэлиирий?",
        "avatar": "boy",
        "audio": greeting_dictionary[95]
    },
    {
        "sentence": "Отец работает в сфере торговли. ",
        "translation": "Аҕам эргиэн эйгэтигэр үлэлиир.",
        "avatar": "girl",
        "audio": greeting_dictionary[96]
    },
    {
        "sentence": "Мать работает в школе.",
        "translation": "Ийэм оскуолаҕа үлэлиир.",
        "avatar": "boy",
        "audio": greeting_dictionary[97]
    },
    {
        "sentence": "Сколько лет отцу (маме)?",
        "translation": "Аҕаҥ (ийэҥ) хас саастааҕый?",
        "avatar": "girl",
        "audio": greeting_dictionary[98]
    },
    {
        "sentence": "Где работаете сами?",
        "translation": "Бэйэҥ ханна үлэлиигин?",
        "avatar": "boy",
        "audio": greeting_dictionary[99]
    },
    {
        "sentence": "Работаю в мастерской. ",
        "translation": "Мастарыскыайга үлэлиибин.",
        "avatar": "girl",
        "audio": greeting_dictionary[100]
    },
    {
        "sentence": "Какую должность занимаете?",
        "translation": "Туох дуоһунастааххыный?",
        "avatar": "boy",
        "audio": greeting_dictionary[101]
    },
    {
        "sentence": "Кем Вы работаете?",
        "translation": "Тугунан үлэлиигин?",
        "avatar": "girl",
        "audio": greeting_dictionary[102]
    },
    {
        "sentence": "Я заведующий (заместитель директора, инженер, врач).",
        "translation": "Мин сэбиэдиссэйбин (дириэктэр солбуйааччытабын, инженербин, бырааспын).",
        "avatar": "boy",
        "audio": greeting_dictionary[103]
    },
    {
        "sentence": "Где живете?",
        "translation": "Ханна олороҕун?",
        "avatar": "girl",
        "audio": greeting_dictionary[104]
    },
    {
        "sentence": "Я живу в деревне (поселке, участке, городе).",
        "translation": "Мин дэриэбинэҕэ (бөһүөлэккэ, учаастакка, куоракка) олоробун.",
        "avatar": "boy",
        "audio": greeting_dictionary[105]
    },
    {
        "sentence": "Имеете ли свою квартиру (дом, комнату)?",
        "translation": "Бэйэҥ кыбартыыралааххын (дьиэлээххин, хостооххун) дуо?",
        "avatar": "girl",
        "audio": greeting_dictionary[106]
    },
    {
        "sentence": "Да, имею квартиру.",
        "translation": "Ээ, кыбартыыралаахпын.",
        "avatar": "boy",
        "audio": greeting_dictionary[107]
    },
    {
        "sentence": "Живу вместе с родителями.",
        "translation": "Төрөппүттэрбин кытта бииргэ олоробун. ",
        "avatar": "girl",
        "audio": greeting_dictionary[108]
    },
    {
        "sentence": "Сколько комнат занимаете?",
        "translation": "Дьиэҕит хас хостооҕуй?",
        "avatar": "boy",
        "audio": greeting_dictionary[109]
    },
    {
        "sentence": "Занимаем четыре комнаты.",
        "translation": "Дьиэбит түөрт хостоох.",
        "avatar": "girl",
        "audio": greeting_dictionary[110]
    },
    {
        "sentence": "По какому адресу живете?",
        "translation": "Ханнык аадырыска олороҕун?",
        "avatar": "boy",
        "audio": greeting_dictionary[111]
    },
    {
        "sentence": "Живу по улице Ойунского.",
        "translation": "Ойуунускай аатынан уулуссаҕа олоробун. ",
        "avatar": "girl",
        "audio": greeting_dictionary[112]
    },
    {
        "sentence": "Хочу познакомить Вас с друзьями.",
        "translation": "Эйигин доҕотторбун кытта билсиһиннэриэхпин баҕарабын.",
        "avatar": "boy",
        "audio": greeting_dictionary[113]
    },
    {
        "sentence": "Вот – лучший друг...",
        "translation": "Бу мин үтүө доҕорум...",
        "avatar": "girl",
        "audio": greeting_dictionary[114]
    },
    {
        "sentence": "Это мой родственник.",
        "translation": "Бу мин аймаҕым.",
        "avatar": "boy",
        "audio": greeting_dictionary[115]
    },
    {
        "sentence": "Я – сын (дочь) Осипова.",
        "translation": "Мин Осипов уолабын (кыыһабын).",
        "avatar": "girl",
        "audio": greeting_dictionary[116]
    },
    {
        "sentence": "Будьте гостем!",
        "translation": "Ыалдьыт буол!",
        "avatar": "boy",
        "audio": greeting_dictionary[117]
    },
    {
        "sentence": "Чувствуйте себя как дома.",
        "translation": "Дьиэлээх киһи курдук тутун. Дьиэҕэр сылдьар курдук санан.",
        "avatar": "girl",
        "audio": greeting_dictionary[118]
    },
    {
        "sentence": "Когда Вы приехали?",
        "translation": "Эн хаһан кэлбиккиний?",
        "avatar": "boy",
        "audio": greeting_dictionary[119]
    },
    {
        "sentence": "Сегодня утром.",
        "translation": "Бүгүн сарсыарда.",
        "avatar": "girl",
        "audio": greeting_dictionary[120]
    },
    {
        "sentence": "Давненько Вас не видел.",
        "translation": "Эйигин көрбөтөҕүм өр буолбут.",
        "avatar": "boy",
        "audio": greeting_dictionary[121]
    },
    {
        "sentence": "Вот моя визитная карточка.",
        "translation": "Бу мин визитнэй карточкам.",
        "avatar": "girl",
        "audio": greeting_dictionary[122]
    },
    {
        "sentence": "Позвольте представить Вас моему мужу (моей жене).",
        "translation": "Эйигин кэргэммин кытта билиһиннэрэрбин көҥүллээ.",
        "avatar": "boy",
        "audio": greeting_dictionary[123]
    },
    {
        "sentence": "Стол сейчас будет накрыт.",
        "translation": "Билигин остуол тардыллыа.",
        "avatar": "girl",
        "audio": greeting_dictionary[124]
    },
    {
        "sentence": "Спасибо, мы торопимся.",
        "translation": "Баһыыбаларыҥ, биһиги ыксыыбыт.",
        "avatar": "boy",
        "audio": greeting_dictionary[125]
    },
    {
        "sentence": "Дальше куда поедете?",
        "translation": "Мантан хайа диэки айаннаатыгыт?",
        "avatar": "girl",
        "audio": greeting_dictionary[126]
    },
    {
        "sentence": "Запишите мой адрес.",
        "translation": "Мин аадырыспын сурун.",
        "avatar": "boy",
        "audio": greeting_dictionary[127]
    },
    {
        "sentence": "Передавайте наилучшие пожелания от меня Вашей матери.",
        "translation": "Ийэҕэр миигиттэн истиҥ эҕэрдэтэ тириэрт.",
        "avatar": "girl",
        "audio": greeting_dictionary[128]
    },
    {
        "sentence": "Передавай привет Николаю.",
        "translation": "Ньукулайга эҕэрдэтэ тириэрт.",
        "avatar": "boy",
        "audio": greeting_dictionary[129]
    },
    {
        "sentence": " Не пропадайте.",
        "translation": "Сүтэн хаалыма.",
        "avatar": "girl",
        "audio": greeting_dictionary[130]
    },
    {
        "sentence": "С нетерпением жду нашей следующей встречи.",
        "translation": "Аныгыскы көрсүһүүнү олус (эрэнэн, долгуйан туран) күүтэбин.",
        "avatar": "boy",
        "audio": greeting_dictionary[131]
    },
    {
        "sentence": "Будете в Якутске – заходите.",
        "translation": "Дьокуускайга кэллэххитинэ сылдьаарыҥ.",
        "avatar": "girl",
        "audio": greeting_dictionary[132]
    },
    {
        "sentence": "Что вы хотите?",
        "translation": "Эн тугу баҕараҕын?",
        "avatar": "boy",
        "audio": greeting_dictionary[133]
    },
    {
        "sentence": "Я хочу пойти в магазин (театр, кино, парк, на рынок, стадион).",
        "translation": "Мин маҕаһыыҥҥа (тыйаатырга, киинэҕэ, пааркаҕа, ырыынакка, стадиоҥҥа) барыахпын баҕарабын.",
        "avatar": "girl",
        "audio": greeting_dictionary[134]
    },
    {
        "sentence": "Я бы поспал (отдохнул).",
        "translation": "Мин утуйуом (сынньаныам) этэ.",
        "avatar": "boy",
        "audio": greeting_dictionary[135]
    },
    {
        "sentence": "Я не помешаю?",
        "translation": "Мин мэһэйдээбэппин дуо? ",
        "avatar": "girl",
        "audio": greeting_dictionary[136]
    },
    {
        "sentence": "Нет, ничего.",
        "translation": "Ээ суох, туох буолуой.",
        "avatar": "boy",
        "audio": greeting_dictionary[137]
    },
    {
        "sentence": "Не беспокойся.",
        "translation": "Долгуйума. ",
        "avatar": "girl",
        "audio": greeting_dictionary[138]
    },
    {
        "sentence": "Успокойся, все будет в порядке.",
        "translation": "Уоскуй, барыта этэҥҥэ буолуо.",
        "avatar": "boy",
        "audio": greeting_dictionary[139]
    },
    {
        "sentence": "Не обращайте внимания на то, что он сказал.",
        "translation": "Кини тылын аахсыма.",
        "avatar": "girl",
        "audio": greeting_dictionary[140]
    },
    {
        "sentence": "Отвезите меня в центр города.",
        "translation": "Миигин куорат киинигэр илдьэн кулу эрэ.",
        "avatar": "boy",
        "audio": greeting_dictionary[141]
    },
    {
        "sentence": "Вы могли бы показать мне город (деревню, музей, реку)?",
        "translation": "Эн миэхэ куораты (дэриэбинэни, мусуойу, өрүһү) көрдөрүөҥ дуо?",
        "avatar": "girl",
        "audio": greeting_dictionary[142]
    },
    {
        "sentence": "Я хочу учить якутский язык.",
        "translation": "Мин саха тылын үөрэтиэхпин баҕарабын.",
        "avatar": "boy",
        "audio": greeting_dictionary[143]
    },
    {
        "sentence": "Спасибо за подарок!",
        "translation": "Бэлэҕиҥ иһин баһыыба!",
        "avatar": "girl",
        "audio": greeting_dictionary[144]
    },
    {
        "sentence": "Сердечно благодарен за теплый прием (встречу, приятный разговор).",
        "translation": "Истиҥник көрсүбүккэр (ыалдьыттаппыккар, кэпсэппиккэр) махтанабын.",
        "avatar": "boy",
        "audio": greeting_dictionary[145]
    }
];

const dialogue1 = [
    [
        {
            "sentence": "Здравствуйте!",
            "translation": "Дорообо!",
            "avatar": "boy",
            "audio": greeting_dialogue1[0]
        },
        {
            "sentence": "Добрый день!",
            "translation": "Үтүө күнүнэн!",
            "avatar": "girl",
            "audio": greeting_dialogue1[1]
        }
    ],
    [
        {
            "sentence": "Извините, можно войти!",
            "translation": "Бырастыы гын, киириэххэ сөп дуо?",
            "avatar": "boy",
            "audio": greeting_dialogue1[2]
        },
        {
            "sentence": "Вы на экзамен пришли?",
            "translation": "Эксээмэҥҥэ кэллиҥ дуо?",
            "avatar": "girl",
            "audio": greeting_dialogue1[3]
        }
    ],
    [
        {
            "sentence": "Да, на экзамен.",
            "translation": "Эксээмэҥҥэ.",
            "avatar": "boy",
            "audio": greeting_dialogue1[4]
        },
        {
            "sentence": "Да, пожалуйста, проходите.",
            "translation": "Сөп, баһаалыста, киир.",
            "avatar": "girl",
            "audio": greeting_dialogue1[5]
        }
    ],
    [
        {
            "sentence": "Спасибо.",
            "translation": "Махтанабын.",
            "avatar": "boy",
            "audio": greeting_dialogue1[6]
        },
        {
            "sentence": "Ой, прошу прощения, подождите  немного.",
            "translation": "Ой, бырастыы гынаргар көрдөһөбүн, кыратык күүтэ түс дии.",
            "avatar": "girl",
            "audio": greeting_dialogue1[7]
        }
    ],
    [
        {
            "sentence": "Хорошо.",
            "translation": "Сөп.",
            "avatar": "boy",
            "audio": greeting_dialogue1[8]
        },
        {
            "sentence": "",
            "translation": "",
            "avatar": "girl",
            "audio": greeting_dialogue1[9]
        }
    ]
];

const dialogue2 = [
    [
        {
            "sentence": "Давайте познакомимся. Как Вас зовут?",
            "translation": "Билсиһиэххэ эрэ. Эн аатыҥ кимий?",
            "avatar": "girl",
            "audio": greeting_dialogue2[0]
        },
        {
            "sentence": "Меня зовут Айаал. Фамилия моя –Попов. Отчество – Иванович.",
            "translation": "Мин аатым Айаал. Араспаанньам Попов диэн. Аҕам аата – Иванович.",
            "avatar": "boy",
            "audio": greeting_dialogue2[1]
        }
    ],
    [
        {
            "sentence": "Вы откуда сами?",
            "translation": "Эн хантан сылдьаҕын?",
            "avatar": "girl",
            "audio": greeting_dialogue2[2]
        },
        {
            "sentence": "Я приехал из Якутии.",
            "translation": "Мин Саха Сириттэн кэлбитим.",
            "avatar": "boy",
            "audio": greeting_dialogue2[3]
        }
    ],
    [
        {
            "sentence": "Сколько Вам лет?",
            "translation": "Эн хас саастааххыный?",
            "avatar": "girl",
            "audio": greeting_dialogue2[4]
        },
        {
            "sentence": "Мне уже сорок.",
            "translation": "Мин түөрт уонум.",
            "avatar": "boy",
            "audio": greeting_dialogue2[5]
        }
    ],
    [
        {
            "sentence": "Вы женаты?",
            "translation": "Кэргэннээххин дуо?",
            "avatar": "girl",
            "audio": greeting_dialogue2[6]
        },
        {
            "sentence": "Я женат.",
            "translation": "Мин ойохтоохпун.",
            "avatar": "boy",
            "audio": greeting_dialogue2[7]
        }
    ],
    [
        {
            "sentence": "Есть ли у Вас дети?",
            "translation": "Оҕолооххун дуо?",
            "avatar": "girl",
            "audio": greeting_dialogue2[8]
        },
        {
            "sentence": "У меня один ребенок.",
            "translation": "Биир оҕолоохпун.",
            "avatar": "boy",
            "audio": greeting_dialogue2[9]
        }
    ],
    [
        {
            "sentence": "Где Вы работаете?",
            "translation": "Эн ханна үлэлиигин?",
            "avatar": "girl",
            "audio": greeting_dialogue2[10]
        },
        {
            "sentence": "Работаю в школе учителем.",
            "translation": "Оскуолаҕа учууталынан үлэлиибин.",
            "avatar": "boy",
            "audio": greeting_dialogue2[11]
        }
    ],
    [
        {
            "sentence": "Я рад знакомству с Вами.",
            "translation": "Эйигин кытта билсибиппиттэн үөрэбин.",
            "avatar": "boy",
            "audio": greeting_dialogue2[12]
        },
        {
            "sentence": "Приятно познакомиться.",
            "translation": "Билсибиппит үчүгэй.",
            "avatar": "girl",
            "audio": greeting_dialogue2[13]
        }
    ]
];

const dialogue3 = [
    [
        {
            "sentence": "Добрый день!",
            "translation": "Үтүө күнүнэн!",
            "avatar": "girl",
            "audio": greeting_dialogue3[0]
        },
        {
            "sentence": "Здравствуйте.",
            "translation": "Дорообо!",
            "avatar": "boy",
            "audio": greeting_dialogue3[1]
        }
    ],
    [
        {
            "sentence": "Я – Айталина Джулустановна, ваш преподаватель. Как вас зовут?",
            "translation": "Мин Айталыына Дьулустановна диэммин. Эйигин үөрэтээччи буолабын. Эн аатыҥ ким диэний?",
            "avatar": "girl",
            "audio": greeting_dialogue3[2]
        },
        {
            "sentence": "Меня зовут Нюргун Иванов.",
            "translation": "Мин аатым Ньургун Иванов.",
            "avatar": "boy",
            "audio": greeting_dialogue3[3]
        }
    ],
    [
        {
            "sentence": "Как пишется ваше имя?",
            "translation": "Эн аатыҥ хайдах сурулларый?",
            "avatar": "girl",
            "audio": greeting_dialogue3[4]
        },
        {
            "sentence": "Н-Ю-Р-Г-У-Н",
            "translation": "Н-Ь-У-Р-Г-У-Н",
            "avatar": "boy",
            "audio": greeting_dialogue3[5]
        }
    ],
    [
        {
            "sentence": "Вы казах?",
            "translation": "Казаххын дуо?",
            "avatar": "girl",
            "audio": greeting_dialogue3[6]
        },
        {
            "sentence": "Нет. Я – саха.",
            "translation": "Суох, сахабын.",
            "avatar": "boy",
            "audio": greeting_dialogue3[7]
        }
    ],
    [
        {
            "sentence": "Откуда вы?",
            "translation": "Хантан сылдьаҕын?",
            "avatar": "girl",
            "audio": greeting_dialogue3[8]
        },
        {
            "sentence": "Из Якутии.",
            "translation": "Саха Сириттэн.",
            "avatar": "boy",
            "audio": greeting_dialogue3[9]
        }
    ],
    [
        {
            "sentence": "Из какого вы города?",
            "translation": "Ханнык куоратыттан?",
            "avatar": "girl",
            "audio": greeting_dialogue3[10]
        },
        {
            "sentence": "Из Якутска.",
            "translation": "Дьокуускайтан.",
            "avatar": "boy",
            "audio": greeting_dialogue3[11]
        }
    ],
    [
        {
            "sentence": "Назовите свой адрес? Мне нужно заполнить документы.",
            "translation": "Аадырыскын эт эрэ. Докумуон толорорбор ирдэнэр.",
            "avatar": "girl",
            "audio": greeting_dialogue3[12]
        },
        {
            "sentence": "Березовая улица 20, квартира номер 145.",
            "translation": "Хатыҥнаах уулуссатын 20-тэ, 145-с нүөмэрдээх кыбартыыра.",
            "avatar": "boy",
            "audio": greeting_dialogue3[13]
        }
    ],
    [
        {
            "sentence": "Большое спасибо. Вы работаете в производственном предприятии?",
            "translation": "Улахан махтал. Эн оҥорон таһаарар тэрилтэҕэ үлэлиигин дуо?",
            "avatar": "girl",
            "audio": greeting_dialogue3[14]
        },
        {
            "sentence": "Нет. Я работаю в промышленной компании «Сахатранснефтегаз”.",
            "translation": "Суох, мин «Сахатранснефтегаз” бырамыысыланнай хампаанньаҕа үлэлиибин.",
            "avatar": "boy",
            "audio": greeting_dialogue3[15]
        }
    ],
    [
        {
            "sentence": "Кто вы по профессии?",
            "translation": "Туох идэлээххин?",
            "avatar": "girl",
            "audio": greeting_dialogue3[16]
        },
        {
            "sentence": "Я инженер.",
            "translation": "Мин инженербин.",
            "avatar": "boy",
            "audio": greeting_dialogue3[17]
        }
    ],
    [
        {
            "sentence": "Вы женаты?",
            "translation": "Кэргэннээххин дуо?",
            "avatar": "girl",
            "audio": greeting_dialogue3[18]
        },
        {
            "sentence": "Да.",
            "translation": "Баар.",
            "avatar": "boy",
            "audio": greeting_dialogue3[19]
        }
    ],
    [
        {
            "sentence": "У вас есть дети?",
            "translation": "Оттон оҕолооххун дуо?",
            "avatar": "girl",
            "audio": greeting_dialogue3[20]
        },
        {
            "sentence": "Да. У меня две дочери.",
            "translation": "Баар, икки кыыстаахпын.",
            "avatar": "boy",
            "audio": greeting_dialogue3[21]
        }
    ],
    [
        {
            "sentence": "Сколько вам лет?",
            "translation": "Хас саастааххын?",
            "avatar": "girl",
            "audio": greeting_dialogue3[22]
        },
        {
            "sentence": "Мне 34 года.",
            "translation": "Отут түөрдүм.",
            "avatar": "boy",
            "audio": greeting_dialogue3[23]
        }
    ],
    [
        {
            "sentence": "В каком месяце у вас день рождения?",
            "translation": "Ханнык ыйга төрөөбүт күнүҥ буоларый?",
            "avatar": "girl",
            "audio": greeting_dialogue3[24]
        },
        {
            "sentence": "В ноябре.",
            "translation": "Сэтинньигэ.",
            "avatar": "boy",
            "audio": greeting_dialogue3[25]
        }
    ],
    [
        {
            "sentence": "Чем вы увлекаетесь?",
            "translation": "Тугунан умсугуйаҕын?",
            "avatar": "girl",
            "audio": greeting_dialogue3[26]
        },
        {
            "sentence": "Мне нравится решать кроссворды.",
            "translation": "Таайбараҥ таайарбын сөбүлүүбүн.",
            "avatar": "boy",
            "audio": greeting_dialogue3[27]
        }
    ],
    [
        {
            "sentence": "Отлично! Ты занимаешься спортом?",
            "translation": "Бэрт. Спордунан дьарыктанаҕын дуо?",
            "avatar": "girl",
            "audio": greeting_dialogue3[28]
        },
        {
            "sentence": "Да, я катаюсь на велосипеде.",
            "translation": "Ээ, бэлисэпиэт тэбэбин.",
            "avatar": "boy",
            "audio": greeting_dialogue3[29]
        }
    ],
    [
        {
            "sentence": "Обычно до скольких работаете?",
            "translation": "Хаска диэри үлэлээччигиний?",
            "avatar": "girl",
            "audio": greeting_dialogue3[30]
        },
        {
            "sentence": "В 6 часов вечера.",
            "translation": "Киэһэ 18.00 чааска диэри.",
            "avatar": "boy",
            "audio": greeting_dialogue3[31]
        }
    ],
    [
        {
            "sentence": "В какие дни вы можете посещать уроки английского языка?",
            "translation": "Ангылычаан тылын дьарыгар ханнык күннэргэ сылдьар эйиэхэ табыгастааҕый?",
            "avatar": "girl",
            "audio": greeting_dialogue3[32]
        },
        {
            "sentence": "В понедельник и четверг. Сколько стоит один урок?",
            "translation": "Бэнидиэнньиккэ уонна чэппиэргэ. Биир уруок төлөбүрэ төһөнүй?",
            "avatar": "boy",
            "audio": greeting_dialogue3[33]
        }
    ],
    [
        {
            "sentence": "Четыреста рублей, если вы приходите на занятия два раза в неделю.",
            "translation": "Нэдиэлэҕэ иккитэ сылдьар буоллаххына, түөрт мөһөөх.",
            "avatar": "girl",
            "audio": greeting_dialogue3[34]
        },
        {
            "sentence": "Хорошо.",
            "translation": "Сөп.",
            "avatar": "boy",
            "audio": greeting_dialogue3[35]
        }
    ],
    [
        {
            "sentence": "Не могли бы вы дать мне свой номер телефона, пожалуйста?",
            "translation": "Эн миэхэ төлөпүөнүҥ нүөмэрин биэриэххин сөп дуо? Баһаалыста.",
            "avatar": "girl",
            "audio": greeting_dialogue3[36]
        },
        {
            "sentence": "Конечно. 1-234-567",
            "translation": "Биэрэн буоллаҕа: 1-234-567",
            "avatar": "boy",
            "audio": greeting_dialogue3[37]
        }
    ],
    [
        {
            "sentence": "Адрес вашей электронной почты?",
            "translation": "Электроннай почтаҥ аадырыһа?",
            "avatar": "girl",
            "audio": greeting_dialogue3[38]
        },
        {
            "sentence": "1234567@email.com",
            "translation": "1234567@email.com",
            "avatar": "boy",
            "audio": greeting_dialogue3[39]
        }
    ],
    [
        {
            "sentence": "Спасибо. Теперь давайте познакомимся с другими студентами.",
            "translation": "Баһыыба. Аны билигин  устудьуоннары кытта билсиһиэххэ.",
            "avatar": "girl",
            "audio": greeting_dialogue3[40]
        },
        {
            "sentence": "С большим удовольствием.",
            "translation": "Үөрүүнү кытта.",
            "avatar": "boy",
            "audio": greeting_dialogue3[41]
        }
    ]
];

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
        "Title": "Приветствие, вежливое отношение",
        "Image": IntroductionIcon,
        "View": 3
    },
    {
        "Title": "Давайте познакомимся",
        "Image": IntroductionIcon,
        "View": 4
    },
    {
        "Title": "Знакомство со студентом",
        "Image": IntroductionIcon,
        "View": 5
    }
];

export const SubjectContext = createContext({
    currentSubject: 0,
    setCurrentSubject: () => { }
});

function Greeting() {
    const { currentView, setView } = useContext(ViewContext);
    const [currentSubject, setCurrentSubject] = useState(0);

    const [page, setPage] = useState(0);

    const [dialogue, setDialogue] = useState(0);

    const handleClick = event => {
        setCurrentSubject(currentSubject + 1)
        if (currentSubject === 5) setCurrentSubject(0)
    };

    const handleBack = event => {

        if (currentSubject == 1) {
            setCurrentSubject(0)
        }

        setCurrentSubject(currentSubject - 1)
        if (dialogue > 0) {
            setDialogue(dialogue - 1)
        }

        window.scrollTo(0, 0);
    };

    //pass to quiz
    const [state, setState] = useState(false);

    useEffect(() => {
        if (page == 2) {
            setPage(0)
            setDialogue(dialogue - 1)
            setState(false)
        }

    }, [state])

    return (
        <ViewContext.Provider value={{ currentView, setView }}>
            <SubjectContext.Provider value={{ currentSubject, setCurrentSubject }}>
                <motion.div className='subjectsPage' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    {currentSubject === 0 && <div className='buttonsContainer'>
                        <SubjectCard subject={subjects[0]} index='coloredCard1' subjectContext={SubjectContext}/>
                        <SubjectCard subject={subjects[1]} index='coloredCard2' subjectContext={SubjectContext}/>
                        {/* <SubjectCard subject={subjects[2]} index='coloredCard3' subjectContext={SubjectContext}/>
                        <SubjectCard subject={subjects[3]} index='coloredCard4' subjectContext={SubjectContext}/>
                        <SubjectCard subject={subjects[4]} index='coloredCard5' subjectContext={SubjectContext}/> */}
                    </div>}
                    {currentSubject === 1 && <Page1 />}
                    {currentSubject === 2 && <Page2 />}
                    {currentSubject === 3 && <Page3 />}
                    {currentSubject === 4 && <Page4 />}
                    {currentSubject === 5 && <Page5 />}

                    {currentSubject != 0 && currentSubject != 3 && currentSubject != 4 && currentSubject != 5 && <div className="bottomNavbar">
                        <Button text={currentSubject === 1 ? 'Вернуться к теме' : 'Назад'} handleClick={handleBack} />
                        {/* <button className='buttonLearn' onClick={handleClick}>Далее</button> */}
                        <Button text={currentSubject === 5 ? 'Вернуться к теме' : 'Далее'} handleClick={handleClick} />
                    </div>}
                </motion.div>
            </SubjectContext.Provider>

        </ViewContext.Provider>
    )
}

function Page1() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }} className="greeting-introduction">
            <div className="container">
                <h1 className='header'>Урок № 2 / Иккис дьарык</h1>
                <h3>Тема урока: “Приветствие. Знакомство”. В этом уроке мы научимся основам общения, узнаем как приветствовать собеседника, как спросить его имя, как представиться самому.</h3>
                <p>Слова приветствия – самое первое, что мы учим при знакомстве с якутским языком. И это отлично, ведь с их помощью можно поздороваться и начать разговор. Для этого сперва выучим несколько самых нужных слов и фраз, затем составим диалог на тему: "Знакомство". И в конце занятия выполним онлайн-тест.</p>
                <div className='greetingImage'>
                    <img src={image1}></img>
                    <p className='imageSubtitle'>Рис. Василия Корякина.</p>
                </div>
            </div>
        </motion.div>
    )
}

function Page2() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }} className="greeting-dictionary">
            <div className="container">
                <h1 className='header'>Словарь. Тылдьыт.</h1>
                
                <div className='dictionaryTable'>
                    <div className='aside'>
                        <h3>Приветствие. Знакомство</h3>
                        <h3>Эҕэрдэлэһии. Билсиһии</h3>
                    </div>
                    {dictionary.map((e, i) => {
                        return (
                            <div className='aside'>
                                <p>{e.sentence}</p>
                                <p>{e.translation}</p>
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

function Page3() {
    const { currentSubject, setCurrentSubject } = useContext(SubjectContext);
    const PageContext = createContext({
        currentPage: 0,
        setCurrentPage: () => { }
    });
    const [currentPage, setCurrentPage] = useState(0);


    const [dialogue, setDialogue] = useState(0);

    const handleClick = event => {
        if (dialogue < dialogue1.length - 1) {
            setDialogue(dialogue + 1)
        }
        if (dialogue == dialogue1.length - 1) {
            setCurrentPage(1)
        }
    };

    const handleBack = event => {
        if (dialogue > 0) {
            setDialogue(dialogue - 1)
        }
        window.scrollTo(0, 0);
    };

    const handleBackSubject = event => {
        setCurrentSubject(currentSubject - 1);
        window.scrollTo(0, 0);
    };


    //pass to quiz
    const [stateNavigate, setStateNavigate] = useState('none');

    useEffect(() => {
        if (currentPage == 1) {
            setCurrentSubject(currentSubject + 1);
        }

    }, [stateNavigate])

    return (
        <PageContext.Provider value={{ currentPage, setCurrentPage }}>
            <SubjectContext.Provider value={{ currentSubject, setCurrentSubject }}>
                <div className="">
                    {currentPage === 0 &&
                        <div className="container">
                            <h1 className='header'>Приветствие, вежливое отношение</h1>
                            <h3 className='greeting-subheader'>Эҕэрдэлэһии, эйэҕэс сыһыан</h3>
                            {dialogue < dialogue1.length && <Dialogue dialogue={dialogue1[dialogue]} />}
                        </div>
                    }
                    {currentPage === 1 &&
                        <Quiz questions={quizGreeting1.questions} quizTitle={quizGreeting1.quizTitle} stateNavigate={setStateNavigate} />
                    }

                    {currentPage === 0 && <div className="bottomNavbar">
                        {dialogue != 0 ? <Button text='Назад' handleClick={handleBack} /> : <Button text='Назад' handleClick={handleBackSubject} />}
                        {/* <button className='buttonLearn' onClick={handleClick}>Далее</button> */}
                        <Button text={dialogue == dialogue1.length - 1 ? 'Перейти к тесту' : 'Далее'} handleClick={handleClick} />
                    </div>}
                </div>
            </SubjectContext.Provider>
        </PageContext.Provider>
    )
}

function Page4() {
    const { currentSubject, setCurrentSubject } = useContext(SubjectContext);
    const PageContext = createContext({
        currentPage: 0,
        setCurrentPage: () => { }
    });
    const [currentPage, setCurrentPage] = useState(0);


    const [dialogue, setDialogue] = useState(0);

    const handleClick = event => {
        if (dialogue < dialogue2.length - 1) {
            setDialogue(dialogue + 1)
        }
        if (dialogue == dialogue2.length - 1) {
            setCurrentPage(1)
        }
    };

    const handleBack = event => {
        if (dialogue > 0) {
            setDialogue(dialogue - 1)
        }
        window.scrollTo(0, 0);
    };

    const handleBackSubject = event => {
        setCurrentSubject(currentSubject - 1);
        window.scrollTo(0, 0);
    };


    //pass to quiz
    const [stateNavigate, setStateNavigate] = useState('none');

    useEffect(() => {
        if (currentPage == 1) {
            setCurrentSubject(currentSubject + 1);
        }

    }, [stateNavigate])

    return (
        <PageContext.Provider value={{ currentPage, setCurrentPage }}>
            <div className="">
                {currentPage === 0 &&
                    <div className="container">
                        <h1 className='header'>Давайте познакомимся</h1>
                        <h3 className='greeting-subheader'>Билсиһиэххэ эрэ</h3>
                        {dialogue < dialogue2.length && <Dialogue dialogue={dialogue2[dialogue]} />}
                    </div>
                }
                {currentPage === 1 &&
                    <Quiz questions={quizGreeting2.questions} quizTitle={quizGreeting2.quizTitle} stateNavigate={setStateNavigate} />
                }

                {currentPage === 0 && <div className="bottomNavbar">
                    {dialogue != 0 ? <Button text='Назад' handleClick={handleBack} /> : <Button text='Назад' handleClick={handleBackSubject} />}
                    {/* <button className='buttonLearn' onClick={handleClick}>Далее</button> */}
                    <Button text={dialogue == dialogue2.length - 1 ? 'Перейти к тесту' : 'Далее'} handleClick={handleClick} />
                </div>}
            </div>
        </PageContext.Provider>
    )
}

function Page5() {
    const { currentSubject, setCurrentSubject } = useContext(SubjectContext);
    const PageContext = createContext({
        currentPage: 0,
        setCurrentPage: () => { }
    });
    const [currentPage, setCurrentPage] = useState(0);


    const [dialogue, setDialogue] = useState(0);

    const handleClick = event => {
        if (dialogue < dialogue3.length - 1) {
            setDialogue(dialogue + 1)
        }
        if (dialogue == dialogue3.length - 1) {
            setCurrentPage(1)
        }
    };

    const handleBack = event => {
        if (dialogue > 0) {
            setDialogue(dialogue - 1)
        }
        window.scrollTo(0, 0);
    };

    const handleBackSubject = event => {
        setCurrentSubject(currentSubject - 1);
        window.scrollTo(0, 0);
    };


    //pass to quiz
    const [stateNavigate, setStateNavigate] = useState('none');

    useEffect(() => {
        if (currentPage == 1) {
            setCurrentSubject(currentSubject + 1);
        }

    }, [stateNavigate])

    return (
        <PageContext.Provider value={{ currentPage, setCurrentPage }}>
            <div>
                {currentPage === 0 &&
                    <div className="container">
                        <h1 className='header'>Знакомство со студентом</h1>
                        <h3 className='greeting-subheader'>Устудьуону кытта билсиһии</h3>
                        {dialogue < dialogue3.length && <Dialogue dialogue={dialogue3[dialogue]} />}
                    </div>
                }
                {currentPage === 1 &&
                    <Quiz questions={quizGreeting3.questions} quizTitle={quizGreeting3.quizTitle} />
                }

                {currentPage === 0 && <div className="bottomNavbar">
                    {dialogue != 0 ? <Button text='Назад' handleClick={handleBack} /> : <Button text='Назад' handleClick={handleBackSubject} />}
                    {/* <button className='buttonLearn' onClick={handleClick}>Далее</button> */}
                    <Button text={dialogue == dialogue3.length - 1 ? 'Перейти к тесту' : 'Далее'} handleClick={handleClick} />
                </div>}
            </div>
        </PageContext.Provider>
    )
}

function Dialogue(props) {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }} className="dialogue">
            <div className='speechBubbles'>
                <div className="speech">
                    {props.dialogue[0].sentence != '' && <Bubble sentence={props.dialogue[0].sentence} translation={props.dialogue[0].translation} audio={props.dialogue[0].audio} />}
                </div>
                <div className="speech">
                    {props.dialogue[1].sentence != '' && <Bubble sentence={props.dialogue[1].sentence} translation={props.dialogue[1].translation} audio={props.dialogue[1].audio} />}
                </div>
            </div>

            <div className='speechText'>
                <div className="speech">
                    <img className="personImage" src={props.dialogue[0].avatar == 'boy' ? b_left : g_left}></img>
                </div>
                <div className="speech">
                    <img className="personImage" src={props.dialogue[1].avatar == 'boy' ? b_right : g_right}></img>
                </div>
            </div>

        </motion.div>
    );
}

export default Greeting