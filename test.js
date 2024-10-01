// let obj = {};
// let obj2 = {}; 

// console.log(obj === obj2);


// let promise = new Promise((res, rej)=>{
//     return 100;

//     res(101);
// })
// console.log(promise)   

// console.log(1+ +'2'+ 2)

// let s1 = "abc";
// let s2 = "abd"
// console.log(s1-s2)
const arr = ["12", "14", "6", "511", "35"];
const getFirstDigit = (str) => parseInt(str[0]);

// Sort the array based on the first digit of each string
arr.sort((a, b) => {
    let firstDigitA = getFirstDigit(a);
    let firstDigitB = getFirstDigit(b);
    return firstDigitB - firstDigitA;
});

const permute = (arr) => {
    let result = [];

    const permuteHelper = (arr, currentPerm) => {
        if (arr.length === 0) {
            result.push(currentPerm);
            return;
        }

        for (let i = 0; i < arr.length; i++) {
            let newArr = arr.slice(0, i).concat(arr.slice(i + 1));
            permuteHelper(newArr, currentPerm.concat(arr[i]));
        }
    };

    permuteHelper(arr, []);
    return result;
};

console.log(permute(arr))





var minStartingIndex = function(s, pattern) {
    const n = s.length;
   const m = pattern.length;

   // If the pattern is longer than the string, return -1
   if (m > n) return -1;

   // Preprocess the pattern to create a sliding window
   const window = new Array(m).fill(0);
   for (let i = 0; i < m; i++) {
       window[pattern.charCodeAt(i) - 'a']++;
   }

   // Initialize the sliding window count
   let windowCount = m;

   // Iterate over the string using a sliding window
   let left = 0, right = 0;
   while (right < n) {
       // Add the current character to the window
       window[s.charCodeAt(right) - 'a']--;
       if (window[s.charCodeAt(right) - 'a'] >= 0) {
           windowCount--;
       }

       // If the window contains all characters from the pattern, check if it's a valid match
       if (windowCount === 0) {
           // Check if the current window is a valid match
           let isValid = true;
           for (let i = left; i < right; i++) {
               if (window[s.charCodeAt(i) - 'a'] < 0) {
                   isValid = false;
                   break;
               }
           }

           // If it's a valid match, return the starting index
           if (isValid) {
               return left;
           }

           // Otherwise, slide the window to the right
           window[s.charCodeAt(left) - 'a']++;
           windowCount++;
           left++;
       }

       // Move the right pointer
       right++;
   }

   // If no valid index is found, return -1
   return -1;
};