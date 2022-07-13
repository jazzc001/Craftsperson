const Rover = (commands) => {
    let x = 0
    let y = 0
    let facing = 'N';
    

    let commandArray = commands.split('');

    const rotateLeft = () => {
        if (facing === 'W') {
            facing = 'S'
        } else if ( facing === 'S') {
            facing = 'E'
        } else if (facing === 'E') {
            facing = 'N'
        } else {
            facing = 'W'
        }
    }

    const rotateRight = () => {
        if (facing === 'N') {
            facing = 'E'
        } else if ( facing === 'E') {
            facing = 'S'
        } else if (facing === 'S') {
            facing = 'W'
        } else {
            facing = 'N'
        }
    }

    
    const counter = (c) => {
        if (c > 9) {
            c = 0
        } else if (c < 0) {
            c = 9
        } else {
            c = c
        }
    }

    const movement = () => {
        if (facing === 'N' ) {
            counter(y);
            y++;
        } else if (facing === 'E') {
            counter(x);
            x++;
        }else if (facing === 'S') {
            counter(y);
            y--;
        } else if (facing === 'W') {
            counter(x);
            x--;
        }
    }

    commandArray.forEach((i) => {

        if (i === 'M') {
            movement();
        } else if (i === 'L' ) {
            rotateLeft();
        } else if (i === 'R') {
            rotateRight();
        }
    })

    
    
    return `${x}:${y}:${facing}`
}

module.exports = {Rover};