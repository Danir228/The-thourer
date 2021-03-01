import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppStoreButton from '../../../buttons/appStore';

import './section-2.css';

function SectionSecond() {
    return (
        <div className="section-second d-flex">
            <div className="section-second_left"></div>
            <div className="section-second_right">
                <h1>The Tourer</h1>
                <p>The Tourer открывает возможность создавать 3D-туры любому желающему.
                Фотографии и видео рождают в голове больше вопросов, чем ответов.
                Экономьте время и силы, позволив клиентам виртуально оказаться в помещении, находясь абсолютно в другом месте.</p>
                <AppStoreButton
                textButton={'Скачать приложение'}/>
            </div>
        </div>
    )
}

export default SectionSecond;