import React, { Component } from 'react';

import styles from "./item.module.css"

const { item_, content } = styles;

const monMap = {
    "Jan": "1",
    "Feb": "2",
    "Mar": "3",
    "Apr": "4",
    "May": "5",
    "Jun": "6",
    "Jul": "7",
    "Aug": "8",
    "Sep": "9",
    "Oct": "10",
    "Nov": "11",
    "Dec": "12"
}
class TimelineItem extends Component {
    render() {
        let { message, date, fullhash, hash, files } = this.props.data;
        let filestxt = files.map((e, i) => (<div key={i}>{e}</div>));
        //date split
        let ds = date.replace(",").split(" ");
        let dd = ds[1];
        let mm = monMap[ds[0]];
        let yy = ds[2];
        let formated = `${yy}-${mm}-${dd}`;

        return (
            <div className={item_}>
                <div className={`${content} ph`}>
                    <div className='ph'>
                        <time dateTime={`${formated}`}>{date}</time>
                    </div>
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