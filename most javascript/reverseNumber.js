function rverseString(str) {

    let char = str.split("");
    let reverse = char.reverse();
    let reverseString = reverse.join("");
    
    return reverseString;
  };
  console.log(rverseString("Hello"));
  