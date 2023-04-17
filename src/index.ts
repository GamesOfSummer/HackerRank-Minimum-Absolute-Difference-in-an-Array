import {
    consoleBuffer,
    consoleEnd,
    consoleStart,
    validateFxn,
} from './helpers.js';

function formatInput(a: number, b: number): number {
    return Math.abs(a - b);
}

function minimumAbsoluteDifference(arr: number[]): number {
    let lowestValue = 1000;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i !== j) {
                let difference = formatInput(arr[i], arr[j]);

                if (difference < lowestValue) {
                    lowestValue = difference;
                }
            }
        }
    }

    return lowestValue;
}

consoleStart();
validateFxn(minimumAbsoluteDifference([1, -3, 71, 68, 17]), 3);

validateFxn(minimumAbsoluteDifference([3, -7, 0]), 3);

validateFxn(
    minimumAbsoluteDifference([-59, -36, -13, 1, -53, -92, -2, -96, -54, 75]),
    1
);

consoleEnd();

export {};
