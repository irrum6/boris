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
`;

const Cell = styled.div`
    padding:0;
    margin:0;
    width:160px;
    height:160px;
    border-radius:4px;

    @media (max-width: 576px) {
        width:100px;
        height:100px;
    }
`



const EmptyCell = (props) => (
    <Cell>

    </Cell>
);

const NumberCell = ({ number, clicker, indexInArray, selfIndex }) => {
    if (indexInArray == selfIndex) {
        const btnStyle = {
            color: 'black',
            backgroundColor: 'white',
            border: "4px solid orange"
        };
        const divStyle = {
           
        }
        return (
            <Cell style={divStyle}>
                <Button style={btnStyle} onClick={clicker}>[{number}]</Button>
            </Cell>
        );
    }
    return (
        <Cell>
            <Button onClick={clicker}>{number}</Button>
        </Cell>
    );
}
export default NumberCell

export { NumberCell, EmptyCell }