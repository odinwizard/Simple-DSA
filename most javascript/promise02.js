//Write a function that returns a promise which rejects with a specified error message after a specified number of milliseconds.

function rejectDelay(errorMsg, delay) {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            reject(new Error(errorMsg));
        }, delay);
    });
}


rejectDelay("Error message", 2000)
    .catch( (error) => {
        console.error(error.message);
    });

