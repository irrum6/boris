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
      { id: 0, state: hidding, color: 'bg_red' },
      { id: 1, state: hidding, color: 'bg_red' },
      { id: 2, state: hidding, color: 'bg_navy' },
      { id: 3, state: hidding, color: 'bg_navy' },
      { id: 4, state: hidding, color: 'bg_green' },
      { id: 5, state: hidding, color: 'bg_green' },
      { id: 6, state: hidding, color: 'bg_yellow' },
      { id: 7, state: hidding, color: 'bg_yellow' },
      { id: 8, state: hidding, color: 'bg_black' },
      { id: 9, state: hidding, color: 'bg_black' },
      { id: 10, state: hidding, color: 'bg_purple' },
      { id: 11, state: hidding, color: 'bg_purple' },
      { id: 12, state: hidding, color: 'bg_pink' },
      { id: 13, state: hidding, color: 'bg_pink' },
      { id: 14, state: hidding, color: 'bg_orange' },
      { id: 15, state: hidding, color: 'bg_orange' }
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
      if (showingCards[0].color === showingCards[1].color) {
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
