import React, { Component } from 'react';
import {Row} from 'reactstrap';

import './section-6-when-item.css';

export default class WhenItem extends Component {

    state = {
        month: false,
        quarter: false,
        year: true,
    }

    handleClickMonth = (e) => {
        if (e.target.id === "1") {
            this.setState({
                month: true,
                quarter: false,
                year: false,
            });
        }
    }

    handleClickQuarter = (e) => {
        if (e.target.id === "2") {
            this.setState({
                month: false,
                quarter: true,
                year: false,
            });
        }
    }

    handleClickYear = (e) => {
        if (e.target.id === "3") {
            this.setState({
                month: false,
                quarter: false,
                year: true,
            });
        }
    }

    render() {
        return (
            <>
                <Row className="whenitem">
                    <div className="whenitem_month">
                        <div
                            id="1"
                            className={this.state.month ? "whenitem_style whenitem_active" : "whenitem_style"}
                            onClick={ (e) => this.handleClickMonth(e)}>
                            {this.props.month}
                        </div>
                    </div>
                    <div className="whenitem_quarter">
                        <div
                            id="2"
                            className={this.state.quarter ? "whenitem_style whenitem_active" : "whenitem_style"}
                            onClick={ (e) => this.handleClickQuarter(e)}>
                            {this.props.quarter}
                        </div>
                        <div className="percent">{this.props.percent1}</div>
                    </div>
                    <div className="whenitem_year">
                        <div
                            id="3"
                            className={this.state.year ? "whenitem_style whenitem_active" : "whenitem_style"}
                            onClick={(e) => this.handleClickYear(e)}>
                            {this.props.year}
                        </div>
                        <div className="percent">{this.props.percent2}</div>
                    </div>
                </Row>
            </>
        )
    }
}