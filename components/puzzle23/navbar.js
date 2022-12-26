import { React, Component } from 'react';
import styled from "styled-components"

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
    margin-left:0.5rem;
    :hover{
        border:4px solid white;
    }
`
const ShowRecords = styled.button`
    background-color:#333;
    color:white;
    border:4px solid #636;    
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
                <span className="ph f1h">Time:<span>{props.time}</span></span>
                <span className="ph f1h">Moves:<span>{props.moves}</span></span>
                <ShowRecords className="ph f1h bolder borah" onClick={props.onShowRecords}>Records</ShowRecords>
                <PlayPause className="ph f1h bolder borah">Pause</PlayPause>
                <NewGamer className="ph f1h bolder borah" onClick={props.onNewGame} >New Game</NewGamer>
            </div>
        </Box>)
    }
}
export default Navbar;