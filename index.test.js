const {Rover} = require('./index');


describe('Rover', () => {

    //Testing Rotation Behaviour
    describe('Rotation Behaviour', () => {
        const cases = [
            ['0:0:N', ''], 
            ['0:0:W', 'L'], 
            ['0:0:S', 'LL'], 
            ['0:0:E', 'LLL'], 
            ['0:0:N', 'LLLL']
        ]

        test.each(cases)('return %s when rotation is %s', (expected, commands) => {
            expect(Rover(commands)).toBe(expected);
        })
    })

    //Testing Movement Behaviour
    const cases = [
        ['0:1:N', 'M'], 
        ['1:0:E', 'RM']
        // ['0:0:S', 'LM'], 
        // ['0:0:E', 'LLL'], 
        // ['0:0:N', 'LLLL']
    ]

    test.each(cases)('return %s when rotation is %s', (expected, commands) => {
        expect(Rover(commands)).toBe(expected);
    })



})