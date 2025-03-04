// Write a function that returns a promise which resolves after a specified number of milliseconds.


function delay(milliseconds) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, milliseconds);
    });
}


console.log("start");
delay(2000).then(() => {
    console.log("2 second elapsed");
});
console.log("end");