import React from 'react';
import Rewiew from './components/section-8-item';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from '../../../carousel';

import man from './components/images/man.svg';
import mark from './components/images/mark.svg';

import './section-8.css';

export default function SectionEight() {
    return (
        <>
            <div className="section-8_item">
                <h1><span className="textupdate">Отзывы</span> наших клиентов</h1>
                <div className="section-8_item_body d-flex justify-content-between">
                    <Slider
                    items={[
                        <Rewiew
                        image1={mark}
                        text={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'}
                        image2={man}
                        name={'Annette Black'}/>,
                        <Rewiew
                        image1={mark}
                        text={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'}
                        image2={man}
                        name={'Annette Black'}/>,
                        <Rewiew
                        image1={mark}
                        text={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'}
                        image2={man}
                        name={'Annette Black'}/>
                    ]}/>
                </div>
            </div>
        </>
    )
}
