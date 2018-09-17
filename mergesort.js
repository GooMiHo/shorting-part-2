function split(wholeArray) {
    if(wholeArray.length <= 1) return wholeArray;
    let middle = Math.ceil(wholeArray.length/2);
    let firstHalf = wholeArray.slice(0, middle)
    let secondHalf = wholeArray.slice(middle)
    let a = [firstHalf, secondHalf]
    console.log(a);

    return a;
  }

function merge(array1, array2) {
  let mergedArray = []
  let in1 = 0;
  let in2 =0;
  while (mergedArray.length !== (array1.length + array2.length)) {
    if (array1[in1] < array2[in2] || array2[in2] === undefined) {
      mergedArray.push(array1[in1]);
      in1++;
    }
    else {
      mergedArray.push(array2[in2] || array1[in1] === undefined);
      in2++;
    }
  }
  return mergedArray;
}




function mergeSort(array) {
  let sortedArray = [];

 //while (array.length[0] > 1) {
  //split(array);
//}

  return sortedArray;
}
