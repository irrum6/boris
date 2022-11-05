import React, { Component } from 'react';

import TimelineItem from "./item";

import styles from "./cont.module.css"

const { container_ } = styles;

class Timeline extends Component {
    render() {
        let times = this.props.data.map((item, index) => (
            <TimelineItem key={index} data={{ ...item }} />
        ));
        return (
            <div className={container_}>
                {times}
            </div>
        );
    }
}

export default Timeline;