import React, { useReducer } from 'react'

import { Container, Navbar, ListWindow, showList } from "../components/puzzle23"

import reductor, { initial_state } from '../prepages/puzzle23';

function App() {
    const [state, dispatcher] = useReducer(reductor, { ...initial_state(25) });

    return (<React.Fragment>
        <Navbar onShowRecords={() => showList()} onNewGame={() => dispatcher({ type: "new" })} time={0} moves={state.moves}></Navbar>
        <Container numbers={state.numbers} fn={(ind) => dispatcher({ type: "move", value: ind })}
            fn2={(ind) => dispatcher({ type: "move", value: ind, dbl: true })}
            modefn={(mode) => dispatcher({ type: "mode", value: mode })}></Container>
        <ListWindow list={state.records}></ListWindow>
    </React.Fragment>);
}

export default function puzzle() {
    return (
        <div className="container">
            <App />
        </div>
    );
}