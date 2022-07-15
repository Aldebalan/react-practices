import React from 'react';
import FoodListitem from './Foodlistitem';

function FoodList({foods}) {
    return (
        <div>
             <ul>
                {this.props.foods.map((food) => <FoodListitem
                                                    key={food.no}
                                                    name={food.name}
                                                    quantitiy={food.quantitiy} />)}
            </ul>
        </div>
    );
}

export default FoodList;