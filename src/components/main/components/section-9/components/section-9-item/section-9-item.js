import React from 'react';

import up from './arrow-up.svg';
import down from './arrow-down.svg';

import './section-9-item.css';
import { Component } from 'react';

export default class SectionNineAccordion extends Component {

    state = {
        isVisible: this.props.visible,
        isModal: false,
        close: true
    }

    toggle = () => {
        this.setState({
            isVisible: !this.state.isVisible
        })
    }

    toggleModal = () => {
        this.setState({
            isModal: !this.state.isModal
        });
    }

    closeModal = () => {
        this.setState({
            close: !this.state.close
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.isModal !== prevState.isModal) {
            this.props.text4.function(this.state.isModal);
        }
        if (this.props.text4 && prevProps.text4 && this.props.text4.visibleModal !== prevProps.text4.visibleModal) {
            this.setState({
                isModal: this.props.text4.visibleModal
            })
        }
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
                        <div className={this.state.isVisible ? "accordion_body activeBody" : "accordion_body inactiveBody"}>
                            <span>{this.props.text1}</span>
                            <ul>
                                <li>{this.props.text2}</li>
                                <li>{this.props.text3}</li>
                                {this.props.text4 && <li>
                                    {this.props.text4.start}
                                    <span
                                        className="text"
                                        onMouseEnter={this.toggleModal}
                                        onMouseLeave={this.toggleModal}>
                                        {this.props.text4.functionName}
                                    </span>
                                    {this.props.text4.end}
                                </li>}
                                <li>{this.props.text5}</li>
                            </ul>
                        </div>
                </div>

            </>
        )
    }
}









