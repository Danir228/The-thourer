import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppStoreButton from '../../../buttons/appStore';

import './section-1.css';

function SectionFirst() {
    return (
        <div className="section-first d-flex">
            <div className="section-first_left hide">
                <h1>Предоставьте клиентам возможность прогуляться по помещению онлайн</h1>
                <p>Создавайте и распространяйте виртуальные туры по помещениям самостоятельно.
                Все, что вам нужно - мобильный телефон и около часа свободного времени</p>
                <AppStoreButton
                textButton={'App Store'}/>
            </div>
            <div className="section-first_right hide"></div>
        </div>
    )
}

export default SectionFirst;