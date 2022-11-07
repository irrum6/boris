import React, { Component } from 'react';

import { Board, Navbar } from '../../components/memorypage/index';

import Shuffle from './shuffle';

const CARD_STATES = {
  HIDDING: 0,
  SHOWING: 1,
  MATCHING: 2
};

const hidding = CARD_STATES.HIDDING;
const showing = CARD_STATES.SHOWING;
const matching = CARD_STATES.MATCHING;

class App extends Component {
  constructor(props) {
    super(props);

    let cards = [
      { id: 0, state: hidding, type:"1"},
      { id: 1, state: hidding, type: '1' },
      { id: 2, state: hidding, type: '2' },
      { id: 3, state: hidding, type: '2' },
      { id: 4, state: hidding, type: '3' },
      { id: 5, state: hidding, type: '3' },
      { id: 6, state: hidding, type: '4' },
      { id: 7, state: hidding, type: '4' },
      { id: 8, state: hidding, type: '5' },
      { id: 9, state: hidding, type: '5' },
      { id: 10, state: hidding, type: '6' },
      { id: 11, state: hidding, type: '6' },
      { id: 12, state: hidding, type: '7' },
      { id: 13, state: hidding, type: '7' },
      { id: 14, state: hidding, type: '8' },
      { id: 15, state: hidding, type: '8' },
      { id: 16, state: hidding, type: '9' },
      { id: 17, state: hidding, type: '9' },
      { id: 18, state: hidding, type: '10' },
      { id: 19, state: hidding, type: '10' },
      { id: 20, state: hidding, type: '11' },
      { id: 21, state: hidding, type: '11' },
      { id: 22, state: hidding, type: '12' },
      { id: 23, state: hidding, type: '12' }
    ];
    cards = Shuffle.array(cards);
    this.state = { cards, noClick: false }
    this.handleClick = this.handleClick.bind(this);
    this.NewGame = this.NewGame.bind(this);
  }
  handleClick(id) {
    //function for map
    const mapState = (cards, ids, newState) => {
      return cards.map(c => {
        if (ids.includes(c.id)) {
          return {
            ...c,
            state: newState
          }
        }
        return c;
      });
    };
    const found = this.state.cards.find(c => c.id === id);

    if (this.state.noClick || found.state !== hidding) {
      return;
    }

    let noClick = false;

    let cards = mapState(this.state.cards, [id], showing);

    const showingCards = cards.filter(c => c.state === showing);

    const ids = showingCards.map(c => c.id);

    const showlena = showingCards.length;

    if (showlena === 2) {
      if (showingCards[0].type === showingCards[1].type) {
        cards = mapState(cards, ids, matching);
      } else {
        let hiddingCards = mapState(cards, ids, hidding);
        // noClick = true;
        this.setState({ cards: hiddingCards, noClick: false });
        return;
      }
    }
    this.setState({ cards, noClick });
  }

  NewGame() {
    let cards = this.state.cards.map(c => ({
      ...c,
      state: CARD_STATES.HIDDING
    }));
    cards = Shuffle.array(cards);
    this.setState({ cards, noClick: false, pendingId: -1 });
  }
  render() {
    return (
      <div className="App">
        <Navbar onNewGame={this.NewGame} />
        <Board cards={this.state.cards} clicker={this.handleClick} />
      </div>
    );
  }
}

export default App;
