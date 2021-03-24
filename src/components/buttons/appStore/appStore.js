import React, { Component } from 'react';

import apple from './apple.svg';

import './appStore.css';

export default class AppStoreButton extends Component {

    onClickAdress () {
        window.location.assign('https://www.apple.com/ru');
    }

    render() {
        const icon = this.props.customIcon;
        const src = icon === undefined ? apple : icon;
        return (
            <>
                <button
                    className="app-store_btn"
                    style={{opacity: this.props.stylebtn }}
                    onMouseOver={this.props.onEnter}
                    onMouseOut={this.props.onLeave}
                    onClick={this.onClickAdress}
                >
                    <img src={src} alt={apple} />
                    <span>{this.props.textButton}</span>
                </button>
            </>
        )
    }
}