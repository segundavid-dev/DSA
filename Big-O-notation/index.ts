// Runs on O(1) constant time
function printFirstItem(items: number[]): void {
  console.log(items[0]);
}

// printFirstItem([1, 2, 3, 4, 5]);

// runs on O(n) linear time
function PrintAllItems(items: number[]) {
  for (let i = 0; i < items.length; i++) {
    console.log(items[i]);
  }
}

// PrintAllItems([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// N could be the actual input, or the size of the input, looking at this case scenerios
function sayHiNTimes(n: number) {
  for (let i = 0; i < n; i++) {
    console.log("hi");
  }
}

sayHiNTimes(5);

// Space complexity: Talking about memory cost relative to the size of the input

// -> function sayHiNTimes has a space complexity of O(1) space
