import React, { } from 'react'
import Draggable, { DraggableCore } from 'react-draggable';

const Close = (wid) => document.getElementById(wid).style.display = 'none';
const Show = (wid) => document.getElementById(wid).style.display = 'block';

const DW = (props) => {
    const { noclose, wid } = props;
    return (
        <Draggable>
            < div className="prompt" id={wid} >
                <div className="close">
                    {noclose ? <button className="close bg-blend">&#x25cf;</button> : <button className="close close-red" onClick={Close.bind(null, wid)}>&#x25AC;</button>}
                </div>
                <div className="prompt-row p2">
                    {props.children}
                </div>
            </div >
        </Draggable>
    )
}

export default DW
export { Close, Show }