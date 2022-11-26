import React from 'react'

import DW, { Show, Close } from '../common/dragwindow'
import styles from "./listwindow.module.css"
const windowId = "listWindow";
const GetSelf = () => document.getElementById(windowId)
const ShowSelf = () => Show(windowId);
const CloseSelf = () => Close(windowId);

const extract_date = (date) => `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}-${date.getHours()}:${date.getMinutes()}`;
const reverse_sort = (a, b) => (a.moves > b.moves) ? -1 : (a.moves < b.moves ? 1 : 0);

const RecordItem = ({ date, moves }) => {
    let fdate = extract_date(date);
    return (<div className={`${styles['record-box']} flex space even`}>
        <span className={`${styles['record-date']}`}>{fdate}</span>
        <span className={`${styles['record-score']}`}>{moves}</span>
    </div>);
}
const ListDisplay = ({ list }) => {
    let records = list.sort(reverse_sort).map((e, i) => <RecordItem key={i} date={e.date} moves={e.moves}></RecordItem>);
    return (<DW wid={windowId} className={styles["listWindow"]}>
        <div className="list-row px0">
            <div className="flex pyq space-even">
                <span data-app-translate="1" data-app-text="date">თარიღი</span>
                <span data-app-translate="1" data-app-text="score">სვლები</span>
            </div>
            <div id="scorelist" className={styles["scorelist"]}>
                {records}
            </div>
        </div>
    </DW>);
}

const showList = () => {
    ShowSelf();
}

export default ListDisplay;
export { showList };