import React, { Component } from 'react';
import styled from "styled-components"

import TimelineItem from "./item";

const Container = styled.div`
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto;
`
class Timeline extends Component {
    render() {
        let times = this.props.data.map((item, index) => (
            <TimelineItem key={index} data={{ ...item }} />
        ));
        return (
            <Container>
                {times}
            </Container>
        );
    }
}

export default Timeline;