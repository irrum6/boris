import { NO_ARRAY_EXCEPTION, NOT_A_NUMBER_EXCEPTION, SMALL_ARRAY_EXCEPTION } from './exceptions';

class Utils {
    static shuffleArray(arr, many) {
        if (!Array.isArray(arr)) throw NO_ARRAY_EXCEPTION;
        if (typeof many !== 'number') throw NOT_A_NUMBER_EXCEPTION;
        const len = arr.length;
        if (len < many) throw SMALL_ARRAY_EXCEPTION;
        const indexes = [];//selected indexes to return array
        while (many > 0) {
            let i = Math.floor(Math.random() * len);
            if (!indexes.includes(i)) {
                indexes.push(i);
                many--;
            }
        }
        const arr1 = [];
        for (const index of indexes) {
            arr1.push(arr[index]);
        }
        return arr1;
    }
}

export default Utils;