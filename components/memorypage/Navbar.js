import React from 'react'
import styled from "styled-components"

const Box =styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 700px) {
        flex-direction: column;
    }
`

const Navbar = (props) => (
    <Box className="bg_navbar_blue color_white ph">
        <a className="color_white bolder" href="/">&lt;&lt; უკან</a>
        <div className='ph'>
            <button className="bg_green ph f1h" onClick={props.onNewGame}>New Game</button>
        </div>
    </Box>
);

export default Navbar;