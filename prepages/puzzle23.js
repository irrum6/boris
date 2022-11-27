const TILE14 = 15;
const TILE23 = 24;
const TILE34 = 35;
const TILE47 = 48;
const MODES = { TILE14, TILE23, TILE34, TILE47 }
const SIDES = {
    [TILE14]: 4,
    [TILE23]: 5,
    [TILE34]: 6,
    [TILE47]: 7,
}

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
            value: -2,
            index: i
        }
        numbers.push(item);
    }
    return numbers;
}

function initial_state() {
    let numbers = get_initial_numbers(25, MODES.TILE23);

    return {
        paused: false,
        gameOver: false,
        records: [],
        numbers,
        time: 0,
        moves: 0,
        mode: MODES.TILE23
    }
}

function new_game(state) {
    let time = 0;
    let moves = 0;
    let paused = false;
    let gameOver = false;
    let numbers = get_shuffled(state.numbers, state.mode)
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

function mover(state, i, dbl) {
    if (state.gameOver) {
        return game_over(state);;
    }
    let { numbers, moves, mode } = state;
    let side = SIDES[mode];
    console.log(state);
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
    const EMPTY_CELL_VALUE = -2;

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
    if (!(mode === MODES.TILE14 || mode === MODES.TILE23 || mode === MODES.TILE34 || mode === MODES.TILE47)) {
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
    console.log(newState);
    return newState;
}

export default reductor;

export { initial_state, reductor };