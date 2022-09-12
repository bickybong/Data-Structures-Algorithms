// instantiation
class Player {
    constructor(name, type){
        console.log("player", this);
        this.name = name;
        this.type = type;
    }
    introduce(){
        console.log(`Hi I am ${this.name}, and ${this.type}`);
    }
}

class Wizard extends Player{
    constructor(name, type){
        super(name, type)
        console.log("wizard", this);
    }
    play(){
        console.log(`WEEE I'm a ${this.type}`);
    }
}

const wizard1 = new Wizard("Shelly", "Healer");
// const wizard2 = new Wizard("Shawn","Archmage");

wizard1.introduce();
wizard1.play();
