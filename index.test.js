const {Rover} = require('./index')

describe('Rover', () => {

    
    test('starting position should face North', () => {
        expect(Rover('')).toBe('0:0:N');
    })

    test('move one step', () => {
        expect(Rover('M')).toBe('0:1:N');
    })

    test('Turn Left Once', () => {
        expect(Rover('L')).toBe('0:0:W');
    })

    test('Turn Left Twice two times', () => {
        expect(Rover('LL')).toBe('0:0:S');
    })

    test('Turn Left Three Times three times', () => {
        expect(Rover('LLL')).toBe('0:0:E');
    })

    test('Turn Left Four Times', () => {
        expect(Rover('LLLL')).toBe('0:0:N');
    })


})