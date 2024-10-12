function detectSpeed(speed) {// fucntion declared to detect speed and calculate demerit points 
    let speedLimit = 70;// setting the speedlimit to 70km/h
    let demeritPoints = 0;//initializing demerit points to 0
    const demeritPointMax = 12;//maximum allowable demeritpoints declared before license is suspended
    if (speed < speedLimit) {// if speed is below the speed limit
        console.log('Ok')// if speed is within limit log 'ok'
        
    } else {
        const excessSpeed = speed - speedLimit;// calculating the excess poitns over the speedlimit
        demeritPoints = Math.floor(excessSpeed / 5);//calculating the demeritpoints for every 5km/h over the speedlimit

        console.log(`Points:${demeritPoints}`);// log calculated demerit points

        if (demeritPoints > demeritPointMax) { // if demeritpoints is above the allowable demeritpoints maximum
            console.log("License suspended");// log 'license suspended' if demeiritpoints exceed the maximum
            
        
    }
    
}

}
const carSpeed = parseFloat(prompt("Enter the speed of the car:"));//prompt the  user to enter speed of the car and convert to float
detectSpeed(carSpeed);// call the function to detect speed after the user's input

