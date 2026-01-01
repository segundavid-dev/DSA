// Data structures used:
// Set -> A collection of unique values where duplicate values are not allowed
// Record<K, V> -> A utility type in typescript that allows you create object type with fixed keys and fixed value type

function breadthFirstSearch(
  graph: Record<string, string[]>,
  startNode: string,
  targetNode: string
): string {
  const visited = new Set<string>(); // keep track of visited node
  const queue: string[] = []; // queue for BFS

  // start from firstNode
  visited.add(startNode);
  queue.push(startNode);

  //   loop while queue is not empty
  while (queue.length > 0) {
    const currentNode = queue.shift(); //dequeue

    if (currentNode === targetNode) {
      return currentNode;
    }

    // visit all neigbours
    for (const neigbour of graph[currentNode!]!)
      if (!visited.has(neigbour)) {
        visited.add(neigbour);
        queue.push(neigbour); // enqueue
      }
  }

  return "Not found";
}

const graph = {
  A: ["B", "C"],
  B: ["D"],
  C: ["E"],
  D: [],
  E: [],
};

const startNode = "A";
const targetNode = "E";

console.log(breadthFirstSearch(graph, startNode, targetNode));
