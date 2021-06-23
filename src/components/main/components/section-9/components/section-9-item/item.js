import React from 'react';
import Modal from '../../../../../modal';
import adress from '../../adress.png';
import { Component } from 'react';

export default class Item extends Component {

    state = {
        open: false
    }

    handleMouseEnter = () => {
        this.setState( prevState => (
            {open: !prevState.open}));
    }

    render() {
        return (
            <>
                {this.state.open && <Modal
                visible={this.state.open}
                image={adress}/>}
                <span>• Получить онлайн-визитку с <span className="text" onClick={this.handleMouseEnter}>QR-кодом</span> для использования в агрегаторах объявлений</span>
            </>
        )
    }
}












    handleMouseEnter = () => {
        this.setState( prevState => (
            {open: !prevState.open}));
    }