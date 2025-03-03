function isPrime(num) {
    if(num <= 1) return false;
    if(num <= 3) return true;
    for(let i = 2; i * i <= num; i++){
      if(num % i === 0) return false;
    }
    return true;
  }
  
  
  
  function primeNumbers(limit) {
    let primes = [];
    for(let num = 2; num <= limit; num++ ){
      if(isPrime(num)){
        primes.push(num);
      }
    }
    return primes;
  }
  
  console.log(primeNumbers(30));