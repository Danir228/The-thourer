import React from 'react';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './section-4-item.css';


export default class SectionForItem extends Component {

    state = {
        btnId: 0
    }

    timeChangeHandler = () => {
        this.setState({
            btnId: this.props.btnIndex
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.btnId !== prevState.btnId && this.state.btnId !== 0) {
            this.props.func(this.state.btnId);
        }
        if (this.props.activeClass !== prevProps.activeClass) {
             this.setState({
                btnId: 0
            });
        }
    }

    render() {
        return (
            <>
                <div className="section-4_content">
                    <button
                        className={this.props.activeClass ? "section-4_btn active" : "section-4_btn"}
                        onClick={this.timeChangeHandler}
                        dangerouslySetInnerHTML={{ __html: this.props.number}}>
                    </button>
                    <div className="section-4_body flex-column">
                        <h1 className="section-4_title">{this.props.title}</h1>
                        <p className="section-4_text">{this.props.text}</p>
                    </div>
                </div>
            </>
        )
    }
}