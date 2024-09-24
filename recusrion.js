


//factorial

function factorial(n) {
    // base case
    if (n === 0 || n === 1) return 1;

    return n * factorial(n - 1)
}


function fibonacci(n) {
    // base 
    if (n === 0) return 0;
    if (n == 1) return 1;

    return fibonacci(n - 1) + fibonacci(n - 2);
}

// function sumOfArray(array, i){

// if(i==array.length) return 0 ;

// return array[i] + sumOfArray(array, i+1)
// }

function sumOfArray(array, sum = 0, i = 0) {

    if (i == array.length) return sum;

    return sumOfArray(array, sum + array[i], i + 1)
}

function fibonacci(n, memo = {}) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    // check if value is already computed
    if (memo[n]) return memo[n];

    // store the computed value in the memo object
    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
    console.log(memo)
    return memo[n];
}



//power of n

function calculatePower(num, pow) {
    // base case: anything raised to the power of 0 is 1
    if (pow === 0) return 1;

    // handle negative powers
    if (pow < 0) return 1 / calculatePower(num, -pow);

    // optimization: Exponentiation by Squaring
    if (pow % 2 === 0) {
        let halfPower = calculatePower(num, pow / 2);
        return halfPower * halfPower;
    } else {
        return num * calculatePower(num, pow - 1);
    }
}

// function calculateSubset(array, res=[], i){

// if(i==array.length) return res;

// //take
// let take = [];
// take.push(array[i])
// res = calculateSubset()
// //not take

// }

function subsets(nums) {
    let result = [];

    function generateSubset(index, currentSubset) {
        // If we've gone through all elements, add the current subset to the result
        if (index === nums.length) {
            result.push([...currentSubset]);
            return;
        }

        // Option 1: Exclude the current element and move to the next
        generateSubset(index + 1, currentSubset);

        // Option 2: Include the current element and move to the next
        currentSubset.push(nums[index]);
        generateSubset(index + 1, currentSubset);

        // Backtrack: Remove the element that was included
        currentSubset.pop();
    }

    // Start the recursion with the first element (index 0) and an empty subset
    generateSubset(0, []);

    return result;
}


function reverseString(str, res, i) {
    if (i == 0) return res + str[0];

    return reverseString(str, res + str[i], i - 1)
}

function reverseStringV2(str, i) {
    if (str.length == 0) return "";
    if (i == 0) return str[0];
    return str[i] + reverseStringV2(str, i - 1)
}


function palindrome(str, start, end) {
    if (start <= end && str[start] !== str[end]) return false;
    if (start >= end) return true;

    return palindrome(str, start + 1, end - 1)
}
function checkPalindrome(str) {

    if (str.length == 0) return true;
    return palindrome(str, 0, str.length - 1);

}


function countOccurence(str, k, count) {
    if (str.length == 0) return count;
    if (str[0] == k) count++;
    return countOccurence(str.substring(1), k, count)
}

//recursive binary search;
// function checkFound(){
function bs(array, start, end, key) {
    if (start > end) return false;
    let mid = Math.floor((start + end) / 2);
    if (array[mid] == key) return true; generateSubset(index + 1, currentSubset);

    return (array[mid] < key) ? bs(array, mid + 1, end, key) : bs(array, start, mid - 1, key);
}

// return false;
// }

function recursiveSumOfDigits(digits) {
    if (digits == 0) return 0;
    return digits % 10 + recursiveSumOfDigits(Math.floor(digits / 10));
}


//recursively array reverse

function reverseArray(array, start, end) {
    if (start >= end) return array;
    [array[start], array[end]] = [array[end], array[start]];
    return reverseArray(array, start + 1, end - 1);
}

function recursiveSumOfElements(array, start = 0) {
    if (start === array.length) return 0;
    return array[start] + recursiveSumOfElements(array, start + 1);
}

function recursiveCOunt(str, key, count = 0, start = 0) {
    if (start == str.length) return count;
    if (str[start] == key) count++;
    return recursiveCOunt(str, key, count, start + 1);
}



// powerSubset;
function uniqueSubsets(nums) {
    // Sort the array to handle duplicates
    nums.sort((a, b) => a - b);

    const result = [];

    function backtrack(start, currentSubset) {
        // Push the current subset to the result (make a copy of it)
        result.push([...currentSubset]);

        // Iterate through the array starting from 'start'
        for (let i = start; i < nums.length; i++) {
            // Skip duplicates
            if (i > start && nums[i] === nums[i - 1]) continue;

            // Include the current element
            currentSubset.push(nums[i]);

            // Recur for the next elements
            backtrack(i + 1, currentSubset);

            // Backtrack by removing the last element added
            currentSubset.pop();
        }
    }

    // Start backtracking from index 0 with an empty subset
    backtrack(0, []);

    return result;
}
//console.log(uniqueSubsets([4, 4, 4, 1, 4]))

//permutation of array
Input: [1, 2, 3]
Output: [
    [1, 2, 3],
    [1, 3, 2],
    [2, 1, 3],
    [2, 3, 1],
    [3, 1, 2],
    [3, 2, 1]
]

function permuteUnique(nums) {
    const result = [];
    //nums.sort((a, b) => a - b); // Sort the array to handle duplicates easily

    function backtrack(path, used) {
        if (path.length === nums.length) {
            result.push([...path]); // Add the current valid permutation to the result
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            // If the current number is already used, skip it
            if (used[i]) continue;

            // Skip duplicates: only pick the first occurrence of a duplicate number
            //if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;

            // Mark the number as used
            used[i] = true;
            path.push(nums[i]);

            // Recurse and build the next part of the permutation
            backtrack(path, used);

            // Backtrack: undo the choice
            path.pop();
            used[i] = false;
        }
    }

    // Start with an empty path and a used array to track which numbers are used
    backtrack([], Array(nums.length).fill(false));

    return result;
}








function permuteString(str) {
    const result = [];
    //str.sort((a, b) => a - b); // Sort the array to handle duplicates easily

    function backtrack(path, used) {
        if (path.length === str.length) {
            result.push([...path].join("")); // Add the current valid permutation to the result
            return;
        }

        for (let i = 0; i < str.length; i++) {
            // If the current number is already used, skip it
            if (used[i]) continue;

            // Skip duplicates: only pick the first occurrence of a duplicate number
            if (i > 0 && str[i] === str[i - 1] && !used[i - 1]) continue;

            // Mark the number as used
            used[i] = true;
            path.push(str[i]);

            // Recurse and build the next part of the permutation
            backtrack(path, used);

            // Backtrack: undo the choice
            path.pop();
            used[i] = false;
        }
    }

    // Start with an empty path and a used array to track which numbers are used
    backtrack([], Array(str.length).fill(false));

    return result;
}







function permuteUniqueUptoKlength(nums, k) {
    const result = [];
    //nums.sort((a, b) => a - b); // Sort the array to handle duplicates easily

    function backtrack(path, used) {
        if (path.length === k) {
            result.push([...path].join("")); // Add the current valid permutation to the result
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            // If the current number is already used, skip it
            if (used[i]) continue;

            // Skip duplicates: only pick the first occurrence of a duplicate number
            if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;

            // Mark the number as used
            used[i] = true;
            path.push(nums[i]);

            // Recurse and build the next part of the permutation
            backtrack(path, used);

            // Backtrack: undo the choice
            path.pop();
            used[i] = false;
        }
    }

    // Start with an empty path and a used array to track which numbers are used
    backtrack([], Array(nums.length).fill(false));

    return result;
}
// Test cases



function permuteUniqueLexical(nums) {
    const result = [];
    nums.sort((a, b) => a - b); // Sort the array to handle duplicates easily

    function backtrack(path, used) {
        if (path.length === nums.length) {
            result.push([...path]); // Add the current valid permutation to the result
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            // If the current number is already used, skip it
            if (used[i]) continue;

            // Skip duplicates: only pick the first occurrence of a duplicate number
            //if (used[i - 1]) continue;

            // Mark the number as used
            used[i] = true;
            path.push(nums[i]);

            // Recurse and build the next part of the permutation
            backtrack(path, used);

            // Backtrack: undo the choice
            path.pop();
            used[i] = false;
        }
    }

    // Start with an empty path and a used array to track which numbers are used
    backtrack([], Array(nums.length).fill(false));

    return result;
}

function subsetsWithLimit(nums, limit) {
    const result = [];

    function backtrack(start, subset, currentSum) {
        // If the current subset sum is within the limit, add it to the result
        if (currentSum <= limit) {
            result.push([...subset]);
        }

        // Recursively generate subsets
        for (let i = start; i < nums.length; i++) {
            const num = nums[i];
            if (currentSum + num <= limit) {
                // Add the current number to the subset
                subset.push(num);
                // Backtrack with updated sum and subset
                backtrack(i + 1, subset, currentSum + num);
                // Remove the number after exploring this branch
                subset.pop();
            }
        }
    }

    // Start the backtracking process
    backtrack(0, [], 0);
    return result;
}


function combinationSum(candidates, target) {
    let result = [];

    function backtrack(start, subset, sum) {
        // Base case: if the sum equals the target, add the subset to result
        if (sum === target) {
            result.push([...subset]);
            return;
        }

        // If the sum exceeds the target, stop further exploration
        if (sum > target) return;

        // Explore further by including each candidate
        for (let i = start; i < candidates.length; i++) {
            // Add the current candidate to the subset
            subset.push(candidates[i]);
            // Recur with the updated sum, and allow reuse of the current element
            backtrack(i + 1, subset, sum + candidates[i]);
            // Backtrack by removing the last added element
            subset.pop();
        }
    }

    // Start backtracking from the first index with an empty subset
    backtrack(0, [], 0);
    return result;
}

// Example usage:
let candidates = [1, 2, 3, 4, 5, 6, 7];
let target = 7;
//console.log(combinationSum(candidates, target));

//. Recusrion using memoization
//from therre we are starting DP

if (n == 0 || n == 1) return n;  // Fix the base case to return 'n'

    // If already computed, return the stored result
    if (mem[n]) return mem[n];

    // Store the result of the recursive calls in mem
    mem[n] = fib(n - 1, mem) + fib(n - 2, mem);

    return mem[n];

function main() {
    // FACTORIAL
    //console.log(factorial(5))
    // console.log(fibonacci(6
    // ))

    //console.log(sumOfArray([1,2,3]))
    // console.log(calculatePower(2,5))
    // console.log(subsets([1,2]))
    // console.log(reverseStringV2("abc", 2))
    //console.log(checkPalindrome("abbbba"));
    // console.log(countOccurence('hellol', 'l', 0))

    // console.log(bs([1,2,4,5,6,7], 0, 5, 0))
    // console.log(recursiveSumOfDigits(12345))
    // console.log(reverseArray([1,2,3,4,5], 0, 4))

    // console.log(recursiveSumOfElements([1,2,3,4,5]))
    //console.log(recursiveCOunt("abcabdba", 'a'))
    //const nums = [1, 1, 2];
    // console.log(permuteUnique(("abc").split('')));
    //console.log(permuteUniqueUptoKlength([1,2,3], 2))
    //console.log(permuteUniqueLexical([3,2,1]))
    //console.log(combinationSum([1, 2,3,4,,5, 6, 10], 7))
    //console.log(fib(5))

}
main()