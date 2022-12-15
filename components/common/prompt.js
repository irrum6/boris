import React from 'react'

import DW, { Show, Close } from './dragwindow'

const WindowId = "promptWindow";

const ShowPrompt = () => Show(WindowId);
const ClosePrompt = () => Close(WindowId);

const Prompter = (props) => {
    const { YES, NO, other, yesVal, noVal, otherVal, onSetValue } = props;
    return (<DW wid={WindowId} noclose={true}>
        <button className="choice" onClick={() => onSetValue(yesVal)}>{YES}</button>
        <button className="choice" onClick={() => onSetValue(noVal)}>{NO}</button>
        <button className="choice" onClick={() => onSetValue(otherVal)}>{other}</button>
    </DW>)
}
export default Prompter;
export { ShowPrompt, ClosePrompt };