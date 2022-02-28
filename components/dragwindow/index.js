import React, { } from 'react'
import Draggable, { DraggableCore } from 'react-draggable';


const Close = (wid) => document.getElementById(wid).style.visibility = 'hidden';
const Show = (wid) => document.getElementById(wid).style.visibility = 'visible';

/**
 * Creates top right button in window
 * noclose true , empty button
 * @param {*} noclose 
 * @param {*} wid 
 * @returns 
 */
const corner_button = (noclose, wid) => {
    if (noclose) {
        return <button className="close bg-blend">&#x25cf;</button>
    }
    return <button className="close close-red" onClick={Close.bind(null, wid)}>&#x25AC;</button>
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
            < div className="prompt" id={wid}>
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