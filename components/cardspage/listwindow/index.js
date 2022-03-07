import React from 'react'

import DW,{ Show, Close } from '../../common/dragwindow'
import styles from "./listwindow.module.css"
const windowId = "listWindow";
const GetSelf = () => document.getElementById(windowId)
const ShowSelf = () => Show(windowId);
const CloseSelf = () => Close(windowId);

const listDisplay = () => {
    return (<DW wid={windowId} className={styles["listWindow"]}>
        <div className="list-row px0">
            <div className="flex pyq space-even">
                <span data-app-translate="1" data-app-text="date">თარიღი</span>
                <span data-app-translate="1" data-app-text="score">ქულა</span>
            </div>
            <div id="scorelist" className={styles["scorelist"]}>
            </div>
        </div>
    </DW>);
}

const extract_date = (date) => `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}-${date.getHours()}:${date.getMinutes()}`;
const reverse_sort = (a, b) => (a.score > b.score) ? -1 : (a.score < b.score ? 1 : 0);

const insert_record = (cont, element) => {
    const date = document.createElement('span');
    date.classList.add("record-date");
    date.textContent = extract_date(element.date);
    const score = document.createElement('span');
    score.classList.add("record-score");
    score.textContent = element.score;
    const box = document.createElement('div');
    box.classList.add(styles['record-box']);
    box.classList.add('flex');
    box.classList.add('space-even');
    box.appendChild(date);
    box.appendChild(score);
    cont.appendChild(box);
};

const showList = (list) => {
    if (list.length < 1) {
        return;
    }
    list.sort(reverse_sort);

    let scoreList = document.getElementById('scorelist');
    if (scoreList.children.length > 9) {
        // no for each yet :(
        for (let i = 0, len = scoreList.children.length; i < len; i++) {
            scoreList.children[i].children[0].textContent = extract_date(list[i].date);
            scoreList.children[i].children[1].textContent = list[i].score;
        }
        ShowSelf();
        return;
    }
    while (list.length > 9) {
        list.pop();
    }
    //debugger;
    scoreList.innerHTML = '';
    list.forEach(insert_record.bind(null, scoreList));
    ShowSelf();
}

export default listDisplay;
export { showList};