class Animal {
    constructor(color='yellow', energy=100){
        this.color=color;
        this.energy=energy;
    }
    isActive(){
        if(this.energy>0){
            this.energy-=20;
            console.log('energy decresed to level: ',this.energy)
        }else if (energy<=0){
            this.sleep()
        }
    }
    sleep(){
        this.energy+=20;
        console.log('energy increased to level: ', this.energy)
    }
    getColor(){
        console.log(this.color)
    }
    getEnergy(){
        console.log(this.energy)
    }
}
class Cat extends Animal{
    constructor(sound='brrr', canJumpHigh=true, canClimbTrees=true, color, energy){
        super(color,energy);
        this.sound=sound;
        this.canJumpHigh=canJumpHigh;
        this.canClimbTrees=canClimbTrees;
    }
    makeSound(){
        console.log(this.sound)
    }
}
class Bird extends Animal{
    constructor(sound='chrip', canFly=true, color, energy){
        super(color,energy);
        this.canFly=canFly;
        this.sound=sound;
    }
    makeSound(){
        console.log(this.sound)
    }
}
class HouseCat extends Cat{
    constructor(houseCatSound='meow', sound, canJumpHigh, canClimbTrees, color, energy){
        super(sound, canJumpHigh, canClimbTrees, color, energy)
        this.houseCatSound=houseCatSound;
    }
    makeSound(option){
        if(option){
            super.makeSound()
           
        }
         console.log(this.houseCatSound)
        
    }
}
class Tiger extends Cat{
    constructor(tigerSound='Roooaaar', sound, canJumpHigh, canClimbTrees, color, energy){
        super(sound, canJumpHigh, canClimbTrees, color, energy)
        this.tigerSound=tigerSound
    }
    makeSound(option){
        if(option){
            super.makeSound()
            console.log(this.tigerSound)
        }
    }
}
class Parrot extends Bird{
    constructor(canTalk=false, sound,canFly, canJumpHigh, canClimbTrees, color, energy){
        super(sound,canFly, color, energy);
        this.canTalk=canTalk;
        this.canJumpHigh=canJumpHigh;
        this.canClimbTrees=canClimbTrees
    }
    makeSound(option){
        if(option){
            super.makeSound();
            
        }
        if(this.canTalk){
            console.log("I'm a talking parrot!")
        }
    }
}
var polly = new Parrot(true);
var fiji = new Parrot(false);
console.log("/****polly.makeSound()****/")
polly.makeSound();
console.log("/****polly.makeSound(true);****/")
polly.makeSound(true);
console.log("/****fiji.makeSound();****/")
fiji.makeSound();
console.log("/****fiji.makeSound(true);****/")
fiji.makeSound(true);
console.log("/****polly.getColor()****/")
polly.getColor()
console.log("/****polly.getEnergy()****/")
polly.getEnergy()
console.log("/****polly.isActive();****/")
polly.isActive();
console.log("/****polly.sleep();****/")
polly.sleep();


var penguin = new Bird("shriek", false, "black and white", 200);
console.log("/****penguin****/")
console.log(penguin)
console.log("/****penguin.sound****/")
console.log(penguin.sound)
console.log("/****penguin.canFly****/")
console.log(penguin.canFly)
console.log("/****penguin.color****/")
console.log(penguin.color)
console.log("/****penguin.energy****/")
console.log(penguin.energy)
console.log("/****penguin.isActive****/")
console.log(penguin.isActive())
