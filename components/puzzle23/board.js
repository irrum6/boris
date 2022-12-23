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
/**
 * Create NumberCell (button with number)
 * @param {Function} func 
 * @param {Function} func2 
 * @param {Object} it 
 * @param {Number} ind 
 * @returns 
 */
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
// will generate boards for us
function compositor(RComp, data) {
    return <RComp>{data}</RComp>;
}

export default ({ numbers, fn, fn2 }) => {
    let lena = numbers.length;
    let ncells = numbers.map(numbToCell.bind(null, fn, fn2));

    if (lena == 16) {
        return compositor(Board16, ncells);
    }

    if (lena == 36) {
        return compositor(Board36, ncells);
    }

    if (lena == 49) {
        return compositor(Board49, ncells);
    }
    
    //default
    return compositor(Board25, ncells);
} 