import React, {Component} from 'react';

export default class TitleBar01 extends Component {
    constructor(props) {
        super(props);
        this.no = 10;
    }
    onclickHandler() {
        console.log('TitleBar01 clicked~!' + this.no)
    }

    render() {
        return (
            <h1
                onClick={this.onclickHandler.bind(this)}
                style={{cursor: 'pointer'}}>
                    Function Handler(Class Component)
            </h1>
        )
    }
} 