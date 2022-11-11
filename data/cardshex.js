const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
const values = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

const data = [];

const suitData = {
    "hearts": {
        symbol: "♥",
        color: "red"
    },
    "diamonds": {
        symbol: "♦",
        color: "red"
    },
    "clubs": {
        symbol: "♣",
        color: "black"
    },
    "spades": {
        symbol: "♠",
        color: "black"
    }
};

for (const suit of suits) {
    let { color, symbol } = suitData[suit];
    for (const value of values) {
        let item = {
            value,
            symbol,
            color,
            suit
        }
        data.push(item);
    }
}

export default data;