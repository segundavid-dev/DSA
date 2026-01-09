const nums: number[] = [1, 2, 3, 1];

// this would run on a complexity of O(n) for a hash set, fast lookup and storing unique values
function containsDuplicateSet(nums: number[]): boolean {
  const seen = new Set<number>();

  for (const num of nums) {
    if (seen.has(num)) {
      return true;
    }
    seen.add(num);
  }
  return false;
}

console.log(containsDuplicateSet(nums));

// This runs on time complexity of O(n*2) and space of O(n)
function containsDuplicate(nums: number[]) {
  const visited: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    if (visited.includes(nums[i]!)!) {
      return true;
    }
    // push into visited
    visited.push(nums[i]!);
  }

  return false;
}

console.log(containsDuplicate(nums));
