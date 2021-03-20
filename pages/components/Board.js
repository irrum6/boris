import React, { Component } from 'react';

// import './Board.module.css'
import Card from './Card';

// Image by WikimediaImages from Pixabay

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