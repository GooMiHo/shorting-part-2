function split(wholeArray) {
    if(wholeArray.length <= 1) return wholeArray;
    let middle = Math.ceil(wholeArray.length/2);
    let firstHalf = wholeArray.slice(0, middle)
    let secondHalf = wholeArray.slice(middle)
    let a = [firstHalf, secondHalf]
    console.log(a);
    
    return a;
  }

