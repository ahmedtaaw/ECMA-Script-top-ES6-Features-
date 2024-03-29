/*https://www.coursera.org/learn/programming-with-javascript/supplement/VJhho/creating-classes*/
class Train{
    constructor(color,lightsOn){
        this.color=color;
        this.lightsOn=lightsOn;
    }
    toggleLights(){
        this.lightsOn=!this.lightsOn;
    }
    lightsStatus(){
        console.log(this.lightsOn)
        console.log("#####")
    }
    getSelf(){
        console.log(this)
        console.log("#####")
    }
    getPrototype(){
        var proto = Object.getPrototypeOf(this);
        console.log(proto)
        console.log("#####")
    }
}
var train4=new Train('red',false)
console.log(train4)
console.log("#####")
train4.toggleLights()
train4.lightsStatus()
train4.getSelf()
train4.getPrototype()
/******************************/
class HighSpeedTrain extends Train{
    constructor(passengers, highSpeedOn, color, lightsOn){
        super(color, lightsOn);
        this.passengers=passengers;
        this.highSpeedOn=highSpeedOn;
    }
    toggleHighSpeed(){
        this.highSpeedOn= !this.highSpeedOn;
        console.log(this.highSpeedOn)
    }
    toggleLights(){
        super.toggleLights();
        super.lightsStatus();
        console.log('Lights are 100% operational.');
    }
}

var train5 = new Train('blue', false);
var highSpeed1 = new HighSpeedTrain(200, false, 'green', false);
train5.toggleLights();
train5.lightsStatus();
highSpeed1.toggleLights();
/******************************/
class StationaryBike {
    constructor(position, gears) {
        this.position = position
        this.gears = gears
    }
}

class Treadmill {
    constructor(position, modes) {
        this.position = position
        this.modes = modes
    }
}

class Gym {
    constructor(openHrs, stationaryBikePos, treadmillPos) {
        this.openHrs = openHrs
        this.stationaryBike = new StationaryBike(stationaryBikePos, 8)
        this.treadmill = new Treadmill(treadmillPos, 5)
    }
}

var boxingGym = new Gym("7-22", "right corner", "left corner")

console.log(boxingGym.openHrs) //
console.log(boxingGym.stationaryBike) //
console.log(boxingGym.treadmill) //
