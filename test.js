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