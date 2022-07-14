import React, { Component, Fragment } from 'react';
import Clock from './Clock';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <p>Dynamic HTML Rendering</p>
                <Clock />
            </Fragment>
        );
    }
}

export default Content;
