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