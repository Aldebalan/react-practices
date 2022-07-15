import React, { Component, Fragment } from 'react';
import Clock from './Clock';


class Content extends Component {
    render() {
        return (
            <Fragment>
                <p>Comment</p>
                <Clock />
            </Fragment>
        );
    }
}

export default Content;
