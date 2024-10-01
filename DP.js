// 1. Problem: Fibonacci Numbers (DP)
// Problem Statement: Write a function to find the nth Fibonacci number using dynamic programming (bottom-up approach).
// Input: n = 6
// Output: 8 (The 6th Fibonacci number is 8)


function fib(n, mem = {}) {
    if (n == 0 || n == 1) return n;  // Fix the base case to return 'n'

    // If already computed, return the stored result
    if (mem[n]) return mem[n];

    // Store the result of the recursive calls in mem
    mem[n] = fib(n - 1, mem) + fib(n - 2, mem);

    return mem[n];
}

//console.warn(fib(3));


// Problem: Minimum Cost Climbing Stairs

// You are given an array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps.
// You need to find the minimum cost to reach the top of the floor.




// Problem: Climbing Stairs
// You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 step or 2 steps. In how many distinct ways can you climb to the top?

//without space optimized
function clbStr(n){
    let dp = new Array(n);
    dp[1] = 1;
    dp[2] = 2;
     if(n<=2) return dp[n-1];

     for(let i=3; i<=n; i++){
        dp[i] = dp[i-1] + dp[i-2];
     }
     return dp[n];
}
//console.log(clbStr(4))


//space optimized

var climbStairs = function(n) {
    if (n <= 2) return n;

let prev1 = 1;
let prev2 = 2;

for (let i = 3; i <= n; i++) {
    const current = prev1 + prev2;
    prev1 = prev2;
    prev2 = current;
}

return prev2;
};

//console.log(climbStairs(4))


// Problem: Minimum Cost Climbing Stairs
// You are given an array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps. You need to find the minimum cost to reach the top of the floor.


// Input: cost = [10, 15, 20]
// Output: 15
// Explanation: Cheapest is start on cost[1], pay 15, and then climb two steps to reach the top.


//using extra space
var minCostClimbingStairs = function(cost) {
    let dp = new Array(cost.length+1);

     dp[0] = cost[0];
     dp[1] = cost[1];

    for(let i=2; i<=cost.length-1; i++){
        dp[i] = cost[i]+ Math.min(dp[i-2], dp[i-1]);
    }
    return Math.min(dp[cost.length-1], dp[cost.length-2])
};


function minimumCost(cost){
    if(cost.length == 1) return cost[0];
    if(cost.length ==2 ) return Math.min(cost[0], cost[1]);

    let first = cost[0];
    let second = cost[1];

    for(let i=2; i<cost.length; i++){
        let current = Math.min(first, second) + cost[i];
        first = second;
        second = current;
    }
    return Math.min(first, second)
}



                                                                 
//console.log(minimumCost( [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]))
                                                                 


