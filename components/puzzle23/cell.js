import React from "react"
import styled, { css } from "styled-components"

const Button = styled.button`
    width:calc(100% - 8px);
    height:calc(100% - 8px);
    background-color: black;
    color: white;
    font-weight: 900;
    font-size:3.5rem;
    word-spacing: 0.25rem;
    padding: 0.25rem;
    margin:0;
    border: none; 
    cursor: pointer;
    @media (max-width: 450px) {
        font-size:1.25rem;
        width: calc(100% - 4px);
        height: calc(100% - 4px);
        padding: 0.125rem;
        margin:0;
    }
`;

// default 25 tile grid 
const Cell = styled.div`
    padding:0;
    margin:0;
    border-radius:4px;
`

const EmptyCell = (props) => (
    <Cell>

    </Cell>
);

const NumberCell = ({ number, clicker, clicker2, indexInArray, selfIndex }) => {
    let numberToString = number <10 ? `0${number}`:`${number}`;
    if (indexInArray == selfIndex) {
        const btnStyle = {
            color: 'black',
            backgroundColor: 'white',
            border: "4px solid orange",
            textDecoration:"overline"
        };
        return (<Cell>
            <Button style={btnStyle} onClick={clicker} onDoubleClick={clicker2}>{numberToString}</Button>
        </Cell>);
    }
    return (
        <Cell>
            <Button onClick={clicker} onAuxClick={console.log(123)}>{numberToString}</Button>
        </Cell>
    );
}
export default NumberCell

export { NumberCell, EmptyCell }