function fibonacchi(num) {
    const series = [];
    for(let i = 0 ; i < num; i++) {
      if(i === 0){
        series.push(i);
      } else if(i === 1) {
        series.push(i);
      } else {
        series.push(series[i - 1] + series[i -2]);
      }
    }
    return series;
  }
  
  console.log(fibonacchi(10));