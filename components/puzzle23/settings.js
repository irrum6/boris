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

export default ({ id, modefn }) => {
    return <Box id={id}>
        <div className="f2 bolder color_orange pxh">Settings</div>
        <div className="f2 bolder color_orange pxh">Content</div>
    </Box>
}