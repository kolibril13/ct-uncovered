const rangeModulo = (start, end) => {
    if (start > end) {
      [start, end] = [end, start];
    }
    let result = [];
    if ((end - start) <= 10 || (end - start) > 10) {
      for (let i = start; i <= end; i++) {
        result.push(i);
      }
    } else {
      for (let i = start; i <= 20; i++) {
        result.push(i);
      }
      for (let i = 1; i <= end; i++) {
        result.push(i);
      }
    }
    return result;  
  };
  

  console.log(rangeModulo(20,1)) 