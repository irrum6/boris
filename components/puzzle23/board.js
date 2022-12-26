import React from "react"
import styled from "styled-components"

import NumberCell, { EmptyCell } from "./cell"

const Board16 = styled.div`
    display:grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap:2px 2px;
`
const Board25 = styled.div`
    display:grid;
    grid-template-columns: repeat(5, 1fr);
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
/**
 * Create NumberCell (button with number)
 * @param {Function} func 
 * @param {Function} func2 
 * @param {Object} it 
 * @param {Number} ind 
 * @returns 
 */
function numbToCell(func, it, ind) {
    let { value, index } = it;
    switch (value) {
        case -2:
            return <EmptyCell key={ind}></EmptyCell>
        default:
            return <NumberCell key={ind} indexInArray={ind} selfIndex={index} number={value} clicker={() => func(ind)} ></NumberCell>
    }
}
// will generate boards for us
function compositor(RComp, id, data) {
    return <RComp id={id}>{data}</RComp>;
}

export default ({ id, numbers, fn }) => {
    let lena = numbers.length;
    let ncells = numbers.map(numbToCell.bind(null, fn));

    let board = null;
    switch (lena) {
        case 16:
            board = compositor(Board16, id, ncells);
            break;
        case 25:
            board = compositor(Board25, id, ncells);
            break;
        case 36:
            board = compositor(Board36, id, ncells);
            break;
        case 49:
            board = compositor(Board49, id, ncells);
            break;
        default:
            board = compositor(Board25, id, ncells);
    }
    return board;
} 