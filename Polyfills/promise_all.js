// promise all



// const promise1 = new Promise((resolve, reject) => {
//     resolve("Rejected!")
// })

// const promise2 = new Promise((resolve, reject) => {
//     reject("Rejected 2!")
// })
// const promise3 = new Promise((resolve, reject) => {
//     resolve("Rejected!")
// })
// const promises = [promise1, promise2, promise3];

// Promise.promiseall = (promises) => {
//     return new Promise(function(resolve, reject) {
//         if (!Array.isArray(promises)) {
//             return reject(new TypeError('Promises must be an array'));
//         }

//         let results = [];
//         let completedPromises = 0;

//         if (promises.length === 0) {
//             resolve(results);
//         }
        
//         promises.forEach((promise, index) => {
//             Promise.resolve(promise)
//                 .then((value) => {
//                     results[index] = value;
//                     completedPromises++;
//                     if (completedPromises === promises.length) {
//                         resolve(results);
//                     }
//                 })
//                 .catch((error) =>{
//                     reject(error);
//                 });
//         });

        
//     });
// };

// Promise.promiseall = (promises) => {
//     return new Promise((resolve, reject) => {
        
//         if(!Array.isArray(promises)){
//             new TypeError("BAD type!");
//         }

//         let output = [];
//         let count = 0;

//         if(!promises.length){
//             resolve(output);
//             return;
//         }

//         promises.forEach((promise, index) => {
//             Promise.resolve(promise).then((val) => {
//                 output[index] = val;
//                 count++;
//                 if(count === promises.length){
//                     resolve(output);
//                 }
//             }).catch(err => reject(err));
//         })


//     })
// }

// Promise.promiseall(promises).then((val) => {
//     console.log(val);
// }).catch(err => console.log(err));

// Promise.promiseall(promises).then((data) => {
//     console.log("Data", data);
// }).catch(err => console.log(err));















const p1 = new Promise((resolve, reject) => {
    resolve("Resolved 1");
})
const p2 = new Promise((resolve, reject) => {
    resolve("Resolved 2");
})
const p3= new Promise((resolve, reject) => {
    resolve("Resolved 3");
})

const proArr = [p1, p2, p3];




Promise.mynewpromiseall = (promises) => {
    return new Promise((resolve, reject) => {

        if(!Array.isArray(promises)){
            throw new Error("I need array");
        }

        let output = [];


        if(promises.length === 0){
            resolve(output);
            return;
        }

        let count = 0;

        promises.forEach((promise, index) => {
            Promise.resolve(promise).then((data) => {
                output[index] = data;
                count++;

                if(count === promise.length){
                    resolve(output);
                }

            }).catch((err) => {
                reject(err);
            })
        })


    })
}







Promise.mynewpromiseall(proArr).then((data) => {
    console.log("Data", data);
}).catch(err => console.log(err));