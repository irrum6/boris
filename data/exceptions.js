const NO_ARRAY_EXCEPTION = {
    "message": "not an array"
};

const NOT_A_NUMBER_EXCEPTION = {
    "message": "not a number"
};

const SMALL_ARRAY_EXCEPTION = {
    "message": "array not large enough"
};

Object.freeze(NO_ARRAY_EXCEPTION);
Object.freeze(NOT_A_NUMBER_EXCEPTION);
Object.freeze(SMALL_ARRAY_EXCEPTION);

export { NO_ARRAY_EXCEPTION, NOT_A_NUMBER_EXCEPTION, SMALL_ARRAY_EXCEPTION };