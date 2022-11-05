import React, { Component } from 'react';

import styles from "./item.module.css"

const {item_} = styles;

class TimelineItem extends Component {
    render() {
        let { message, date, fullhash, hash } = this.props.data;
        return (
            <div className={item_}>
                <div className='content ph'>
                    <div className='date ph'>{date}</div>
                    <div className='msg ph'>{message}</div>
                    <div className='link ph'>
                        <a href={`https://github.com/irrum6/boris/commit/"${fullhash}`}>{hash}</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default TimelineItem;