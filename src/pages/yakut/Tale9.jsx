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
export default function Tale9() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }} className='container'>
            <div className='taleContent'>
                <h1 className='header'>ТАҺАҔАҺЫН ЧЭПЧЭППИТ</h1>
                <img className='taleImage' src={imageTale9}></img>
                <p><span>Былыр</span> биир киһи <span>ындыылаах</span> атын миинэн баран айаннаан испит. Ата <span>мөлтөөн хаалбыт</span>. Киһи атыттан түһэ эккирээбит. “Атым эрэйдээх сылайан мөлтөөн хаалла. Бэйэ, мин көмөлөһүүм", — диэн баран, атыттан <span>бэрэмэдэйин</span> ылан, бэйэтэ сүкпүт уонна, атын миинэн баран, баран испит.</p>
                <p>Дьон көрсөн ыйыппыттар: “Хайа, бу бэрэмэдэйгин тоҕо бэйэҥ сүгэн иһэҕин?”— диэн. Онно киһилэрэ эппиэттээбит: “Атым мөлтөөн хаалла, ол иһин <span>таһаҕаһын</span> чэпчэтээри, бэрэмэдэйбин бэйэм сүгэн иһэбин”, — диир.</p>

                <span className='subSpan'>Орджоникидзе оройуонун Хачыкаат олохтооҕо, 50 саастаах Анна Ивановна тылыттан Г. У. Эргис суруйбута, 1935 с.</span>
            </div>

            <div className='taleContent'>
                <h1 className='header'>ОБЛЕГЧИЛ ПОКЛАЖУ</h1>
                <p><span>В старину</span> один человек ехал верхом на коне с <span>вьюком</span>. Конь его <span>ослабел</span>. Человек спрыгнул коня, сказавши: “Бедный мой конь устал и ослабел. Давай я ему помогу”. Снял с коня <span>переметную суму</span>, взвалил ее себе на плечи, снова сел на коня и поехал дальше.</p>
                <p>Встретились люди и спрашивают: “Это почему переметную суму несешь на своих плечах?”. На это человек ответил: “Конь мой ослабел, поэтому, чтобы облегчить ему <span>поклажу</span>, переметную суму несу на себе”.</p>

                <span className='subSpan'>Якутские сказки: 2-ое издание/ сост. Г.У. Эргис --  Якутск: Бичик, Якутск, 1996. - 263.</span>
                <span className='subSpan'>Рисунок Василия Корякина.</span>
            </div>

            <div className='taleContent'>
                <h1 className='header'>Учим и запоминаем слова из текста /Тыллары үөрэтэбит</h1>
                <p>В старину (давным-давно, в древности, когда-то) – былыр;</p>
                <p>Вьюк – ындыы;</p>
                <p>Ослабел – мөлтөөн хаалла (ослабевать – мөлтөө);</p>
                <p>Перемётная сума – бэрэмэдэй;</p>
                <p>Поклажа – таһаҕас.</p>
            </div>
        </motion.div>
    )
}