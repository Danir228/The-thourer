import React from 'react';
import { Component } from 'react';
import SectionNineAccordion from './components/section-9-item';
import SocialLink from '../../../buttons/social-link';
import Modal from '../../../modal';

import telegram from './components/images/telegram.svg';
import whatsap from './components/images/whatsap.svg';
import mail from './components/images/mail.svg';
import address from './adress.png';

import './section-9.css';


export default class SectionNine extends Component {
    state = {
        visible: false
    }

    toggle = (value) => {
        this.setState({visible: value});
    }

    render() {
        return (
            <div className="section-9_item">
                <Modal
                    closeModalWindow={ () => this.toggle(false)}
                    visible={this.state.visible}
                    imgModal={address}
                />
                <h1 className="section-9_title">Часто задаваемые <span className="textupdate">вопросы</span></h1>
                <SectionNineAccordion
                    visible={false}
                    title={'Как я могу делиться созданными турами?'}
                    text1={'Возможность делиться созданными турами предоставляется только для платных уровней подписки.'}
                    text2={'Вы можете предоставить доступ к виртуальным турам 3-мя способами:'}
                    text3={'• Отправить прямую ссылку на виртуальный тур'}
                    text4={{start:'• Получить онлайн-визитку с ', visibleModal: this.state.visible, function: this.toggle, functionName: 'QR-кодом', end: ' для использования в агрегаторах объявлений'}}
                    text5={'• Вставить преднастроенный код плеера на ваш сайт'}
                />
                <SectionNineAccordion
                visible={false}
                title={'У меня уже есть отснятые панорамы. Могу ли я использовать их в приложении?'}
                text1={`
                    Да, наше приложение поддерживает импорт панорам из памяти телефона.
                    Подключение внешних камер к iPhone в текущей версии приложения не предусмотрено.
                `}/>
                <SectionNineAccordion
                visible={false}
                title={'Для каких помещений можно использовать виртуальные туры?'}
                text1={`
                    Нет ограничений в сферах, которым виртуальные туры могут быть полезны.
                    Но они наиболее распространены в жилых и коммерческих помещениях,
                    коворкингах, ресторанах, отелях, фитнес-клубах и др.
                `}/>
                <SectionNineAccordion
                visible={false}
                title={'Какие устройства поддерживает приложение?'}
                text1={`
                    На данный момент поддерживаются только устройства на операционной системе iOS.
                    Для создания материалов требуются модели iPhone 6S и новее.
                    Если у вас модель более раннего года выпуска,
                    то вы можете воспользоваться приложением в качестве конструктора виртуальных туров из уже готовых материалов.
                    Версия для устройств на операционной системе Android находится в разработке.
                `}/>
                <div className="section-9_footer_title">Остались вопросы? <span className="text">Свяжитесь с нами!</span></div>
                <div className="section-9_footer_links">
                    <SocialLink
                    image={telegram}/>
                    <SocialLink
                    image={whatsap}/>
                    <SocialLink
                    image={mail}/>
                </div>
            </div>
        )
    }
}