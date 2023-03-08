//  function centimeterToMeter (centimeter){
//         return centimeter / 100;
//  }
//  let metter = 522;
//  console.log(centimeterToMeter(metter));


// !  1 থেকে n পর্যন্ত সংখ্যার যোগফল নির্ণয় করো।

// function oneTo(n) {
//     return n*(n+1)/2
    
// }
// console.log(oneTo(10));
// ! ৩ এর নামতা লিখো জাভাস্ক্রিপ্ট ব্যাবহার করে।
// function malti(n){
//     let result = [];
//     for(let i=1; i<=10; i++){
//         result.push(`${n} X ${i} = ${n*i}`);
//     }
//     return result;
// }

// const rezul = 9;
// const total = malti(rezul);
// console.log(total);

//! এমন একটা ফাংশন বানাও যেটা একটি অ্যারে নিবে ইনপুট হিসেবে। তারপর সেই অ্যারের সকল উপাদান এর মধ্যে ৫ এর চেয়ে বড় যে সকল সংখ্যা আছে তাদের কাউন্ট নির্ণয় করবে।

// ইনপুটঃ [-1,2,-3,4,5,6,-7,8,-9,10]


    //   function countNumbersGreaterThanFive(arr){
    //     let count = "";
    //     for (let i=0; i< arr.length;i++){
    //         if(arr[i] > 5){
    //             count++;
    //         }
    //     }
    //     return count;
    //   }
    //   let arr= [-1,2,-3,4,5,6,-7,8,-9,10,5.5];
    //   let result = countNumbersGreaterThanFive(arr);
    //   console.log(result);
    //! তোমার দুজন বন্ধুর নাম একটি ফাংশনের প্যারামিটার হিসেবে পাস করো। তারপর এই দুইটি নামের মধ্যে যে নামটি বড়ো সেটি reverse অর্ডারে রিটার্ন করো।

    //     function reverseLargerName(name1,name2){
    //         if(name1.length >name2.length){
    //           return  name1.split("").reverse().join("");
    //         }else{
    //             return name2.split("").reverse().join("");
    //         }
    //     }

    // const name1= "tanvira";
    // const name2= "thamid";
    // const resilt = reverseLargerName(name1,name2);
    // console.log(resilt);
    //! এমন একটা ফাংশন বানাবে যেটিতে তুমি ইনপুট হিসেবে পানির volume ইন্সারট করবে মিলিলিটারে। এই মিলিলিটারকে লিটারে কনভার্ট করে ফাংশন তোমাকে রিটার্ন করবে।
    // function  millilitersToLiters(volume){
    //     return volume/1000;
    // }
    // let volume = 120;
    //  const result =millilitersToLiters(volume);
    //  console.log(result);
    //! একটা ফাংশন বানাবে যেটি একটি অ্যারে অফ অবজেক্ট রিসিভ করে প্যারামিটার হিসেবে।প্রতিটি অবজেক্টে একটি মানুষের নাম এবং বয়স থাকবে। এখন তোমার কাজ হচ্ছে এই অ্যারে থেকে সবচেয়ে ছোট যে person কে খুঁজে বের করা।
//  const people=
// [

// {name:'sakib', age:30},

// {name:'samiul', age:20},

// {name:'sahid', age:50},

// {name:'samin', age:10}
// ]
// function  findYoungestPerson (people){
//     let newpeople= people[0];
//     for(let i= 1;i<people.length;i++){
//         if(people[i].age<newpeople.age){
//             newpeople =people[i];
//         }
//     }
//     return newpeople;
// }
// const result = findYoungestPerson(people);
// console.log(result);
//!ফাংশন নেম দিতে হবে radianToDegree । এই ফাংশনে প্যারামিটার হিসেবে নিবে রেডিয়ান (radian)। তারপর সেটাকে ডিগ্রীতে (degree) কনভার্ট করে কত ডিগ্রী (degree) হয় সেই সংখ্যা রিটার্ন করবে। রিটার্ন করার সময় তোমাকে দশমিক এর পর দুই ঘর রিটার্ন করতে হবে।
// function radianToDegree(radian){
//     // return (radian*180)/Math.PI.toFixed(2);
//     return ((radian * 180) / Math.PI).toFixed(2);
// }
// let radian= 45;
// const result= radianToDegree(radian);
// console.log(result);
//!ফাংশন নেম দিতে হবে isJavaScriptFile । এই ফাংশনে প্যারামিটার হিসেবে নিবে একটি স্ট্রিং(String) যেটি হবে একটি ফাইল নেম (যেমনঃ ‘index.js’)। যদি এটি জাভাস্ক্রিপ্ট ফাইল হয় তোমাকে true রিটার্ন করতে হবে আর যদি না হয় তাহলে false রিটার্ন করতে হবে ।
// function   isJavaScriptFile (file){
//     return file.endsWith('.js');
// }
// console.log(isJavaScriptFile("app.js"));
// console.log(isJavaScriptFile("app.html"));
// console.log(isJavaScriptFile("app.css"));
//!ফাংশন নেম দিতে হবে oilPrice। এই ফাংশন তিনটা প্যারামিটার নিবেপ্রতি লিটার ডিজেলের এর দাম – 114 টাকাপ্রতি লিটার পেট্রোল এর দাম – 130 টাকাপ্রতি লিটার অকটেনের এর দাম – 135 টাকাএখন সে যদি বিভিন্ন লিটারের ডিজেল,পেট্রোল,অকটেনের অর্ডার দেয় তাহলে টোটাল কত টাকা খরচ হবে হলো সেই সংখ্যা রিটার্ন করতে হবে।
// function oilPrice(deselAmount,patrolAMOUNT,octenAmount){
//     const deselPrice=114;
//     const patrolPrice=130;
//     const octenPrice=135;
//     return ((deselAmount*deselPrice)+(patrolAMOUNT*patrolPrice)+(octenAmount*octenPrice));
// }
// console.log(oilPrice(50,0,0));
//! তোমাকে একটি ফাংশন লিখতে হবে isBestFriend যেটি প্যরামিটার হিসেবে দুইটি অবজেক্ট নিবে । তোমাকে অবজেক্ট দুইটি নিয়ে দেখতে হবে এরা দুইজন একে অপরের বেস্টফ্রেন্ড কিনা । যদি বেস্ট ফ্রেন্ড হয় তাহলে true রিটার্ন করবে , না হলে false রিটার্ন করবে ।

// const person1 ={ name: "abul", friend: "babul" };

// const person2 = { name: "babul", friend: "abul" };

// function isBestFriend (person1,person2){
// return person1.name === person2.friend && person1.friend ===person2.name;
// }
// const result= isBestFriend(person1,person2);
// console.log(result);
//! [ ফাংশন নেম দিতে হবে pandaCost]: তিনটা প্যারামিটার লাগবে। ১ টি সিঙ্গারা এর দাম – ৭ টাকা ১ টি সমুচা এর দাম – ১০ টাকা ১ টি জিলাপি এর দাম – ১৫ টাকা এখন সে যদি বিভিন্ন সংখ্যার সিঙ্গারা, সমুচা, আর জিলাপি এর অর্ডার দেয় তাহলে টোটাল কত টাকা খরচ হবে হলো সেই সংখ্যা রিটার্ন করতে হবে।

// function pandaCost (singaraCost,somusaCost,jilapiCost){
//     const singaraPrice= 7;
//     const somusaPrice= 10;
//     const jilapiPrice= 15;
//     return ((singaraCost*singaraPrice)+(somusaCost*somusaPrice)+(jilapiCost*jilapiPrice));
// }
// console.log(pandaCost(7,5,3));

// ! [ ফাংশন নেম দিতে হবে picnicBudget]: প্যারামিটার হিসাবে নিবে কয়জন পিকিনিক এ যাবে সেই সংখ্যা। যদি ১০০ বা তার কম যায় তাহলে প্রত্যেক এর জন্য খরচ হবে ৫০০০ টাকা করে। যদি ১০০ এর বেশি কিন্তু ২০০ এর কম বা সমান যায় তাহলে প্রথম ১০০ জন এর প্রতি জন এর জন্য ৫০০০ টাকা করে দিতে হবে। আর ১০০ এর বেশি (অর্থাৎ ১০১ নম্বর থেকে) যতজন আছে তাদের প্রত্যেক ওই জন্য ৪০০০ টাকা করে দিতে হবে। আর যদি ২০০ এর বেশি যায় তাহলে প্রথম ১০০ জন এর প্রতি জন এর জন্য ৫০০০ টাকা করে দিতে হবে। আর ১০০ এর বেশি যতজন আছে তাদের প্রত্যেক ওই জন্য ৪০০০ টাকা করে দিতে হবে। তাহলে প্রথম ১০০এর জন্য খরচ 5000 টাকা করে দিতে হবে। আর ১০০ এর বেশি অর্থাৎ ১০১ নম্বর থেকে থেকে ২০০ পর্যন্ত (অর্থাৎ ২০০ সমান বা কম) পর্যন্ত যতজন আছে তাদের প্রত্যেক এর জন্য ৪০০০ টাকা করে দিতে হবে। এর ২০০ এর বেশি যতজন আছে তাদের প্রত্যেক এর জন্য ৩০০০ টাকা করে দিতে হবে। এখন আমি একটা প্যারামিটার দিবো। সেটা যেকোন সংখ্যা হতে পারে। সেই সংখ্যা অনুসারে তুমি ফাংশন থেকে রিটার্ন দিবে কতটাকা পিকনিক এর বাজেট হতে হবে। ইনপুট প্যারামিটার সংখ্যাটা ১০০ এর কম হতে পারে। ১০০ থেকে ২০০ এর মধ্যে হতে পারে। আবার ২০০ এর বেশিও হতে পারে। তাই সব কেইস ভালো করে টেস্ট করে নিবে।
// function picnicBudget (people){
//     let bazet = 0;
//     if (people<=100){
//         bazet = people*5000;
//     }else if (people <=200){
//         bazet = 100*5000+ ((people -100)*4000);
//     }else {
//         bazet = 100*5000+100*4000+(people-200)*300;
//     }
//     return bazet;
// }
// console.log(picnicBudget(350));