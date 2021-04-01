import React, { Component } from 'react';

const windowId = "msgWindow";
const GetSelf = ()=> document.getElementById(windowId)
const ShowSelf = ()=>GetSelf().style.display = 'block';
const CloseSelf = ()=>GetSelf().style.display = 'none';

const alertMessage = ()=> {
    return (
        < div className="" id={windowId} >
            <div className="ph flex row-reverse">
                <button className="p0 prh plh mlh f3 bolder zero-border black bg-transparent" onClick={CloseSelf}>&#x25AC;</button>
            </div>
            <div className="text-center">
                <span id="alertmsg" className="f2 bold"></span>                               
            </div>
            <div className="closer">
                <button className="f1h bolder" onClick={CloseSelf}>OK</button>
            </div>
        </div >);
}

const ShowAlertMessage = (msg) => {
    if (typeof msg !== "string") throw "not a string";
    document.getElementById("alertmsg").textContent = msg;
    ShowSelf();
}
export default alertMessage;

export {ShowAlertMessage};