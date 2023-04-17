import {
    consoleBuffer,
    consoleEnd,
    consoleStart,
    validateFxn,
} from './helpers.js';

function minimumAbsoluteDifference(arr: number[]): number {
    let lowestValue = 100;

    for (let i = 0; i < arr.length; i++) {
        let difference = Math.abs(arr[i] - arr[i + 1]);

        if (difference < lowestValue) {
            lowestValue = difference;
        }
    }

    let difference = Math.abs(arr[0] - arr[arr.length]);
    if (difference < lowestValue) {
        lowestValue = difference;
    }

    return lowestValue;
}

consoleStart();

validateFxn(
    minimumAbsoluteDifference([-59, -36, -13, 1, -53, -92, -2, -96, -54, 75]),
    1
);

consoleEnd();

export {};
