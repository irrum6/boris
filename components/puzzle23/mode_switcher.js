import React from "react"
import styled from "styled-components"

const Box = styled.div`
    display:grid;
    grid-template-columns:auto;
    grid-gap:12px;
    padding:0;
    margin:0;
    margin-top:12px;
    border:none;

    @media (max-width: 450px) {
        display:none;
    }
`

const ModeButton = styled.button`
    width:calc(100% - 12px);
    font-size:3rem;
    font-weight:900;
    margin:0;
    border:4px solid black;
`
// const closer
export default ({ modefn }) => {
    return <Box id="right">
        <ModeButton onClick={() => modefn(15)}>15 Tile</ModeButton>
        <ModeButton onClick={() => modefn(24)}>24 Tile</ModeButton>
        <ModeButton onClick={() => modefn(35)}>35 Tile</ModeButton>
        <ModeButton onClick={() => modefn(48)} >48 Tile</ModeButton>
    </Box>
}