function leapYear(year){
    if(year < 0 ) return "Enter a valid year";
    if(year % 4 === 0 && year % 100 !== 0 || year % 400 === 0){
      return `${year} is a leapyear`;
    } else {
      return `${year} is not a leapyear`;
    }
  };
  
  console.log(leapYear(2024));