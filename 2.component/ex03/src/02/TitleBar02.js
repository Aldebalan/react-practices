import React from 'react';

export default function TitleBar02() {
    const onclickHandler = e => {
        console.log('TitleBar02 Clicked~!!')
    }

    return (
        <h1
            onClick={onclickHandler}
            style={{cursor: 'pointer'}}>
                Function Handler(Functional Component)
        </h1>
    )
}