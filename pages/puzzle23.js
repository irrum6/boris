import React, { useReducer } from 'react'

import { Container, Navbar } from "../components/puzzle23"

import reductor, { initial_state } from '../prepages/puzzle23';

function App() {
    const [state, dispatcher] = useReducer(reductor, { ...initial_state(25) });

    return (<React.Fragment>
        <Navbar onNewGame={() => dispatcher({ type: "new" })} time={0} moves={state.moves}></Navbar>
        <Container numbers={state.numbers} fn={(ind) => dispatcher({ type: "move",value:ind })}></Container>
    </React.Fragment>);
}

export default function puzzle() {
    return (
        <div className="container">
            <App />
        </div>
    );
}