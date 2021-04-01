import React from 'react'

const card = (props) => {
    const data = props.cdata;

    let { show, suit, value } = data;
    value = show ? value : '';

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