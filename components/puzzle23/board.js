import React from "react"
import styled from "styled-components"

import NumberCell, { EmptyCell } from "./cell"

const Board25 = styled.div`
    display:grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap:2px 2px;
`
const Board16 = styled.div`
    display:grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap:2px 2px;
`
const Board36 = styled.div`
    display:grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap:2px 2px;
`

const Board49 = styled.div`
    display:grid;
    grid-template-columns: repeat(7, 1fr);
    grid-gap:2px 2px;
`

function numbToCell(func, func2, it, ind) {
    let { value, index } = it;
    switch (value) {
        case -2:
            return <EmptyCell key={ind}></EmptyCell>
        default:
            return <NumberCell key={ind} indexInArray={ind} selfIndex={index} number={value}
                clicker={() => func(ind)} clicker2={() => func2(ind)}></NumberCell>
    }
}

export default ({ numbers, fn, fn2 }) => {
    let lena = numbers.length;
    let ncells = numbers.map(numbToCell.bind(null, fn, fn2));

    console.log(lena);

    if (lena == 16) {
        return (
            <Board16>
                {ncells}
            </Board16>
        );
    }

    if (lena == 36) {
        return (
            <Board36>
                {ncells}
            </Board36>
        );
    }

    if (lena == 49) {
        return (
            <Board49>
                {ncells}
            </Board49>
        );
    }

    //default
    return (
        <Board25>
            {ncells}
        </Board25>
    );
} 