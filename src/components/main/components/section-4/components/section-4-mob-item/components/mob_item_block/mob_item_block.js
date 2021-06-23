import React from 'react';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './mob_item_block.css';


export default class MobItemBlock extends Component {
    render() {
        return (
            <>
                <div className="section-4_content">
                    <button
                        className="section-4_btn active"
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