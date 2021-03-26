import React from 'react';
import { Component } from 'react';
import {Container} from 'reactstrap';

import close from '../images/close.svg';

import './section-5-player.css';

export default class Player extends Component {
    closeModal(e) {
        if(e.target.id === "modal-player") {
          this.props.func();
        }
    }
    render() {
        return (
            <>
                {this.props.openModal && <div id="modal-player" onClick={ (e) => this.closeModal(e)}>
                    <Container>
                        <div className="modal-player-window"></div>
                        <div className="modal-close" onClick={this.props.func}><img src={close} alt={close}></img></div>
                    </Container>
                </div>}
            </>
        )
    }
}