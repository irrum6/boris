const TILE15 = 15;
const TILE24 = 24;
const TILE35 = 35;
const TILE48 = 48;
const MODES = { TILE15, TILE24, TILE35, TILE48 }
const SIDES = {
    [TILE15]: 4,
    [TILE24]: 5,
    [TILE35]: 6,
    [TILE48]: 7,
}

import { ShowAlertMessage } from "../components/common/alert/index"

const EMPTY_CELL_VALUE = -2;
/**
 * @param {Integer} n 
 * @returns 
 */
function get_initial_numbers(n, mode) {
    let numbers = [];
    //do initial state
    for (let i = 0; i < n; i++) {
        let item = (i < mode) ? {
            value: i + 1,
            index: i
        } : {
            value: EMPTY_CELL_VALUE,
            index: i
        }
        numbers.push(item);
    }
    return numbers;
}

function initial_state() {
    let initialMode = MODES.TILE24;
    let numbers = get_initial_numbers(25, initialMode);
    let side = SIDES[initialMode];
    return {
        paused: false,
        gameOver: false,
        records: [],
        numbers,
        time: 0,
        moves: 0,
        mode: initialMode,
        side
    }
}

function is_solvable(numbers, mode) {
    //adopted from
    // https://developerslogblog.wordpress.com/2020/04/01/how-to-shuffle-an-slide-puzzle/
    
    // count inversion
    let inversionCount = 0;
    let side = SIDES[mode];
    let emptyCellRow = 0;

    let len = numbers.length;
    for (let i = 0; i < len - 1; i++) {
        let num = numbers[i].value;
        if (num == EMPTY_CELL_VALUE) {
            //thank for not having int
            emptyCellRow = Math.floor(i / side) + 1;
            continue;
        }
        for (let j = i + 1; j < len - 1; j++) {
            let num2 = numbers[j].value;
            if (num > num2) {
                inversionCount++;
            }
        }
    }
    console.log(side, inversionCount, emptyCellRow);
    if (side % 2 == 1) {
        return (inversionCount % 2 == 0);
    }
    if (emptyCellRow % 2 == 0) {
        return (inversionCount % 2 == 1);
    }
    if (emptyCellRow % 2 == 1) {
        return (inversionCount % 2 == 0);
    }
}

function new_game(state) {
    let time = 0;
    let moves = 0;
    let paused = false;
    let gameOver = false;
    let side = SIDES[state.mode]
    let totalTiles = side * side;
    let nuNumbers = get_initial_numbers(totalTiles, state.mode);
    let numbers = get_shuffled(nuNumbers, state.mode);

    // let count = 0;
    while (!is_solvable(numbers, state.mode)) {
        // console.log("unsol");
        // break;
        numbers = get_shuffled(nuNumbers, state.mode);
        // count++;
        // console.log(numbers);
        // //give up after 100 tries
        // if (count > 100) {
        //     break;
        // }
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



function get_shuffled(numbers, mode) {
    // shuffle a few times
    let len = numbers.length;
    let side = SIDES[mode];

    for (let i = 0; i < mode; i++) {
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
    ShowAlertMessage("You won");
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

function mover(state, i, dbl) {
    if (state.gameOver) {
        return game_over(state);;
    }
    let { numbers, moves, mode } = state;
    let side = SIDES[mode];
    // console.log(state);
    // move up -> index -side
    // move down -> index + side
    // move left -> index -1
    // move right -> index +1    
    let up = i - side;
    let down = i + side;
    let left = i - 1;
    let right = i + 1;
    let len = numbers.length;

    let selectedIndex = null;

    // debugger;
    //two cells empty create two moves
    // single click last criteria met wins
    //on dblclick first criteria met wins
    let indexes = [];
    if (up > -1 && numbers[up].value == EMPTY_CELL_VALUE) {
        selectedIndex = up;
        indexes.push(up);
    }
    if (down < len && numbers[down].value == EMPTY_CELL_VALUE) {
        selectedIndex = down;
        indexes.push(down);
    }
    if (left > -1 && numbers[left].value == EMPTY_CELL_VALUE) {
        selectedIndex = left;
        indexes.push(left);
    }
    if (right < len && numbers[right].value == EMPTY_CELL_VALUE) {
        selectedIndex = right;
        indexes.push(right);
    }
    if (Number.isInteger(selectedIndex)) {
        if (dbl == true) {
            selectedIndex = indexes[0];
        }
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

function switch_mode(state, mode) {
    if (!(mode === MODES.TILE15 || mode === MODES.TILE24 || mode === MODES.TILE35 || mode === MODES.TILE48)) {
        return state;
    }

    let numbers = get_initial_numbers(mode + 1, mode);
    return { ...state, numbers, mode };
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
            newState = mover(state, value, action.dbl);
            break;
        case "mode":
            newState = new_game(switch_mode(state, value));
            break;
        case "records":
        case "pause":
        case "resume":
            break;
        default:
            newState = { ...state, gameOver: false }
    }
    // console.log(newState);
    return newState;
}

export default reductor;

export { initial_state, reductor };