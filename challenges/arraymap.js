
let indexStart = 0;
let windowSum = 0;

function hasContiguousSubarrayWithSum(arr, target) {
  
 

   // Iterate through the array 
   for (let i = 0; i < arr.length; i++) {
       
       windowSum += arr[i];

       // considering if oursum is ggreater than the targeted sum you have to come to our first index
       while (windowSum > target) {
           windowSum -= arr[indexStart];
           indexStart++;
       }

       // Check if the current sum equals the target return true
       if (windowSum === target) {
           return true;
       }
   }

   // If no contiguous subarray with sum equal to the target it return false
   return false;
}

// Example1 
const arr =  [4, 2, 7, 1, 9, 5];
const target = 17;

//example2

const arr1 = [1,2,3,4,5,6,7,8,9];
let target1 = 24;


const arr2 = [1,2,5,7,8,9];
let target2 = 50 ;

let answer1 = hasContiguousSubarrayWithSum(arr , target);
console.log(answer1);

let answer2 =  hasContiguousSubarrayWithSum(arr1 , target1);
console.log(answer2);

let answer3 = hasContiguousSubarrayWithSum(arr2 , target2)
console.log(answer3);