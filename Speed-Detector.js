function detectSpeed(speed) {
    const speedLimit = 70;
    const demeritPointMax = 12;
    if (speed < speedLimit) {
        console.log('Ok')
        
    } else {
        const excessSpeed = speed - speedLimit;
        const demeritPoints = Math.floor(excessSpeed / 5);

        if (demeritPoints > demeritPointMax) {
            console.log("License suspended");
            
        } else {
            console.log(`Points:${demeritPoints}`);
            
        }
        
    }
    
}