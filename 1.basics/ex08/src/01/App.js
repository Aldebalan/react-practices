import React from 'react';

function App() {
    return (
        <div>
            <h2>app01</h2>
            <P>JSX Tutorial - 특징1: HTML과 차이점</P>
            {/*
                1. 속성은 Camel Case
            */}
            <input type="text" maxLength='10' />
            {/*
                2. Element는 꼭 닫아야 한다.
                오류) <br>, <hr>, <input type="text">, <img src="">
            */}
            <br/>
            <hr/>
            <img src=''/>
            {/*
                1. 속성 이름은 DOM APT와 일치한다.(HTML Tag의 속성이름 X)
                <h4 class='header' id='title'>타이틀</h4>
                document.getElementById('title').className='header';
            */}
            <h4 className='header' id='title'>타이틀</h4>
        </div>
    );
}

export default App;