export function compareNumber(guessNumber, correctNumber) {
    if (guessNumber === correctNumber) {
        return 0;
    } else if (guessNumber < correctNumber) {
        return -1;
    } else {
        return 1;
    }
}