function detectSpeed(speed) {// fucntion declared to detect speed and calculate demerit points 
    let speedLimit = 70;// setting the speedlimit to 70km/h
    let demeritPoints = 0;//initializing demerit points to 0
    const demeritPointMax = 12;//maximum allowable demeritpoints declared before license is suspended
    if (speed < speedLimit) {// if speed is below the speed limit
        return 'Ok'// if speed is within limit log 'ok'
        
    } else {
        const excessSpeed = speed - speedLimit;// calculating the excess poitns over the speedlimit
        demeritPoints = Math.floor(excessSpeed / 5);//calculating the demeritpoints for every 5km/h over the speedlimit
        
        //check if demerit points exceed the maximum
        if (demeritPoints > demeritPointMax) { 
            console.log("License suspended");// log 'license suspended' if demeiritpoints exceed the maximum
            
        }
        return `Points:${demeritPoints}`;// log calculated demerit points
    
} 


}
const carSpeed = parseFloat(prompt("Enter the speed of the car:"));//prompt the  user to enter speed of the car and convert to float
alert(detectSpeed(carSpeed));// call the function to detect speed after the user's input

