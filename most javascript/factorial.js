function factorialNum(num) {
    if(num < 0 ) return 1;
    let result = 1; 
    for (let i = 2; i <= num; i++){
      result = result * i;
    }
    return result;
  }
  
  console.log(factorialNum(5));