import React, { Component } from 'react';
import * as Scroll from 'react-scroll';
import {Container} from 'reactstrap';

import arrowup from './arrow-up.png';
import './scroll-top.css';

export default class ScrollTop extends Component {

    state = {
        opacity: 0
    }

    scrollTop() {
        let scroll = Scroll.animateScroll;
        scroll.scrollToTop();
    }

    listenScrollEvent = () => {
        const height = window.screen.height;
        console.log(height);
        if (window.scrollY > height) {
          this.setState({ opacity: 1 });
        } else {
          this.setState({ opacity: 0 });
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
                    style={{ opacity: this.state.opacity }}
                    onClick={this.scrollTop.bind(this)}>
                    <img src={arrowup} alt={arrowup}/>
                </div>
            </>
        )
    }
}