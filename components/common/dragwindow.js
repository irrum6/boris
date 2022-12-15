import React, { } from 'react'
import Draggable, { DraggableCore } from 'react-draggable';
import styled from "styled-components"

const Close = (wid) => document.getElementById(wid).style.visibility = 'hidden';
const Show = (wid) => document.getElementById(wid).style.visibility = 'visible';

const CornerButton = styled.button`
    padding: 0;
    padding-right: 0.5rem;
    padding-left: 0.5rem;
    margin-left: 0.5rem;
    font-size: 5vmin;
    font-weight: 900;
    border: 0;
    border-radius: 10%;
    color: black;
    cursor: pointer;
`
/**
 * Creates top right button in window
 * noclose true , empty button
 * @param {*} noclose 
 * @param {*} wid 
 * @returns 
 */
const corner_button = (noclose, wid) => {
    if (noclose) {
        return <CornerButton className="bg-blend">&#x25cf;</CornerButton>
    }
    return <CornerButton className="bg_violet2" onClick={Close.bind(null, wid)}>&#x25AC;</CornerButton>
}
/**
 * Draggable Window
 * @param {*} props 
 * @returns 
 */
const DraggableWindow = (props) => {
    const { noclose, wid } = props;
    return (
        <Draggable>
            <div className="prompt" id={wid}>
                <div className="close">
                    {corner_button(noclose, wid)}
                </div>
                <div className="prompt-row p2">
                    {props.children}
                </div>
            </div >
        </Draggable>
    )
}

export default DraggableWindow
export { Close, Show }