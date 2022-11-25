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
    // console.log(state, i);
    // move up
    // index -5
    // move down
    // index +5
    // left 
    // index -1
    // right
    // index +1
    let { numbers, moves } = state;
    let up = i - 5;
    let down = i + 5;
    let left = i - 1;
    let right = i + 1;
    let len = numbers.length;

    if (up > -1 && numbers[up].value == -2) {
        let tmp = { ...numbers[up] };
        numbers[up] = { ...numbers[i] };
        numbers[i] = { ...tmp };
        moves += 1;
        return { ...state, numbers, moves };
    }
    if (down < len && numbers[down].value == -2) {
        let tmp = { ...numbers[down] };
        numbers[down] = { ...numbers[i] };
        numbers[i] = { ...tmp };
        moves += 1;
        return { ...state, numbers, moves };
    }
    if (left > -1 && numbers[left].value == -2) {
        let tmp = { ...numbers[left] };
        numbers[left] = { ...numbers[i] };
        numbers[i] = { ...tmp };
        moves += 1;
        console.log(moves);
        return { ...state, numbers, moves };
    }
    if (right < len && numbers[right].value == -2) {
        let tmp = { ...numbers[right] };
        numbers[right] = { ...numbers[i] };
        numbers[i] = { ...tmp };
        moves += 1;
        return { ...state, numbers, moves };
    }
    return { ...state };
}

function reductor(state, action, next) {
    const { type, value } = action;
    switch (type) {
        case "reset":
            return { ...state, ...initial_state() }
        case "gameover":
            return { ...state, gameOver: true }
        case "gameOn":
            return { ...state, gameOver: false }
        case "save":
        case "new":
            return new_game(state)
        case "move":
            console.log(state, action, next)
            return mover(state, value)
        case "records":
        case "pause":
        case "resume":
        default:
            return { ...state, gameOver: false }
    }
}

export default reductor;

export { initial_state, reductor };