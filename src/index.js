import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
import { Route, Switch, Router } from 'react-router';
// настройки плагина
import i18n from "./i18n";
import { I18nextProvider } from "react-i18next";
import history from "./history";

ReactDOM.render(
    <Suspense fallback={<div></div>}>
        <I18nextProvider i18n={i18n}>
            <Router history={history}>
                <Switch>
                    <Route path="/en" component={App} />
                    <Route exact path="/" component={App} />
                </Switch>
            </Router>
        </I18nextProvider>
    </Suspense>, document.getElementById('root')
);
