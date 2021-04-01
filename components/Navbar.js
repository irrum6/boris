import React from 'react';

const Navbar = (props) => {
    const scoreKeeper = props.score ? `ქულა:${props.score}` : ''
    return (
        <div className="navbar flex">
            <span className="blend"> {scoreKeeper}</span>
            <button className="blend blend-green" onClick={props.onNewGame}>ახალი თამაში</button>
            <button className="blend" onClick={props.onShowRecords}>რეკორდები</button>
        </div>
    );
}

export default Navbar;