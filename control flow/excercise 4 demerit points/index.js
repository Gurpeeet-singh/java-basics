// speed limit 70km/h
//for every 5 above they get 1 point
//if driver gets more than 12 points license has been suspended



function speedcheceker(speed) {
    const limit = 70;
    if (speed <= limit)
        console.log('OK');
    else {
        let maxpoint = 12
        let points = Math.floor((speed - limit)/5);
        if (points > maxpoint )
            console.log("License Suspended")
        else
            console.log('points: ',points)
    }
}

let speed = 70
speedcheceker(speed)