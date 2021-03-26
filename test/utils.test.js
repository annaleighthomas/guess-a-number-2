// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { compareNumber } from '../utils.js';

const test = QUnit.test;

test('check to see if the numbers are the same and return 0', (expect) => {
 
    const guess = 5;
    const correctNumber = 5;
    const expected = 0;
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareNumber(guess, correctNumber);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

// IMPORT MODULES under test here:
// import { example } from '../example.js';


test('should take in a number and returns -1', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const guess = 3;
    const correctNumber = 6;
    const expected = -1;
    const actual = compareNumber(guess, correctNumber);
    


    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

// IMPORT MODULES under test here:
// import { example } from '../example.js';


test('we give it a number and it returns 1', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const guess = 15;
    const correctNumber = 8;
    const expected = +1;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareNumber(guess, correctNumber);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

