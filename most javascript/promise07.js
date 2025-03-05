//Write a try-catch block that catches any errors a function throws and logs them to the console with a custom error message.

function myFunction(num) {
    if (typeof num !== "number") {
        throw new Error("Parameter must be a number");
    }
    return num * 2;
}

try {
    const result = myFunction("Hello");
    console.log(result);
} catch (error) {
    console.log("Error caught here:", error.message);
}
