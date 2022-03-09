import React, { Component } from 'react';
import Card from './Card';

const CARD_STATES = {
    HIDDING: 0,
    SHOWING: 1,
    MATCHING: 2
};
const style = { display: 'flex', flexDirection: 'row', flexWrap: 'wrap', }
class CardBoard extends Component {
    render() {
        const cards = this.props.cards.map((card) => (
            <Card key={card.id} clickf={this.props.clicker} cardid={card.id} showing={card.state !== CARD_STATES.HIDDING} color={card.color} />
        ));
        return (
            <div style={style}>
                {cards}
            </div>
        );
    }
}

export default CardBoard;