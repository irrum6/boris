import React from 'react'
import styles from './board.module.css'

const id = "board";
const hide = id => document.getElementById(id).style.visibility = 'hidden';

const Board = () => {
    return (<div id={id} className={styles.board}>
        <span></span>
        <button onClick={hide.bind(null,id)}>gela</button>
    </div>);
}

export default Board