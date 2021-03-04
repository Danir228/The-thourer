import React from 'react';
import {Container} from 'reactstrap';

import './section-7.css';

export default function SectionSeven() {
    return (
        <>
            <div className="section-7_top">
                <Container>
                    <span className="section-7_top_item">С помощью The Tourer <span>было создано</span></span>
                </Container>
            </div>
                <div className="section-7_bottom">
                <Container>
                        <div>
                            <span>13257</span>
                            <span>м2 плана</span>
                        </div>
                        <div>
                            <span>1277</span>
                            <span>панорам</span>
                        </div>
                        <div>
                            <span>845</span>
                            <span>виртуальных туров</span>
                        </div>
                    </Container>
                </div>
        </>
    )
}