// My first solution goes this way, I can create a copy of the aerray unto another array

function getConcatenation(nums: number[]): number[] {
  // create arrray to hold new values
  const ans: number[] = [...nums];

  for (let i = 0; i < nums.length; i++) {
    ans.push(nums[i]!);
  }
  return ans;
}

const nums: number[] = [1, 3, 2, 1];
console.log(getConcatenation(nums));

// My second method to solving this would include me  having two loops which would lead to space complexity of O(m + n)
function getConcatenation2(nums: number[]): number[] {
  const ans: number[] = [];
  // First for loop
  for (let i = 0; i < nums.length; i++) {
    ans.push(nums[i]!);
  }

  // second loop
  for (let i = 0; i < nums.length; i++) {
    ans.push(nums[i]!);
  }

  return ans;
}

console.log(getConcatenation2([1, 2, 1]));
