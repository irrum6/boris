import React, { Component } from 'react';

import Card from './Card';

class Board extends Component {
    render() {
        let cards = this.props.data.map((c, i) => <Card key={i} cdata={c} />)
        return (
            <div className="board">
                {cards}
            </div>
        );
    }
}

export default Board;