import React, { useReducer, useEffect } from 'react'

import { AlertMessage, ShowAlertMessage, Prompter, ShowPrompt, ClosePrompt, } from "../components"

import { Navbar, Board, ListDisplay, showList } from "../components/cardhex/index"

import { CARDS, values as SEQUENCE } from '../data/cardshex.js';

import Utils from '../data/utils';

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
    if (state.gameOver) {
        return GameOver(state);
    };
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
    let { prevIndex, currIndex } = state;
    state.cards[prevIndex].show = true;
    state.cards[currIndex].show = true;
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
    const [state, dispatcher] = useReducer(reductor, { answers, cards });


    let [zero, second, third] = answers;

    const nu = dispatcher.bind(null, { type: "new" });
    const records = dispatcher.bind(null, { type: "records" });

    return (<React.Fragment>
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