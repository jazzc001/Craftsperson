const Rover = (commands) => {
    let x = 0
    let y = 0
    let facing = 'N';
    let opposition = {  }

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

    commandArray.forEach((i) => {

        if (i === 'M') {
            y++
        } else if (i === 'L' ) {
            rotateLeft();
        }
    })

    
    
    return `${x}:${y}:${facing}`
}

module.exports = {Rover};