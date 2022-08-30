import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from "./Components/Button";

type getType = {
    "userId": number,
    "id": number,
    "title": string,
    "body": string
}

function App() {
    let[get, setGet] = useState<Array<getType>>([])
    const cleanPageHandler = () => {
        setGet([])
    }
    useEffect(()=>{fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => setGet(json))}, [])

    return (
        <div className="App">
            <Button
                buttonName={'CleanPage'}
                callback={cleanPageHandler}
            />
            <ul>
                {get.map((el)=>{
                    return (
                        <li key={el.id}>
                            <span>{el.id} - </span>
                            <span>{el.userId} -</span>
                            <span>{el.title}</span>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default App;
