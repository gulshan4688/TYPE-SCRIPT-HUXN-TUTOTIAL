// const printUser=(person: Person)=> {
//   return `name: ${person.name} and age :${person.age}`
// }

// date: 02.12.2025

// interface car{
//     model:string;
//     start():void;
// }

// interface car{
//     brand:string;
//     stop():void;
// }

// const car1:car={
//     model:"virtus",
//     brand:"vw",
//     start(){
//         console.log("car starts");
//     },
//     stop(){
//         console.log("car stops");
//     }
// }

// console.log(car1.start());

// function printNum(x:number,y:string):[number,string]{
//     console.log(x);
//     console.log(y);
//     return [x,y];
// }
// const val=printNum(3,"hii");
// console.log(val);
// generics in typescript

// function printInfo<T>(x: T): T {
//   return x;
// }
// const str1 = printInfo<string>("hello");
// console.log(str1);

// function printDog<T>(item: T, defaultV: T): [T, T] {
//   return [item, defaultV];
// }

// // create an interface
// interface dog {
//   name: string;
//   breed: string;
// }

// const dog2 = printDog<dog>(
//   { name: "x", breed: "y" },
//   { name: "x1", breed: "y2" }
// );
// console.log(dog2);

function F1<T>(obj:{[key:string]:T}):{
    key:string;
    value:T;
}{
    const keys=Object.keys(obj);
    const randKey=keys[Math.floor(Math.random()*keys.length)]
    return {key:randKey,value:obj[randKey]};
}
const valuePair={a:"apple", b:"banana", c:"cherry"};
console.log(valuePair);
const res1=F1<string>(valuePair);
console.log(res1);