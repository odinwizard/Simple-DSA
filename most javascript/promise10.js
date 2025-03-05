//Write a function that catches and handles any errors thrown by a Promise, and logs a custom error message to the console.

function handlePromiseError(promise, errorMessage) {
        promise.catch(error => {
            console.error(errorMessage, error);
        });
}

