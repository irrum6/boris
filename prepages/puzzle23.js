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
        gameOver: false,
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
    let gameOver = false;
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
        gameOver,
        numbers,
        time,
        moves
    }
}

function get_shuffled(numbers) {
    // shuffle a few times
    let len = numbers.length;
    let n = len - 1;
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

function check_game_over(numbers) {

    for (let i = 0, len = numbers.length; i < len; i++) {
        const num = numbers[i];
        if (i !== num.index) {
            return false;
        }
    }
    return true;
}

function game_over(state) {
    alert("You won");
    return save_record(state);
}
function save_record(state) {
    let { records, moves } = state;

    if (records === undefined) {
        records = [];
    }
    let len = state.numbers.length;
    const date = new Date();

    records.push({ date, moves, len });

    return { ...state, records }
}

function mover(state, i) {
    if (state.gameOver) {
        return game_over(state);;
    }
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
        state.gameOver = check_game_over(numbers);
        return { ...state, numbers };
    }
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