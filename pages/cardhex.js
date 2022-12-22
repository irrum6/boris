import React, { Component } from 'react'

import { AlertMessage, ShowAlertMessage, Prompter, ShowPrompt, ClosePrompt, } from "../components"

import { Navbar, Board, ListDisplay, showList } from "../components/cardhex/index"

import { CARDS, values as SEQUENCE } from '../data/cardshex.js';

import Utils from '../data/utils';
class CardsApp extends Component {
    constructor() {
        super();
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
        const cards = this.GetNewCards();
        this.state = { answers, cards };

    }
    answer(id) {
        if (this.state.gameOver) return false;

        let { previousCardIndex, currentCardindex, cards } = this.state;
        //compare previous card to current card
        const val1 = cards[previousCardIndex].value;
        const val2 = cards[currentCardindex].value;
        //look for indexes in sequence
        const index1 = SEQUENCE.indexOf(val1);
        const index2 = SEQUENCE.indexOf(val2);

        let result;
        if (index1 < index2) result = 'high';
        if (index1 > index2) result = 'low';
        if (index1 === index2) result = 'same';

        const resultId = this.state.answers.filter(e => e.value === result)[0].id;

        const gameOver = (resultId !== id);

        this.NextRound(gameOver)
    }
    NextRound(gameOver) {
        let { previousCardIndex, currentCardindex } = this.state;
        let { cards, score } = this.state;
        if (gameOver) {
            this.GameOver();
        }

        if (currentCardindex > (cards.length - 1)) {
            gameOver = true;
            this.GameWon();
        }
        if (!gameOver) {
            score *= 2;
        }
        previousCardIndex = currentCardindex;
        currentCardindex++;

        cards[previousCardIndex].show = true;
        this.setState({ cards, score, gameOver, previousCardIndex, currentCardindex });
    }
    GameOver() {
        ShowAlertMessage('თამაში მორჩა !');
        ClosePrompt();
        this.SaveRecord();
    }
    GameWon() {
        ShowAlertMessage('თქვენ მოიგეთ');
        ClosePrompt();
        this.SaveRecord();
    }
    GetNewCards() {
        let cards = Utils.shuffleArray(CARDS, 16);
        cards = cards.map(el => {
            return { ...el, show: false };
        });
        return cards;
    }
    NewGame() {
        const cards = this.GetNewCards();
        const score = 1;
        const gameOver = false;
        const gameWon = false;
        const previousCardIndex = 0;
        const currentCardindex = 1;

        cards[previousCardIndex].show = true;

        this.setState({ cards, score, gameOver, previousCardIndex, currentCardindex, gameWon });
        ShowPrompt();
    }
    SaveRecord() {
        let { records } = this.state;

        if (records === undefined) {
            records = [];
        }
        const date = new Date();
        const { score } = this.state;
        records.push({ date, score });
        this.setState({ ...this.state, records })
    }
    ShowRecords() {
        let { records } = this.state;
        if (records === undefined) {
            records = [];
        }
        showList(records);
    }
    render() {
        let [zero, second, third] = this.state.answers;
        return (<div className="App">
            <Navbar score={this.state.score} onShowRecords={this.ShowRecords.bind(this)} onNewGame={this.NewGame.bind(this)} />
            <Board data={this.state.cards} />
            <AlertMessage />
            <Prompter YES={zero.title} yesVal={0} NO={second.title} noVal={1} other={third.title} otherVal={2}
                onSetValue={this.answer.bind(this)} />
            <ListDisplay />
        </div>);
    }
}

export default function cards() {
    return (<div className="container">
        <CardsApp />
    </div>);
}