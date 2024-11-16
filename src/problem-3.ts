function countWordOccurrences(sentence: string, word: string): number {
    const words = sentence.toLowerCase().split(" ");
    return words.filter(item => item === word.toLocaleLowerCase()).length;
}

// Sample Input
// const result = countWordOccurrences("I love Typescript and I am a typescript developer", "typescript");
// console.log(result)