import { motion } from 'framer-motion';
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

export default function Tale3() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }} className='container'>
            <div className='taleContent'>
                <h1 className='header'>КУОҔАС  СУОР ИККИ</h1>
                <img className='taleImage' src={imageTale3}></img>
                <p>Бэрт былыр <span>куоҕас суор</span> курдук <span>хап-хара</span> эбитэ үһү. Куоҕастаах суор, <span>атын көтөрдөр</span> эриэннэригэр ымсыыран, <span>бэйэ-бэйэлэрин</span> өҥнөрүн кырааскалаан, ойуулаан биэрээри оҥостубуттар.</p>
                <p>Суор куоҕаһы араас дьэрэкээн ойуулаан, <span>оһуордаан</span> биэрбит. Куоҕас <span>өрүскэ</span> киирэн, дьүһүнүн көрүнэн баран, суору ойуулуон баҕарбатах, <span>ууга</span> умсан хаалбыт. Албыннаабытын өйдөөн, суор куоҕаһы самыытын ыыра <span>охсон</span> кэбиспит.</p>
                <p>Онон суор уруккутун курдук харата харатынан <span>хаалбыт</span>, оттон куоҕас, эриэн түүлээх буолан баран, самыыта хаптаччы оһон, <span>атаҕа</span> тиэрэ буолан хаалбыт.</p>


                <span className='subSpan'>Орджоникидзе оройуона, Эргис нэһилиэгэ.</span>
                <span className='subSpan'>Прасковья Ксенофонтовна Ефремова тылыттан Г. У. Эргис суруйбута.</span>
                <span className='subSpan'>1930 с., от ыйа, Хоптолоох сайылык.</span>
                <span className='subSpan'>Г. У. Эргис хомуйбут матырыйаалларыттан.</span>
            </div>

            <div className='taleContent'>
                <h1 className='header'>ГАГАРА И ВОРОН</h1>
                <p>В глубокую старину Гагара была такая же <span>черная-пречерная</span>, как ворон. Завидуя нарядному оперению <span>других птиц, Гагара</span> и <span>Ворон</span> решили тоже украсить <span>друг друга</span>.</p>
                <p>Ворон постарался как только мог и украсил Гагару всевозможными <span>узорами</span>. Гагара пошла посмотреться в <span>реку</span>. Подошла к <span>воде</span>, посмотрел новое оперение, и так-то оно ей понравилось, что и к Ворону возвращаться не захотелось, чтобы и его так же украсить: пусть она одна такой нарядной будет! И уже собралась нырнуть в воду. Однако догадавшийся о вероломстве гагары, Ворон все же успел <span>ударить</span> ее своим тяжелым клювом и повредил ей крестец.</p>
                <p>Потому-то Ворон по-прежнему <span>остался</span> черным, а Гагара, хоть нарядное оперение, но крестцовые кости срослись у нее плохо, и <span>ноги</span> похожи на вывороченные.</p>


                <span className='subSpan'>Саха остуоруйалара : Издание 2-е. – Дьокуускай : Бичик,  1994 – 68.</span>
                <span className='subSpan'>Рисунок Василия Корякина.</span>
            </div>

            <div className='taleContent'>
                <h1 className='header'>Учим и запоминаем слова из текста /Тыллары үөрэтэбит</h1>
                <p>Гагара – куоҕас;</p>
                <p>Ворон – суор;</p>
                <p>Птиц – көтөрдөр (птица – көтөр);</p>
                <p>Других – атын (другой – атын, туспа);</p>
                <p>Черный-пречерный – хап-хара (черный – хара);</p>
                <p>Бэйэ-бэйэлэрин – друг друга;</p>
                <p>Узор – оһуор;</p>
                <p>Өрүс – река;</p>
                <p>Уу – вода;</p>
                <p>Новый – саҥа;</p>
                <p>Ноги – атах;</p>
                <p>Ударить – оҕус (удар – охсуу);</p>
                <p>Остался – хаалбыт (остаться – хаал).</p>
            </div>
        </motion.div>
    )
}