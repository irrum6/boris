import React, { Component } from 'react';

import Card from '../card';
import styles from "./board.module.css"

class Board extends Component {
    render() {
        let cards = this.props.data.map((c, i) => <Card key={i} cdata={c} />)
        return (
            <div className={styles["board"]}>
                {cards}
            </div>
        );
    }
}

export default Board;