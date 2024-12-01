// type Person={
//     name:string;
// };
// const person:Person={
// name:"john",
// };
// // console.log(person.name);
// // console.log("hello typescript ");
// let myName: string ="mani";
// // myName="another name";
// console.log(myName);

// let myNum: number=7;
// console.log(myNum);

// let word: any ="color";
// // word=12
// // word();

// console.log(word.toUpperCase());

// function addOne(num: number){
//     return num+1;
// }
// const result =addOne(3);
// console.log(result);

// const addTwo=(x: number,y:number)=>{
//     return x+y;
// }

// const results=addTwo(100,1);
// console.log(results);

// const myName = (naam = "mera naam ") => {
//   return naam+"maary hai ";
// };

// const result=myName();
// console.log(result);

// const addOne = (x: number, y: number): number => {
//   return 3;
// };

// const result = addOne(2, 3);
// console.log(result);

// function throwErr(msg:string):never{
//   throw new Error(msg);
// }
// const result=throwErr("hii");
// console.log(result);

// const nums:boolean[]=[true,false,false,true];
// console.log(nums);
// const items:string[]=[];
// items.push('mani')
// items.push('mani2')
// console.log(items);
// items.pop();
// console.log(items);

// const person:{name:string;age:number; pass:boolean}={
//     name:"mani",
//     age:19,
//     pass:true
// }
// console.log(person.pass);
// console.log(person.name);
// console.log(person.age);

// function add():{x:number;y:number}{
//     return {
//         x:3,
//         y:4
//     }
// }
// const result=add();
// console.log(result);

//---->_>_>_>_>_>_>_>_>_>_>_>_>_>_>_>_>>_>_>_>_>_>_>_>_>_
// type Person = {
//   name: string;
//   age: number;
// };

// // tutorial print point of view form line 89 to 94
// const printUser = (person: Person) => {
//   return `name: ${person.name} and age :${person.age}`;
// };

// const myPerson = printUser({ name: "mani", age: 9 });
// console.log(myPerson);

// //nhi to
// // sidha aise bhi print kr skte hai
// const myUser: Person = { name: "gullu", age: 29 };
// console.log(myUser);
// type myName=string;

// let name2:myName="maniKumar";
// console.log(name2);

// tupple--------------->>>>>>>>>>>>>>>

// let myTuple: [string, number] = ["mani", 90];
// // destructoring tuple
// let [a, b] = myTuple;
// console.log(a);

// let myTuple2: [number , string[]] = [1, ["mani","kumar"]];
// console.log(myTuple2);

// interface computer{
//   model:string,
//   gen:number,
//   hdd:number
// }
//  const dell : computer={
//   model:"M7",
//   gen:7,
//   hdd:512
//  }

//  console.log(dell.model);

// EG 1::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//  interface person {
//   name:string,
//   age:number,
//   sayHello():void
//  }

//  function greet(Person:person){
//   console.log(`name:${Person.name} and age ${67}`);
//   Person.sayHello();
//  }

//  const john :person={
//   name:"mani",
//   age:90,
//   sayHello(){
//     console.log("hii mani");
//   }
//  }
//  const john2 :person={
//   name:"rani",
//   age:91,
//   sayHello(){
//     console.log("hii rani");
//   }
//  }
// greet(john);
// greet(john2);

// EG 2 ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// interface song {
//   name: string;
//   singer: string;
//   year: number;
//   printInfo(name: string, singer: string, year: number): void;
// }

// function information(Song: song) {
//   // console.log(`name is ${Song.name} and singer is ${Song.singer}`);
//   Song.printInfo();
//   {
//     return;
//   }
// }

// const sonu:song={
//   name:"tara",
//   singer:"sonu",
//   year:2010,
//   printInfo(name,singer,year){
//     console.log(`${name} and ${singer} and yeara: ${year}`);
//   }
// }

// information(sonu);

interface MovieDetails {
  name1: string;
  year: number;
  ratings: number;
  printInfo(name: string, year: number, ratings: number): number | string;
}

interface MovieGenre extends MovieDetails {
  genre: string;
}

const movie2: MovieGenre = {
  name1: "raone",
  year: 2009,
  ratings: 9.5,
  genre: "action",
  printInfo(name1: string, year: number, ratings: number): number | string {
    console.log("hii");
    return `name: ${this.name1} and ratings: ${this.ratings}`;
  },
};

// Invoke the printInfo method and print the result
const printMovie = movie2.printInfo("raone", 2020, 65);
console.log(printMovie);