import React, { Component } from 'react'
// import './Card.module.css'

const card = (props) => {
    const data = props.cdata;

    let { show, suit, symbol, color, value } = data;

    // const GENERIC_SYMBOL = "♫"

    // symbol = show ? symbol : GENERIC_SYMBOL;
    // color = show ? color : 'black';
    value = show ? value : '';

    const cssColorClass = `card-${color}`;

    let backCssClass = show ? suit: "hidden_card";

    let boxClassName = `flex space-between column pxq pyq card-box ${backCssClass}`;
    return (
        <div className={boxClassName}>            
            <div className="flex row pth pbh card-body">
                <span className="f4">{value}</span>
            </div>            
        </div>
    );
}

export default card;