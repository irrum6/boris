import React from 'react'
import styled from "styled-components"
let Box = styled.div`
    display:grid;
    grid-template-rows:1fr 1fr 1fr;
`
export default function go_home() {
    return (
        <Box>
            <div className='text-center p1h'><span className="bolder f4" >Page Not Found</span></div>
            <div className='text-center p1h'><a className="color_black f1q bolder bo_black bowq bos p2" href="/">&lt;&lt; უკან</a></div>
            <div className='text-center p1h'><a className="color_black f1q bolder bo_black bowq bos p2" href="/">&lt;&lt; Home</a></div>
        </Box>);
}