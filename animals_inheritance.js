"use strict"
class Animal {
  constructor(name){
    this.name = name;
    this.superPowered = new SuperPowered()
  }
}
class Chordata extends Animal{

}
class Mammal extends Animal{
  constructor(name){
    super(name)
    this.is_warm_blooded = true;
  }
}
class Amphibian extends Chordata{
  constructor(){
    this.num_legs = 4;
    this.is_warm_blooded = false;
  }
}
class Primate extends Mammal{
  constructor(name, is_warm_blooded){
    super(name, is_warm_blooded)
    this.num_legs = 2;
  }
}
class Carnivora extends Mammal{
  constructor(){
    this.num_legs = 4;
  }
}
class Chimpanzee extends Primate{
  constructor(name, num_legs, is_warm_blooded){
    super(name, num_legs, is_warm_blooded)
  }
}
class SuperPowered{
  constructor(){
    this.super = ""
  }
  use_laser_vision(){
    this.super = " bisa menembakkan laser"
    return this.super

  }
  be_invisible(){
    this.super =" bisa menghilang"
    return this.super

  }
}
var simpanse = new Chimpanzee("monyet")
console.log(simpanse.is_warm_blooded)
console.log(simpanse.superPowered.use_laser_vision())
console.log(simpanse)
