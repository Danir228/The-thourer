import React from 'react';
import { Component } from 'react';

import appstore from './applestoreqc.png';
import './modal.css';

export default class Modal extends Component {
    render() {
        const imgModal = this.props.image === undefined ? appstore : this.props.image;
        const textModal = this.props.text === undefined ? '' : this.props.text;
        return (
            <>
                {this.props.visible &&
                <div className="modal-window">
                    <img src={imgModal} alt={imgModal}/>
                    <p>{textModal}</p>
                </div>}
            </>
        )
    }
}