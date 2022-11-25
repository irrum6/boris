import React from "react"
import styled from "styled-components"

import Cell from "./cell"
import Board from "./board"

const Container = styled.div`
    display:grid;
    grid-template-columns:auto 810px auto;
    margin-top:2px;
`

export default ({numbers,fn}) => (
    <Container>
        <div>Content</div>
        <Board numbers={numbers} fn={fn}></Board>
        <div>Content</div>
    </Container>
)