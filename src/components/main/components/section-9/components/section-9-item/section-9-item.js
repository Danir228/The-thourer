import React from 'react';

import up from './arrow-up.svg';
import down from './arrow-down.svg';

import './section-9-item.css';
import { Component } from 'react';

export default class SectionNineAccordion extends Component {
    state = {
        isVisible: this.props.visible
    }
    toggle = () => {
        this.setState({
            isVisible: !this.state.isVisible
        })
    }
    render() {
        return (
            <>
                <div className="accordion_block">
                    <div className="accordion_title" onClick={this.toggle}>
                        <div className="arrow_up">
                            <img className="arrow" src={this.state.isVisible ? up : down} alt={this.state.isVisible ? up : down}/>
                        </div>
                        <span>{this.props.title}</span>
                    </div>
                    {this.state.isVisible &&
                    <div className="accordion_body">
                        <span>{this.props.text1}</span>
                        <ul>
                            <li>{this.props.text2}</li>
                            <li>{this.props.text3}</li>
                            <li dangerouslySetInnerHTML={{ __html: this.props.text4 }}></li>
                            <li>{this.props.text5}</li>
                        </ul>
                    </div>
                    }
                </div>
            </>
        )
    }
}









