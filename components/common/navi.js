import React from 'react'
import styled from "styled-components"

const Navi = styled.div`
    background-color: #2c3e50;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: white;
    padding: 0 15px;
    
    @media (max-width: 600px) {
        flex-direction: column;
    }
`

export default (props) => {
    return (
        <Navi className="flex">
            {props.children}
        </Navi>
    );
}