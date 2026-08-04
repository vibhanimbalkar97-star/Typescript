// creating class
// constructor function = variable banate hai, class ko jab bhi chale ye to first constructor chalta hai, jo value hume set karne hai wo contructor mein do and jis ki value hume pata hai yahi hogi to use constuctor ke baher variable mein define karo.
// public likhna important hai constructor mein, nahi toh variable declare nahi hoge

// create class
class Person {
  name = "abc";
  age = 20;
}

let d1 = new Person(); // instance(object creation with new keyword)
let d2 = new Person();
console.log(d1, d2); // both gives the same output or value

// to get different values we use constructor function.
class Person1 {
  constructor(
    public name: string,
    public age: number,
  ) {
    this.name = name;
    this.age = age;
  }
}

let d3 = new Person1("karan", 25);
console.log(d3.name, d3.age);

let d4 = new Person1("kareena", 25);
console.log(d4.name, d4.age);

// one way = inside constructor initialize and declare called as parameter properties
class Music {
  constructor(
    public name: string,
    public length: number,
    public thumbnail: string,
    public isFree: boolean,
  ) {}
}
let d5 = new Music("helloo hi", 25, "abc.jpg", true);
console.log(d5);
// reassign value
d5.length = 34;
console.log(d5);

// second way intialize using this keyword
// class Music1 {
//     public name;
//     public length;
//     public thumbnail;
//     public isFree;
//     constructor(name:string, length:number, thumbnail:string, isFree:boolean){
//         // initialize
//         this.name=name
//         this.length=length
//         this.thumbnail=thumbnail
//         this.isFree=isFree
//     }
// }

// this keyword = 1 way = here no need to add this.name = name bcz in constructor only we declare and initialize variable.only in methods we need to use this keyword.
// this = is used when in class we want to access the variables in methods or anyother place we use this.
class Music2 {
  constructor(
    public artist: string,
    public song: string,
  ) {}
  getSong() {
    console.log(this.song);
  }
}
let d6 = new Music2("ABC", "HHHHH");
d6.getSong();

// 2 way
class Music3 {
  public artist;
  public song;
  constructor(artist: string, song: string) {
    this.artist = artist;
    this.song = song;
  }
  getSong() {
    console.log(this.song);
  }
}
let d7 = new Music2("ABC", "HHHHH");
d7.getSong();

// Access modifiers = public, private, protected
// public = class ke andar kahi bhi change kare, method ke andar change kare, class ke baher instance ke baad change kar sskte hai, inheritance pe bhi change ho sakte hai value
// private = class ke andar and methods me change kar sakte hai but instance class ke baher nahi kar sakte ts error dega but console pe value change hogi. inheritance pe change nahi hogi.
// protected = same class ya extended class pe use ho sakta hai, instance ke baad access nahi hogi.

class BottleMaker {
  constructor(
    public name: string,
    private price: number,
    protected metalType: string,
  ) {}

  changePrice() {
    this.price = 2500; // private accessible in class
    return this.price;
  }

  changeType() {
    this.metalType = "plastic"; // protected accessible in class
    console.log(this.metalType);
  }
}

class MetalBottleMaker extends BottleMaker {
  constructor(
    name: string,
    price: number,
    metalType: string,
    public isMetalGood: boolean,
  ) {
    // this belongs to metalbottlemaker
    super(name, price, metalType); // passes metalBottlemaker properties to bottlemaker
  }
  changeMetalPrice() {
    // this.price = 3000 //private not access here
  }

  changeMetal() {
    this.metalType = "copper"; //protected accessible in subclass
  }
}
let d8 = new MetalBottleMaker("Milton", 2000, "Steel", true);
d8.name = "Boat"; //public can access anywhere
// d8.price=3000 // private not access outside class
// d8.metalType = "brass" // protected only accessible to class and its subclass
console.log(d8.changePrice());


// Getter= instead of calling method like u1.getname(), we can call directly property like u1.name. use 'get keyword'
// Setter= same as getter here only we set property like u1.name="abc"
// _ why use underscore = because to avoid duplicate names.

class Product2 {
    constructor(public _name:string, public price:number){}

    get name(){
        return this._name
    }

    set name(value:string){
        this._name=value
    }
}
let d9 = new Product2("iron", 400)
console.log(d9.name)
d9.name="glass"
console.log(d9.name)