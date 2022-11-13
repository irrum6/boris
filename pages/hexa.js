import React, { useReducer, useEffect } from 'react'

import { AlertMessage, ShowAlertMessage, Prompter, ShowPrompt, ClosePrompt, } from "../components"

import { Navbar, Board, ListDisplay, showList } from "../components/cardhex/index"


import { CARDS, values as SEQUENCE } from '../data/cardshex.js';

import Utils from '../data/utils';



function reduceMuhCards(state, action) {
    const { type, value } = action;
    switch (type) {
        case "one":
            return { ...state, id: "1" }
            break;
        case "two":
            return { ...state, id: "2" }
            break;
        case "tre":
            return { ...state, id: "3", tre: true }
        case "vier":
            return { ...state, id: "4", tre: false }
        case "sare":
            return saveRecord();
        default:
            return { ...state, id: "4" }
    }
}

const getNewCards = () => Utils.shuffleArray(CARDS, 16).map(el => { return { ...el, show: false }; });

function doCompareCards(state, v1, v2) {
    const { answers } = state;
    const index1 = SEQUENCE.indexOf(v1);
    const index2 = SEQUENCE.indexOf(v2);

    let result = (index1 < index2) ? 'high' : ((index1 > index2) ? 'low' : 'same');

    const resultId = answers.filter(e => e.value === result)[0].id;
    return resultId;
}

function saveRecord(state) {
    let { records, score } = state;

    if (records === undefined) {
        records = [];
    }
    const date = new Date();

    records.push({ date, score });
    return { ...state, records }
}

function ShowRecords(state) {
    let { records } = state;
    if (records === undefined) {
        records = [];
    }
    showList(records);
    return state;
}

function NewGame(state) {
    const cards = getNewCards();
    const score = 1;
    const gameOver = false;
    const gameWon = false;
    const prevIndex = 0;
    const currIndex = 1;

    cards[prevIndex].show = true;

    let nuState = { ...state, cards, score, gameOver, prevIndex, currIndex, gameWon };
    ShowPrompt();

    return nuState;
}

function answer(state, id) {
    console.log(id);
    console.log(state);
    if (state.gameOver) return state;

    let { prevIndex, currIndex, cards, answers } = state;
    //compare previous card to current card
    const val1 = cards[prevIndex].value;
    const val2 = cards[currIndex].value;

    const resultId = doCompareCards(state, val1, val2);
    state.gameOver = (resultId !== id);

    return NextRound(state)
}

function NextRound(state) {
    let { prevIndex, currIndex, cards, score, gameOver } = state;
    if (gameOver) {
        return GameOver(state);
    }

    if (currIndex > (cards.length - 1)) {
        gameOver = true;
        return GameWon(state);
    }
    if (!gameOver) {
        score *= 2;
    }
    prevIndex = currIndex;
    currIndex++;

    cards[prevIndex].show = true;

    let nuState = { cards, score, gameOver, prevIndex, currIndex }
    return { ...state, ...nuState };;
}

function GameOver(state) {
    ShowAlertMessage('თამაში მორჩა !');
    ClosePrompt();
    return saveRecord(state);
}
function GameWon(state) {
    ShowAlertMessage('თქვენ მოიგეთ');
    ClosePrompt();
    return saveRecord(state);
}

function reductor(state, action) {
    console.log(state, action);
    const { type, value } = action;
    switch (type) {
        case "gameover":
            return { ...state, gameOver: true }
        case "gameOn":
            return { ...state, gameOver: false }
        case "save":
            return saveRecord(state);
        case "new":
            return NewGame(state);
        case "ans":
            return answer(state, value);
        case "records":
            return ShowRecords(state);
        default:
            return { ...state, gameOver: false }
    }
}

function App() {
    const answers = [{
        title: 'მაღალი',
        value: 'high',
        id: 0
    }, {
        title: 'დაბალი',
        value: 'low',
        id: 1,
    }, {
        title: 'იგივე',
        value: 'same',
        id: 2
    }]

    const cards = getNewCards();
    const [state2, dispatcher2] = useReducer(reduceMuhCards, {});
    const [state, dispatcher] = useReducer(reductor, { answers, cards });


    let [zero, second, third] = answers;

    const nu = dispatcher.bind(null, { type: "new" });
    const records = dispatcher.bind(null,{type:"records"});

    return (<React.Fragment>
        <button onClick={dispatcher2.bind(null, { type: "tre" })}>GELA 3</button>
        <button onClick={dispatcher2.bind(null, { type: "vier" })}>ELA 4</button>
        <button onClick={dispatcher2.bind(null, { type: "two" })}>LA 2</button>
        <div>Gela</div>
        <div>{state2.id}</div>
        {state2.tre && (<div>{state.cards.length}</div>)}
        <Navbar score={state.score} onShowRecords={records} onNewGame={nu} />
        <Board data={state.cards} />
        <AlertMessage />
        <Prompter YES={zero.title} yesVal={0} NO={second.title} noVal={1} other={third.title} otherVal={2}
            onSetValue={(id) => { dispatcher({ type: "ans", value: id }) }} />
        <ListDisplay />
    </React.Fragment>)
}
const changeTitle = () => { document.title = `Hexacards: same cards game, but in hex`; }

export default function cards() {
    useEffect(changeTitle);
    return (<div className="container">
        <App />
    </div>);
}