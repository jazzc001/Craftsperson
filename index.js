const Rover = (commands) => {
    let x = 0
    let y = 0
    let facing = 'N';
    

    let commandArray = commands.split('');

    const rotateLeft = () => {
        facing === 'W' ?  facing = 'S' : (facing === 'S' ? facing = 'E' : (facing === 'E' ? facing = 'N' : facing = 'W'));
    }

    const rotateRight = () => {
        facing === 'N' ? facing = 'E' : ( facing === 'E' ? facing = 'S' : (facing === 'S' ?   facing = 'W' : facing = 'N'));
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
        facing === 'N' ? y++ : (facing === 'E' ? x++ : (facing === 'S'? y-- :  x--));
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