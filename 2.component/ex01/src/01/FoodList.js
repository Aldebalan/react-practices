import React, {Component} from 'react';
import FoodListitem from './FoodListitem';

class FoodList extends Component {
    render() {
        return (
            <div>
                <ul>
                    <FoodListitem
                        name='Bread'
                        quantity='10'/>
                    <FoodListitem
                        name='Milk'
                        quantity='5'/>
                    <FoodListitem
                        name='Egg'
                        quantity='20'/>
                </ul>
            </div>
        );
    };
};

export default FoodList;