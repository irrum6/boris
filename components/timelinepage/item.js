import React, { Component } from 'react';

import styles from "./item.module.css"

const {item_,content} = styles;

class TimelineItem extends Component {
    render() {
        let { message, date, fullhash, hash,files } = this.props.data;
        let filestxt = files.map((e,i)=>(<div key={i}>{e}</div>))
        return (
            <div className={item_}>
                <div className={`${content} ph`}>
                    <div className='ph'>{date}</div>
                    <div className='ph'>{message}</div>
                    <div className='ph'>Changes:{filestxt}</div>
                    <div className='ph bolder'>
                        <a href={`https://github.com/irrum6/boris/commit/"${fullhash}`}>{hash}</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default TimelineItem;