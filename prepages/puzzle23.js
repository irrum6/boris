/**
 * 
 * @param {Integer} n 
 * @returns 
 */
function initial_state(n) {
    let numbers = [];
    let x = n - 1;
    //do initial state
    for (let i = 0; i < n; i++) {
        let item = (i < x) ? {
            value: i + 1,
            index: i
        } : {
            value: -2,
            index: i
        }
        numbers.push(item);
    }
    //shuffle numbers
    // numbers = get_shuffled(numbers);
    //and return
    return {
        paused: false,
        records: [],
        numbers,
        time: 0,
        moves: 0
    }
}

function new_game(state) {
    let time = 0;
    let moves = 0;
    let paused = false;
    let numbers = get_shuffled(state.numbers)
    let n = 16;
    let len = numbers.length;
    for (let i = 0; i < n; i++) {
        let index1 = Math.floor(Math.random() * len);
        let index2 = Math.floor(Math.random() * len);
        //do swap
        let tmp = { ...numbers[index1] };
        numbers[index1] = numbers[index2];
        numbers[index2] = tmp;
    }
    return {
        ...state,
        paused,
        numbers,
        time,
        moves
    }
}

function get_shuffled(numbers) {
    // shuffle a few times
    let n = 16;
    let len = numbers.length;
    for (let i = 0; i < n; i++) {
        let index1 = Math.floor(Math.random() * len);
        let index2 = Math.floor(Math.random() * len);
        //do swap
        let tmp = { ...numbers[index1] };
        numbers[index1] = numbers[index2];
        numbers[index2] = tmp;
    }
    return numbers;
}
function mover(state, i) {
    let { numbers, moves } = state;
    console.log(state);
    // move up -> index -5
    // move down -> index +5
    // move left -> index -1
    // move right -> index +1    
    let up = i - 5;
    let down = i + 5;
    let left = i - 1;
    let right = i + 1;
    let len = numbers.length;

    let selectedIndex = null;
    const EMPTY_CELL_VALUE = -2;

    if (up > -1 && numbers[up].value == EMPTY_CELL_VALUE) {
        selectedIndex = up;
    }
    if (down < len && numbers[down].value == EMPTY_CELL_VALUE) {
        selectedIndex = down;
    }
    if (left > -1 && numbers[left].value == EMPTY_CELL_VALUE) {
        selectedIndex = left;
    }
    if (right < len && numbers[right].value == EMPTY_CELL_VALUE) {
        selectedIndex = right;
    }
    if (Number.isInteger(selectedIndex)) {
        let tmp = { ...numbers[selectedIndex] };
        numbers[selectedIndex] = { ...numbers[i] };
        numbers[i] = { ...tmp };
        //what?
        state.moves++;
        return { ...state, numbers };
    }
    console.log(1)
    return state;
}

function reductor(state, action, next) {
    const { type, value } = action;
    let newState = { ...state };
    switch (type) {
        case "reset":
            newState = initial_state();
            break;
        case "gameover":
            newState = { ...state, gameOver: true }
            break;
        case "gameOn":
            newState = { ...state, gameOver: false }
            break;
        case "save":
            break;
        case "new":
            newState = new_game(state);
            break;
        case "move":
            newState = mover(state, value);
            break;
        case "records":
        case "pause":
        case "resume":
            break;
        default:
            newState = { ...state, gameOver: false }
    }
    console.log(newState);
    return newState;
}

export default reductor;

export { initial_state, reductor };