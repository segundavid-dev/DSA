// time complexity -> O(n)
// space complexity -> O(1)

function linearSearch(arr: number[], target: number): number {
  console.log("linear search");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // element found, return index
    }
  }

  return -1;
}

const target: number = 8;
const numbers: number[] = [1, 3, 2, 7, 4, 8, 9, 13];

console.log(linearSearch(numbers, target));
