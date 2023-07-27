const qwerty = value => typeof value;
console.log(qwerty('иса ты лох')); 
console.log(qwerty(12));
console.log(qwerty(true));
console.log(qwerty([]));
console.log(qwerty(null)); 
console.log(qwerty(undefined));


let second_greatest_lowest = (arr_num) => {
    
    let sortedArr = Array.from(new Set(arr_num)).sort((a, b) => a - b);
  
   
    if (sortedArr.length < 2) {
      return undefined;
    }
  
    let secondSmallest = sortedArr[1];
    let secondLargest = sortedArr[sortedArr.length - 2];
  
    return [secondSmallest, secondLargest];
  }
  

  let numbers = [323123121, 22000000, 111111110, 522323, 11231331, 432131];
  let result = second_greatest_lowest(numbers);
  console.log(result);