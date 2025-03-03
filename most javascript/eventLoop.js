const one = () => console.log("First");
const two = () => setTimeout( () => console.log("Secoend"),500);
const three = () => console.log("Third");

two();
one();
three();