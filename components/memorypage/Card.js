import React from 'react';
import styles from './Card.module.css';

const Card = (props) => {
    const hideClass = 'bg_darkgray';
    const colorClass = props.color;
    const klass = `${styles.card} ${props.showing ? colorClass : hideClass}`;
    return (
        <div onClick={() => (props.clickf(props.cardid))} className={klass}></div>
    );
}

export default Card;