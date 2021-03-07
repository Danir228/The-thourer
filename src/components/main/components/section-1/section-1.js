import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppStoreButton from '../../../buttons/appStore';

import './section-1.css';

function SectionFirst() {
    return (
        <div className="section-first d-flex">
            <div className="section-first_left">
                <h1>Предоставьте клиентам возможность прогуляться по помещению <span className="section-first_left_bold">онлайн</span></h1>
                <p>Создавайте и распространяйте виртуальные туры по помещениям самостоятельно.
                Все, что вам нужно - мобильный телефон и около часа свободного времени</p>
                <AppStoreButton
                textButton={'App Store'}/>
            </div>
            <div className="section-first_right"></div>
        </div>
    )
}

export default SectionFirst;