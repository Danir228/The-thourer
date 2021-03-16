import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'reactstrap';
import AppStoreButton from '../../../buttons/appStore';

import './section-2.css';

function SectionSecond() {
    return (
        <>
            <div className="section-second_left"></div>
            <Container>
                <div className="section-second d-flex">
                    <div className="section-second_right">
                        <h1>The Tourer</h1>
                        <p>The Tourer открывает возможность создавать 3D-туры любому желающему.
                        Фотографии и видео рождают в голове больше вопросов, чем ответов.
                        Экономьте время и силы, позволив клиентам виртуально оказаться в помещении, находясь абсолютно в другом месте.</p>
                        <div className="section-second_btn">
                            <AppStoreButton
                            textButton={'Скачать приложение'}/>
                        </div>
                    </div>
                </div>
            </Container>
        </>

    )
}

export default SectionSecond;