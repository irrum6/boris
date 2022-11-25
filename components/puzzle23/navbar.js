import { React, Component } from 'react';
import styled, { css } from "styled-components"

const Box = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color:#2c3e50;
    color:white;
    padding:0.5rem;
    
    @media (max-width: 700px) {
        flex-direction: column;
    }
`
const NewGamer = styled.button`
    background-color:black;
    color:white;
    border:4px solid #366;
    margin-left:0.5rem;
    :hover{
        border:4px solid white;
    }
`
const PlayPause = styled.button`
    background-color:#333;
    color:white;
    border:4px solid #663;
    :hover{
        border:4px solid white;
    }
`

class Navbar extends Component {
    render() {
        let { props } = this;
        return (<Box>
            <a className="color_white bolder" href="/">&lt;&lt; უკან</a>
            <div className='ph'>
                <span className="ph f2">Time:<span>{props.time}</span></span>
                <span className="ph f2">Moves:<span>{props.moves}</span></span>
                <PlayPause className="ph f2 bolder borah">Pause</PlayPause>
                <NewGamer className="ph f2 bolder borah" onClick={props.onNewGame} >New Game</NewGamer>

            </div>
        </Box>)
    }
}
export default Navbar;