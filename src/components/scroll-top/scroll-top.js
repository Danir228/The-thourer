import React, { Component } from 'react';
import * as Scroll from 'react-scroll';

import arrowup from './arrow-up.png';
import './scroll-top.css';

export default class ScrollTop extends Component {

    scrollTop() {
        let scroll = Scroll.animateScroll;
        scroll.scrollToTop();
    }

    render() {
        return (
            <>
                <div className="scroll" onClick={this.scrollTop.bind(this)}>
                    <img src={arrowup} alt={arrowup}/>
                </div>
            </>
        )
    }
}