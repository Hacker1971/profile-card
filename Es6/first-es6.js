
  //ES6
//  const add1 = (a,b) => a * b;
//    const x= 50;
//    const y= 100;
//   const   add2 =  add1(x,y);
//   console.log(add2);
//   //max number
//   const numbers = [12, 23, 21,12,32,23,45,54,65,45,56,41,14,41,];
//   const max = Math.max(...numbers);
//   console.log(max);
//   //min number
//   const numbers2 = [12, 23, 21,12,32,23,45,54,65,45,56,41,14,41,];
//   const min = Math.min(...numbers2);

//   console.log(min);
  // midile number and number of middle
//   const numbers3 = [12, 23, 21, 12, 32, 23, 45, 54, 65, 45, 56, 41, 14, 41];
//   const midile = Math.floor(numbers3.length / 2);
//   const middle = numbers3.slice(midile, numbers3.length - midile);
//   console.log(middle);
  //  sum of even numbers
//   const numbers4 = [12, 23, 21, 12, 32, 23, 45, 54, 65, 45, 56, 41, 14, 41];
//   const sum = numbers4.reduce((acc, cur) => acc + cur, 0);
//   console.log(sum);
//   // sum of old number
//   const numbers5 = [12, 23, 21, 12, 32, 23, 45, 54, 65, 45, 56, 41, 14, 41];
//   const sum2 = numbers5.reduce((acc, cur) => acc +
//   (cur % 2 === 0 ? cur : 0), 0);
//   console.log(sum2);
//Looping over an Array
// const car = ['bmw', 'marciti', 'toyota', 'apacy'];
// let names = '';
// for (let x of car) {
//   names += x + ' ';
// }
// console.log(names);
// Looping over a String
//  const names = 'John Smith';  
//  let x= " ";
//   for (let a of names){
//     x +=  a + " ";
//   };
//   console.log(x);
// JavaScript Maps
//    const mno = new Map(
//     [
//         ['Johi', 'Smith'],
//         ['Mary', 'Jones'],
//         ['John', 'Doe']
        
//     ]
//    );
//    console.log(mno.get('Johi'));
// const myPromise = new Promise(function(myResolve, myReject) {
//     setTimeout(function() { myResolve("I love You !!"); }, 1000);
//   });
  
//   myPromise.then(function(value) {
//     console.log(value);
//   });
// const myPromise = new Promise(function(myResolve, myReject) {
//     setTimeout(function() {
//       myResolve("I love You !!");
//     }, 1000);
//   });
  
//   myPromise.then(function(value) {
//     console.log(value);
//   });
  
 // The Symbol Type
//  const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue"
//   };
//   let id = Symbol('id');
//   person[id] = 140353;
//   console.log(person[id]);
// function somesum(a,b=0){
//     return a+b;
// }
// console.log(somesum(20 ,30));

//  let greet = x => console.log("tanvir");
//  greet(x);

// let greet = x => console.log(x);
// console.log("my name is tanvir");
  //  let age = 18;
  //  let welcome = (age >18) ?
  //  () => console.log('baby'):
  //  () => console.log('adult');
  //  welcome();
  //  let sum = (a,b) => {
  //   let rezult = a + b;
  //   return rezult;
  //  }
  //  let rezult1 = sum(5,7);
  //  console.log(rezult1);
  // let sum =(...n) => {
  //   console.log(n);
  // }
  // sum(5,1,3,4,6);
  // function sum(x=6, y = x, z = x+y){
  //   console.log(
  //     x + y + z
  //   );
  // };
  // sum();
  // const  sum = ()=> 15;
  // const calculator = function(x, y=x*sum()){
  //   return x+y;
  // }
  // console.log(calculator(10));

// const name = 'tanvir';
// const age = 18;
// console.table(`name: ${name} age: ${age}`);
// const name = ['my','name','is','tanvir'];
// const other = [...name, 'not','is','name'];
// console.log(...other);
// console.log(name);
// console.log(...name);
// const arra= [1,2,3];
// const arra2=arra;
// arra.push(4);

// console.log(arra2);
// const obj1= ['x=1'];

// const obj2 = ['y=2'];
// const obj3 =['z=3'];
// const obj4 = [...obj1,...obj2,...obj3];

// console.log(...obj4);

const arry = (a,b) => a + b;
console.log(arry(10,20));





