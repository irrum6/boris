import React from "react"
import styled from "styled-components"

import Board from "./board"

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
const sideDivStyle = ` display:grid;
    grid-template-columns:auto;
    grid-gap:12px;
    padding:0;
    margin:0;
    margin-top:12px;
    border:none;
    @media (max-width: 450px) {
        display:none;
    }`

const Right = styled.div`
    ${sideDivStyle}
`
const Left = styled.div`
    ${sideDivStyle}
    @media (max-width: 900px) {
        display:none;
    }
`

const ModeSwitcher = styled.button`
    width:calc(100% - 12px);
    font-size:3rem;
    font-weight:900;
    margin:0;
    border:4px solid black;
`

export default ({ numbers, fn,fn2, modefn }) => (
    <Container>
        <Left>Content</Left>
        <Board numbers={numbers} fn={fn} fn2={fn2}></Board>
        <Right>
            <ModeSwitcher onClick={() => modefn(15)}>15 Tile</ModeSwitcher>
            <ModeSwitcher onClick={() => modefn(24)}>24 Tile</ModeSwitcher>
            <ModeSwitcher onClick={() => modefn(35)}>35 Tile</ModeSwitcher>
            <ModeSwitcher onClick={() => modefn(48)} >48 Tile</ModeSwitcher>
        </Right>
    </Container>
)