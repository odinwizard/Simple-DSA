//Write a function that throws an error if the parameter is not a number, and handles the error with a custom error message.

function vaildANumber(num) {
    return new Promise( (resolve, reject) => {
        if (typeof num !== "number") {
            reject(new Error("Invalid input. Expected a number."));
        } else {
            resolve(num);
        }
    });
}

vaildANumber(5)
    .then((num) => console.log(num))
    .catch(err => console.error(err));
// 5

vaildANumber("Not a number")
    .then(num => console.log(num))
    .catch(err => console.error(err));

    //Invaild input.



