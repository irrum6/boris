import React from 'react';
import styles from './navbar.module.css'

const Navbar = (props) => {
    const scoreKeeper = props.score ? `ქულა:${props.score}` : ''
    return (
        <div className={`${styles.navbar} flex`}>
            <a className ="color_white bolder" href="/">&lt;&lt; უკან</a>
            <span className={styles.blend}> {scoreKeeper}</span>
            <button className={`${styles["blend"]} ${styles["blend-green"]}`}  onClick={props.onNewGame}>ახალი თამაში</button>
            <button className={styles["blend"]} onClick={props.onShowRecords}>რეკორდები</button>
        </div>
    );
}

export default Navbar;