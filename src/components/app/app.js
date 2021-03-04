import React, {Component} from 'react';
// import {Container} from 'reactstrap';
import Header from '../header';
import Main from '../main';


import './app.css';

export default class App extends Component {
    render() {
        return (
            <>
                <Header/>
                <Main/>
            </>
        )
    }
}