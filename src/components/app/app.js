import React, {Component} from 'react';
import Header from '../header';
import Main from '../main';
import Footer from '../footer';
import ElipsesFirst from '../elipses/elipsesFirst';


import './app.css';
import { withTranslation } from 'react-i18next';

class App extends Component {



    render() {
        return (
            <>
                <div className={this.props.i18n.language === "en" ? "fontEn" : "fontRu"}>
                    <ElipsesFirst/>
                    <Header/>
                    <Main/>
                    <Footer/>
                </div>
            </>
        )
    }
}

export default withTranslation()(App);