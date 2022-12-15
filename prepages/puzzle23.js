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

import { ShowAlertMessage } from "../components/index"

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
    return make_initial_swap(numbers,mode);
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
            // debugger;
            let num2 = numbers[j].value;
            if (num > num2) {
                inversionCount++;
            }
        }
    }
    // console.log(side, inversionCount, emptyCellRow);
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

    while (!is_solvable(numbers, state.mode)) {
        numbers = get_shuffled(nuNumbers, state.mode);
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

function do_swap(arrayi, i, j) {
    let tmp = { ...arrayi[i] };
    arrayi[i] = { ...arrayi[j] };
    arrayi[j] = { ...tmp };
}

function make_initial_swap(numbers, mode) {
    switch(mode){
        case MODES.TILE24:
            do_swap(numbers,24,23);
            // do_swap(numbers,23,22);
            // do_swap(numbers,22,17);
            // do_swap(numbers,17,12);
            break;
        default:
            // todo
    }
    return numbers;
}

function get_shuffled(numbers, mode) {
    // shuffle a few times
    let len = numbers.length;
    let side = SIDES[mode];

    //first find the position of the empty cell
    let emptyPosition = -1;
    for (let i = 0; i < len; i++) {
        let num = numbers[i].value;
        if (num == EMPTY_CELL_VALUE) {
            //once found remember
            emptyPosition = i;
            break;
        }
    }
    //check for anomalies
    if (emptyPosition == -1) {
        throw "empty cell was ommited, wih?";
    }


    //for number of iterations n
    //check for legit moves
    //and swap empty tile n times
    let N = 8;
    let usedIndices = [];
    for (let i = 0; i < N; i++) {
        let legitMoves = [];
        let left = emptyPosition - 1;
        let right = emptyPosition + 1;
        let up = emptyPosition - side;
        let down = emptyPosition + side;
        // debugger;
        // check for boundary violations and used indexes        
        if (up > -1 && usedIndices.indexOf(up) < 0) {
            legitMoves.push(up);
        }
        if (left > -1 && usedIndices.indexOf(left) < 0) {
            legitMoves.push(left);
        }
        if (right < len && usedIndices.indexOf(right) < 0) {
            legitMoves.push(right)
        }
        if (down < len && usedIndices.indexOf(down) < 0) {
            legitMoves.push(down);
        }

        // if no legit moves, continue
        if (legitMoves.length < 1) {
            continue;
        }
        console.log(emptyPosition, legitMoves,usedIndices);
        //select index
        let index = legitMoves[0];
        //select one move by random, if there are more
        if (legitMoves.length > 1) {
            let x = Math.floor(Math.random() * legitMoves.length);
            index = legitMoves[x];
        }
        //do swap
        do_swap(numbers, emptyPosition, index);
        usedIndices.push(emptyPosition);
        emptyPosition = index;
        usedIndices.push(index);
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
        do_swap(numbers, selectedIndex, i);
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