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

        test.each(cases)('return %s when commands is %s', (expected, commands) => {
            expect(Rover(commands)).toBe(expected);
        })
    })

    //Testing Movement Behaviour
    describe('Movement Behaviour', () => {

        const cases = [
            ['0:1:N', 'M'], 
            ['0:2:N', 'MM'],
            ['0:9:N', 'MMMMMMMMM'], 
            ['0:0:N', 'MMMMMMMMMM'], 
            ['1:0:E', 'RM'],
            ['2:0:E', 'RMM'],
            ['4:0:E', 'RMMMM'],
            ['9:0:E', 'RMMMMMMMMM'],
            ['0:0:E', 'RMMMMMMMMMM'],
            ['0:9:S', 'RRM'],
            ['0:5:S', 'RRMMMMM'],
            ['0:1:S', 'RRMMMMMMMMM'],
            ['0:0:S', 'RRMMMMMMMMMM'],
            ['9:0:W', 'RRRM'],
            ['5:0:W', 'RRRMMMMM'],
            ['1:0:W', 'RRRMMMMMMMMM'],
            ['0:0:W', 'RRRMMMMMMMMMM'],
        ]
    
        test.each(cases)('return %s when commands is %s', (expected, commands) => {
            expect(Rover(commands)).toBe(expected);
        })
    })
    
    //Combining Both Behaviour

    describe('Random Commands', () => {

        const cases = [
            ['0:1:N', 'M'], 
            ['1:0:E', 'RM'],
            ['9:0:W', 'LM'], 
            ['1:9:S', 'RMRM'], 
            ['9:9:S', 'LMLM']
        ]
    
        test.each(cases)('return %s when commands is %s', (expected, commands) => {
            expect(Rover(commands)).toBe(expected);
        })
    })
})