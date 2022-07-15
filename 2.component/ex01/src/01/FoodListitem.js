import React, { Component } from 'react';

class FoodListitem extends Component {
    render() {
        return (
                <li>{this.props.name}: {this.props.quantity}</li>
        );
    };
};

export default FoodListitem;