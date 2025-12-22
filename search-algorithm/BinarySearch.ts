// Given that the data collection to be searched is sorted from ascending order
// This offers a more efficient algorithm at time complexity of O(log n)

function binarySearch(arr: number[], target: number): number {
  let low: number = 0;
  let high: number = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (target === arr[mid]) {
      return mid; // return the index of element found
    } else if (target > arr[mid]!) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}

const arr = [1, 3, 4, 6, 8, 9, 10];
const target = 4;

console.log(binarySearch(arr, target));
