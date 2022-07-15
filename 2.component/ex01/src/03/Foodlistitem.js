import React from 'react';

function Foodlistitem({name, quantity}) {
    return (
        <li>{name}: {quantity}</li>
    );
}

export default Foodlistitem;