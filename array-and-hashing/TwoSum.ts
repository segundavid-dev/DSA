// given an array of integers nums and an integer, return indices  of the two numbers such that they add up to target

// Brute Force
// O(n*2)
function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i]! + nums[j]! === target) {
        return [i, j];
      }
    }
  }

  return [];
}

// I should be aiming for the optimal solution with O(n) time and O(n) space, where n is the size of the input array
const nums: number[] = [2, 7, 11, 15];
const target: number = 9;

console.log(twoSum(nums, target));

function twoSum2(nums: number[], target: number): number[] {
  // create a hash map for look up O(1)
  const indices = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]!;

    if (indices.has(complement)) {
      return [indices.get(complement)!, i];
    }

    indices.set(nums[i]!, i);
  }
  return [];
}
