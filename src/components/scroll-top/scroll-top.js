import React, { Component } from 'react';
import * as Scroll from 'react-scroll';

import arrowup from './arrow-up.png';
import './scroll-top.css';

export default class ScrollTop extends Component {

    state = {
        display:  'none'
    }

    scrollTop() {
        let scroll = Scroll.animateScroll;
        scroll.scrollToTop();
    }

    listenScrollEvent = () => {
        const height = window.screen.height;
        if (window.scrollY > height) {
          this.setState({ display: 'flex' });
        } else {
          this.setState({ display:  'none' });
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent);
    }

    render() {
        return (
            <>
                <div
                    className="scroll"
                    style={{ display: this.state.display }}
                    onClick={this.scrollTop.bind(this)}>
                    <img src={arrowup} alt={arrowup}/>
                </div>
            </>
        )
    }
}