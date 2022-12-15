import React, { Component } from 'react';

const windowId = "msgWindow";

import DW, { Show, Close } from './dragwindow'

const ShowSelf = () => Show(windowId);
const CloseSelf = () => Close(windowId);

const alertMessage = () => {
    return (<DW wid={windowId} noclose={true}>
        <div className="text-center">
            <span id="alertmsg" className="f2 bold"></span>
        </div>
        <div className="closer flex row centered mt2">
            <button className="f4 bolder" onClick={CloseSelf}>OK</button>
        </div>
    </DW>);
}

const ShowAlertMessage = (msg) => {
    if (typeof msg !== "string") throw "not a string";
    document.getElementById("alertmsg").textContent = msg;
    ShowSelf();
}
export default alertMessage;

export {alertMessage as AlertMessage, ShowAlertMessage };