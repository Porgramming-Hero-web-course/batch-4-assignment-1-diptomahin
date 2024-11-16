
function sumArray (numbers:number[]) : number {
   return numbers.reduce((sum, current) => sum + current, 0);
}

// Sample Input:
// const res = sumArray([5, 1, 3, 4, 5]);

// console.log(res)