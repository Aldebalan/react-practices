import React, {Component} from 'react';

export default class TitleBar01 extends Component {
    constructor(props) {
        super(props);

        // this.no VS this.state.no
        this.no = 10;
        this.state = {
            no: 10
        };
    }
    onclickHandler() {
        // this.no VS this.state.no
        this.no++;
        this.setState({
            no: this.state.no + 1
        })

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