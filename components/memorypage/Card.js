import React from 'react';
import styles from './Card.module.css';

const {card,...types} = styles;

const Card = (props) => {
    const hideClass = 'bg_darkgray';
    const { showing, type, cardid, text } = props;
    const shapeClass = types[`type${type}`];
    const klass = `${card} ${showing ? shapeClass : hideClass}`;
    return (
        <div onClick={() => (props.clickf(cardid))} className={klass}>{text}</div>
    );
}

export default Card;