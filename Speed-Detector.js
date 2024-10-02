function detectSpeed(speed) {
    let speedLimit = 70;
    let demeritPoints = 0;
    const demeritPointMax = 12;
    if (speed < speedLimit) {
        console.log('Ok')
        
    } else {
        const excessSpeed = speed - speedLimit;
        demeritPoints = Math.floor(excessSpeed / 5);

        console.log(`Points:${demeritPoints}`);

        if (demeritPoints > demeritPointMax) {
            console.log("License suspended");
            
        
    }
    
}

}
const carSpeed = parseFloat(prompt("Enter the speed of the car:"));
detectSpeed(carSpeed);

