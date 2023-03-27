// let happyEnding = (message) => {
//     return new Promise((resolve, reject) =>{
//         setTimeout(() => {
//             if(message === 'Yes') {
//                 resolve("Em đồng ý");
//             }
//             else {
//                 reject(new Error('Không đồng ý'));
//             }
//         }, 5000)
//     })
// } 

// happyEnding('Yes').then(result => {
//     console.log(result);
// })

// happyEnding.apply("No").catch(e => {
//     console.log(e);
// })

// async function helloWorld(){
//     return 'Hello World';
// }

// helloWorld().then(
//     res => console.log(res)
// )

// async function f(){
//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => reject(new Error("lỗi")), 1000)
//     })
//     // let result = await promise;
//     // console.log(result);
//     promise.finally(() => {
//         console.log('promise ready');
//     }).catch(err => console.log(err))
// }
// f()
try {
    try {
        throw new Error('oops');
    } catch (ex) {
        console.error('inner', ex.message);
    } finally {
        console.log('finally');
    }
} catch (ex) {
    console.error('outer', ex.message);
}
