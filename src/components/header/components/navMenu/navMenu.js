import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './navMenu.css';

export default class NavMenu extends Component {
    render() {
        return (
            <>
                <ul className="navmenu_items">
                    <li><a href="#">Как это работает</a></li>
                    <li><a href="#">Тарифы</a></li>
                    <li><a href="#">FAQ</a></li>
                </ul>
            </>
        )
    }
}