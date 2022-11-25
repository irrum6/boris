import React from "react"
import styled from "styled-components"

import NumberCell, { EmptyCell } from "./cell"

const Board = styled.div`
    display:grid;
    grid-template-columns:auto auto auto auto auto;
    grid-gap:2px 2px;
`
function numbToCell(func, it,ind) {
    let { value, index } = it;
    // console.log(it,ind);
    switch (value) {
        case -2:
            return <EmptyCell key={ind}></EmptyCell>
        default:
            return <NumberCell key={ind} indexInArray={ind} selfIndex={index} number={value} clicker={() => func(ind)}></NumberCell>
    }
}

export default ({ numbers, fn }) => {
    let ncells = numbers.map(numbToCell.bind(null, fn));
    return (
        <Board>
            {ncells}
        </Board>
    );
} 