// Time complexity O(nlogn + mlogm)
// Space complexity O(1)

function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  // sort both arrays and check the values
  const sSort = s.split("").sort().join();
  const tSort = t.split("").sort().join();

  if (sSort === tSort) {
    return true;
  }
  return false;
}

const s = "rat";
const t = "car";

console.log(isAnagram(s, t));

function isAnagram2(s: string, t: string): boolean {
  const count = new Array(26).fill(0);
  return false;
}
