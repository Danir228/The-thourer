import React from 'react';
import AppStoreButton from '../../../buttons/appStore';
import GooglePlayButton from '../../../buttons/googlePlay';

import telephone from './telephone.png';

import './section-10.css';

export default function SectionTen() {
    return (
        <>
            <div className="section-10_item">
                <div className="section-10_item-1">
                    <h1 className="section-10_title">Скачайте приложение прямо <span className="section-10_title_item">сейчас!</span></h1>
                    <h2 className="section-10_subtitle">Вы всегда можете воспользоваться бесплатной версией, чтобы ознакомиться с функционалом приложения.</h2>
                    <div className="section-10_buttons">
                        <AppStoreButton
                        className="section-10_app"
                        textButton={'App Store'}/>
                        <GooglePlayButton
                        className="section-10_google"
                        textButton={'Google Play'}/>
                    </div>
                </div>
                <div className="section-10_item-2">
                    <img src={telephone} alt={telephone}/>
                </div>
            </div>
        </>
    )
}