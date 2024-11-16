function removeDuplicates(numbers: number[]): number[] {
    const uniqueNumbers: number[] = [];
    for (const num of numbers) {
        if (!uniqueNumbers.includes(num)) {
            uniqueNumbers.push(num);
        }
    }
    return uniqueNumbers;
}


// Sample Input
// const result = removeDuplicates([1, 1, 2, 2, 3, 4, 4, 5, 7, 8, 9, 9]);


// console.log(result);