import React from 'react';
import styles from './Navbar.module.css';


const Navbar = (props) => (
    <div className={`${styles.navbar} bg_navbar_blue color_white ph`}>
        <a className="color_white bolder" href="/">&lt;&lt; უკან</a>
        <div className='ph'>
            {/* <button className="bg_blue ph f1h mr1">Memory Game</button> */}
            <button className="bg_green ph f1h" onClick={props.onNewGame}>New Game</button>
        </div>
    </div>
);

export default Navbar;