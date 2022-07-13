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

    
    const counter = () => {
        if (x > 9) {
            x = 0
        } else if (x < 0) {
            x = 9
        } else  if (y > 9) {
            y = 0
        } else if (y < 0) {
            y = 9
        } else {
            x = x;
            y = y;
        }
    }

    const movement = () => {
        if (facing === 'N' ) {
            y++;
            
        } else if (facing === 'E') {
            x++;
           
        }else if (facing === 'S') {
            y--;
            
        } else if (facing === 'W') {
            x--;
            
        }
    }

    commandArray.forEach((i) => {

        if (i === 'M') {
            movement();
            counter();
        } else if (i === 'L' ) {
            rotateLeft();
        } else if (i === 'R') {
            rotateRight();
        }
    })

    
    
    return `${x}:${y}:${facing}`
}

module.exports = {Rover};