import React from 'react'

import styles from "./card.module.css"

const card = (props) => {
    const data = props.cdata;

    let { show, suit, value } = data;
    value = show ? value : '';

    let backCssClass = show ? styles[suit] : styles["hidden_card"];
    let isDrawnSuit=(true == show && ("clubs" == suit ||"spades" == suit));

    if (isDrawnSuit) {
        backCssClass = `${suit}_${value}`;
    }
    let boxClassName = `flex space-between column pxq pyq ${styles["card-box"]} ${backCssClass}`;
    return (
        <div className={boxClassName}>
            <div className={`${styles["card-body"]} flex row pth pbh`}>
                <span className="f4">{(isDrawnSuit)?"":value}</span>
            </div>
        </div>
    );
}

export default card;