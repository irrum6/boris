import React, { Component } from 'react';
import styled from "styled-components"

import Card from './card';

const CardBoard = styled.div`
    display: grid;
    grid-template-columns: repeat(8, auto);
    row-gap: 2vmin;

    @media screen and (max-aspect-ratio: 3/2) {
        display: grid;
        grid-template-columns: repeat(6, auto);
    }
    
    @media screen and (max-aspect-ratio: 5/4) {
        display: grid;
        grid-template-columns: repeat(5, auto);
    }
    
    @media screen and (max-aspect-ratio: 1/1) {
        display: grid;
        grid-template-columns: repeat(4, auto);
    }
    
    @media screen and (max-aspect-ratio: 3/4) {
        display: grid;
        grid-template-columns: repeat(4, auto);
    }
`
class Board extends Component {
    render() {
        let cards = this.props.data.map((c, i) => <Card key={i} cdata={c} />)
        return (
            <CardBoard>
                {cards}
            </CardBoard>
        );
    }
}

export default Board;