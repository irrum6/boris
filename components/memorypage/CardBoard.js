import React, { Component } from 'react';
import styles from './CardBoard.module.css';
import Card from './Card';

const CARD_STATES = {
    HIDDING: 0,
    SHOWING: 1,
    MATCHING: 2
};

class CardBoard extends Component {
    render() {
        const cards = this.props.cards.map((card) => (
            <Card key={card.id} clickf={this.props.clicker} cardid={card.id} showing={card.state !== CARD_STATES.HIDDING} color={card.color} />
        ));
        return (
            <div className={styles.board}>
                {cards}
            </div>
        );
    }
}

export default CardBoard;