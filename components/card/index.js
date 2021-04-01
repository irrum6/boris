import React from 'react'

import styles from "./card.module.css"

const card = (props) => {
    const data = props.cdata;

    let { show, suit, value } = data;
    value = show ? value : '';

    let backCssClass = show ? styles[suit]: styles["hidden_card"];
    let boxClassName = `flex space-between column pxq pyq ${styles["card-box"]} ${backCssClass}`;
    //console.log(styles);
    return (
        <div className={boxClassName}>            
            <div className={`${styles["card-body"]} flex row pth pbh`}>
                <span className="f4">{value}</span>
            </div>            
        </div>
    );
}

export default card;