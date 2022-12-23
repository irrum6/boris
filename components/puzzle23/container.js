import React from "react"
import styled from "styled-components"

import Board from "./board"
import ModeSwitcher from "./mode_switcher"
import Settings from "./settings"

const Container = styled.div`
    display:grid;
    grid-template-columns:auto 770px auto;
    height:770px;
    margin-top:4px;
    @media (max-width: 900px) {
        grid-template-columns:750px auto;
        height:750px;
        margin-top:12px;
    }
    @media (max-width: 750px) {
        grid-template-columns:600px auto;
        height:600px;
        margin-top:12px;
    }
    @media (max-width: 600px) {
        grid-template-columns:450px auto;
        height:450px;
        margin-top:12px;
    }
    @media (max-width: 450px) {
        grid-template-columns:auto;
        height:360px;
        margin-top:12px;
    }
`
export default ({ numbers, fn, modefn }) => (
    <React.Fragment>
        <Container>
            {/* left */}
            <Settings id="left" />
            {/* center */}
            <Board id="board" numbers={numbers} fn={fn} />
            {/* right */}
            <ModeSwitcher modefn={modefn} />
        </Container>
    </React.Fragment>
)