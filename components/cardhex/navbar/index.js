import React from 'react'

import Navi from "../../common/navi"

const Navbar = (props) => {
    const scoreKeeper = props.score ? `ქულა:${props.score}` : ''
    return (
        <Navi className="flex">
            <a className="color_white bolder f1q" href="/">&lt;&lt; უკან</a>
            <span className="blend_pointer f1q"> {scoreKeeper}</span>
            <button className={`blend_pointer f1q bg_blend_green`} onClick={props.onNewGame}>ახალი თამაში</button>
            <button className="blend_pointer  f1q" onClick={props.onShowRecords}>რეკორდები</button>
        </Navi>
    );
}

export default Navbar;