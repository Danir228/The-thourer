import React, { Component } from 'react';

import apple from './apple.svg';

import './appStore.css';

export default class AppStoreButton extends Component {
    render() {
        const icon = this.props.customIcon;
        const src = icon === undefined ? apple : icon;
        return (
            <>
                <button className="app-store_btn" onMouseEnter={this.props.onEnter} onMouseLeave={this.props.onLeave}>
                    <img src={src} alt={apple} /><span>{this.props.textButton}</span>
                </button>
            </>
        )
    }
}