//1) Create a function with an array of numbers as its parameter. The function should iterate through the array and return the minimum value from the array. Hint: Use what you know about if statements to identify and store the smallest value within the array.



//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

// let arraySorting = function (n) {
//   return n.sort(nums1)
// }

//Using one of the test arrays as the argument, call your function inside the console.log statement below.

// console.log(arraySorting(nums1));

function findLowest(num){
  let low = num[0]
  for(let i = 0;i < num.length; i++){
    if(num[i]< low){
      low = num[i]
    }
  }
  return low;
}

//console.log(findLowest(nums2));

function findMinValue(arr){
  let min = arr[0];
  for (i = 0; i < arr.length; i++){
    if (arr[i] < min){
      min = arr[i];
    }
  }
  return min;
}
//11.11.1.2. Part B: Create a New Sorted Array
//Create a function with an array of numbers as its parameter. This function will return a new array with the numbers sorted from least to greatest value.

/*Within the function:
a) Define a new, empty array to hold the final sorted numbers.
b) Use the findMinValue function to find the minimum value in the old array.
c) Add the minimum value to the new array, and remove the minimum value from the old array.
d) Repeat parts b & c until the old array is empty.
e) Return the new sorted array.
f) Be sure to print the results in order to verify your code.*/

//Your function here...
// function arrayHighToLow(arr){
//   let sortedArray = [];
//   let low;
//   while (arr.length > 0) {
//     low = findMinValue(arr)
//     sortedArray.unshift(low);
  
//     arr.splice(arr.indexOf(low),1);
//   }
//   return sortedArray;
// }

// function arrayHighToLow(arrayName){
//    let newArray = [];
//    if (arrayName.length <= 1){
//       return newArray[0];
//    } else {
//       return newArray[0]+arrayHighToLow(arrayName.slice(1));
//    }
// }
// console.log(arrayHighToLow(nums1));
// function arrayHighToLow(arr){
//   let sortedArray = [];
//   let low;
//   if (arr.length >0){
//     low = findMinValue(arr)
//     sortedArray.unshift(low);

//     arr.splice(arr.indexOf(low),1);
//   } 
//   return sortedArray;
// }
//console.log(sortedArray);
// console.log(arrayHighToLow(nums3));

//Sample arrays for testing:
// let nums1 = [5, 10, 2, 42];
// let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
// let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

//Your function here...
// arrayName.sort(function(a, b){return a-b});
//Sort each array in ascending order.

// console.log(nums1.sort(function(a,b){return a-b}));
// console.log(nums2.sort(function(a,b){return a-b}));
// console.log(nums3.sort(function(a,b){return a-b}));
//Sort each array in decending order.
// console.log(nums1.sort(function(b,a){return a-b}));
// console.log(nums2.sort(function(b,a){return a-b}));
// console.log(nums3.sort(function(b,a){return a-b}));
// console.log(nums1.sort(function(a,b){return b-a}));

  let sortedArray = [];
  let low;
function arrayHighToLowRecursion(arr){
  if (arr.length < 1) {
    return sortedArray;
  }
  else {
    low = findMinValue(arr);
    sortedArray.unshift(low);
    arr.splice(arr.indexOf(low),1);
    return arrayHighToLowRecursion(arr);
  } 
}
console.log(arrayHighToLowRecursion(nums3))