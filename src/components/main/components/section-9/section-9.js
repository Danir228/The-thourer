import React from 'react';
import SectionNineAccordion from './components/section-9-item';
import SocialLink from '../../../buttons/social-link';

import telegram from './components/images/telegram.svg';
import whatsap from './components/images/whatsap.svg';
import mail from './components/images/mail.svg';

import './section-9.css';

export default function SectionNine({}) {
    return (
        <>
            <h1 className="section-9_title">Часто задаваемые <span className="textupdate">вопросы</span></h1>
            <SectionNineAccordion
            title={'Как я могу делиться созданными турами?'}
            text1={'Возможность делиться созданными турами предоставляется только для платных уровней подписки.'}
            text2={'Вы можете предоставить доступ к виртуальным турам 3-мя способами:'}
            text3={'• Отправить прямую ссылку на виртуальный тур'}
            text4={'• Получить онлайн-визитку с <span class="text">QR-кодом</span> для использования в агрегаторах объявлений'}
            text5={'• Вставить преднастроенный код плеера на ваш сайт'}/>
            <SectionNineAccordion
            title={'У меня уже есть отснятые панорамы. Могу ли я использовать их в приложении?'}
            text1={''}
            text2={''}
            text3={''}
            text4={''}
            text5={''}/>
            <SectionNineAccordion
            title={'Для каких помещений можно использовать виртуальные туры?'}
            text1={''}
            text2={''}
            text3={''}
            text4={''}
            text5={''}/>
            <SectionNineAccordion
            title={'Какие устройства поддерживает приложение?'}
            text1={''}
            text2={''}
            text3={''}
            text4={''}
            text5={''}/>
            <div className="section-9_footer_title">Остались вопросы? <span className="text">Свяжитесь с нами!</span></div>
            <div className="section-9_footer_links">
                <SocialLink
                image={telegram}/>
                <SocialLink
                image={whatsap}/>
                <SocialLink
                image={mail}/>
            </div>
        </>
    )
}