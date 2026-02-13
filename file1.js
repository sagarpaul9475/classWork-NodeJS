// const a = () => {
//     b();
//     console.log(`a : a`);
// }

// const b = () => {
//     console.log(`b : b`);
// }

// a();

//Empty stack

// a is pushed
// b is pushed
// b is executed
// b is popped
// a is executed
// a is popped


// const a = () => {
//     b();
//     console.log(`a : a`);
// }

// const b = () => {
//     console.log(`b init`);
//     setTimeout(() => {
//         console.log("b first");
//     }, 100000);
//     setTimeout(() => {
//         console.log("b second");
//     }, 0);
//     console.log(`b ended`);
// };

// a();
// console.log(`Ended`);

// a is pushed
// b is pushed
// b is executed
// Registering callback
// b is popped
// a is executed
// a is popped
// last line is pushed
// last line is executed
// last line is popped

//Stack overload
// const crash = () => {
//     crash();
// }
// crash();

//call stack --> event loop --> registered call back


// const a = () => {
//     b();
//     console.log(`a : a`);
// }

// const b = () => {
//     console.log(`b init`);

//     setTimeout(() => {                     //Micro task lower priority
//         console.log("b first");
//     }, 0);

//     setTimeout(() => {
//         console.log("b second");
//     }, 0);

//     Promise.resolve().then(() => {         //Macro task Higher priority
//         console.log(`b Promise Portion`);
//     });

//     console.log(`b ended`);
// };

// a();
// console.log(`Ended`);

// const fetchData = (classBack) => {
//     setTimeout(() => {
//         classBack("Data");
//     }
//     , 1000);
// }

// fetchData((data) => {
//     console.log(`Received : ${data}`);
// });

// const login =async () => {
//     await fetchData((data) => {
//         console.log(`Received : ${data}`);
//     });
//     console.log(`Logged in`);
// }

const sample= async () => {
    console.log(`Fetching data`);
    await fetch(`https://jsonplaceholder.typicode.com/posts/1`)
    .then((response) => response.json())
    .then((json) => console.log(json));
    console.log(`Data fetched`);
}
console.log(`Before calling sample`);
sample();
console.log(`After calling sample`);