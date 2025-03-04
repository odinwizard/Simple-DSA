//Write a function that returns a promise which resolves with an array of random numbers after a specified number of milliseconds.

function randomNumber(length, delay) {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            let randomNumbers = Array.from({length}, () => Math.floor(Math.random() * 100));
            resolve(randomNumbers);
        }, delay);
    });
}

randomNumber( 5, 2000) 
    .then( (result) => {
        console.log(result);
    })
    .catch( (error) => {
        console.error(error.message);
    });


