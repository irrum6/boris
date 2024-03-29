import React, { useReducer, useEffect } from 'react'

import { Container, Navbar, ListWindow, showList } from "../components/puzzle23"

import { AlertMessage } from "../components/index"
import reductor, { initial_state } from '../prepages/puzzle23';

function App() {
    const [state, dispatcher] = useReducer(reductor, { ...initial_state(25) });

    return (<React.Fragment>
        <Navbar onShowRecords={() => showList()} onNewGame={() => dispatcher({ type: "new" })} time={0} moves={state.moves}></Navbar>
        <Container numbers={state.numbers} fn={(ind) => dispatcher({ type: "move", value: ind })}
            modefn={(mode) => dispatcher({ type: "mode", value: mode })}>
        </Container>
        <ListWindow list={state.records}></ListWindow>
        <AlertMessage></AlertMessage>
    </React.Fragment>);
}

export default function puzzle() {
    useEffect(() => { document.title = `24-tile puzzle`; })
    return (
        <div className="container">
            <App />
        </div>
    );
}